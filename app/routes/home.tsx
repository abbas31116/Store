import { useReducer } from "react"
import { cartReducer, type PruductType } from "./reducer";
import CustomButton1 from "~/components/CustomButton";
const produts: PruductType[] = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

export default function Home() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const produts: PruductType[] = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];

  return (
    <div className="p-10">
      <h1>Products </h1>
      <div className="grid grid-cols-3">
        {produts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button
              className="bg-gray-200 rounded-md p-3"
              onClick={() => dispatch({ type: "add", payload: product })}
            >
              add product
            </button>

          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <h1 className="my-6 font-black text-2xl">Cart</h1>
        <CustomButton1
          title="clear"
          onClick={() => dispatch({ type: "clear" })}
        />
      </div>
      {state.items.length === 0 && <h2>Cart is empty</h2>}
      {state.items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price * item.quantity}</p>
            <p>qyantity:{item.quantity}</p>
            <button
              className="bg-gray-200 rounded-md p-3"
              onClick={() => dispatch({ type: "remove", payload: item.id })}
            >
              remove product
            </button>
           <CustomButton1 title="-1" variant="secondary" onClick={()=>dispatch({type:"-1",payload:item})}/>
          </div>
        );
      })}
    </div>
  );
}