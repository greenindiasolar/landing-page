import React from 'react';
import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { designTokens } from '../../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outlineLight';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

const StyledButton = styled(MuiButton)<{ customVariant: ButtonVariant }>(
    ({ customVariant }) => {
        const baseStyles = {
            borderRadius: designTokens.radius.sm,
            padding: '12px 24px',
            fontSize: '16px',
            fontFamily: "'Onest', sans-serif",
            fontWeight: 500,
            textTransform: 'none' as const,
            transition: 'all 0.3s ease',
        };

        switch (customVariant) {
            case 'primary':
                return {
                    ...baseStyles,
                    backgroundColor: designTokens.colors.brand.primary,
                    color: designTokens.colors.text.white,
                    '&:hover': {
                        backgroundColor: designTokens.colors.brand.primaryDark,
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(255, 144, 16, 0.4)',
                    },
                };
            case 'secondary':
                return {
                    ...baseStyles,
                    backgroundColor: designTokens.colors.bg.white,
                    color: designTokens.colors.accent.greenMedium,
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                        backgroundColor: designTokens.colors.bg.lightest,
                        transform: 'translateY(-2px)',
                    },
                };
            case 'outline':
                return {
                    ...baseStyles,
                    backgroundColor: 'transparent',
                    color: designTokens.colors.brand.primary,
                    border: `1px solid ${designTokens.colors.brand.primary}`,
                    '&:hover': {
                        backgroundColor: 'rgba(255, 144, 16, 0.08)',
                        transform: 'translateY(-2px)',
                    },
                };
            case 'outlineLight':
                return {
                    ...baseStyles,
                    backgroundColor: 'transparent',
                    color: designTokens.colors.text.white,
                    border: `1px solid ${designTokens.colors.text.white}`,
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                    },
                };
            default:
                return baseStyles;
        }
    }
);

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    ...props
}) => {
    return (
        <StyledButton customVariant={variant} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
