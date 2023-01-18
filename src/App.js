import React from "react";
import "./Style/App.css";
import "./Style/Footer.css";
import "./Style/CheckBoxes.css";
import "./Style/SelectProvincieMenu.css";
import "./Style/Header.css";
import "./Style/Color.css";
import "./Style/Main.css";
import "./Style/Gallery.css";
import "./Style/Contact.css";
import "./Style/Youtube.css";
// import "./Style/Sidebar.css";

import RouteList from "./components/RouteList";
import { Switch } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import Youtube from "./components/Youtube";
//
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDifficulty: true,
      showEnjoyment: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleRoute(name) {
    this.setState({ selectedStudent: name });
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Gallery />
        <Switch>
          <RouteList
            data={this.state}
            handleChange={this.handleChange}
            handleRoute={this.handleRoute}
          />
        </Switch>
        <Contact />
        <Footer />
        {/* <Youtube /> */}
      </div>
    );
  }
}

export default App;
