import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="Arslan"
          mobile="7189411673"
          work="81676589273"
          email="arslan@aol.com"
        />
        <ContactCard
          name="Bob"
          mobile="7185670525"
          work="7182247832"
          email="Bob@aol.com"
        />
        <ContactCard
          name="Joe"
          mobile="3475555555"
          work="3466897622"
          email="joe@aol.com"
        />
      </>
    );
  }
}

export default App;