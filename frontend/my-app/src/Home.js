import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ResponsiveAppBar from './components/navbar';
import ResponsiveFooter from './components/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeBody from './components/home_body';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Go to Landing Page
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              DELBRONE PVT. LTD.
              {/* image to be added */}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='flex-col justify-center align-middle'>
        <video width="320" height="240" autoplay>
          {/* video to be added */}
        </video>
        <h1 className='text-7xl'>Unseen, Unheard, Uncompromised: Secure Your Surroundings.</h1>
        </div> 
      </Dialog>
    </React.Fragment>
  );
}

function Home() {

  return (
    <div className="Home">
      <Router>
    <ResponsiveAppBar />
    <FullScreenDialog />

      <HomeBody />
    <ResponsiveFooter/>
    </Router>   
      </div>
  );
}

export default Home;