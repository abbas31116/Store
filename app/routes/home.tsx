import { useCallback, useState } from "react";
import Product from "./products";
import CustomButton1 from "~/components/CustomButton";
import { CustomInput } from "~/components/CustomInput";

export default function Home() {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState<string>();
  const image =
    "https://cdpcdn.dx1app.com/products/USA/YA/2025/MC/SUPERSPORT/YZF-R3/50/MATTE_STEALTH_BLACK/2000000003.jpg";
  const products = [
    { name: "yamaha R3", price: 1, id: 1 },
    { name: "yamaha R3", price: 2, id: 2 },
    { name: "yamaha R3", price: 3, id: 3 },
    { name: "yamaha R3", price: 4, id: 4 },
    { name: "yamaha R3", price: 5, id: 5 },
    { name: "yamaha R3", price: 6, id: 6 },
    { name: "yamaha R3", price: 7, id: 7 },
    { name: "yamaha R3", price: 8, id: 8 },
    { name: "yamaha R3", price: 9, id: 9 },
    { name: "yamaha R3", price: 10, id: 10 },
    { name: "yamaha R3", price: 11, id: 11 },
    { name: "yamaha R3", price: 12, id: 12 },
  ];
  console.log("render root");
  const handleClick = useCallback((name: string, price: number) => {
    console.log(`${name} be gheymat ${price} add to cart shod`);
  }, []);

  const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setValues(value.target.value);
  };
  // const FilterGheymat=()=>{
  // if(products.filter((item,index)=>index==values)){

  // }
  // }
  return (
    <div className="p-5 ">
      <CustomInput
        placeHolder={"Filter Gheymat Cala"}
        title={"Filter"}
        onChange={handleChange}
      />
      <div className="grid grid-cols-5  ">
        {products
          .filter((item, index) => {
            if (values) {
              return item.price <= Number(values);
            }
            return item;
          })
          .map((item, index) => {
            return (
              <div key={index}>
                <Product
                  image={image}
                  name={item.name}
                  price={item.price}
                  onclick={handleClick}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
