import React from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import Navbar from "./Navbar";
import homePageStyles from "./HomePage.styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AlertIcon from "@mui/icons-material/WarningAmber";
import InsightsIcon from "@mui/icons-material/Insights";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ContactForm from "./ContactForm"; // Assuming you have a ContactForm component
import { Padding } from "@mui/icons-material";

const featureData = [
  {
    icon: <SecurityIcon sx={homePageStyles.featureIcon} />,
    title: "Bias & Drift Detection",
    description:
      "Spot emerging bias or drift as it happens. Get alerts when agents deviate from your standards or lose fairness.",
  },
  {
    icon: <DescriptionIcon sx={homePageStyles.featureIcon} />,
    title: "Transparent Audit Trails",
    description:
      "Every agent action is fully logged for easy audits. Ensure compliance and build trust with clear, reviewable records.",
  },
  {
    icon: <AlertIcon sx={homePageStyles.featureIcon} />,
    title: "Alert System",
    description:
      "Receive real-time alerts when potential security issues or compliance violations are detected. Stay proactive with instant notifications.",
  },
  {
    icon: <InsightsIcon sx={homePageStyles.featureIcon} />,
    title: "Advanced Analytics",
    description:
      "Gain deep insights into agent performance with advanced analytics. Visualize trends, identify patterns, and make data-driven decisions.",
  },
  {
    icon: <SpeedIcon sx={homePageStyles.featureIcon} />,
    title: "Real-Time AI Agent Monitoring",
    description:
      "Track your AI agents live and detect unusual behaviors instantly. Prevent issues before they impact your systems.",
  },
  {
    icon: <NotificationsActiveIcon sx={homePageStyles.featureIcon} />,
    title: "Automated Performance Evaluation",
    description:
      "Receive instant evaluations of agent accuracy and reliability. Benchmark performance and surface strengths or weaknesses automatically.",
  },
];

