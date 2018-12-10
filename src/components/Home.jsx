import React from "react";
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
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import RoomIcon from "@material-ui/icons/Room";
import PersonIcon from "@material-ui/icons/Person";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";

const media = "wp:featuredmedia";

//components
import Header from "components/Header";
import SideBar from "components/SideBar";

//css
import { items, cardStyle, cardTitile, cardStatus } from "./home.css";

class Home extends React.Component {
  getSnapshotBeforeUpdate(props) {
    console.log(props);
  }
  componentDidMount() {
    this.props.wp_getList();
    this.props.wp_getCategories();
    this.props.wp_getSkills();
    this.props.wp_getJobs();
  }
  state = {
    isOpenArea: false,
    isOpenTokyo: false,
    isOpenSkill: false
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Header {...this.props} />
        <div>
          <Grid
            container
            justify="center"
            spacing={40}
            style={{ paddingTop: 40, background: "#efefef" }}
          >
            <Grid>
              {this.props.wpList.data.length
                ? this.props.wpList.data.map(item => (
                    <Card style={{ maxWidth: 800 }} className={cardStyle}>
                      <Link to={"/detail/" + item.id}>
                        <CardActionArea>
                          <CardHeader
                            title={item.title.rendered}
                            component="h3"
                            classes={cardTitile}
                          />
                        </CardActionArea>
                      </Link>
                      <Divider />
                      <CardContent>
                        {this.props.wpSkills.data.map(element => {
                          return item.skill.map(skill => {
                            if (element.id === skill) {
                              return (
                                <Chip
                                  to={`/category/skill/${element.id}`}
                                  component={Link}
                                  label={element.name}
                                  variant="outlined"
                                />
                              );
                            }
                          });
                        })}

                        <div className={cardStatus}>
                          {item.post_meta.price ? (
                            <div className={cardStatus}>
                              単価:
                              {item.post_meta.price}
                              万円～
                            </div>
                          ) : (
                            ""
                          )}

                          <div className={cardStatus}>
                            <PersonIcon />
                            {this.props.wpJobs.data.map(element => {
                              return item.job.map(job => {
                                if (element.id === job) {
                                  return (
                                    <Link to={`/category/job/${element.id}`}>
                                      {element.name}
                                    </Link>
                                  );
                                }
                              });
                            })}
                          </div>
                          <div className={cardStatus}>
                            <RoomIcon />

                            {this.props.wpCategories.data.map(element => {
                              if (element.id === item.tokyo[0]) {
                                return (
                                  <Link to={`/category/tokyo/${element.id}`}>
                                    {element.name}
                                  </Link>
                                );
                              }
                            })}
                          </div>
                        </div>

                        <Typography component="p">
                          {/* 記事抜粋 */}
                          <Typography>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.excerpt.rendered
                              }}
                              className={items}
                            />
                          </Typography>
                        </Typography>
                      </CardContent>
                    </Card>
                  ))
                : null}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Home;
