const contactFormStyles = {
  headingRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    mb: 2,
  },
  headingBox: {
    width: 304,
    height: 80,
    display: "flex",
  },
  headingImgBox: {
    display: "flex",
    flex: "0 0 auto",
    justifyContent: "flex-start",
    minWidth: "408px",
  },
  headingTypography: {
    fontFamily: "'Montserrat-Bold', Helvetica, Arial, sans-serif",
    fontSize: "2rem",
    lineHeight: "80px",
    textAlign: "left",
    backgroundColor: "#F8FAFC",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    whiteSpace: "nowrap",
    letterSpacing: "-1.2px",
  },
  fieldBox: {
    display: "flex",
    width: "408px",
    alignItems: "start",
    padding: "12px 12px",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    borderRadius: "12px",
    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10), 0 0 24px 0 #7f5cff33",
    mb: 2,
    fontWeight: 500, // Match HomePage card content
  },
  textField: {
    fontFamily: "'Montserrat-Regular', Helvetica, Arial, sans-serif",
    fontSize: "14px",
    color: "#0b081c",
    fontWeight: 500, // Match HomePage card content
    "& .MuiInput-underline:before, & .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiInputLabel-root": {
      top: "50%",
      transform: "translateY(-50%)",
      fontFamily: "'Montserrat-Regular', Helvetica, Arial, sans-serif",
      color: "#0b081c",
      fontWeight: 500, // Match HomePage card content
    },
    "& .MuiInputLabel-shrink": {
      top: 0,
      transform: "none",
    },
  },
  submitButton: {
    backgroundColor: "rgba(177, 159, 208, 0.7)",
    borderRadius: "25px",
    padding: "12px 28px",
    textTransform: "none",
    color: "black",
    fontWeight: 700, // Match HomePage card title
    fontSize: "13px",
    fontFamily: "'Montserrat-Regular', Helvetica, Arial, sans-serif",
    boxShadow: "0 2px 8px 0 #00000033",
    transition: "background 0.2s",
  },
  submitButtonTypography: {
    color: "white",
    fontSize: "14px",
    lineHeight: "20px",
    fontFamily: "'Montserrat-Regular', Helvetica, Arial, sans-serif",
    fontWeight: 700, // Match HomePage card title
    whiteSpace: "nowrap",
  },
  snackbarAlert: {
    width: "100%",
    color: "#fff",
    fontWeight: 500, // Match HomePage card content
    alignItems: "center",
    fontFamily: "'Montserrat-Regular', Helvetica, Arial, sans-serif",
  },
};

export default contactFormStyles;
