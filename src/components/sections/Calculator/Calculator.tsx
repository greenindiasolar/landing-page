import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Slider,
  Button,
  Card,
  //   CardContent,
  IconButton,
  InputAdornment,
  //   Tab,
  //   Tabs,
} from '@mui/material';
import { Home, Business, Search, Clear } from '@mui/icons-material';

// Calculator utility functions
const PRICE_PER_KW = 60000; // Updated to ₹60,000 per kW
const UNITS_PER_KW_PER_YEAR = 1440;
const SQFT_PER_KW = 80;
const FLAT_DISCOUNT = 22000;
const RESIDENTIAL_MULTIPLIER = 1190;
const COMMERCIAL_MULTIPLIER = 930;

const getSubsidyAmount = (systemSize: number): number => {
  if (systemSize === 1) return 30000;
  if (systemSize === 2) return 60000;
  if (systemSize >= 3) return 78000;
  return 0;
};

const calculateResidentialSolar = (monthlyBill: number) => {
  const systemSize = Math.max(1, Math.ceil(monthlyBill / RESIDENTIAL_MULTIPLIER));
  const annualSavings = monthlyBill * 12;
  const annualUnitsGenerated = systemSize * UNITS_PER_KW_PER_YEAR;
  const roofAreaRequired = systemSize * SQFT_PER_KW;
  const systemPrice = systemSize * PRICE_PER_KW;
  const subsidy = getSubsidyAmount(systemSize);
  const discount = FLAT_DISCOUNT;
  const totalBenefit = subsidy + discount;
  const effectiveCost = systemPrice - totalBenefit;
  const emi25Years = Math.round(effectiveCost / (25 * 12));
  const totalSaving25Years = (annualSavings * 25) - effectiveCost;
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

const calculateCommercialSolar = (monthlyBill: number) => {
  const systemSize = Math.max(1, Math.ceil(monthlyBill / COMMERCIAL_MULTIPLIER));
  const annualSavings = monthlyBill * 12;
  const annualUnitsGenerated = systemSize * UNITS_PER_KW_PER_YEAR;
  const roofAreaRequired = systemSize * SQFT_PER_KW;
  const systemPrice = systemSize * PRICE_PER_KW;
  const effectiveCost = systemPrice; // No subsidies for commercial
  const emi25Years = Math.round(effectiveCost / (25 * 12));
  const totalSaving25Years = (annualSavings * 25) - effectiveCost;
  const roiYears = effectiveCost / annualSavings;

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
    roiYears,
  };
};

