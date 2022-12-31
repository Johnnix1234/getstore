import { Link } from "react-router-dom";
import Rating from "./Rating";
const Product = ({ image, id, firsttext, price, rate, Numreviews }) => {
  return (
    <div key={id} className="checked">
      <Link to={`/product/${id}`}>
        <img className="medium" src={image} alt={firsttext} />
      </Link>
      <div className="card-body">
        <Link to="/product">
          <h2>{firsttext}</h2>
        </Link>

        <span>
          <h4>{<Rating rate={rate} Numreviews={Numreviews} />}</h4>
        </span>
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export default Product;
