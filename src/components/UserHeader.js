import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.user) {
      return null;
    }

    return <div className="header">{this.props.user.name}</div>;
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps)(UserHeader);
