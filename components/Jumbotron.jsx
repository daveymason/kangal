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
      <Typography variant="h1" component="h1" sx={{ mb: 5, color: '#734b2e' }}>
        {title}
      </Typography>
      <Divider />
      <Typography variant="subtitle1" sx={{ p: 3 }}>
        {text}
      </Typography>
    </Box>
  );
}
