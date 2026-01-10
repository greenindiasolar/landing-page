import { config } from '../config/env.js';

export interface CalculatorConfig {
    PRICE_PER_KW: number;
    UNITS_PER_KW_PER_YEAR: number;
    SQFT_PER_KW: number;
    FLAT_DISCOUNT: number;
    RESIDENTIAL_MULTIPLIER: number;
    COMMERCIAL_MULTIPLIER: number;
    SUBSIDY_1KW: number;
    SUBSIDY_2KW: number;
    SUBSIDY_3KW_PLUS: number;
}

// Default fallback config
const DEFAULT_CONFIG: CalculatorConfig = {
    PRICE_PER_KW: 60000,
    UNITS_PER_KW_PER_YEAR: 1440,
    SQFT_PER_KW: 80,
    FLAT_DISCOUNT: 22000,
    RESIDENTIAL_MULTIPLIER: 1190,
    COMMERCIAL_MULTIPLIER: 930,
    SUBSIDY_1KW: 30000,
    SUBSIDY_2KW: 60000,
    SUBSIDY_3KW_PLUS: 78000,
};

export interface LeadData {
    name: string;
    phone: string;
    customerType: 'residential' | 'commercial';
    monthlyBill: number;
    systemSize: number;
    effectiveCost: number;
    annualSavings: number;
}

/**
 * Fetch calculator config from Google Sheets via Apps Script
 */
export async function fetchConfigFromSheet(): Promise<CalculatorConfig> {
    if (!config.googleScriptConfigUrl) {
        console.log('Google Script URL not configured, using defaults');
        return DEFAULT_CONFIG;
    }

    try {
        const response = await fetch(config.googleScriptConfigUrl);

        if (!response.ok) {
            console.error('Failed to fetch config from Google Sheet');
            return DEFAULT_CONFIG;
        }

        const data = await response.json();

        // Parse config from sheet response
        const sheetConfig: CalculatorConfig = {
            PRICE_PER_KW: Number(data.PRICE_PER_KW) || DEFAULT_CONFIG.PRICE_PER_KW,
            UNITS_PER_KW_PER_YEAR: Number(data.UNITS_PER_KW_PER_YEAR) || DEFAULT_CONFIG.UNITS_PER_KW_PER_YEAR,
            SQFT_PER_KW: Number(data.SQFT_PER_KW) || DEFAULT_CONFIG.SQFT_PER_KW,
            FLAT_DISCOUNT: Number(data.FLAT_DISCOUNT) || DEFAULT_CONFIG.FLAT_DISCOUNT,
            RESIDENTIAL_MULTIPLIER: Number(data.RESIDENTIAL_MULTIPLIER) || DEFAULT_CONFIG.RESIDENTIAL_MULTIPLIER,
            COMMERCIAL_MULTIPLIER: Number(data.COMMERCIAL_MULTIPLIER) || DEFAULT_CONFIG.COMMERCIAL_MULTIPLIER,
            SUBSIDY_1KW: Number(data.SUBSIDY_1KW) || DEFAULT_CONFIG.SUBSIDY_1KW,
            SUBSIDY_2KW: Number(data.SUBSIDY_2KW) || DEFAULT_CONFIG.SUBSIDY_2KW,
            SUBSIDY_3KW_PLUS: Number(data.SUBSIDY_3KW_PLUS) || DEFAULT_CONFIG.SUBSIDY_3KW_PLUS,
        };

        return sheetConfig;
    } catch (error) {
        console.error('Error fetching config from Google Sheet:', error);
        return DEFAULT_CONFIG;
    }
}

/**
 * Save lead to Google Sheet via Apps Script
 */
export async function saveLeadToSheet(lead: LeadData): Promise<boolean> {
    if (!config.googleScriptLeadsUrl) {
        console.log('Google Script URL not configured, skipping sheet save');
        return false;
    }

    try {
        const response = await fetch(config.googleScriptLeadsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...lead,
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            console.error('Failed to save lead to Google Sheet');
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error saving lead to Google Sheet:', error);
        return false;
    }
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    address: string;
}

/**
 * Save contact form lead to Google Sheet via Apps Script
 */
export async function saveContactFormLead(lead: ContactFormData): Promise<boolean> {
    if (!config.googleScriptLeadsUrl) {
        console.log('Google Script URL not configured, skipping sheet save');
        return false;
    }

    try {
        const response = await fetch(config.googleScriptLeadsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...lead,
                leadType: 'contact', // This tells Apps Script to save to Contact Form Leads sheet
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            console.error('Failed to save contact form lead to Google Sheet');
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error saving contact form lead to Google Sheet:', error);
        return false;
    }
}
