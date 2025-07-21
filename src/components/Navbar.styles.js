const navbarStyles = {
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    color: "#3D3D3D",
    maxWidth: "none !important",
    background: "linear-gradient(to bottom, #EDE8F5 0%, #3D52A0 100%)",
  },
  appBar: {
    backgroundColor: 'rgba(237, 232, 245, 0.7)', // #EDE8F5 with transparency
    color: '#3D3D3D',
    boxShadow: '0 2px 24px rgba(61, 82, 160, 0.08)',
    borderBottom: '1px solid rgba(61, 82, 160, 0.08)',
    justifyContent: 'center',
    backdropFilter: 'blur(12px)', // adds glass effect
    transition: 'background-color 0.3s',
    '@media (max-width: 600px)': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 'none',
    paddingLeft: 15,
    paddingRight: 15,
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: 8,
      paddingRight: 8,
      gap: 8,
    },
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
      marginBottom: 6,
    },
  },
  navLink: {
    color: '#3D52A0',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    background: 'transparent',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#7091E6',
      backgroundColor: 'rgba(237, 232, 245, 0.2)',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem',
      paddingLeft: 0,
      paddingRight: 0,
      width: '100%',
      justifyContent: 'flex-start',
    },
  },
  iconButton: {
    color: '#3D52A0',
    '&:hover': {
      backgroundColor: 'rgba(237, 232, 245, 0.2)',
    },
    '@media (max-width: 600px)': {
      padding: 6,
    },
  },
  dashboardButton: {
    background: 'linear-gradient(90deg, #7091E6 0%, #3D52A0 100%)',
    color: 'white',
    borderRadius: '8px',
    padding: '8px 24px',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    boxShadow: '0 4px 16px rgba(61, 82, 160, 0.12)',
    transition: 'background 0.2s, box-shadow 0.2s',
    '&:hover': {
      background: 'linear-gradient(90deg, #ADBBDa 0%, #3D52A0 100%)',
      boxShadow: '0 6px 20px rgba(61, 82, 160, 0.18)',
    },
    '@media (max-width: 600px)': {
      padding: '8px 0',
      fontSize: '0.95rem',
      width: '100%',
      borderRadius: '8px',
    },
  },
};

export default navbarStyles;
