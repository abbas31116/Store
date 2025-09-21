import { create } from "zustand";

type Userstore={
    name:string;
    last_name:string;
    phone:string;
    cart_count:number;
    setName:(newName:string)=>void
    setLast:(newLast:string)=>void
    setPhone:(newPhone:string)=>void
    setcart_count:(newCart:number)=>void
};
export const useUserStore=create<Userstore>()((set)=>({
    name:"abbas",
    last_name:"dadad",
    phone:"1321314656",
    cart_count:100,
    setName:(newName:string)=>set(()=>({name:newName})),
    setLast:(newLast:string)=>set(()=>({last_name:newLast})),
    setPhone:(newPhone:string)=>set(()=>({phone:newPhone})),
    setcart_count:(newCart:number)=>set(()=>({cart_count:newCart})),
}))