import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const isExistingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (isExistingProduct) {
        state.cart = state.cart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
          //   if (item.id === action.payload.id) {
          //     return {
          //   ...item,
          //   quantity: item.quantity + 1,
          //     };
          //   } else {
          //     return item;
          //   }
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    },
    emptyCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQty,
  incrementQty,
  emptyCart,
} = CartSlice.actions;
export default CartSlice.reducer;
