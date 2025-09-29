
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IPost {
  title: string;
  id: number;
  body: string;
  userid: number;
}

const fetchPost = async (): Promise<IPost[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("network error");
  }
  return res.json();
};
interface IComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}
const comment = async (): Promise<IComment[]> => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
  if (!res) {
    throw new Error("network")
  }
  return res.data
}
export default function Home() {
  const { data: Comment, error: errComment, isError: isErrComment, isLoading: isLoadingComment } = useQuery({
    queryKey: ["COMMENTS"],
    queryFn: comment,
  });
  return isLoadingComment?(
    <div>loading data...</div>
  ):isErrComment?(
    <div>{errComment.message}</div>
  )
  :(<div>
    {Comment?.map((item,index)=>(
      <p key={index}>{item.id}</p>
    ))}
  </div>)
  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ["POST"],
  //   queryFn: fetchPost,
  //   staleTime: 1000 * 60,
  //   gcTime: 1000 * 60 * 5,
  // });
  // return isLoading ? (
  //   <div>loading</div>
  // ) : isError ? (
  //   <div>{error.message}</div>
  // ) : (
  //   <div>
  //     {data?.map((item, index) => (
  //       <p key={index}>{item.title}</p>
  //     ))}
  //   </div>
  // );
}
