import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Slider,
  Button,
  Card,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Home, Business, Person, Phone, LocalOffer } from "@mui/icons-material";
import { useContactForm } from "../../common";
import {
  fetchCalculatorConfig,
  submitLead,
  DEFAULT_CONFIG,
} from "../../../services/calculatorApi";
import type { CalculatorConfig } from "../../../services/calculatorApi";

// Calculator utility functions
const getSubsidyAmount = (
  systemSize: number,
  config: CalculatorConfig,
): number => {
  if (systemSize === 1) return config.SUBSIDY_1KW;
  if (systemSize === 2) return config.SUBSIDY_2KW;
  if (systemSize >= 3) return config.SUBSIDY_3KW_PLUS;
  return 0;
};

// Tiered pricing: larger systems get lower per-kW rates (reads from config)
const getPricePerKW = (
  systemSize: number,
  config: CalculatorConfig,
): number => {
  if (systemSize <= 10) return config.PRICE_1_10_KW;
  if (systemSize <= 25) return config.PRICE_11_25_KW;
  if (systemSize <= 50) return config.PRICE_26_50_KW;
  if (systemSize <= 100) return config.PRICE_51_100_KW;
  if (systemSize <= 200) return config.PRICE_101_200_KW;
  return config.PRICE_201_500_KW; // 201-500 kW
};

const calculateResidentialSolar = (
  monthlyBill: number,
  config: CalculatorConfig,
) => {
  const systemSize = Math.max(
    1,
    Math.ceil(monthlyBill / config.RESIDENTIAL_MULTIPLIER),
  );
  const annualSavings = monthlyBill * 12;
  const annualUnitsGenerated = systemSize * config.UNITS_PER_KW_PER_YEAR;
  const roofAreaRequired = systemSize * config.SQFT_PER_KW;
  const pricePerKW = getPricePerKW(systemSize, config);
  const systemPrice = systemSize * pricePerKW;
  const subsidy = getSubsidyAmount(systemSize, config);
  const discount = config.FLAT_DISCOUNT;
  const totalBenefit = subsidy + discount;
  const effectiveCost = systemPrice - totalBenefit;
  const emi25Years = Math.round(effectiveCost / (25 * 12));
  const totalSaving25Years = annualSavings * 25 - effectiveCost;
  const roiYears = effectiveCost / annualSavings;

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
    roiYears,
  };
};

const calculateCommercialSolar = (
  monthlyBill: number,
  config: CalculatorConfig,
) => {
  const systemSize = Math.max(
    1,
    Math.ceil(monthlyBill / config.COMMERCIAL_MULTIPLIER),
  );
  const annualSavings = monthlyBill * 12;
  const annualUnitsGenerated = systemSize * config.UNITS_PER_KW_PER_YEAR;
  const roofAreaRequired = systemSize * config.SQFT_PER_KW;
  const pricePerKW = getPricePerKW(systemSize, config);
  const systemPrice = systemSize * pricePerKW;
  const discount = config.FLAT_DISCOUNT; // Now commercial also gets discount
  const effectiveCost = systemPrice - discount;
  const emi25Years = Math.round(effectiveCost / (25 * 12));
  const totalSaving25Years = annualSavings * 25 - effectiveCost;
  const roiYears = effectiveCost / annualSavings;

  return {
    systemSize,
    annualSavings,
    annualUnitsGenerated,
    roofAreaRequired,
    systemPrice,
    subsidy: 0,
    discount,
    totalBenefit: discount,
    effectiveCost,
    emi25Years,
    totalSaving25Years,
    roiYears,
  };
};

