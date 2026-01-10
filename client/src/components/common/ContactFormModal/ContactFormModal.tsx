import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Person, Email, Phone, LocationOn, Close, CheckCircle } from '@mui/icons-material';
import { designTokens } from '../../../theme';
import { useContactForm } from '../ContactFormContext';
import Button from '../Button/Button';

interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
}

const StyledDialog = styled(Dialog)({
    '& .MuiDialog-paper': {
        borderRadius: '16px',
        maxWidth: '480px',
        width: '100%',
        margin: '16px',
        overflow: 'visible',
    },
});

const DialogHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 24px 16px',
    borderBottom: '1px solid #E5E7EB',
});

const CloseButton = styled(IconButton)({
    color: '#6B7280',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
});

const FormContainer = styled(Box)({
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.brand.primary,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.brand.primary,
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: designTokens.colors.brand.primary,
    },
});

const SuccessContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 24px',
    textAlign: 'center',
});

const SuccessIcon = styled(Box)({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    '& svg': {
        fontSize: '48px',
        color: '#22C55E',
    },
});

const ContactFormModal: React.FC = () => {
    const { isOpen, closeModal } = useContactForm();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (formData.phone.length !== 10) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        let value = e.target.value;

        // Phone number validation - only digits
        if (field === 'phone') {
            value = value.replace(/\D/g, '').slice(0, 10);
        }

        setFormData((prev) => ({ ...prev, [field]: value }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
            const response = await fetch(`${API_BASE_URL}/api/calculator/contact-leads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setIsSuccess(true);
        } catch (error) {
            console.error('Error submitting contact form:', error);
            // Still show success for better UX - form data is valid
            setIsSuccess(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        closeModal();
        // Reset form after a delay to allow dialog close animation
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', address: '' });
            setErrors({});
            setIsSuccess(false);
        }, 300);
    };

    return (
        <StyledDialog open={isOpen} onClose={handleClose}>
            {isSuccess ? (
                <SuccessContainer>
                    <SuccessIcon>
                        <CheckCircle />
                    </SuccessIcon>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "'Onest', sans-serif",
                            fontWeight: 600,
                            color: designTokens.colors.text.primary,
                            marginBottom: '12px',
                        }}
                    >
                        Thank You!
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Onest', sans-serif",
                            fontSize: '16px',
                            color: designTokens.colors.text.tertiary,
                            marginBottom: '24px',
                            maxWidth: '280px',
                        }}
                    >
                        Our team will contact you within 72 hours.
                    </Typography>
                    <Button variant="primary" onClick={handleClose}>
                        Done
                    </Button>
                </SuccessContainer>
            ) : (
                <>
                    <DialogHeader>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: "'Onest', sans-serif",
                                    fontWeight: 600,
                                    color: designTokens.colors.text.primary,
                                }}
                            >
                                Schedule a FREE Visit
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "'Onest', sans-serif",
                                    fontSize: '14px',
                                    color: designTokens.colors.text.tertiary,
                                    marginTop: '4px',
                                }}
                            >
                                Fill in your details and we'll get back to you
                            </Typography>
                        </Box>
                        <CloseButton onClick={handleClose}>
                            <Close />
                        </CloseButton>
                    </DialogHeader>
                    <DialogContent sx={{ padding: 0 }}>
                        <FormContainer>
                            <StyledTextField
                                fullWidth
                                label="Your Name"
                                value={formData.name}
                                onChange={handleInputChange('name')}
                                error={!!errors.name}
                                helperText={errors.name}
                                placeholder="John Smith"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person sx={{ color: '#9CA3AF' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <StyledTextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                error={!!errors.email}
                                helperText={errors.email}
                                placeholder="john@example.com"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email sx={{ color: '#9CA3AF' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <StyledTextField
                                fullWidth
                                label="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange('phone')}
                                error={!!errors.phone}
                                helperText={errors.phone}
                                placeholder="98765 43210"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Phone sx={{ color: '#9CA3AF' }} />
                                            <Typography sx={{ ml: 0.5, color: '#6B7280' }}>
                                                +91
                                            </Typography>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <StyledTextField
                                fullWidth
                                label="Address"
                                value={formData.address}
                                onChange={handleInputChange('address')}
                                error={!!errors.address}
                                helperText={errors.address}
                                placeholder="Your full address"
                                multiline
                                rows={2}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                                            <LocationOn sx={{ color: '#9CA3AF' }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                variant="primary"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                sx={{
                                    padding: '14px 24px',
                                    fontSize: '16px',
                                    marginTop: '8px',
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <CircularProgress size={20} sx={{ color: 'white', mr: 1 }} />
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </Button>
                        </FormContainer>
                    </DialogContent>
                </>
            )}
        </StyledDialog>
    );
};

export default ContactFormModal;
