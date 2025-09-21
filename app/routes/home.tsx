import axios from "axios";
import { useContext, useEffect, useReducer, useState, } from "react";
import { initialState, reducer, type Post } from "./reducer";
import { AccContext } from "./providers/AccountProviders";
import { CustomInput } from "~/components/CustomInput";
import CustomButton1 from "~/components/CustomButton";
import { useCounterStore } from "~/zustand/counter_store";
import { useUserStore } from "~/zustand/user_store";
import { useFormik } from "formik";

export default function Home() {
  const [user,setUser]=useState({
    name:'abbas',
    lastName:'mohammadi',
    phone:'980948203948'
  })
  // const [value, setValue] = useState("")
  // const [state, dispach] = useReducer(reducer, initialState)
  // const userAccount = useContext(AccContext)
  const { count, custom, increase } = useCounterStore()
  // if (!userAccount) { return <p className="m-4">chizi naneveshti dadash</p> }

  // const { Acc, setAcc } = userAccount;
  // useEffect(() => {
  //   dispach({ type: "fech-Start" });
  //   axios
  //     .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       dispach({ type: "fech-succes", payload: res.data })
  //     })
  //     .catch((err) => {
  //       dispach({ type: "fech-err", payload: err.message })

  //     })
  // }, [])
  // if (state.loading) return (<p className="p-4">loading...</p>)
  // if (state.error) return (<p className="p-4">error:{state.error}</p>)
  const { name, last_name, phone, cart_count, setLast, setName, setPhone, setcart_count } = useUserStore()
  const formik = useFormik({
    initialValues: {
      name: name,
      last_name: last_name,
      phone: phone
    },
    onSubmit(values) {
      // setLast(values.last_name)
      // setName(values.name)
      // setPhone(values.phone)
      setUser({
        name:values.name,
        lastName:values.last_name,
        phone:user.phone      })
    },
  })
  return (
    <div className="p-10">
          <p>{user.name}-{user.lastName}-{user.phone}</p>
          <p>{name}</p>
          <p>{last_name}</p>
          <p>{phone}</p>
          <p>{cart_count}</p>
      <form onSubmit={formik.handleSubmit}>
       
          <CustomInput value={formik.values.name} placeHolder={"Abbas"} title={"name:"} name="name" onChange={formik.handleChange} />
          <CustomInput value={formik.values.last_name} placeHolder={"mohammadi"} title={"Last name:"} name="last_name" onChange={formik.handleChange} />
          <CustomInput value={formik.values.phone} placeHolder={"enter phone number"} title={"phone:"} name="phone" onChange={formik.handleChange} />
          <CustomInput placeHolder={"enter cart counter"} title={"cart count:"} />
 
        <CustomButton1 title="update" type="submit" variant="secondary" />
      </form>
      {/* <div >
        <div className="p-4">

        <CustomInput placeHolder={"taghir esm"} title={"update name"} onChange={(e) => {
          setValue(e.target.value)
        }} />
        <CustomButton1 variant="secondary" title={"update"} onClick={() => { setAcc({ ...Acc, name: value }) }} />
          <h1>{Acc.name}</h1>
          <h2>{Acc.last_name}</h2>
          <h3>{Acc.email}</h3>
          <h4>{Acc.Phone}</h4>
        </div>
        {state.data.map((item, index) => {
          return (
            <div key={index} className="p-4 grid grid-cols-5">
              <div>
                <p>{item.id}</p>
                <p>{item.userid}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
              </div>
            </div>)
        })}
      </div> */}
    </div>)
}
