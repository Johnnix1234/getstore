const Rating = ({ rate, Numreviews }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            rate >= 1
              ? "fa-solid fa-star"
              : rate <= 1.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-solid fa-star"
          }
        ></i>
        <i
          className={
            rate >= 2
              ? "fa-solid fa-star"
              : rate >= 1.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
        <i
          className={
            rate >= 3
              ? "fa-solid fa-star"
              : rate >= 2.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
        <i
          className={
            rate >= 4
              ? "fa-solid fa-star"
              : rate >= 3.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
        <i
          className={
            rate === 5
              ? "fa-solid fa-star"
              : rate > 4.5
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>{Numreviews}</span>
    </div>
  );
};

export default Rating;
