import { useContext } from 'react';
import { Product } from '../../models';
import { ProductsWrapper, Title } from '../Cart';
import { ProductCard } from '../ProductCard';
import { Products } from '../Products';
import { ClothingShopContext } from '../useContext';

export * from './Wishlist.styled';
export * from './Wishlist';


export const Wishlist = () => {
    const {products} = useContext(ClothingShopContext);

    return (
        <>
        <Title>My Wish List</Title>
        <ProductsWrapper>
            {products.map((product: Product, index)=>(
                <ProductCard {...product} key ={index}/>
            ))}
        </ProductsWrapper>
        </>
    );
};