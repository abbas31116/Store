export type PruductType = {
  id: number;
  name: string;
  price: number;
};
type CartItem = PruductType & {
  quantity: number;
};
type CartState = {
  items: CartItem[];
};
type CartAction =
  | { type: "add"; payload: PruductType }
  | { type: "remove"; payload: number }
  | { type: "-1"; payload: PruductType }
  | { type: "clear" };
export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "add":
      const exist = state.items.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          items: state.items.map((item) =>
            item.id == action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "-1":
      const exist2 = state.items.find(item => item.id === action.payload.id);
      if (exist2) {
        return {
          items: state.items.map(item =>
            item.id === action.payload.id
              ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              }
              : item
          ),
        };
      } else {
        return {
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "remove":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "clear":
      return {
        items: [],
      };
    default:
      return state;
  }
};
