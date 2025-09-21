import { useCallback, useEffect, useReducer, useState } from "react";
import Product from "./products";
import CustomButton1 from "~/components/CustomButton";
import { CustomInput } from "~/components/CustomInput";
import { counterReducer } from "./homee_reducer/reducer";

export default function Home() {
  // const [temp, setTemp] = useState<any>();
  // const image =
  //   "https://cdpcdn.dx1app.com/products/USA/YA/2025/MC/SUPERSPORT/YZF-R3/50/MATTE_STEALTH_BLACK/2000000003.jpg";
  // const [products, setProducts] = useState([
  //   { name: "yamaha R3", price: 1, id: 1, stock: "existing" },
  //   { name: "yamaha R3", price: 2, id: 2, stock: "existing" },
  //   { name: "yamaha R3", price: 3, id: 3, stock: "existing" },
  //   { name: "yamaha R3", price: 4, id: 4, stock: "existing" },
  //   { name: "yamaha R3", price: 5, id: 5, stock: "existing" },
  //   { name: "yamaha R3", price: 6, id: 6, stock: "existing" },
  //   { name: "yamaha R3", price: 7, id: 7, stock: "NonExisting" },
  //   { name: "yamaha R3", price: 8, id: 8, stock: "NonExisting" },
  //   { name: "yamaha R3", price: 9, id: 9, stock: "NonExisting" },
  //   { name: "yamaha R3", price: 10, id: 10, stock: "NonExisting" },
  //   { name: "yamaha R3", price: 11, id: 11, stock: "NonExisting" },
  //   { name: "yamaha R3", price: 12, id: 12, stock: "NonExisting" },
  // ]);
  // const handleClick = useCallback((name: string, price: number) => {
  //   console.log(`${name} be gheymat ${price} add to cart shod`);
  // }, []);

  // const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
  //   if (value) {
  //     setProducts(
  //       temp.filter((item: any) => {
  //         return item.price <= value.target.value;
  //       })
  //     );
  //   }
  // };

  // const handleStock = (type: string | null) => {
  //   if (type == null) {
  //     setProducts(temp);
  //   } else {
  //     setProducts(
  //       temp.filter((item: any) => {
  //         return item.stock === type;
  //       })
  //     );
  //   }
  // };

  // useEffect(() => {
  //   setTemp(products);
  // }, []);

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    // <div className="p-5 ">
    //   <CustomInput
    //     placeHolder={"Filter Gheymat Cala"}
    //     title={"Filter"}
    //     onChange={handleChange}
    //   />
    //   <CustomButton1
    //     title="all"
    //     variant="secondary"
    //     onClick={() => handleStock(null)}
    //   />
    //   <CustomButton1
    //     title="exist"
    //     variant="secondary"
    //     onClick={() => handleStock("existing")}
    //   />
    //   <CustomButton1
    //     title="non-exist"
    //     variant="secondary"
    //     onClick={() => handleStock("NonExisting")}
    //   />
    //   <div className="grid grid-cols-5  ">
    //     {products.map((item, index) => {
    //       return (
    //         <div key={index}>
    //           <Product
    //             image={image}
    //             name={item.name}
    //             price={item.price}
    //             stock={item.stock}
    //             onclick={handleClick}
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="space-y-6">
      <p>count : {state.count}</p>
      <CustomButton1
        title="increment"
        onClick={() => dispatch({ type: "increment" })}
      />
      <CustomButton1
        title="decrement"
        onClick={() => dispatch({ type: "decrement" })}
      />
      <CustomButton1
        title="reset"
        onClick={() => dispatch({ type: "reset" })}
      />
      <CustomButton1
        title="+3"
        onClick={() => dispatch({ type: "custom", payload: 3 })}
      />
    </div>
  );
}
