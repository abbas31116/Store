import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer, type Post } from "./reducer";
import { AccContext } from "./providers/AccountProviders";
import { CustomInput } from "~/components/CustomInput";
import CustomButton1 from "~/components/CustomButton";
import { useCounterStore } from "~/zustand/counter_store";
import { useUserStore } from "~/zustand/user_store";
import { useFormik } from "formik";
import { UserCartStore } from "~/zustand/cart_store";

export default function Home() {
  const {
    add,
    cart,
    clear_cart,
    delete: delete_item,
    set_mulitple_cart,
    update,
  } = UserCartStore();
  return (
    <div className="p-10 space-y-6">
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>q:{item.quantity}</p>
            <p>p:{item.price}</p>
            <p>tp:{item.total_price}</p>
            <CustomButton1
              onClick={() => delete_item(item.id)}
              title="delete"
            />

            <CustomButton1
              onClick={() =>
                update(item.id, {
                  quantity: (item.quantity ?? 0) + 1,
                  total_price: item.price * ((item.quantity ?? 0) + 1),
                })
              }
              title="+1"
            />
          </li>
        ))}
      </ul>
      <CustomButton1
        onClick={() =>
          add({
            id: Date.now(),
            name: "new prdouct" + Date.now(),
            price: 100,
            quantity: 1,
            total_price: 100,
          })
        }
        title="add"
      />
    </div>
  );
}
