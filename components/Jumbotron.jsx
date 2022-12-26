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
    <Typography variant="h3" component="h1" sx={{ p: 2, color: '#734b2e' }}>
      {title}
    </Typography>
    <Divider />
    <Typography variant="subtitle1" sx={{ p: 3, color: '#333' }}>
      {text}
    </Typography>
  </Box>
  );
}
