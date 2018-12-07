import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const media = "wp:featuredmedia";
import {
  cssHeader,
  cssSearchButton,
  cssButton,
  cssInput,
  cssLogo
} from "./header.css";

class Header extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <AppBar position="sticky" color="white">
          <div className={cssHeader}>
            <div className={cssLogo}>ロゴ</div>

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
              <Button>詳細検索</Button>
            </div>
          </div>
        </AppBar>
        <SwipeableDrawer anchor="top" open={true}>
          <Paper
            style={{
              margin: "30px 30px 20px 30px"
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={5}>あああ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map(row => {
                return (
                  <TableRow className={classes.row} key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.calories}</TableCell>
                    <TableCell numeric>{row.fat}</TableCell>
                    <TableCell numeric>{row.carbs}</TableCell>
                    <TableCell numeric>{row.protein}</TableCell>
                  </TableRow>
                );
              })} */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    スキル
                  </TableCell>
                  <TableCell numeric>aaaaa</TableCell>
                  <TableCell numeric>aaaa</TableCell>
                  <TableCell numeric>aaa</TableCell>
                  <TableCell numeric>aaa</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    地域
                  </TableCell>
                  <TableCell numeric>aaaaa</TableCell>
                  <TableCell numeric>aaaa</TableCell>
                  <TableCell numeric>aaa</TableCell>
                  <TableCell numeric>aaa</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    単価
                  </TableCell>
                  <TableCell numeric>aaaaa</TableCell>
                  <TableCell numeric>aaaa</TableCell>
                  <TableCell numeric>aaa</TableCell>
                  <TableCell numeric>aaa</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    職種
                  </TableCell>
                  <TableCell numeric>aaaaa</TableCell>
                  <TableCell numeric>aaaa</TableCell>
                  <TableCell numeric>aaa</TableCell>
                  <TableCell numeric>aaa</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <div className={cssHeader}>
            <div className={cssButton}>
              <Button>閉じる</Button>
            </div>
            <div className={cssSearchButton}>
              <Button variant="contained" color="secondary">
                検索
                <SearchIcon />
              </Button>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}
export default Header;
