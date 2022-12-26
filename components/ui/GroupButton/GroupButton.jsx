import { Button } from '@mui/material';

const GroupButton = ({ buttons }) => {
  return (
    <div className="button-container">
      {buttons.map((button) => (
        <Button
          key={button.label}
          variant="contained"
          color={button.color}
          className="button"
          style={button.style}
        >
            {button.icon}
        </Button>
      ))}
    </div>
  );
};

export default GroupButton;
