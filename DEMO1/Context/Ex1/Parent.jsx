import React from "react";
import CompA from "./CompA";

//create Context
const data = React.createContext();
const data1 = React.createContext();

function Parent() {
  let fname = "Onkar";
  let lname = 'Bhawar'
  return (
    <>
    {/* //provide context */}
      <data.Provider value={fname}>
        <data1.Provider value={lname}>
          <CompA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default Parent;
export {data, data1}