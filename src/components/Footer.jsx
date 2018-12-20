import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
//css
import { cssFooter, cssCopyRights } from "./footer.css";

class Footer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className={cssFooter}>
          <dl>
            <dt>スキルから探す</dt>
            {this.props.wpSkills.data.map(element => {
              return (
                <dd>
                  <Link to={`/category/skill/${element.id}`}>
                    {element.name}
                  </Link>
                </dd>
              );
            })}
          </dl>
          <dl>
            <dt>地域から探す</dt>
            {this.props.wpCategories.data.map(element => {
              return (
                <dd>
                  <Link to={`/category/tokyo/${element.id}`}>
                    {element.name}
                  </Link>
                </dd>
              );
            })}
          </dl>
          <dl>
            <dt>職種から探す</dt>
            {this.props.wpJobs.data.map(element => {
              return (
                <dd>
                  <Link to={`/category/job/${element.id}`}>{element.name}</Link>
                </dd>
              );
            })}
          </dl>
          <dl>
            <dt>静的画面へのリンク一覧</dt>
            <dd>ああああ</dd>
            <dd>ああああ</dd>
            <dd>ああああ</dd>
          </dl>
        </div>
        <div className={cssCopyRights}>© 2019 Acweb All rights reserved.</div>
      </div>
    );
  }
}
export default Footer;
