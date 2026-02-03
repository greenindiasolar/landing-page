import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Container,
    Link as MuiLink,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Button, useContactForm } from '../../common';
import { designTokens } from '../../../theme';
import GreenSolarLogo from "../../../assets/Images/Logo/greenlogo.webp";

interface StyledAppBarProps {
    isVisible: boolean;
}

const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'isVisible',
})<StyledAppBarProps>(({ isVisible }) => ({
    backgroundColor: designTokens.colors.bg.white,
    position: 'fixed',
    top: 25,
    left: '50%',
    transform: `translateX(-50%) translateY(${isVisible ? '0' : '-150%'})`,
    zIndex: 1100,
    width: '92%',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out',
    '@media (max-width: 600px)': {
        top: 0,
        width: '96%',
    },
}));

const Logo = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    height: '42px',
    width: '96px',
});

const NavLinks = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
});

const NavLink = styled(MuiLink)({
    fontFamily: "'Onest', sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    color: designTokens.colors.text.tertiary,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    '&:hover': {
        color: designTokens.colors.brand.primary,
    },
});

const DrawerHeader = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: `1px solid ${designTokens.colors.bg.light}`,
});

const DrawerNavLink = styled(ListItemButton)({
    padding: '16px 24px',
    '&:hover': {
        backgroundColor: 'rgba(255, 144, 16, 0.08)',
    },
});

const DrawerNavText = styled(ListItemText)({
    '& .MuiListItemText-primary': {
        fontFamily: "'Onest', sans-serif",
        fontSize: '16px',
        fontWeight: 500,
        color: designTokens.colors.text.primary,
    },
});

const MenuButton = styled(IconButton)({
    color: designTokens.colors.text.primary,
    padding: '8px',
});

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Testimonials', href: '#testimonials' },
];

const SCROLL_HIDE_THRESHOLD = 100; // Minimum scroll position before hiding navbar

const Navbar: React.FC = () => {
    const { openModal } = useContactForm();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Native scroll detection for navbar hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < SCROLL_HIDE_THRESHOLD) {
                // Always show at top of page
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                // Scrolling down - hide navbar
                setIsVisible(false);
            } else {
                // Scrolling up - show navbar
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Native smooth scroll function
    const scrollTo = useCallback((target: string) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handleNavClick = (href: string) => {
        setDrawerOpen(false);
        scrollTo(href);
    };

    const handleCTAClick = () => {
        setDrawerOpen(false);
        openModal();
    };

    return (
        <>
            <StyledAppBar elevation={0} isVisible={isVisible}>
                <Container sx={{ maxWidth: '90%' }}>
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                            padding: '12px 0 !important',
                            minHeight: 'auto !important',
                        }}
                    >
                        {/* Logo */}
                        <Logo>
                            <img src={GreenSolarLogo} alt="Green Solar Logo" />
                        </Logo>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '32px' }}>
                            <NavLinks>
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        onClick={() => handleNavClick(item.href)}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </NavLinks>

                            {/* CTA Button */}
                            <Button variant="primary" onClick={openModal}>
                                Schedule a FREE Visit
                            </Button>
                        </Box>

                        {/* Mobile Menu Button */}
                        <MenuButton
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                            onClick={toggleDrawer(true)}
                            aria-label="Open menu"
                        >
                            <MenuIcon fontSize="medium" />
                        </MenuButton>
                    </Toolbar>
                </Container>
            </StyledAppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: '280px',
                        backgroundColor: designTokens.colors.bg.white,
                    },
                }}
            >
                <DrawerHeader>
                    <Logo>
                        <img src={GreenSolarLogo} alt="Green Solar Logo" />
                    </Logo>
                    <IconButton onClick={toggleDrawer(false)} aria-label="Close menu">
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>

                <List sx={{ flex: 1, pt: 2 }}>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <DrawerNavLink onClick={() => handleNavClick(item.href)}>
                                <DrawerNavText primary={item.label} />
                            </DrawerNavLink>
                        </ListItem>
                    ))}
                </List>

                <Divider />

                <Box sx={{ p: 3 }}>
                    <Button
                        variant="primary"
                        onClick={handleCTAClick}
                        sx={{ width: '100%' }}
                    >
                        Schedule a FREE Visit
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;