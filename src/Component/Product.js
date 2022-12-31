import { Link } from "react-router-dom";
const Product = ({ image, id, firsttext, rate, price }) => {
  return (
    <div key={id} className="checked">
      <Link to={`/product/${id}`}>
        <img className="medium" src={image} alt={firsttext} />
      </Link>
      <div className="card-body">
        <Link to="/product">
          <h2>{firsttext}</h2>
        </Link>
        <h4>{rate}</h4>
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export default Product;
