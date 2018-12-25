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
import PersonIcon from "@material-ui/icons/Person";
import RoomIcon from "@material-ui/icons/Room";

const media = "wp:featuredmedia";

//components
import Header from "components/Header";
import Footer from "components/Footer";
import Loading from "components/Loading";
import Pager from "components/Pager";

//css
import {
  items,
  cardStyle,
  cardTitile,
  cardStatus,
  cardContainer,
  chips,
  breadcrumb,
  gridContainer
} from "./home.css";
import { secondary } from "./color.css";

class Category extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.match.params !== prevProps.match.params) {
      this.props.wp_getCategoryPosts(this.props.match.params);
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
    console.log(this.props);
    this.props.wp_getCategoryPosts(this.props.match.params);
    this.props.wp_getCategories();
    this.props.wp_getSkills();
    this.props.wp_getJobs();
  }

  BreadcrumbList = ({ slug, id }) => {
    console.log(slug, id);
    switch (slug) {
      case "job":
        return (
          <span>
            {this.props.wpJobs.data.map(element => {
              if (element.id == id) {
                return `職種 / ${element.name}`;
              }
            })}
          </span>
        );
        break;
      case "skill":
        return (
          <span>
            {this.props.wpSkills.data.map(element => {
              if (element.id == id) {
                return `スキル / ${element.name}`;
              }
            })}
          </span>
        );
        break;
      case "tokyo":
        return (
          <span>
            {this.props.wpCategories.data.map(element => {
              if (element.id == id) {
                return `東京 / ${element.name}`;
              }
            })}
          </span>
        );
      default:
        break;
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Header {...this.props} />
        <div className={cardContainer}>
          <div className={breadcrumb}>
            <Link to="/">
              <span className={secondary}>Home </span>
            </Link>
            / {this.BreadcrumbList(this.props.match.params)}
          </div>
          {this.props.wpList.loading && <Loading />}

          <Grid
            container
            justify="center"
            style={{
              paddingTop: 40
            }}
          >
            <Grid className={gridContainer}>
              {this.props.wpList.data.length
                ? this.props.wpList.data.map(item => (
                    <Card style={{ maxWidth: 800 }} className={cardStyle}>
                      <Link to={"/detail/" + item.id}>
                        <CardActionArea>
                          <CardHeader
                            title={item.title.rendered}
                            component="h3"
                            className={cardTitile}
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
                                  color="secondary"
                                  className={chips}
                                />
                              );
                            }
                          });
                        })}
                        {this.props.wpJobs.data.map(element => {
                          return item.job.map(job => {
                            if (element.id === job) {
                              return (
                                <Chip
                                  icon={<PersonIcon />}
                                  to={`/category/job/${element.id}`}
                                  component={Link}
                                  label={element.name}
                                  variant="outlined"
                                  color="secondary"
                                  className={chips}
                                />
                              );
                            }
                          });
                        })}
                        {this.props.wpCategories.data.map(element => {
                          if (element.id === item.tokyo[0]) {
                            return (
                              <Chip
                                icon={<RoomIcon />}
                                to={`/category/tokyo/${element.id}`}
                                component={Link}
                                label={element.name}
                                variant="outlined"
                                color="secondary"
                                className={chips}
                              />
                            );
                          }
                        })}
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
        {this.props.wpList.totalPages && (
          <Pager
            path={`category/${this.props.match.params.slug}/${
              this.props.match.params.id
            }`}
            total={this.props.wpList.total}
            totalPages={this.props.wpList.totalPages}
            page={this.props.match.params.page}
          />
        )}
        <Footer {...this.props} />
      </div>
    );
  }
}
export default Category;
