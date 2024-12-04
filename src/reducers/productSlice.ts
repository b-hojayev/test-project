import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Product } from "../utils/getProducts";

export interface ProductDetails {
  id: string;
  alt_description: string;
  isLiked: boolean;
  likes: number;
  created_at: string;
  urls: {
    regular: string;
  };
}

export interface ProductState {
  products: ProductDetails[];
}

const initialState: ProductState = { products: [] };

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = [...state.products, ...action.payload];
    },
    toggleLikes: (state, action: PayloadAction<string>) => {
      const { payload: productId } = action;
      const product = state.products.find(
        (product) => product.id === productId
      );
      if (!product) {
        console.log("product not found");
        return;
      }

      if (product.isLiked) {
        product.isLiked = false;
        product.likes -= 1;
      } else {
        product.isLiked = true;
        product.likes += 1;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const { payload: productId } = action;
      const newProducts = state.products.filter(
        (product) => product.id !== productId
      );
      state.products = newProducts;
    },
  },
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectLikedProducts = (state: RootState) =>
  state.products.products.filter((product) => product.isLiked);

export const { addProducts, toggleLikes, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
