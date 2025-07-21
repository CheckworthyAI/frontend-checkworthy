const contactFormStyles = {
  headingTypography: {
    fontSize: { xs: "26px", sm: "32px" },
    fontWeight: 600,
    color: "white",
    mb: 2,
  },
  fieldBox: {
    mb: 2,
  },
  textField: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "10px",
    "& .MuiInputLabel-root": {
      paddingLeft: "12px",
    },
    "& .MuiInputBase-root": {
      fontSize: "16px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiInputBase-inputMultiline": {
      padding: "10px 0",
    },
  },
  submitButton: {
    backgroundColor: "rgba(237, 232, 245, 0.2)",
    color: "white",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "16px",
    borderRadius: "20px",
    padding: "10px 20px",
    width: "100%",
    mt: 2,
    "&:hover": {
      background: "linear-gradient(90deg, #534fc4ff 0%, #4f4483ec 100%)",
    },
  },
  submitButtonTypography: {
    fontWeight: 600,
    fontSize: "16px",
    textAlign: "center",
    width: "100%",
  },
  snackbarAlert: {
    color: "white",
    fontWeight: 500,
    fontSize: "16px",
  },
};

export default contactFormStyles;