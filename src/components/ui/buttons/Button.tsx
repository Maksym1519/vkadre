import "./Button.scss";

const Button = (props: any) => {
  const styled = {
    maxWidth: props.maxWidth,
    width: props.width
  };
  return (
    <button type="button" className="button" style={styled}>
      {props.text}
    </button>
  );
};
export default Button;
