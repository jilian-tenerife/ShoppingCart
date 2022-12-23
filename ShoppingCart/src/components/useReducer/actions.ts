import { Product } from "../../models/Product";
import { Item } from "../../models/Items";


export enum ShopActionType {
  ADD = 'add',
  REMOVE = 'remove',
  UPDATE = 'update',
  ADDWISH = "addwish",
  REMOVEWISH = 'removeWish'
}
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: product,
  });
  export const addWish = (item: Item): ShopAction => ({
    type: ShopActionType.ADDWISH,
    payload: item,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: product,
  });
  export const removeWish = (item: Item): ShopAction => ({
    type: ShopActionType.REMOVEWISH,
    payload: item,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: total,
  });