import { Box, Typography } from '@mui/material';
import GroupButton from '@components/ui/GroupButton/GroupButton';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PetsIcon from '@mui/icons-material/Pets';
import RoofingIcon from '@mui/icons-material/Roofing';
import EmailIcon from '@mui/icons-material/Email';

export default function Intro({ title, text }) {
  const buttons = [
    { label: '', icon: <HomeIcon />, color: '#734b2e' },
    { label: '', icon: <InfoIcon />, color: '#ffb74d' },
    { label: '', icon: <LocalHospitalIcon />, color: '#81c784' },
    { label: '', icon: <PetsIcon />, color: '#9575cd' },
    { label: '', icon: <RoofingIcon />, color: '#64b5f6' },
    { label: '', icon: <EmailIcon />, color: '#e57373' },
  ];

  return (
    <Box
      className="jumbotron"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h1" component="h1" sx={{ mb: 3, color: '#734b2e' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ p: 3 }}>
        {text}
      </Typography>
      <GroupButton buttons={buttons} />
    </Box>
  );
}
