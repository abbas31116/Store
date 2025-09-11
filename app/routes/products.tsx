import { memo } from "react"
import CustomButton1 from "~/components/CustomButton"

interface IProducts{
    image:string,
    name:string
    price:number,
    onclick:(name:string,price:number)=>void
}
function Product({image,name,price,onclick}:IProducts) {
          return (
            <div className="border rounded-2xl p-3 m-3 place-content-center place-items-center">
              <img src={image} alt="s" />
              <p>
                {name}
              </p>
              <p>{price}</p>
              <CustomButton1 onClick={()=>onclick(name,price)} title="add to cart"/>
            </div>
          )
        }
export default memo(Product)