const HomePage = () => {
  return (
    <Box sx={homePageStyles.root}>
      <Navbar />

      {/* Hero Section */}
      <Box sx={homePageStyles.hero}>
        <Container sx={homePageStyles.heroContainer}>
          <Box
            sx={{
              ...homePageStyles.heroContent,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box
              sx={{
                ...homePageStyles.heroText,
                flex: 1,
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <Typography variant="h1" sx={homePageStyles.heroTitle}>
                Monitor and Evaluate AI Agents
              </Typography>
              <Typography variant="subtitle1" sx={homePageStyles.heroSubtitle}>
                Build, test, and deploy AI solutions with confidence. Monitor,
                debug, and improve your AI applications in production.
              </Typography>

              <Box sx={homePageStyles.ctaButtons}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={homePageStyles.primaryButton}
                >
                  Let's Get Started
                </Button>
              </Box>
            </Box>
            <Card sx={homePageStyles.heroImageCard}>
              {/* Dashboard homepage image */}
              <img
                src="/images/Dashboard.jpg"
                alt="Dashboard Homepage"
                style={homePageStyles.heroImage}
              />
            </Card>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={homePageStyles.features}>
        <Container sx={{ maxWidth: "2400px !important" }}>
          <Box sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography
              variant="h2"
              align="center"
              sx={homePageStyles.sectionTitle}
            >
              Powerful Features for AI Agent Monitoring
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent={"center"}>
            {[0, 1, 2].map((col) => (
              <Grid
                item
                xs={12}
                md={4}
                key={col}
                sx={{ maxWidth: 400, width: "100%" }} // :point_left: Set max width per column
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {featureData
                    .slice(col * 2, col * 2 + 2)
                    .map((feature, idx) => (
                      <Paper
                        elevation={0}
                        key={idx}
                        sx={{ ...homePageStyles.featureCard, height: "380px" }}
                      >
                        <Box sx={homePageStyles.featureIconContainer}>
                          {feature.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={homePageStyles.featureTitle}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={homePageStyles.featureDescription}
                        >
                          {feature.description}
                        </Typography>
                      </Paper>
                    ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box id="pricing" sx={homePageStyles.pricingSection}>
        <Container>
          <Box sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography
              variant="h2"
              align="center"
              sx={homePageStyles.sectionTitle}
            >
              Pricing Plans
            </Typography>
          </Box>
        </Container>

        <Container sx={{ maxWidth: "1400px !important" }}>
          <Grid container spacing={4}>
            {/* Free Tier */}
            <Grid
              item
              xs={12}
              md={8}
              lg={6}
              sx={{ maxWidth: 300, minWidth: 300 }}
            >
              <Paper elevation={0} sx={homePageStyles.pricingCard}>
                <Box sx={homePageStyles.pricingHeader}>
                  <Typography variant="h4" sx={homePageStyles.pricingTitle}>
                    Free
                  </Typography>
                  <Typography variant="h3" sx={homePageStyles.pricingPrice}>
                    $0<span style={homePageStyles.pricingPeriod}>/month</span>
                  </Typography>
                </Box>
                <Box sx={homePageStyles.pricingFeatures}>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Basic features
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Limited usage
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Community support
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Email support
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={homePageStyles.pricingButton}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
            {/* Starter Plan */}
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{ maxWidth: 300, minWidth: 300 }}
            >
              <Paper elevation={0} sx={homePageStyles.pricingCard}>
                <Box className="pricing-badge">Popular</Box>
                <Box sx={homePageStyles.pricingHeader}>
                  <Typography variant="h4" sx={homePageStyles.pricingTitle}>
                    Starter
                  </Typography>
                  <Typography variant="h3" sx={homePageStyles.pricingPrice}>
                    $19<span style={homePageStyles.pricingPeriod}>/month</span>
                  </Typography>
                </Box>
                <Box sx={homePageStyles.pricingFeatures}>
                  <Typography sx={homePageStyles.pricingFeature}>
                    All Free features
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Increased limits
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Priority support
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Basic analytics
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    ...homePageStyles.pricingButton,
                    ...homePageStyles.pricingButtonPrimary,
                  }}
                >
                  Start Free Trial
                </Button>
              </Paper>
            </Grid>
            {/* Pro Plan */}
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{ maxWidth: 300, minWidth: 300 }}
            >
              <Paper elevation={0} sx={homePageStyles.pricingCard}>
                <Box sx={homePageStyles.pricingHeader}>
                  <Typography variant="h4" sx={homePageStyles.pricingTitle}>
                    Pro
                  </Typography>
                  <Typography variant="h3" sx={homePageStyles.pricingPrice}>
                    $79<span style={homePageStyles.pricingPeriod}>/month</span>
                  </Typography>
                </Box>
                <Box sx={homePageStyles.pricingFeatures}>
                  <Typography sx={homePageStyles.pricingFeature}>
                    All Starter features
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Advanced features
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Team collaboration
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Priority support
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={homePageStyles.pricingButton}
                >
                  Start Free Trial
                </Button>
              </Paper>
            </Grid>
            {/* Enterprise Plan */}
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{ maxWidth: 300, minWidth: 300 }}
            >
              <Paper elevation={0} sx={homePageStyles.pricingCard}>
                <Box sx={homePageStyles.pricingHeader}>
                  <Typography variant="h4" sx={homePageStyles.pricingTitle}>
                    Enterprise
                  </Typography>
                  <Typography variant="h3" sx={homePageStyles.pricingPrice}>
                    Custom
                  </Typography>
                </Box>
                <Box sx={homePageStyles.pricingFeatures}>
                  <Typography sx={homePageStyles.pricingFeature}>
                    All Pro features
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Custom SLAs
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Dedicated support
                  </Typography>
                  <Typography sx={homePageStyles.pricingFeature}>
                    Custom integrations
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={homePageStyles.pricingButton}
                >
                  Contact Sales
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="contact">
        <ContactForm />
      </Box>

      {/* CTA Section */}
      <Box sx={homePageStyles.ctaSection}>
        <Container maxWidth="md" sx={homePageStyles.ctaContainer}>
          <Typography variant="h3" align="center" sx={homePageStyles.ctaTitle}>
            Ready to get started?
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={homePageStyles.ctaSubtitle}
          >
            Join our community of developers building the next generation of AI
            applications
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
