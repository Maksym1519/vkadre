import "./Button.scss";

const Button = (props: any) => {
  const styled = {
    maxWidth: props.maxWidth,
  };
  return (
    <button type="button" className="button" style={styled}>
      {props.text}
    </button>
  );
};
export default Button;
