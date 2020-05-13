<<<<<<< HEAD
<<<<<<< HEAD
/* import React from "react";
=======
import React from "react";
import Test from "./qr";
>>>>>>> 3979530e7357e526c6088ff51373c7e8af55a93e

function App() {
  return <div className="App"></div>;
}

export default App;
 */

import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Auth from "./components/layout/Auth";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Auth />
      </div>
    );
  }
=======
import React from "react";

function App() {
  return <div className="App">He World</div>;
>>>>>>> parent of a4996bb... QR embedded
}

export default App;
