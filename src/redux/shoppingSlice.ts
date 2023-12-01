import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface StoreState {
  productData: Products[];
  userInfo: null | string;
  supplierOrder: null | string;
  referralInfo: null | string;
  orderData: [];
  notes: null | string;
  noteBuyer: null | string;
  modal: null | string;
  menu: null | string;
}

const initialState: StoreState = {
  productData: [],
  userInfo: null,
  supplierOrder: null,
  referralInfo: null,
  orderData: [],
  notes: null,
  noteBuyer: null,
  modal: null,
  menu: null,
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
    // addNote: (state, action) => {
    //   const existingProduct = state.productData.find(
    //     (item: Products) => item.id === action.payload.id
    //   );
    //   existingProduct && existingProduct.noteBuyer === "2";
    // },
    addNote: (state, action) => {
      const { id, value } = action.payload;
      const existingProduct = state.productData.find(
        (item: Products) => item.id === action.payload.id
      );
      existingProduct && (existingProduct.noteBuyer = value);
    },

    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },
    addReferral: (state, action) => {
      state.referralInfo = action.payload;
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    checkSupplierOrder: (state, action) => {
      state.supplierOrder = action.payload;
    },
    delSupplierOrder: (state, action) => {
      state.supplierOrder = null;
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
  addReferral,
  deleteUser,
  saveOrder,
  resetOrder,
  checkSupplierOrder,
  delSupplierOrder,
  addNote,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
