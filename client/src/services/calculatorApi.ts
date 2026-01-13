// Calculator API Service
// Handles communication with backend for config and lead submission

export interface CalculatorConfig {
    PRICE_PER_KW: number; // Legacy field, kept for backwards compatibility
    // Tiered pricing fields
    PRICE_1_10_KW: number;
    PRICE_11_25_KW: number;
    PRICE_26_50_KW: number;
    PRICE_51_100_KW: number;
    PRICE_101_200_KW: number;
    PRICE_201_500_KW: number;
    UNITS_PER_KW_PER_YEAR: number;
    SQFT_PER_KW: number;
    FLAT_DISCOUNT: number;
    RESIDENTIAL_MULTIPLIER: number;
    COMMERCIAL_MULTIPLIER: number;
    SUBSIDY_1KW: number;
    SUBSIDY_2KW: number;
    SUBSIDY_3KW_PLUS: number;
}

export interface LeadData {
    name: string;
    phone: string;
    customerType: 'residential' | 'commercial';
    monthlyBill: number;
    systemSize: number;
    effectiveCost: number;
    annualSavings: number;
}

// Default fallback values if API fails
export const DEFAULT_CONFIG: CalculatorConfig = {
    PRICE_PER_KW: 70000, // Legacy default
    // Tiered pricing defaults
    PRICE_1_10_KW: 70000,
    PRICE_11_25_KW: 60000,
    PRICE_26_50_KW: 50000,
    PRICE_51_100_KW: 45000,
    PRICE_101_200_KW: 40000,
    PRICE_201_500_KW: 35000,
    UNITS_PER_KW_PER_YEAR: 1440,
    SQFT_PER_KW: 80,
    FLAT_DISCOUNT: 22000,
    RESIDENTIAL_MULTIPLIER: 1190,
    COMMERCIAL_MULTIPLIER: 930,
    SUBSIDY_1KW: 30000,
    SUBSIDY_2KW: 60000,
    SUBSIDY_3KW_PLUS: 78000,
};

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

/**
 * Fetch calculator configuration from backend
 * Falls back to default config if request fails
 */
export const fetchCalculatorConfig = async (): Promise<CalculatorConfig> => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/calculator/config`);

        if (!response.ok) {
            console.warn('Failed to fetch config, using defaults');
            return DEFAULT_CONFIG;
        }

        const data = await response.json();
        return data.config || DEFAULT_CONFIG;
    } catch (error) {
        console.warn('Error fetching config, using defaults:', error);
        return DEFAULT_CONFIG;
    }
};

/**
 * Submit lead data to backend
 * Stores in Google Sheet and sends email notification
 */
export const submitLead = async (leadData: LeadData): Promise<{ success: boolean; message: string }> => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/calculator/leads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message || 'Failed to submit lead' };
        }

        const data = await response.json();
        return { success: true, message: data.message || 'Lead submitted successfully' };
    } catch (error) {
        console.error('Error submitting lead:', error);
        return { success: false, message: 'Network error. Please try again.' };
    }
};
