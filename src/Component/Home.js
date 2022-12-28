import { Link } from "react-router-dom";
import data from "./data";
import "./Home.css";
const Home = () => {
  return (
    <div className="row center">
      <div className="card">
        <div className="cards">
          {/* Map section */}
          {data.map(({ id, image, firsttext, rate, price }) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
