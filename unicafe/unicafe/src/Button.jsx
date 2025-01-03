const Button = ({ text, onClick }) => {
  return (
    <>
      <button style={{ marginRight: "10px" }} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
