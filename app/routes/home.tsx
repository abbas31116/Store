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
import { useQuery } from "@tanstack/react-query";

interface IPost {
  title: string;
  id: number;
  body: string;
  userid: number;
}

const fetchPost = async (): Promise<IPost[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/postss");
  if (!res.ok) {
    throw new Error("network error");
  }
  return res.json();
};

export default function Home() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["POST"],
    queryFn: fetchPost,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });
  return isLoading ? (
    <div>loading</div>
  ) : isError ? (
    <div>{error.message}</div>
  ) : (
    <div>
      {data?.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
}
