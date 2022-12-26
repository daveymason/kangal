import { Box, Typography, Divider } from '@mui/material';

export default function Jumbotron({ title, text }) {
  return (
    <Box
    className="jumbotron"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Typography variant="h4" component="h3" sx={{ pb: 1, p:3, color: '#734b2e' }}>
      {title}
    </Typography>
    <Typography variant="p" sx={{ p: 3, pt:1, color: '#333' }}>
      {text}
    </Typography>
  </Box>
  );
}
