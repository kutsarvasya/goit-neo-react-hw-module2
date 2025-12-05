function Options({ children, handleClick }) {
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default Options;
