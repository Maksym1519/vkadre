import "./Button.scss";

const Button = (props: any) => {
  const styled = {
    maxWidth: props.maxWidth,
  };
  return (
    <div className="button" style={styled}>
      {props.text}
    </div>
  );
};
export default Button;
