const INIT_STATE = {
  cart: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Checking if the item already exists in the cart and get its index
      const itemIndex = state.cart.findIndex((item) => {
        return item.title === action.payload.title;
      });
      if (itemIndex >= 0) {
        // If item exists
        state.cart[itemIndex].quantity += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        // If item doesnt exists then add it
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cart: [...state.cart, temp],
        };
      }

    case "DELETE_FROM_CART":
      const data = state.cart.filter((item) => {
        return item.title !== action.payload;
      });
      return {
        ...state,
        cart: data,
      };

    case "REMOVE_INDIVIDUAL_ITEM_FROM_CART":
      const itemIndexDec = state.cart.findIndex((item) => {
        return item.title === action.payload.title;
      });

      if (state.cart[itemIndexDec].quantity >= 1) {
        state.cart[itemIndexDec].quantity -= 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }

    default:
      return state;
  }
};
