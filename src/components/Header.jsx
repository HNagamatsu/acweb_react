import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const media = "wp:featuredmedia";
import {
  cssHeader,
  cssSearchButton,
  cssButton,
  cssInput,
  cssLogo,
  cssSearchGroupe,
  cssSearchTitle,
  cssSearchData,
  cssLabel,
  cssSearchInput,
  cssSearchInputLabel,
  cssDrawer,
  cssSearchButtons
} from "./header.css";

class Header extends Component {
  state = {
    isOpenDrawer: false
  };
  toggleDrawer = () => {
    this.setState(state => ({ isOpenDrawer: !state.isOpenDrawer }));
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <AppBar position="sticky" color="white">
          <div className={cssHeader}>
            <div className={cssLogo}>
              <Link to="/">ロゴ</Link>
            </div>

            <TextField
              defaultValue="Bare"
              margin="normal"
              variant="outlined"
              className={cssInput}
            />
            <div className={cssSearchButton}>
              <Button variant="contained" color="secondary">
                検索
                <SearchIcon />
              </Button>
            </div>
            <div className={cssButton}>
              <Button onClick={this.toggleDrawer}>詳細検索</Button>
            </div>
          </div>
        </AppBar>
        <SwipeableDrawer anchor="top" open={this.state.isOpenDrawer}>
          <div className={cssDrawer}>
            <div className={cssSearchGroupe}>
              <div className={cssSearchTitle}>地域</div>
              <div className={cssSearchData}>
                <FormGroup row>
                  {this.props.wpCategories.data.map(element => {
                    return (
                      <FormControlLabel
                        control={
                          <Checkbox checked={true} value={element.name} />
                        }
                        className={cssLabel}
                        label={element.name}
                      />
                    );
                  })}
                </FormGroup>
              </div>
            </div>
            <Divider />
            <div className={cssSearchGroupe}>
              <div className={cssSearchTitle}>スキル</div>
              <div className={cssSearchData}>
                <FormGroup
                  row
                  style={{
                    width: "100%"
                  }}
                >
                  {this.props.wpSkills.data.map(element => {
                    return (
                      <FormControlLabel
                        control={
                          <Checkbox checked={true} value={element.name} />
                        }
                        className={cssLabel}
                        label={element.name}
                      />
                    );
                  })}
                </FormGroup>
              </div>
            </div>
            <Divider />
            <div className={cssSearchGroupe}>
              <div className={cssSearchTitle}>単価</div>
              <div className={cssSearchInput}>
                <TextField
                  defaultValue="Bare"
                  margin="normal"
                  variant="outlined"
                  className={cssInput}
                />
                <div className={cssSearchInputLabel}>万円以上</div>
              </div>
            </div>
            <Divider />
            <div className={cssSearchGroupe}>
              <div className={cssSearchTitle}>職種</div>
              <div className={cssSearchData}>
                <FormGroup row>
                  {this.props.wpJobs.data.map(element => {
                    return (
                      <FormControlLabel
                        control={
                          <Checkbox checked={true} value={element.name} />
                        }
                        label={element.name}
                      />
                    );
                  })}
                </FormGroup>
              </div>
            </div>
            <Divider />
            <div className={cssSearchButtons}>
              <div className={cssButton}>
                <Button onClick={this.toggleDrawer}>閉じる</Button>
              </div>
              <div className={cssSearchButton}>
                <Button variant="contained" color="secondary">
                  検索
                  <SearchIcon />
                </Button>
              </div>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}
export default Header;
