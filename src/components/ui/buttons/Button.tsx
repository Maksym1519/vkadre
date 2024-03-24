import "./Button.scss";

const Button = (props: any) => {
  const styled = {
    maxWidth: props.maxWidth,
    width: props.width
  };
  return (
    <button type={props.type} className="button" style={styled} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
export default Button;
