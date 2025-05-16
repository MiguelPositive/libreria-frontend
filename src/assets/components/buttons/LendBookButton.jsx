import Button from "./Button";

const LendBookButton = ({ available }) => {
  return (
    <>
      {available ? (
        <Button
          color={"bg-green-700"}
          text={"Prestar"}
          onClick={() => {
            alert("algo");
          }}
        />
      ) : null}
    </>
  );
};

export default LendBookButton;
