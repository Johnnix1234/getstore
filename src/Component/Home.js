import data from "./data";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="row center">
      <div className="card">
        <div className="cards">
          {/* Map section */}
          {data.map(({ id, image, firsttext, rate, price }) => {
            return (
              <Product
                id={id}
                image={image}
                firsttext={firsttext}
                rate={rate}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
