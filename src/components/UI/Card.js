import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>; // this code line allow us to wrap however we want the wrap
}

export default Card;