const formatCurrency = (amount: number): string => {
  if (amount >= 10000000) {
    // 1 Crore = 1,00,00,000
    return `₹${(amount / 10000000).toFixed(2)} Crore`;
  }
  if (amount >= 100000) {
    // 1 Lakh = 1,00,000
    return `₹${(amount / 100000).toFixed(1)} Lakh`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

const SolarCalculator: React.FC = () => {
  const { openModal } = useContactForm();
  const [customerType, setCustomerType] = useState<
    "residential" | "commercial"
  >("residential");
  const [monthlyBill, setMonthlyBill] = useState(980);
  const [billInputValue, setBillInputValue] = useState("980");
  const [calculatedBill, setCalculatedBill] = useState(980);
  const [showResults, setShowResults] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [config, setConfig] = useState<CalculatorConfig>(DEFAULT_CONFIG);
  const [isLoadingConfig, setIsLoadingConfig] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    phone?: string;
  }>({});

  // Fetch config on mount
  useEffect(() => {
    const loadConfig = async () => {
      setIsLoadingConfig(true);
      const fetchedConfig = await fetchCalculatorConfig();
      setConfig(fetchedConfig);
      setIsLoadingConfig(false);
    };
    loadConfig();
  }, []);

  const results =
    customerType === "residential"
      ? calculateResidentialSolar(calculatedBill, config)
      : calculateCommercialSolar(calculatedBill, config);

  const validateForm = (): boolean => {
    const errors: { name?: string; phone?: string } = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!phone || phone.length !== 10) {
      errors.phone = "Valid 10-digit phone number is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCalculate = async () => {
    if (!validateForm()) return;

    // Update the calculated bill value
    setCalculatedBill(monthlyBill);
    setIsSubmitting(true);

    // Calculate results with current bill
    const currentResults =
      customerType === "residential"
        ? calculateResidentialSolar(monthlyBill, config)
        : calculateCommercialSolar(monthlyBill, config);

    // Submit lead to backend
    const response = await submitLead({
      name,
      phone,
      customerType,
      monthlyBill,
      systemSize: currentResults.systemSize,
      effectiveCost: currentResults.effectiveCost,
      annualSavings: currentResults.annualSavings,
    });

    setIsSubmitting(false);

    if (response.success) {
      setShowResults(true);
    } else {
      // Still show results even if backend fails
      console.warn("Lead submission failed:", response.message);
      setShowResults(true);
    }
  };

  const handleSliderChange = (_: Event, value: number | number[]) => {
    const newValue = value as number;
    setMonthlyBill(newValue);
    setBillInputValue(newValue.toString());
  };

  const handleBillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setBillInputValue(value);

    const numValue = parseInt(value, 10);
    if (!isNaN(numValue)) {
      // Clamp value to slider range
      const clampedValue = Math.min(Math.max(numValue, 300), 10000);
      setMonthlyBill(clampedValue);
    }
  };

  const handleBillInputBlur = () => {
    // On blur, sync input value with clamped slider value
    setBillInputValue(monthlyBill.toString());
  };

  if (isLoadingConfig) {
    return (
      <Box
        id="calculator"
        data-scroll-section
        sx={{
          minHeight: "100vh",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress sx={{ color: "#ff9010" }} />
      </Box>
    );
  }
  // const minBill = 300;
  // const maxBill = customerType === "residential" ? 250000 : 1000000;

  return (
    <Box
      id="calculator"
      data-scroll-section
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: { xs: "0px 16px", md: "30px 20px" },
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: "-2px",
            mb: 2,
            mt: 4,
            fontSize: { xs: "28px", md: "48px" },
          }}
        >
          Discover What <span style={{ color: "#ff9010" }}>Solar Can Do</span>{" "}
          for Your Home
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#6B7280",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "16px", md: "20px" },
            lineHeight: "150%",
            px: { xs: 1, md: 0 },
          }}
        >
          Stop guessing. Start knowing. Try it once. Your mindset about
          electricity will change forever.
        </Typography>

        {/* Main Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "500px 1fr" },
            gap: 4,
          }}
        >
          {/* Left Panel - Input Form */}
          <Card
            sx={{
              borderRadius: { xs: "12px", md: "16px" },
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              p: { xs: 2, md: 3 },
            }}
          >
            {/* Customer Type Tabs */}
            <Box sx={{ display: "flex", gap: 1, mb: { xs: 2, md: 3 } }}>
              <Button
                variant={
                  customerType === "residential" ? "contained" : "outlined"
                }
                startIcon={<Home />}
                onClick={() => setCustomerType("residential")}
                sx={{
                  borderRadius: "24px",
                  textTransform: "none",
                  fontSize: { xs: "13px", md: "14px" },
                  padding: { xs: "6px 12px", md: "6px 16px" },
                  backgroundColor:
                    customerType === "residential" ? "#ff9010" : "transparent",
                  color: customerType === "residential" ? "white" : "#666",
                  borderColor: "#ddd",
                  "&:hover": {
                    backgroundColor:
                      customerType === "residential" ? "#e68010" : "#f5f5f5",
                  },
                }}
              >
                Home
              </Button>
              <Button
                variant={
                  customerType === "commercial" ? "contained" : "outlined"
                }
                startIcon={<Business />}
                onClick={() => setCustomerType("commercial")}
                sx={{
                  borderRadius: "24px",
                  textTransform: "none",
                  fontSize: { xs: "13px", md: "14px" },
                  padding: { xs: "6px 12px", md: "6px 16px" },
                  backgroundColor:
                    customerType === "commercial" ? "#ff9010" : "transparent",
                  color: customerType === "commercial" ? "white" : "#666",
                  borderColor: "#ddd",
                  "&:hover": {
                    backgroundColor:
                      customerType === "commercial" ? "#e68010" : "#f5f5f5",
                  },
                }}
              >
                Commercial
              </Button>
            </Box>

            {/* Name Input */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ mb: 1, color: "#333", fontSize: "14px" }}>
                Your Name
              </Typography>
              <TextField
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (formErrors.name)
                    setFormErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="John Smith"
                error={!!formErrors.name}
                helperText={formErrors.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "#999" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </Box>

            {/* Phone Input */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, color: "#333", fontSize: "14px" }}>
                Phone Number
              </Typography>
              <TextField
                fullWidth
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setPhone(value);
                  if (formErrors.phone)
                    setFormErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                placeholder="98765 43210"
                error={!!formErrors.phone}
                helperText={formErrors.phone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone sx={{ color: "#999" }} />
                      <Typography sx={{ ml: 0.5, color: "#666" }}>
                        +91
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
            </Box>

            {/* Monthly Bill Slider with Input */}
            <Box sx={{ mb: { xs: 3, md: 4 } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: { xs: 1, sm: 0 },
                  mb: 1,
                }}
              >
                <Typography
                  sx={{ color: "#333", fontSize: { xs: "13px", md: "14px" } }}
                >
                  Avg. Monthly Electricity Bill (₹)
                </Typography>
                <TextField
                  value={billInputValue}
                  onChange={handleBillInputChange}
                  onBlur={handleBillInputBlur}
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography sx={{ fontWeight: 600 }}>₹</Typography>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: { xs: "100%", sm: "160px" },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                    "& input": {
                      fontWeight: 600,
                      textAlign: "right",
                      padding: "8px 12px",
                    },
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "11px", md: "12px" },
                  color: "#999",
                  mb: 2,
                }}
              >
                Range: ₹300 -{" "}
                {customerType === "residential" ? "₹2,50,000" : "₹10,00,000"}
              </Typography>
              <Slider
                value={monthlyBill}
                onChange={handleSliderChange}
                min={300}
                max={customerType === "residential" ? 250000 : 1000000}
                sx={{
                  height: { xs: 6, md: 8 },
                  "& .MuiSlider-track": {
                    border: "none",
                    background:
                      "linear-gradient(90deg, #ffb366 0%, #ff9010 100%)",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#d1d5db",
                    opacity: 1,
                  },
                  "& .MuiSlider-thumb": {
                    width: { xs: 20, md: 24 },
                    height: { xs: 20, md: 24 },
                    backgroundColor: "#fff",
                    border: "4px solid #ff9010",
                    "&:hover": {
                      boxShadow: "0 0 0 8px rgba(255, 144, 16, 0.16)",
                    },
                  },
                }}
              />
            </Box>

            {/* Calculate Button */}
            <Button
              fullWidth
              variant="contained"
              onClick={handleCalculate}
              disabled={isSubmitting}
              sx={{
                backgroundColor: "#ff9010",
                color: "white",
                borderRadius: "12px",
                padding: { xs: "12px", md: "14px" },
                textTransform: "none",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#e68010",
                },
                "&:disabled": {
                  backgroundColor: "#ffb366",
                  color: "white",
                },
              }}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={20} sx={{ color: "white", mr: 1 }} />
                  Calculating...
                </>
              ) : (
                "Calculate Your Savings"
              )}
            </Button>
          </Card>

          {/* Right Panel - Results */}
          <Box sx={{ position: "relative" }}>
            <Card
              sx={{
                borderRadius: { xs: "12px", md: "16px" },
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                p: { xs: 2, md: 3 },
                filter: showResults ? "none" : "blur(4px)",
                opacity: showResults ? 1 : 0.6,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                Your Estimated solar savings
              </Typography>
              <Typography
                sx={{
                  color: "#999",
                  fontSize: { xs: "12px", md: "14px" },
                  mb: { xs: 2, md: 3 },
                }}
              >
                Based on your inputs and current market rates
              </Typography>

              {/* System Size & Annual Savings - Above chart */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: { xs: 1.5, md: 2 },
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff5e6",
                    borderRadius: { xs: "10px", md: "12px" },
                    p: { xs: 1.5, md: 2 },
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      color: "#666",
                      mb: 0.5,
                    }}
                  >
                    System Size
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "24px" },
                      fontWeight: 700,
                      color: "#ff9010",
                    }}
                  >
                    {results.systemSize} kW
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "9px", md: "11px" }, color: "#999" }}
                  >
                    recommended capacity
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff5e6",
                    borderRadius: { xs: "10px", md: "12px" },
                    p: { xs: 1.5, md: 2 },
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      color: "#666",
                      mb: 0.5,
                    }}
                  >
                    Annual Savings
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "24px" },
                      fontWeight: 700,
                      color: "#ff9010",
                    }}
                  >
                    {formatCurrency(results.annualSavings)}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "9px", md: "11px" }, color: "#999" }}
                  >
                    per year
                  </Typography>
                </Box>
              </Box>

              {/* Comparison Chart - Mobile Version */}
              <Typography
                sx={{
                  color: "#999",
                  fontSize: { xs: "12px", md: "14px" },
                  mb: { xs: 2, md: 3 },
                }}
              >
                Your Savings with Green Solar India vs Others
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: 3,
                  mb: 3,
                  mt: 2,
                  px: 2,
                }}
              >
                {/* Others Bar */}
                <Box sx={{ textAlign: "center", flex: 1 }}>
                  <Box
                    sx={{
                      backgroundColor: "#e0e0e0",
                      color: "#666",
                      padding: "6px 8px",
                      borderRadius: "6px",
                      fontWeight: 600,
                      fontSize: "12px",
                      mb: 1,
                    }}
                  >
                    {formatCurrency(results.annualSavings)}
                  </Box>
                  <Box
                    sx={{
                      height: "80px",
                      backgroundColor: "#e0e0e0",
                      borderRadius: "6px 6px 0 0",
                      mb: 0.5,
                    }}
                  />
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: 500, color: "#666" }}
                  >
                    Others
                  </Typography>
                </Box>

                {/* Green India Bar */}
                <Box sx={{ textAlign: "center", flex: 1 }}>
                  <Box
                    sx={{
                      backgroundColor: "#ff9010",
                      color: "white",
                      padding: "6px 8px",
                      borderRadius: "6px",
                      fontWeight: 600,
                      fontSize: "12px",
                      mb: 1,
                    }}
                  >
                    {formatCurrency(
                      results.annualSavings + config.FLAT_DISCOUNT,
                    )}
                  </Box>
                  <Box
                    sx={{
                      height: "120px",
                      backgroundColor: "#ff9010",
                      borderRadius: "6px 6px 0 0",
                      mb: 0.5,
                    }}
                  />
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: 600, color: "#ff9010" }}
                  >
                    Green India
                  </Typography>
                </Box>
              </Box>

              {/* Comparison Chart - Desktop Version */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: 4,
                  mb: 4,
                  height: "200px",
                  mt: 12,
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: "120px",
                      height: "120px",
                      backgroundColor: "#e0e0e0",
                      borderRadius: "8px 8px 0 0",
                      mb: 1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "303px",
                      left: "38%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#e0e0e0",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontWeight: 700,
                      fontSize: "18px",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "8px solid #e0e0e0",
                      },
                    }}
                  >
                    {formatCurrency(results.annualSavings)}
                  </Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                    others
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center", position: "relative" }}>
                  <Box
                    sx={{
                      width: "120px",
                      height: "180px",
                      backgroundColor: "#ff9010",
                      borderRadius: "8px 8px 0 0",
                      mb: 1,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "-54px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#ff9010",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "18px",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-8px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 0,
                          height: 0,
                          borderLeft: "8px solid transparent",
                          borderRight: "8px solid transparent",
                          borderTop: "8px solid #ff9010",
                        },
                      }}
                    >
                      {formatCurrency(
                        results.annualSavings + config.FLAT_DISCOUNT,
                      )}
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                    Green India
                  </Typography>
                </Box>
              </Box>

              {/* Investment Details */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                Your Investment
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{ color: "#666", fontSize: { xs: "13px", md: "16px" } }}
                  >
                    Total cost of plant
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "13px", md: "16px" },
                    }}
                  >
                    {formatCurrency(results.systemPrice)}
                  </Typography>
                </Box>

                {/* Subsidy - only for residential */}
                {customerType === "residential" && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#666",
                        fontSize: { xs: "13px", md: "16px" },
                      }}
                    >
                      Central Subsidy
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ff9010",
                        fontWeight: 500,
                        fontSize: { xs: "13px", md: "16px" },
                      }}
                    >
                      -{formatCurrency(results.subsidy)}
                    </Typography>
                  </Box>
                )}

                {/* Highlighted Discount Section */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                    p: { xs: 1.5, md: 2 },
                    borderRadius: { xs: "10px", md: "12px" },
                    border: "2px solid #447E31",
                    boxShadow: "0 0 20px rgba(255, 144, 16, 0.2)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Special Offer Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-1px",
                      left: "-1px",
                      backgroundColor: "#447E31",
                      color: "white",
                      padding: { xs: "3px 8px", md: "4px 12px" },
                      fontSize: { xs: "8px", md: "10px" },
                      fontWeight: 700,
                      borderRadius: "12px 0 12px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <LocalOffer sx={{ fontSize: { xs: "10px", md: "12px" } }} />
                    SPECIAL OFFER
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#333",
                        fontWeight: 600,
                        fontSize: { xs: "13px", md: "16px" },
                      }}
                    >
                      Green India Discount
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#447E31",
                      fontWeight: 700,
                      fontSize: { xs: "14px", md: "18px" },
                      mt: 1,
                    }}
                  >
                    -{formatCurrency(results.discount)}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: { xs: 1.5, md: 2 },
                    borderTop: "1px solid #eee",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    Net Cost
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "16px", md: "20px" },
                      color: "#ff9010",
                    }}
                  >
                    {formatCurrency(results.effectiveCost)}
                  </Typography>
                </Box>
              </Box>

              {/* 25-Year Savings & ROI */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: { xs: 1.5, md: 2 },
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff5e6",
                    borderRadius: { xs: "10px", md: "12px" },
                    p: { xs: 1.5, md: 2 },
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      color: "#666",
                      mb: 0.5,
                    }}
                  >
                    25-Years Savings
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "24px" },
                      fontWeight: 700,
                      color: "#ff9010",
                    }}
                  >
                    {formatCurrency(results.totalSaving25Years)}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "9px", md: "11px" }, color: "#999" }}
                  >
                    total savings
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff5e6",
                    borderRadius: { xs: "10px", md: "12px" },
                    p: { xs: 1.5, md: 2 },
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      color: "#666",
                      mb: 0.5,
                    }}
                  >
                    ROI Timeline
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "24px" },
                      fontWeight: 700,
                      color: "#ff9010",
                    }}
                  >
                    {results.roiYears.toFixed(1)}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "9px", md: "11px" }, color: "#999" }}
                  >
                    years payback
                  </Typography>
                </Box>
              </Box>

              {/* CTA Button */}
              <Button
                fullWidth
                variant="contained"
                onClick={openModal}
                sx={{
                  backgroundColor: "#ff9010",
                  color: "white",
                  borderRadius: "12px",
                  padding: { xs: "12px", md: "14px" },
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#e68010",
                  },
                }}
              >
                Schedule a FREE Visit
              </Button>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SolarCalculator;
