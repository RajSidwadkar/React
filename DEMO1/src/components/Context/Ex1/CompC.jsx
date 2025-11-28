import { data , data1} from "./Parent";
import { useContext } from "react";

function CompC( ) {
  const firstname = useContext(data);
  const lastname = useContext(data1);
  return (
    <>
      {/* <data.Consumer>
        {(fname) => (
          <data1.Consumer>
            {(lname) => (
              <p>
                {" "}
                <b>My Name is</b> <i>{fname} {lname}</i>
              </p>
            )}
          </data1.Consumer>
        )}
      </data.Consumer> */}
      <div> <b>My Name is</b><i> {firstname} {lastname} </i>   </div>

    </>
  );
}
export default CompC;
