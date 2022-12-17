import Header from '@components/Header'
import { Box, Typography, Button } from '@mui/material';

export default function Jumbotron() {
  return (
    <Box
      bgcolor="#32323250"
      color="#f7f7f7"
      p={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      boxShadow="2px 2px 4px #282828"
      borderRadius="10px"
    >
      <Typography variant="h1" component="h1">
        Kangal Turkish Shepard
      </Typography>
      <Typography variant="subtitle1">
        An Artifical Intelligence informational website about Kangal Dogs.
      </Typography>
    </Box>
  );
}
