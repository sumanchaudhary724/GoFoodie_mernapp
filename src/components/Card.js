import React from "react";

export default function Card(props) {
  const options = props.options || {};
  const priceOptions = Object.keys(options);
  const foodItem = props.foodItem;
  const handleAddToCart = () => {};

  return (
    <div className="mt-3">
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src="https://source.unsplash.com/random/400×300/?burger"
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {priceOptions.length > 0 && (
              <select className="m-2 h-100 bg-success rounded">
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            )}

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
          <hr />
          <button
            className="btn btn-success text-black justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
