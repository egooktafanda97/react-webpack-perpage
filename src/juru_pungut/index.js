import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Rute from "./Router/Router";
// import { config } from "./Constant/config";

// window.base_url = config.base_url;

class App extends Component {
	render() {
		return <div>ok</div>;
	}
}

render(<App />, document.getElementById("charts"));
