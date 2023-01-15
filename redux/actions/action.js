// Adding the product to the cart
export const ADD = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

// Removing the product from the cart
export const DELETE = (title) => {
  return {
    type: "DELETE_FROM_CART",
    payload: title,
  };
};

// Removing individual items from cart(decrementing quant)
export const REMOVE = (item) => {
  return {
    type: "REMOVE_INDIVIDUAL_ITEM_FROM_CART",
    payload: item,
  };
};
