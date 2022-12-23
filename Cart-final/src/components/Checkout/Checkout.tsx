import { useContext } from "react";
import {
  Box,
  ColumnName,
  Label,
  ListFooter,
  ListHeader,
  ListItem,
  ListWrapper,
  RowName,
  Title,
} from ".";
import { ShopContext } from "../contexts";

export const Checkout = () => {
  const {products} = useContext(ShopContext);

  return (
    <>
      <Title>
        {products && products.length
          ? "Your Checkout"
          : "There are no products to checkout"}
      </Title>
      {products && products.length ? (
        <ListWrapper>
          <ListHeader>
            <Label></Label>
            <ColumnName>Price</ColumnName>
            <ColumnName>Quantity</ColumnName>
            <ColumnName>Total</ColumnName>
          </ListHeader>
          {products.map((data, index) => (
            <ListItem key={index}>
              <Label>
                <img src={data.imageUrl} />
                <p>{data.name}</p>
              </Label>
              <Box>{data.price}.00$</Box>
              <Box>{data.quantity}</Box>
              <Box>{data.price * data.quantity}.00$</Box>
            </ListItem>
          ))}
          <ListFooter>
            <RowName>Overall Total:</RowName>
            <Box>
              {products.reduce(
                (total, product) => (total += product.price * product.quantity),
                0
              )}
              .00$
            </Box>
          </ListFooter>
        </ListWrapper>
      ) : null}
    </>
  );
};
