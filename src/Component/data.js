import product1 from "../images/d1.jpg";
import Slim from "../images/amazon1.webp";
import Iniski from "../images/amazon2.webp";
import Oldschool from "../images/amazon3.webp";
import Vintage from "../images/amazon4.webp";
import scope from "../images/amazon5.webp";
const data = [
  {
    id: 1,
    image: product1,
    firsttext: "Nike Slim Shirts",
    rate: [
      <div className="rating">
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </span>
      </div>,
    ],
    price: [<div className="price">$170</div>],
  },
  {
    id: 2,
    image: Slim,
    firsttext: "Slim Shady",
    rate: [
      <div className="rating">
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </span>
      </div>,
    ],
    price: [<div className="price">$120</div>],
  },
  {
    id: 3,
    image: Iniski,
    firsttext: "Iniski Designs",
    rate: [
      <div className="rating">
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </span>
      </div>,
    ],
    price: [<div className="price">$120</div>],
  },
  {
    id: 4,
    image: Oldschool,
    firsttext: "Old School boy",
    rate: [
      <div className="rating">
        <span>
          <i class="fa-solid fa-star"></i>

          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </span>
      </div>,
    ],
    price: [<div className="price">$100</div>],
  },
  {
    id: 5,
    image: Vintage,
    firsttext: "Vintage Designers",
    rate: [
      <div className="rating">
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </span>
      </div>,
    ],
    price: [<div className="price">$200</div>],
  },
  {
    id: 6,
    image: scope,
    firsttext: "Skeptical clothes",
    rate: [
      <div className="rating">
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </span>
      </div>,
    ],
    price: [<div className="price">$40</div>],
  },
];
export default data;
