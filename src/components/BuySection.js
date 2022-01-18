import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Name } from "faker2";
import { Container, Row, Col } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import CartItem from "./CartItem";

const apiKey = "";
const url = "http://myjson.dit.upm.es/api/bins/e3cr";

function BuySection({ addInCart }) {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, { header: {} });
    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      product: Name.findName(),
      price: 100,
      id: uuidv4(),
    }));
    setProduct(allProduct);
  };

  useEffect(() => fetchPhotos(), []);

  return (
    <div>
      <Container>
        <h1 className="text-success text-center"> Buy Page</h1>
        <Row>
          {product.map((prod) => (
            <Col md={4} key={product.id}>
              <CartItem product={prod} addInCart={addInCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BuySection;
