import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import { MenuIcon } from "@material-ui/icons/Menu";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";

const media = "wp:featuredmedia";

class Header extends Component {
  render() {
    const params = this.props.params ? this.props.params : null;
    return (
      <AppBar position="sticky" color="white">
        <Toolbar>
          <Button
            size="small"
            variant="outlined"
            color="white"
            onClick={() => {
              console.log(this.props);
              this.props.action();
            }}
          >
            START
          </Button>

          {/* <IconButton>aaa</IconButton> */}
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;
