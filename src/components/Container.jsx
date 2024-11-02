import "./Container.css";
import Heading from "./Heading";
import Rate from "./Rate";
import Star from "./Star";
import Submit from "./Submit";
import Text from "./Text";

const Container = () => {
  
  return (
    <div className="container">
      <Star />
      <Heading />
      <Text />
      <div style={{ display: "flex", marginTop: "24px", justifyContent: "space-between" }}>
        <Rate number="1" />
        <Rate number="2" />
        <Rate number="3" />
        <Rate number="4" />
        <Rate number="5" />
      </div>
      <Submit />
    </div>
  );
};

export default Container;
