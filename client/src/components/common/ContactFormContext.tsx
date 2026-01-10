import React, { createContext, useContext, useState, useCallback } from 'react';

interface ContactFormContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const ContactFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    return (
        <ContactFormContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ContactFormContext.Provider>
    );
};

export const useContactForm = (): ContactFormContextType => {
    const context = useContext(ContactFormContext);
    if (!context) {
        throw new Error('useContactForm must be used within a ContactFormProvider');
    }
    return context;
};
