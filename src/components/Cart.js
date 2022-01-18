import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
  Container,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.price);
  });
  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img src={item.tinyImage} height={80} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.product}</div>
                <span>Price: {item.price}</span>
                <Button color="danger" onClick={() => removeItem(item)}>
                  {" "}
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {cartItem.length > 0 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Pay Here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Card is empty</h1>
      )}
    </Container>
  );
};

export default Cart;
