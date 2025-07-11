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

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_nft1gg6", "template_8pof2of", form, "7Bmonq9yxyokoyhZE")
      .then(
        () => {
          setSnackbar({
            open: true,
            message: "Message sent!",
            severity: "success",
          });
          setForm({
            name: "",
            email: "",
            company: "",
          });
        },
        (error) =>
          setSnackbar({
            open: true,
            message: "Failed to send: " + error.text,
            severity: "error",
          })
      );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

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
          <Stack spacing={2}>
            {contactData.map((contact, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "white",
                    color: "primary.main",
                  }}
                >
                  {contact.icon}
                </Avatar>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 500,
                      color: "text.primary",
                      fontSize: "18px",
                      lineHeight: "28px",
                      mb: 0.5,
                    }}
                  >
                    {contact.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      color: "#CBD5E1", // matches heroSubtitle color
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {contact.details}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
        {/* Replace this Box with Card */}
        <Card
          sx={{
            flex: 1,
            background: "#9891bc5e",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 350,
            maxWidth: 500,
            p: 3,
            ml: { xs: 0, md: 4 },
          }}
        >
          <CardContent sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 700,
                textAlign: "left",
                color: "white",
                letterSpacing: 1,
              }}
            >
              Send Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box sx={contactFormStyles.fieldBox}>
                <TextField
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  variant="standard"
                  sx={contactFormStyles.textField}
                />
              </Box>
              <Box sx={contactFormStyles.fieldBox}>
                <TextField
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  variant="standard"
                  sx={contactFormStyles.textField}
                />
              </Box>
              <Box sx={contactFormStyles.fieldBox}>
                <TextField
                  label="Company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  fullWidth
                  variant="standard"
                  sx={contactFormStyles.textField}
                />
              </Box>
              <Box sx={contactFormStyles.fieldBox}>
                <TextField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  fullWidth
                  variant="standard"
                  sx={contactFormStyles.textField}
                  multiline
                  minRows={3}
                />
              </Box>

              {/* Get in Touch Button */}
              <Button type="submit" sx={contactFormStyles.submitButton}>
                <Typography sx={contactFormStyles.submitButtonTypography}>
                  Submit
                </Typography>
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            ...contactFormStyles.snackbarAlert,
            backgroundColor:
              snackbar.severity === "success" ? "#4caf50" : "#f44336",
          }}
          icon={snackbar.severity === "success" ? undefined : undefined}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
