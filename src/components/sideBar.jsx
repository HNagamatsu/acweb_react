import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";

const media = "wp:featuredmedia";

class Header extends Component {
  state = {
    isOpenDrawer: false,
    isOpenArea: false,
    isOpenTokyo: false,
    isOpenSkill: false
  };
  toggleDrawer = () => {
    this.setState(state => ({ isOpenDrawer: !state.isOpenDrawer }));
  };
  toggleAreaAcordion = () => {
    this.setState(state => ({ isOpenArea: !state.isOpenArea }));
  };
  toggleTokyoAcordion = () => {
    this.setState(state => ({ isOpenTokyo: !state.isOpenTokyo }));
  };
  toggleSkillAcordion = () => {
    this.setState(state => ({ isOpenSkill: !state.isOpenSkill }));
  };

  render() {
    console.log(this.props);
    return (
      <div
        style={{
          width: 300
        }}
      >
        <List>
          <ListItem button onClick={this.toggleAreaAcordion}>
            <ListItemText primary={"地域"} />
            {this.state.isOpenArea ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Divider />
        </List>
        <Collapse in={this.state.isOpenArea} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText
                inset
                primary="東京都"
                onClick={this.toggleTokyoAcordion}
              />
              {this.state.isOpenTokyo ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider />
          </List>
          <Collapse in={this.state.isOpenTokyo} timeout="auto" unmountOnExit>
            {this.props.wpCategories.data.map(element => {
              return (
                <List component="div" disablePadding>
                  <Link to={"/category/" + element.id}>
                    <ListItem button>
                      <ListItemText inset primary={element.name} />
                    </ListItem>
                  </Link>

                  <Divider />
                </List>
              );
            })}
          </Collapse>
        </Collapse>
        <List>
          <ListItem button onClick={this.toggleAcordion}>
            <ListItemText primary={"スキル"} />
            {this.state.isOpenAcordion ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Divider />
        </List>
      </div>
    );
  }
}
export default Header;
