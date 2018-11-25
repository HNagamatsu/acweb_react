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

const media = "wp:featuredmedia";

//components
import Header from "components/Header";

class Search extends React.Component {
  getSnapshotBeforeUpdate(props) {
    console.log(props);
  }
  componentDidMount() {
    this.props.wp_search("ようこそ");
  }

  handleSearch = () => {
    this.props.wp_search("ようこそ");
  };
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Header action={this.handleSearch} params="" />
        <Grid container justify="center" spacing={40} style={{ marginTop: 40 }}>
          <Grid>
            {this.props.wpSearch.data.length
              ? this.props.wpSearch.data.map(item => (
                  <Card style={{ maxWidth: 800 }}>
                    <Link to={"/detail/" + item.id}>
                      <CardActionArea>
                        <CardHeader
                          avatar={<Avatar aria-label="Recipe">R</Avatar>}
                          action={
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title="Shrimp and Chorizo Paella"
                          subheader={item.date}
                        />
                        {/* アイキャッチ画像 */}
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          className={"media"}
                          height="140"
                          image={
                            item._embedded["wp:featuredmedia"]
                              ? item._embedded["wp:featuredmedia"][0].source_url
                              : ""
                          }
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {/* 記事タイトル */}
                            {item.title.rendered}
                          </Typography>
                          <Typography component="p">
                            {/* 記事抜粋 */}
                            {item.excerpt.rendered}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                ))
              : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Search;
