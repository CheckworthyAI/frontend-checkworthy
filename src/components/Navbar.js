import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Card,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navbarStyles from "./Navbar.styles";
import homePageStyles from "./HomePage.styles";
import { ReactComponent as Logo } from "../images/CWlogo.svg";
import pngImage from "../images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "Contact us", href: "/#contact" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.name === "Contact us" || item.name === "Pricing") {
      const sectionId = item.name === "Contact us" ? "contact" : "pricing";
      console.log("Navigating to contact section");
      if (location.pathname === "/") {
        // Already on base page, scroll directly
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to base page and set a flag
        navigate("/", { state: { scrollToSection: sectionId } });
      }
    } else {
      navigate(item.href);
    }
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const drawer = (
    <Box
      sx={{
        width: "100%",
        p: 4,
        background: "linear-gradient(to bottom, #EDEBFF 0%, #D9D4F0 100%)",
        backdropFilter: "blur(6px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
      onClick={toggleDrawer}
    >
      {isMobile && (
        <Button
          href="/"
          sx={{
            ...navbarStyles.dashboardButton,
            textTransform: "none",
            fontSize: "1rem",
            px: 3,
            py: 1.5,
            background: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage: "linear-gradient(90deg, #7091E6 0%, #3D52A0 100%)",
            fontWeight: 600,
          }}
        >
          Home
        </Button>
      )}

      {navItems.map((item) => (
        <Button
          key={item.name}
          onClick={() => handleNavClick(item)}
          sx={{
            ...navbarStyles.dashboardButton,
            textTransform: "none",
            fontSize: "1rem",
            px: 3,
            py: 1.5,
            background: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage: "linear-gradient(90deg, #7091E6 0%, #3D52A0 100%)",
            fontWeight: 600,
          }}
        >
          {item.name}
        </Button>
      ))}
    </Box>
  );
  return (
    <>
      <AppBar position="fixed" sx={navbarStyles.appBar} elevation={0}>
        <Container sx={{ ...homePageStyles.heroContainer }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1,
            }}
          >
            {/* Logo + Title */}
            <Box
              component="a"
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
              }}
            >
              <img
                src={pngImage}
                alt="Description of image"
                style={{
                  width: "32px",
                  height: "21px",
                  filter:
                    "invert(42%) sepia(52%) saturate(900%) hue-rotate(200deg) brightness(125%) contrast(92%)",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 700,

                  fontSize: { xs: "1.25rem", sm: "1.75rem" },
                  background:
                    "linear-gradient(90deg, #7091E6 0%, #3D52A0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  flexShrink: 0,
                }}
              >
                Checkworthy AI
              </Typography>
            </Box>

            {/* Mobile Drawer or Desktop Nav */}
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="top"
                  open={drawerOpen}
                  onClose={toggleDrawer}
                  PaperProps={{
                    sx: {
                      position: "fixed",
                      top: 0,
                      left: "50%",
                      maxWidth: "50%",
                      mt: "54px", // below AppBar
                      borderRadius: "16px 16px",
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    sx={{
                      ...navbarStyles.dashboardButton,
                      fontSize: "0.95rem",
                      px: 2,
                      py: 1,
                      textTransform: "none",
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
