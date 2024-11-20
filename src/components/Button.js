function Button(props) {
  const { color, label = "Click", size, onClick } = props;
  let btnClass = "btn";
  if (color === "blue") {
    btnClass += " btn-primary";
  }
  return (
    <button className={btnClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
