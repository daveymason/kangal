import React, { Component } from 'react';
import {
  Menu,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';


class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-controls="menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Typography variant="h6">Menu</Typography>
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Typography variant="body1">Home</Typography>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Typography variant="body1">About Kangal Dogs</Typography>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Typography variant="body1">Training and Care</Typography>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Typography variant="body1">Breeding and Puppies</Typography>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default MenuComponent;