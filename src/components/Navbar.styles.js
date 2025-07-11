const navbarStyles = {
  appBar: {
    backgroundColor: 'rgba(237, 232, 245, 0.7)', // #EDE8F5 with transparency
    color: '#3D3D3D',
    boxShadow: '0 2px 24px rgba(61, 82, 160, 0.08)',
    borderBottom: '1px solid rgba(61, 82, 160, 0.08)',
    height: 70,
    justifyContent: 'center',
    backdropFilter: 'blur(12px)', // adds glass effect
    transition: 'background-color 0.3s',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1800,
    paddingLeft: 15,
    paddingRight: 15,
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: '#3D52A0',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    background: 'transparent',
    '&:hover': {
      color: '#7091E6',
      backgroundColor: 'rgba(237, 232, 245, 0.2)',
    },
    transition: 'color 0.2s',
  },
  iconButton: {
    color: '#3D52A0',
    '&:hover': {
      backgroundColor: 'rgba(237, 232, 245, 0.2)',
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
    '&:hover': {
      background: 'linear-gradient(90deg, #ADBBDa 0%, #3D52A0 100%)',
      boxShadow: '0 6px 20px rgba(61, 82, 160, 0.18)',
    },
    transition: 'background 0.2s, box-shadow 0.2s',
  },
};

export default navbarStyles;