const formatCurrency = (amount: number): string => {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} Lakh`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const SolarCalculator: React.FC = () => {
  const [customerType, setCustomerType] = useState<'residential' | 'commercial'>('residential');
  const [pincode, setPincode] = useState('');
  const [monthlyBill, setMonthlyBill] = useState(980);
  const [calculatedBill, setCalculatedBill] = useState(980); // Store the bill value used for calculation
  const [showModal, setShowModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [viewType, setViewType] = useState<'yearly' | 'monthly'>('yearly');

  // Check session storage on mount
  React.useEffect(() => {
    const savedName = sessionStorage.getItem('userName');
    const savedPhone = sessionStorage.getItem('userPhone');
    if (savedName && savedPhone) {
      setName(savedName);
      setPhone(savedPhone);
      setShowResults(true);
    }
  }, []);

  const results = customerType === 'residential'
    ? calculateResidentialSolar(calculatedBill)
    : calculateCommercialSolar(calculatedBill);

  const handleCalculate = () => {
    // Update the calculated bill value
    setCalculatedBill(monthlyBill);

    // Check if user info is already in session storage
    const savedName = sessionStorage.getItem('userName');
    const savedPhone = sessionStorage.getItem('userPhone');

    if (savedName && savedPhone) {
      // User info already exists, show results directly
      setShowResults(true);
    } else {
      // Show modal to collect user info
      setShowModal(true);
    }
  };

  const handleSubmit = () => {
    if (name && phone.length === 10) {
      // Save to session storage
      sessionStorage.setItem('userName', name);
      sessionStorage.setItem('userPhone', phone);

      setShowModal(false);
      setShowResults(true);
    }
  };

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setPincode(value);
  };

  return (
    <Box
      id="calculator"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fff',
        padding: '40px 20px',
      }}
    >
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            letterSpacing: "-2px",
            mb: 2,
            mt: 4,
            fontSize: { xs: '28px', md: '48px' },
          }}
        >
          Discover What <span style={{ color: '#ff9010' }}>Solar Can Do</span> for Your Home
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: '#6B7280',
            mb: 6,
            fontSize: '20px',
            lineHeight: "150%"
          }}
        >
          Stop guessing. Start knowing. Try it once. Your mindset about electricity will change forever.
        </Typography>

        {/* Main Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '500px 1fr' },
            gap: 4,
          }}
        >
          {/* Left Panel - Input Form */}
          <Card
            sx={{
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              p: 3,
            }}
          >
            {/* Customer Type Tabs */}
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              <Button
                variant={customerType === 'residential' ? 'contained' : 'outlined'}
                startIcon={<Home />}
                onClick={() => setCustomerType('residential')}
                sx={{
                  borderRadius: '24px',
                  textTransform: 'none',
                  backgroundColor: customerType === 'residential' ? '#ff9010' : 'transparent',
                  color: customerType === 'residential' ? 'white' : '#666',
                  borderColor: '#ddd',
                  '&:hover': {
                    backgroundColor: customerType === 'residential' ? '#e68010' : '#f5f5f5',
                  },
                }}
              >
                Home
              </Button>
              <Button
                variant={customerType === 'commercial' ? 'contained' : 'outlined'}
                startIcon={<Business />}
                onClick={() => setCustomerType('commercial')}
                sx={{
                  borderRadius: '24px',
                  textTransform: 'none',
                  backgroundColor: customerType === 'commercial' ? '#ff9010' : 'transparent',
                  color: customerType === 'commercial' ? 'white' : '#666',
                  borderColor: '#ddd',
                  '&:hover': {
                    backgroundColor: customerType === 'commercial' ? '#e68010' : '#f5f5f5',
                  },
                }}
              >
                Commercial
              </Button>
            </Box>

            {/* Pincode Input */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, color: '#333', fontSize: '14px' }}>
                Your City/Pincode (for localized data)
              </Typography>
              <TextField
                fullWidth
                value={pincode}
                onChange={handlePincodeChange}
                placeholder="000001"
                inputProps={{
                  maxLength: 6,
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: '#999' }} />
                    </InputAdornment>
                  ),
                  endAdornment: pincode && (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => setPincode('')}>
                        <Clear sx={{ fontSize: '16px' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                  },
                }}
              />
            </Box>

            {/* Monthly Bill Slider */}
            <Box sx={{ mb: 10 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ color: '#333', fontSize: '14px' }}>
                  Avg. Monthly Electricity Bill (₹)
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>
                  ₹ {monthlyBill}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '12px', color: '#999', mb: 2 }}>
                Min: 300
              </Typography>
              <Slider
                value={monthlyBill}
                onChange={(_, value) => setMonthlyBill(value)}
                min={300}
                max={10000}
                sx={{
                  height: 8,
                  '& .MuiSlider-track': {
                    border: 'none',
                    background: 'linear-gradient(90deg, #ffb366 0%, #ff9010 100%)',
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#d1d5db',
                    opacity: 1,
                  },
                  '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#fff',
                    border: '4px solid #ff9010',
                    '&:hover': {
                      boxShadow: '0 0 0 8px rgba(255, 144, 16, 0.16)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '32px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderBottom: '6px solid #ff9010',
                      zIndex: 2,
                    },
                    '&::after': {
                      content: `"₹${monthlyBill}"`,
                      position: 'absolute',
                      top: '38px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#ff9010',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      minWidth: 'fit-content',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
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
              sx={{
                backgroundColor: '#ff9010',
                color: 'white',
                borderRadius: '12px',
                padding: '14px',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#e68010',
                },
              }}
            >
              Calculate Your Savings
            </Button>
          </Card>

          {/* Right Panel - Results */}
          <Box sx={{ position: 'relative' }}>
            <Card
              sx={{
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                p: 3,
                filter: showResults ? 'none' : 'blur(4px)',
                opacity: showResults ? 1 : 0.6,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Your Estimated solar savings
              </Typography>
              <Typography sx={{ color: '#999', fontSize: '14px', mb: 3 }}>
                Based on your inputs and current market rates
              </Typography>

              {/* Yearly/Monthly Toggle */}
              {/* <Box sx={{ display: 'flex', gap: 1, mb: 3, justifyContent: 'center' }}>
                <Button
                  variant={viewType === 'yearly' ? 'contained' : 'outlined'}
                  onClick={() => setViewType('yearly')}
                  sx={{
                    borderRadius: '8px',
                    textTransform: 'none',
                    minWidth: '100px',
                    backgroundColor: viewType === 'yearly' ? '#f5f5f5' : 'transparent',
                    color: '#333',
                    border: '1px solid #ddd',
                  }}
                >
                  Yearly
                </Button>
                <Button
                  variant={viewType === 'monthly' ? 'contained' : 'outlined'}
                  onClick={() => setViewType('monthly')}
                  sx={{
                    borderRadius: '8px',
                    textTransform: 'none',
                    minWidth: '100px',
                    backgroundColor: viewType === 'monthly' ? '#f5f5f5' : 'transparent',
                    color: '#333',
                    border: '1px solid #ddd',
                  }}
                >
                  Monthly
                </Button>
              </Box> */}

              {/* Comparison Chart - Only show for residential */}
              {customerType === 'residential' && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: 4,
                    mb: 4,
                    height: '200px',
                    mt: 10,
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: '120px',
                        height: '120px',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '8px 8px 0 0',
                        mb: 1,
                      }}
                    />
                    {/* <Typography sx={{ fontSize: '12px', color: '#999' }}>₹17,000</Typography> */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '153px',
                        left: '38%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#e0e0e0',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '18px',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '8px solid #e0e0e0',
                        },
                      }}
                    >
                      {formatCurrency(results.annualSavings)}
                    </Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>others</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', position: 'relative' }}>
                    <Box
                      sx={{
                        width: '120px',
                        height: '180px',
                        backgroundColor: '#ff9010',
                        borderRadius: '8px 8px 0 0',
                        mb: 1,
                        position: 'relative',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-54px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: '#ff9010',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          fontWeight: 700,
                          fontSize: '18px',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 0,
                            height: 0,
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: '8px solid #ff9010',
                          },
                        }}
                      >
                        {formatCurrency(results.annualSavings + 22000)}
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>Green India</Typography>
                  </Box>
                </Box>
              )}

              {/* Investment Details */}
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Your Investment
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography sx={{ color: '#666' }}>Total cost of plant</Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    {formatCurrency(results.systemPrice)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography sx={{ color: '#666' }}>Central Subsidy</Typography>
                  <Typography sx={{ color: '#ff9010', fontWeight: 500 }}>
                    -{formatCurrency(results.subsidy)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography sx={{ color: '#666' }}>Discount</Typography>
                  <Typography sx={{ color: '#ff9010', fontWeight: 500 }}>
                    -{formatCurrency(results.discount)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: 2,
                    borderTop: '1px solid #eee',
                  }}
                >
                  <Typography sx={{ fontWeight: 600 }}>Net Cost</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '20px', color: '#ff9010' }}>
                    {formatCurrency(results.effectiveCost)}
                  </Typography>
                </Box>
              </Box>

              {/* 25-Year Savings & ROI */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#fff5e6',
                    borderRadius: '12px',
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '12px', color: '#666', mb: 1 }}>
                    25-Years Savings
                  </Typography>
                  <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#ff9010' }}>
                    {formatCurrency(results.totalSaving25Years)}
                  </Typography>
                  <Typography sx={{ fontSize: '11px', color: '#999' }}>
                    total savings
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: '#fff5e6',
                    borderRadius: '12px',
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '12px', color: '#666', mb: 1 }}>
                    ROI Timeline
                  </Typography>
                  <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#ff9010' }}>
                    {results.roiYears.toFixed(1)}
                  </Typography>
                  <Typography sx={{ fontSize: '11px', color: '#999' }}>
                    years payback
                  </Typography>
                </Box>
              </Box>

              {/* CTA Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#ff9010',
                  color: 'white',
                  borderRadius: '12px',
                  padding: '14px',
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#e68010',
                  },
                }}
              >
                Book a FREE Consultation
              </Button>
            </Card>

            {/* Modal Overlay */}
            {showModal && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  p: 4,
                  width: '90%',
                  maxWidth: '400px',
                  zIndex: 1000,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
                  Just one last step to see your results.
                </Typography>
                <Typography sx={{ color: '#666', mb: 3, textAlign: 'center', fontSize: '14px' }}>
                  Please fill the form to get the results
                </Typography>

                <TextField
                  fullWidth
                  label="Full Name"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="+91 98765-43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  }}
                  sx={{ mb: 3 }}
                />

                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleSubmit}
                  sx={{
                    borderColor: '#ff9010',
                    color: '#ff9010',
                    borderRadius: '12px',
                    padding: '12px',
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#e68010',
                      backgroundColor: '#fff5e6',
                    },
                  }}
                >
                  See the Results
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SolarCalculator;