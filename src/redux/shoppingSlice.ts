import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface StoreState {
  productData: Products[];
  userInfo: null | string;
  orderData: [];
  notes: null | string;
  modal: null | string;
}

const initialState: StoreState = {
  productData: [],
  userInfo: null,
  orderData: [],
  notes: null,
  modal: null,
};

type Note = {
  id: string;
  heading: string;
  content: string;
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Products) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Products) => item.id === action.payload.id
      );
      existingProduct && existingProduct.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Products) => item.id === action.payload.id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData = [];
    },

    // addNote: (state, action: PayloadAction<Note>) => {
    //   const note = action.payload;
    //   state.notes.push(note);
    // },
    // removeNote: (state, action: PayloadAction<string>) => {
    //   const id = action.payload;
    //   const notes = state.notes.filter((note) => note.id !== id);
    //   state.notes = notes;
    // },
    removeNote: (state) => {
      state.notes = null;
    },
    updateNote: (state, action) => {
      state.notes = action.payload;
    },
    removeModal: (state) => {
      state.modal = null;
    },
    updateModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});
// actions
// selectors
export const {
  updateNote,
  removeModal,
  updateModal,
  removeNote,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  deleteUser,
  saveOrder,
  resetOrder,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
