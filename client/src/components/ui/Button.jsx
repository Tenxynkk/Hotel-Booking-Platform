function Button({ text, onClick, type = "button" }) {
  return (
    <button
      className="ui-button"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;