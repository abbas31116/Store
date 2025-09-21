import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartItemType {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total_price: number;
}

interface ICartStore {
  cart: CartItemType[];
  add: (item: CartItemType) => void;
  update: (id: number, update_item: Partial<CartItemType>) => void;
  delete: (id: number) => void;
  clear_cart: () => void;
  set_mulitple_cart: (cart: CartItemType[]) => void;
}

export const UserCartStore = create<ICartStore>()(
  persist(
    (set) => ({
      cart: [],
      add: (item: CartItemType) =>
        set((state) => ({ cart: [...state.cart, item] })),
      update: (id: number, updated_item: Partial<CartItemType>) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, ...updated_item } : item
          ),
        })),
      delete: (id: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      clear_cart: () => set({ cart: [] }),
      set_mulitple_cart: (cart: CartItemType[]) => set({ cart }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
