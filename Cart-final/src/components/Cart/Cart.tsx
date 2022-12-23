import { useContext, useEffect, useState } from "react";
import { ShopContext, } from "../contexts/ShopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title, TitleContainer } from "./Cart.styled";
import { Quantity } from "../Quantity";
import { Link, Route, Routes } from "react-router-dom";
import { CheckoutButton } from "./Cart.styled";
import { Checkout } from "../Checkout";

export const Cart = () => {
  const { products } = useContext(ShopContext);
  const [total, setTotal] = useState(getTotal());

  useEffect(() => {
    setTotal(getTotal());
  }, [products]);

  function getTotal() {
    var totalCart = 0;
    products.forEach(
      (productItem) => (totalCart += productItem.price * productItem.quantity)
    );
    return totalCart;
  }

  return (
    <>
      <TitleContainer>
        <Title>Your cart total cost is {total}.00$</Title>
        {products && products.length ? <Quantity /> : null}
      </TitleContainer>      

      <ProductsWrapper>
        {products.map((productItem: Product, index) => (
          <ProductCard {...productItem} key={index} />
        ))}
      </ProductsWrapper>
      
      <Link to="/checkout" style={{ textDecoration: 'none' }}>
        <CheckoutButton>
          Check Out
        </CheckoutButton>
      </Link>

      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    </>
  );
};