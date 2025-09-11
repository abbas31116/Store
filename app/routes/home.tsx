import { useCallback, useEffect, useState } from "react";
import Product from "./products";
import CustomButton1 from "~/components/CustomButton";
import { CustomInput } from "~/components/CustomInput";

export default function Home() {
  const [count, setCount] = useState(0);
  const image =
    "https://cdpcdn.dx1app.com/products/USA/YA/2025/MC/SUPERSPORT/YZF-R3/50/MATTE_STEALTH_BLACK/2000000003.jpg";
  const [products, setProducts] = useState([
    { name: "yamaha R3", price: 1, id: 1, stock: "existing" },
    { name: "yamaha R3", price: 2, id: 2, stock: "existing" },
    { name: "yamaha R3", price: 3, id: 3, stock: "existing" },
    { name: "yamaha R3", price: 4, id: 4, stock: "existing" },
    { name: "yamaha R3", price: 5, id: 5, stock: "existing" },
    { name: "yamaha R3", price: 6, id: 6, stock: "existing" },
    { name: "yamaha R3", price: 7, id: 7, stock: "NonExisting" },
    { name: "yamaha R3", price: 8, id: 8, stock: "NonExisting" },
    { name: "yamaha R3", price: 9, id: 9, stock: "NonExisting" },
    { name: "yamaha R3", price: 10, id: 10, stock: "NonExisting" },
    { name: "yamaha R3", price: 11, id: 11, stock: "NonExisting" },
    { name: "yamaha R3", price: 12, id: 12, stock: "NonExisting" },
  ]);
  const [temp, settemp] = useState<any>([]);

  console.log("render root");
  const handleClick = useCallback((name: string, price: number) => {
    console.log(`${name} be gheymat ${price} add to cart shod`);
  }, []);

  const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    if (value.target.value) {
      setProducts(
        temp.filter((item: any) => {
          return item.price <= parseInt(value.target.value);
        })
      );
    } else {
      setProducts(temp);
    }
  };

  useEffect(() => {
    settemp(products);
  }, []);

  const handleExist = () => {
    setProducts(
      temp.filter((item: any) => {
        return item.stock === "existing";
      })
    );
  };
  return (
    <div className="p-5 ">
      <div className="flex items-center gap-4">
        <CustomInput
          placeHolder={"Filter Gheymat Cala"}
          title={"Filter"}
          onChange={handleChange}
        />
        <CustomButton1 title="exist" onClick={handleExist} />
      </div>
      <div className="grid grid-cols-5  ">
        {products.map((item, index) => {
          return (
            <div key={index}>
              <Product
                exist={item.stock}
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
