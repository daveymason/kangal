import Header from '@components/Header'
import { Box, Typography } from '@mui/material';

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
        Kangal
      </Typography>
      <Typography variant="subtitle1">
      The Kangal Dog is a large, brave and loyal breed originating from Turkey. These majestic dogs are known for their protective nature and have been used for centuries to guard sheep and other livestock. They are highly intelligent and easily trained, making them excellent working dogs. This website is dedicated to providing information about Kangal Dogs, including their history, physical characteristics, and unique personality traits. Whether you are looking for a loyal guardian for your property or a loyal companion for your family, the Kangal Dog may be the perfect fit.
      </Typography>
    </Box>
  );
}
