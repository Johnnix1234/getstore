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
    rate: 3.5,
    Numreviews: "15 reviews",
    price: [<div className="price">$170</div>],
  },
  {
    id: 2,
    image: Slim,
    firsttext: "Slim Shady",
    rate: 3.5,
    Numreviews: "12 reviews",
    price: [<div className="price">$120</div>],
  },
  {
    id: 3,
    image: Iniski,
    firsttext: "Iniski Designs",
    rate: 2.5,
    Numreviews: "12 reviews",
    price: [<div className="price">$120</div>],
  },
  {
    id: 4,
    image: Oldschool,
    firsttext: "Old School boy",
    rate: 2.5,
    Numreviews: "8 reviews",
    price: [<div className="price">$100</div>],
  },
  {
    id: 5,
    image: Vintage,
    firsttext: "Vintage Designers",
    rate: 6.5,
    Numreviews: "20 reviews",
    price: [<div className="price">$200</div>],
  },
  {
    id: 6,
    image: scope,
    firsttext: "Skeptical clothes",
    rate: 1.5,
    Numreviews: "3 reviews",
    price: [<div className="price">$40</div>],
  },
];
export default data;
