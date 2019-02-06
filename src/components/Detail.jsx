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
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";

import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Chip from "@material-ui/core/Chip";
import RoomIcon from "@material-ui/icons/Room";
import PersonIcon from "@material-ui/icons/Person";
import Divider from "@material-ui/core/Divider";

//component
import Header from "components/Header";
import Footer from "components/Footer";
import Loading from "components/Loading";
import FormDialog from "components/FormDialog";

const media = "wp:featuredmedia";

require("../style.css");
import { cardContainer } from "./home.css";
import {
  detailStatus,
  detailContainer,
  breadcrumb,
  detailPrice,
  detailContent,
  detailHeader,
  detailInner,
  detailTitle,
  buttonContainer
} from "./detail.css";
import { secondary } from "./color.css";
import { cssButton } from "./button.css";

const escapeData = props => {
  return props ? escape(props.rendered) : "";
};

class Detail extends React.Component {
  getSnapshotBeforeUpdate(props) {
    console.log(props);
  }
  componentDidMount() {
    this.props.wp_getDetail(this.props.match.params);
    this.props.wp_getCategories();
    this.props.wp_getSkills();
    this.props.wp_getJobs();
  }
  state = {
    isOpenDialog: false
  };
  handleCloseDialog = () => {
    this.setState({
      isOpenDialog: !this.state.isOpenDialog
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <FormDialog
          isOpenDialog={this.state.isOpenDialog}
          handleCloseDialog={this.handleCloseDialog}
        />
        <Header {...this.props} />
        <div className={cardContainer}>
          <div className={breadcrumb}>
            <Link to="/">
              <span className={secondary}>Home </span>
            </Link>
            / 求人詳細
          </div>
          {this.props.wpDetail.loading && <Loading />}
          {this.props.wpDetail.data &&
            !this.props.wpDetail.loading && (
              <Grid container justify="center" style={{ marginTop: 40 }}>
                <Paper className={detailContainer}>
                  <div className={detailTitle}>
                    <Typography gutterBottom variant="h5" component="h1">
                      {this.props.wpDetail.data.title
                        ? this.props.wpDetail.data.title.rendered
                        : ""}
                    </Typography>
                  </div>
                  <Divider />
                  <div className={detailInner}>
                    <h3 className={detailHeader}>案件概要</h3>
                    <div className={detailStatus}>
                      <dl>
                        <dt>スキル</dt>
                        {this.props.wpSkills.data.map(element => {
                          return this.props.wpDetail.data.skill.map(skill => {
                            if (element.id === skill) {
                              return (
                                <dd>
                                  <Link to={`/category/skill/${element.id}`}>
                                    <div className={secondary}>
                                      {element.name}
                                    </div>
                                  </Link>
                                </dd>
                              );
                            }
                          });
                        })}
                      </dl>
                      <dl>
                        <dt>勤務地</dt>
                        {this.props.wpCategories.data.map(element => {
                          return this.props.wpDetail.data.tokyo.map(tokyo => {
                            if (element.id === tokyo) {
                              return (
                                <dd>
                                  <Link to={`/category/tokyo/${element.id}`}>
                                    <div className={secondary}>
                                      {element.name}
                                    </div>
                                  </Link>
                                </dd>
                              );
                            }
                          });
                        })}
                      </dl>
                      <dl>
                        <dt>職種</dt>
                        {this.props.wpJobs.data.map(element => {
                          return this.props.wpDetail.data.job.map(job => {
                            if (element.id === job) {
                              return (
                                <dd>
                                  <Link to={`/category/job/${element.id}`}>
                                    <div className={secondary}>
                                      {element.name}
                                    </div>
                                  </Link>
                                </dd>
                              );
                            }
                          });
                        })}
                      </dl>
                      {this.props.wpDetail.data.post_meta.price && (
                        <dl>
                          <dt>単価</dt>
                          <dd>
                            <span className={detailPrice}>
                              {this.props.wpDetail.data.post_meta.price}
                            </span>
                            万円から
                          </dd>
                        </dl>
                      )}
                    </div>
                    <h3 className={detailHeader}>案件詳細</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.props.wpDetail.data.content
                          ? this.props.wpDetail.data.content.rendered
                          : ""
                      }}
                      className={detailContent}
                    />
                  </div>
                  <div className={buttonContainer}>
                    <Button variant="outlined" className={cssButton}>
                      <FavoriteBorder color="secondary" />
                      <span>お気に入りに追加</span>
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={cssButton}
                      onClick={this.handleCloseDialog}
                    >
                      <ChatIcon />
                      <span>話を聞いてみる</span>
                    </Button>
                  </div>
                </Paper>
              </Grid>
            )}
        </div>
        <Footer {...this.props} />
      </div>
    );
  }
}
export default hot(module)(Detail);
