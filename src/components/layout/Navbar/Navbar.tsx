import React from 'react';
import { AppBar, Toolbar, Box, Container, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '../../common';
import { designTokens } from '../../../theme';
import GreenSolarLogo from "../../../assets/Images/Logo/Green-solar-logo.png"

const StyledAppBar = styled(AppBar)({
    backgroundColor: designTokens.colors.bg.white,
    position: 'fixed',
    top: 25,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    width: '92%',
    borderRadius: '8px',
});

const Logo = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    height: '42px',
    width: '96px',
});

// const LogoText = styled('span')({
//     fontFamily: "'Onest', sans-serif",
//     fontSize: '20px',
//     fontWeight: 600,
//     color: designTokens.colors.text.primary,
//     '& span': {
//         color: designTokens.colors.brand.primary,
//     },
// });

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

const Navbar: React.FC = () => {
    return (
        <StyledAppBar elevation={0}>
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
                        {/* Placeholder for logo image - will be replaced later */}
                        <img src={GreenSolarLogo} alt="" />
                    </Logo>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>


                        {/* Navigation Links */}
                        <NavLinks sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {navItems.map((item) => (
                                <NavLink key={item.label} href={item.href}>
                                    {item.label}
                                </NavLink>
                            ))}
                        </NavLinks>

                        {/* CTA Button */}
                        <Button variant="primary" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            Get a Free Quote
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};

export default Navbar;
