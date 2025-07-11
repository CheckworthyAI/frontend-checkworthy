import {
  AppBar,
  Box,
  Button,
  Container,
  Card,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import navbarStyles from "./Navbar.styles";
import homePageStyles from "./HomePage.styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CreateIcon from "@mui/icons-material/Create";
import { ReactComponent as Logo } from "../images/CWlogo.svg";
import { styled } from "@mui/material/styles";

const Navbar = () => {
  const navItems = [
    { name: "Contact us", href: "/#contact" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About Us" },
  ];

  return (
    <AppBar position="fixed" sx={navbarStyles.appBar} elevation={0}>
      <Container sx={homePageStyles.heroContainer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={navbarStyles.logoBox}>
            <Box
              component="a"
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                "&:hover": {
                  "& h6, & svg": {
                    opacity: 0.8,
                  },
                },
              }}
            >
              <Logo
                style={{ width: "32px", height: "32px", marginRight: "12px" }}
              />
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  background:
                    "linear-gradient(90deg, #7091E6 0%, #3D52A0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  lineHeight: 1.2,
                  transition: "opacity 0.2s ease",
                }}
              >
                Checkworthy AI
              </Typography>
            </Box>
          </Box>

          <Card
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "right",
              boxShadow: "none",
              background: "transparent",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "right", gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  href={item.href}
                  sx={navbarStyles.dashboardButton}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Card>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
