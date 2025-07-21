const footerStyles = {
  root: {
    backgroundColor: '#0B081C',
    color: 'rgba(255, 255, 255, 0.7)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    py: 3,
  },
  container: {
    maxWidth: "none !important",
    mx: 'auto',
    px: { xs: 3, sm: 4 },
  },
  content: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 0',
  },
  copyright: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '0.85rem',
    mb: { xs: 2, sm: 0 },
  },
  links: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '0.85rem',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: 'white',
    },
  },
};

export default footerStyles;
