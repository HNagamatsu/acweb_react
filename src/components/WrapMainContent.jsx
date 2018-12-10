import React, { Component } from "react";
import Header from "components/Header";

const WrapMainContent = (WrappedComponent, options = {}) => {
  const HOC = class extends React.Component {
    render() {
      return (
        <div>
          <Header {...this.props} />
          aaa
        </div>
      );
    }
  };
};

export default WrapMainContent;
