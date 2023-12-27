import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder(props) {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      const data = await response.json();
      setOrderData(data.orderData);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {orderData && orderData.order_data
            ? orderData.order_data
                .slice(0)
                .reverse()
                .map((item) => (
                  <div key={item.Order_date}>
                    {item.Order_date ? (
                      <div className="m-auto mt-5">
                        {item.Order_date}
                        <hr />
                      </div>
                    ) : (
                      item.map((arrayData) => (
                        <div
                          key={arrayData.id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <div
                            className="card mt-3"
                            style={{ width: "16rem", maxHeight: "360px" }}
                          >
                            {/* Include the image rendering logic here */}
                            <img
                              src={arrayData.imgSrc}
                              className="card-img-top"
                              alt="..."
                              style={{ height: "120px", objectFit: "fill" }}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{arrayData.name}</h5>
                              <div
                                className="container w-100 p-0"
                                style={{ height: "38px" }}
                              >
                                <span className="m-1">{arrayData.qty}</span>
                                <span className="m-1">{arrayData.size}</span>
                                <span className="m-1">{item.Order_date}</span>
                                <div className="d-inline ms-2 h-100 w-20 fs-5">
                                  ₹{arrayData.price}/-
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                ))
            : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
}
