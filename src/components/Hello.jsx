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

class Hello extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1>HELL11O</h1>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              aa
            </Typography>
            <Button color="inherit">Hello World</Button>
            <IconButton>aaa</IconButton>
          </Toolbar>
        </AppBar>
        <Link to={`/hello2`}>hello2</Link>
        <button
          className="button is-primary"
          onClick={() => this.props.increments("aaaaaaaa")}
        >
          CLICKED {this.props.count} TIMES
          {this.props.text}
        </button>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}
export default Hello;
