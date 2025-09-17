import axios from "axios";
import { useEffect, useReducer, } from "react";
import { initialState, reducer, type Post } from "./reducer";

export default function Home() {

  const [state, dispach] = useReducer(reducer, initialState)

  useEffect(() => {
    dispach({ type: "fech-Start" });
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispach({ type: "fech-succes", payload: res.data })
      })
      .catch((err) => {
        dispach({ type: "fech-err", payload: err.message })

      })
  }, [])
  if (state.loading) return (<p className="p-4">loading...</p>)
  if (state.error) return (<p className="p-4">error:{state.error}</p>)
  return (
    <div>
      <div>
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
      </div>
    </div>)
}
