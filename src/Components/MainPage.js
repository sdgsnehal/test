import React from "react";
import store from "../Store";

class MainPage extends React.Component {
  render() {
    return <div>You are logged in {store.getState().addUser.username}!</div>;
  }
}

export default MainPage;
