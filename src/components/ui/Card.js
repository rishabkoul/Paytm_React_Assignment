import classes from "./Card.module.css";

const Card = ({ children, className }) => {
  return (
    <div className={classes.card} style={{ backgroundColor: className }}>
      {children}
    </div>
  );
};
export default Card;
