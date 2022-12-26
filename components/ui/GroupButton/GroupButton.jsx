import { Box, Button } from '@mui/material';

const GroupButton = ({ buttons }) => {
  return (
    <Box display="flex" justifyContent="space-around">
      {buttons.map((button) => (
        <Button
        key={button.label}
        variant="contained"
        color={button.color}
        startIcon={button.icon}
        label=""
      >
          {button.label}
        </Button>
      ))}
    </Box>
  );
};

export default GroupButton;