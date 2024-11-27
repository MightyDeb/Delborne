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
import HomeBody from './components/home_body';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function Home() {

  return (
    <div className="Home">
    <ResponsiveAppBar />
    <HomeBody />
    <ResponsiveFooter/> 
    </div>
  );
}

export default Home;