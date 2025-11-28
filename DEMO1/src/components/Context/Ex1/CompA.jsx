import CompB from "./CompB";

function CompA({ fname }) {
  return (
    <>
      <CompB fname={fname} />
    </>
  );
}
export default CompA;