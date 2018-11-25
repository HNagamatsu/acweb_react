import React from "react";
import { hot } from "react-hot-loader";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { escape } from "escape-html";

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
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Header from "components/Header";

const media = "wp:featuredmedia";

require("../style.css");

const escapeData = props => {
  return props ? escape(props.rendered) : "";
};

class Detail extends React.Component {
  getSnapshotBeforeUpdate(props) {
    console.log(props);
  }
  componentDidMount() {
    this.props.wp_getDetail(this.props.match.params);
  }
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Header />
        {this.props.wpDetail.data && (
          <Grid
            container
            justify="center"
            spacing={40}
            style={{ marginTop: 40 }}
          >
            <Paper
              style={{
                margin: "0 30px",
                padding: 20,
                maxWidth: "calc(100% - 50px)"
              }}
            >
              <Typography gutterBottom variant="h5" component="h1">
                {this.props.wpDetail.data.title
                  ? this.props.wpDetail.data.title.rendered
                  : ""}
              </Typography>
              <img src="" alt="" />
              <Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.wpDetail.data.content
                      ? this.props.wpDetail.data.content.rendered
                      : ""
                  }}
                />
              </Typography>
            </Paper>
          </Grid>
        )}
      </div>
    );
  }
}
export default hot(module)(Detail);
