import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ConstructionIcon from '@mui/icons-material/Construction';



export default function Intro() {

  return (
<Box
  className="introSplash"
  display="flex"
  alignItems="flex-start"
  justifyContent="center"
  flexDirection="column"
  sx={{ textAlign: 'left', p: 3 }}
>
  <Typography variant="h3" sx={{ mb: 2, color: '#323232'}}>
    Your <span style={{ color: '#d3cbb8', fontWeight: 'bold' }}>Best Friend</span> in <span style={{ color: '#7f8c8d', fontWeight: 'bold' }}>Cybersecurity</span>
  </Typography>
  
  <Typography variant="body1" sx={{ mb: 3, maxWidth: '800px', color: '#323232' }}>
    <b>Kangal Security</b> is the loyal companion you need, offering a 
    <b> comprehensive suite of cybersecurity tools</b> that blend <em>proactive 
    threat detection</em> with <em>seamless compliance support</em>.
  </Typography>
  
  <Button 
    variant="contained" 
    href="/sniff" 
    sx={{
      backgroundColor: "#734b2e", 
      color: "#ffffff",
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      '&:hover': {
        backgroundColor: "#5f3f23",
      }
    }}
  >
    <ConstructionIcon sx={{ marginRight: '8px' }} /> 
    Explore Tools
  </Button>
</Box>

  );
}
