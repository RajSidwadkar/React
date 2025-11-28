import CompA from "./CompA";
import React from "react";

const data = React.createContext();
const data1 = React.createContext();

function Parent() {
    let fname = "Raj";
    let lname = "Sidwadkar";
  return (
    <>
      <data.Provider value={fname}>
        <data1.Provider value={lname}>
          <CompA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}
export default Parent;
export { data, data1 };