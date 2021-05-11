import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import requests from "./requests";
import Results from "./Results";

function App() {
    const [selectedOption, setSelectedOption] = useState
      (requests.fetchTrending);

  return (
    <div className="app">
     {/* header*/}

      <Header />

      {/*Nav bar*/}

      <Nav setSelectedOption={setSelectedOption} />

      {/* Result*/}

      <Results selectedOption={selectedOption}/>

    </div>
  );
}

export default App;

//const Sidebar = () => {
  return (
    <aside id='sidebar'>
      sidebar
    </aside>
  )
}

