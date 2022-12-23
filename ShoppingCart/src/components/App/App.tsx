import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";
import { Wishlist } from "../Wishlist";
import { ClothingShopContext } from "../useContext";
import { useReducer } from "react";
import { add, addWish, initialState, remove, shopReducer, update } from "../useReducer";
import { Product } from "../../models";
import { Item } from "../../models/Items";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  const addWishlist = (product: Product)=>{
    const addWishlist = state.products.concat(product);
    dispatch(add(addWishlist));
  }
  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch(add(updatedCart));
  };

  const addList = (item: Item) =>{
     const updatedCart = state.items.concat(item);
     dispatch(addWish(updatedCart));
  }

  const removeList = (item: Item) => {
    const updatedCart = state.items.filter(
      (currentItem: Item) => currentItem.name !== item.name);
    }
  }

  const removeItem = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(remove(updatedCart));
  };

  const updatePrice = (products: [] = []) => {
    let total = 0;
    products.forEach((product: { price: number; }) => (total = total + product.price));

    dispatch(update(total));
  };
  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeItem
  }
  return (
    <ClothingShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wish list</Link>
          <Link to="/checkout">Check Out</Link>
          <Route path="/checkout" element={<Checkout />} />
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist/>}/>
         
        </Routes>
      </Wrapper>
    </ClothingShopContext.Provider>
  );
};