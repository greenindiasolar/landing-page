/**
 * Solar Calculator Utility Functions
 * Based on Green India Solar Energy calculation formulas
 */

export interface CalculatorInputs {
    monthlyBill: number;
    customerType: 'residential' | 'commercial';
}

export interface CalculatorResults {
    systemSize: number;
    annualSavings: number;
    annualUnitsGenerated: number;
    roofAreaRequired: number;
    systemPrice: number;
    subsidy: number;
    discount: number;
    totalBenefit: number;
    effectiveCost: number;
    emi25Years: number;
    totalSaving25Years: number;
}

// Constants
const PRICE_PER_KW = 50000; // ₹50,000 per kW (standard industry rate)
const UNITS_PER_KW_PER_YEAR = 1440;
const SQFT_PER_KW = 80;
const FLAT_DISCOUNT = 22000; // ₹22,000 flat discount
const RESIDENTIAL_MULTIPLIER = 1190;
const COMMERCIAL_MULTIPLIER = 930;

/**
 * Get subsidy amount based on system size (Residential only)
 */
export function getSubsidyAmount(systemSize: number): number {
    if (systemSize === 1) return 30000;
    if (systemSize === 2) return 60000;
    if (systemSize >= 3) return 78000;
    return 0;
}

/**
 * Calculate residential solar system parameters
 */
export function calculateResidentialSolar(monthlyBill: number): CalculatorResults {
    // Step 1: Calculate system size
    const systemSize = Math.ceil(monthlyBill / RESIDENTIAL_MULTIPLIER);

    // Step 2: Annual savings
    const annualSavings = monthlyBill * 12;

    // Step 3: Annual energy generation
    const annualUnitsGenerated = systemSize * UNITS_PER_KW_PER_YEAR;

    // Step 4: Roof space required
    const roofAreaRequired = systemSize * SQFT_PER_KW;

    // Step 5: System price
    const systemPrice = systemSize * PRICE_PER_KW;

    // Step 6: Subsidy
    const subsidy = getSubsidyAmount(systemSize);

    // Step 7: Discount
    const discount = FLAT_DISCOUNT;

    // Step 8: Total benefit
    const totalBenefit = subsidy + discount;

    // Step 9: Effective cost
    const effectiveCost = systemPrice - totalBenefit;

    // Additional calculations for display
    const emi25Years = Math.round(effectiveCost / (25 * 12)); // Simple EMI over 25 years
    const totalSaving25Years = (annualSavings * 25) - effectiveCost;

    return {
        systemSize,
        annualSavings,
        annualUnitsGenerated,
        roofAreaRequired,
        systemPrice,
        subsidy,
        discount,
        totalBenefit,
        effectiveCost,
        emi25Years,
        totalSaving25Years,
    };
}

/**
 * Calculate commercial solar system parameters
 */
export function calculateCommercialSolar(monthlyBill: number): CalculatorResults {
    // Step 1: Calculate system size (different multiplier)
    const systemSize = Math.ceil(monthlyBill / COMMERCIAL_MULTIPLIER);

    // Step 2: Annual savings
    const annualSavings = monthlyBill * 12;

    // Step 3: Annual energy generation
    const annualUnitsGenerated = systemSize * UNITS_PER_KW_PER_YEAR;

    // Step 4: Roof space required
    const roofAreaRequired = systemSize * SQFT_PER_KW;

    // Step 5: System price (no subsidy/discount)
    const systemPrice = systemSize * PRICE_PER_KW;

    // Step 6: Effective cost (no benefits for commercial)
    const effectiveCost = systemPrice;

    // Additional calculations
    const emi25Years = Math.round(effectiveCost / (25 * 12));
    const totalSaving25Years = (annualSavings * 25) - effectiveCost;

    return {
        systemSize,
        annualSavings,
        annualUnitsGenerated,
        roofAreaRequired,
        systemPrice,
        subsidy: 0,
        discount: 0,
        totalBenefit: 0,
        effectiveCost,
        emi25Years,
        totalSaving25Years,
    };
}

/**
 * Main calculator function - routes to residential or commercial
 */
export function calculateSolarSavings(inputs: CalculatorInputs): CalculatorResults {
    if (inputs.customerType === 'residential') {
        return calculateResidentialSolar(inputs.monthlyBill);
    } else {
        return calculateCommercialSolar(inputs.monthlyBill);
    }
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-IN').format(num);
}
