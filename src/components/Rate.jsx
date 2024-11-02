import "./Rate.css";

const Rate = (props) => {
  return (
    <div style={{ width: props.width }} className="rate">
      {props.number}
    </div>
  );
};

export default Rate;
