import React from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";

require("../style.css");

class FormDialog extends React.Component {
  getSnapshotBeforeUpdate(props) {}
  componentDidMount() {}

  render() {
    return (
      <Dialog
        open={this.props.isOpenDialog}
        onClose={this.props.handleCloseDialog}
      >
        <Paper>
          <DialogTitle>プロフィール詳細を送信する</DialogTitle>
          <form action="">
            <dl>
              <dt>フリガナ</dt>
              <dd>
                <input type="text" />
              </dd>
              <dt>名前</dt>
              <dd>
                <input type="text" />
              </dd>
              <dt>メールアドレス</dt>
              <dd>
                <input type="text" />
              </dd>
              <dt>電話番号</dt>
              <dd>
                <input type="text" />
              </dd>
              <dt>スキルシート</dt>
              <dd>
                <input type="file" name="" id="" />
              </dd>
            </dl>
          </form>
        </Paper>
      </Dialog>
    );
  }
}
export default hot(module)(FormDialog);
