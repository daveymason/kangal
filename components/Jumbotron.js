import Header from '@components/Header'
import { Box, Typography, Button } from '@mui/material';

export default function Jumbotron() {
  return (
    <Box
      bgcolor="#32323280"
      color="#f7f7f7"
      p={6}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h1" component="h1">
        Kangal Turkish Shepard
      </Typography>
      <Typography variant="subtitle1">
        An Artifical Intelligence informational website about Kangal Dogs.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="secondary">
          Learn more
        </Button>
      </Box>
    </Box>
  );
}
