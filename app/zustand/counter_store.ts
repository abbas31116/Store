import {create} from 'zustand'


type CounterStore ={
    count:number ,
    increase:()=>void
    decrease:()=>void
    custom:(num:number)=>void   
}


export const useCounterStore=create<CounterStore>()((set)=>({
    count:10,
    increase:()=>set((c)=>({count:c.count+1})),
    decrease:()=>set((c)=>({count:c.count-1})),
    custom:(num:number)=>set((c)=>({count:c.count+num}))
}))





