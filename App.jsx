import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return(
    <div className="App">
      <Header />
      <Navigation/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App;