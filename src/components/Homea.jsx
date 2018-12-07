import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const media = "wp:featuredmedia";

//components
import Header from "components/Header";
import SideBar from "components/SideBar";

//css
import { header } from "./home.css";

class Home extends React.Component {
  getSnapshotBeforeUpdate(props) {
    console.log(props);
  }
  componentDidMount() {
    this.props.wp_getList();
    this.props.wp_getCategories();
    this.props.wp_getSkills();
  }
  state = {
    isOpenArea: false,
    isOpenTokyo: false,
    isOpenSkill: false
  };
  toggleAreaAcordion = () => {
    this.setState(state => ({ isOpenArea: !state.isOpenArea }));
  };
  toggleTokyoAcordion = () => {
    this.setState(state => ({ isOpenTokyo: !state.isOpenTokyo }));
  };
  toggleSkillAcordion = () => {
    this.setState(state => ({ isOpenSkill: !state.isOpenSkill }));
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <header className={header}>
          <nav>
            <ul>
              <li>TOP</li>
              <li>メリット</li>
              <li>案件</li>
              <li>企業</li>
              <li>お問い合わせ</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
export default Home;
