import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import contactFormStyles from "./ContactForm.styles";
import contactImg from "../images/Contact.png";
import Email from "@mui/icons-material/Email";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import { Avatar, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const contactData = [
  {
    icon: <Email />,
    title: "Email Us",
    details: "checkworthyofficial@checkworthyai.com",
  },
  {
    icon: <Phone />,
    title: "Call Us",
    details: "+1 (561) 726-9812",
  },
  {
    icon: <LocationOn />,
    title: "Visit Us",
    details: "Boca Raton , Florida, USA",
  },
];

const Content = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  return (
    <>
      <Box
        sx={{
          paddingTop: "100px",
          justifyContent: "center",
          paddingBottom: "100px",
          display: "flex",
          flexDirection: "row",
          gap: "100px",
          width: "100%",
        }}
      >
        <Box>
          <Typography sx={contactFormStyles.headingTypography}>
            Book A Call
          </Typography>
          <Box sx={{ paddingBottom: "20px" }}>
            <Typography
              variant="body1"
              sx={{
                width: { xs: "100%", sm: 520 },
                top: 0,
                left: 0,
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                color: "#CBD5E1", // matches heroSubtitle color
                fontSize: 21,
                lineHeight: 1.5,
                letterSpacing: 0,
              }}
            >
              Have questions about our platform? Our team is ready to help you
              find the right solution for your organization.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Content;
