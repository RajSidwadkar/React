import { data, data1 } from "./Parent";
import { useContext } from "react";

function CompC() {
    const firstName = useContext(data)
    const lastName = useContext(data1)
  return (
    <>
      {/* <data.Consumer>
        {(fname) => {
          return (
            <data1.Consumer>
              {(lname) => {
                return (
                  <div>
                    My name is {fname} {lname}
                  </div>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer> */}

      <div>My name is {firstName} {lastName} !</div>

    </>
  );

  




}

export default CompC;
