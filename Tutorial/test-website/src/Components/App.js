import React from "react";
import Chart from "./Chart";

const App = () => {
  return (
    <div className="container font-monospace">
      <div className="p-5 m-5"></div>
      <div className="p-md-5 m-md-5"></div>
      <div className="p-md-5 m-md-5">
        <div className="row">
          <span className="text-center display-5 text-white">
            Welcome to testing enviroment
          </span>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default App;
