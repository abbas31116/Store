import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import CustomButton1 from "~/components/CustomButton";

export interface IPost {
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

const createPost = async (newPost: IPost) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  return res.data;
};

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const comment = async (): Promise<IComment[]> => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
  if (!res) {
    throw new Error("network");
  }
  return res.data;
};

const deletePost = async (id: number) => {
  const res = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.data;
};
const updatePost=async(data:IPost,id:number)=>{
  const res= await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,data);
  return res.data;
}

export default function Home() {
  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    mutationKey: ["CREAET_POST"],
  });
  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: deletePost,
    mutationKey: ["DELETE POST"],
  });
  const {mutate:mutateUpdate,isPending:updatePending}=useMutation({
  mutationFn:updatePost,
  mutationKey:
  
  })
  const {
    data: Comment,
    error: errComment,
    isError: isErrComment,
    isLoading: isLoadingComment,
  } = useQuery({
    queryKey: ["COMMENTS"],
    queryFn: comment,
  });
  const { data } = useQuery({
    queryFn: fetchPost,
    queryKey: ["POST"],
  });
  return isLoadingComment ? (
    <div>loading data...</div>
  ) : isErrComment ? (
    <div>{errComment.message}</div>
  ) : (
    <div>
      <CustomButton1
        title={isPending ? "loading " : "اضافه کردن"}
        onClick={() => {
          mutate({
            body: "body",
            id: 100000,
            title: "title",
            userid: 84912384,
          });
        }}
      />
      <CustomButton1 title="update"/>
      {data?.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <CustomButton1
            title="delete"
            onClick={() => {
              deleteMutate(item.id, {
                onSuccess(data, variables, onMutateResult, context) {
                  alert(`item with id:${item.id} deleted`);
                },
                onError(error, variables, onMutateResult, context) {},
              });
            }}
          />
          <p>{item.id}</p>
        </div>
      ))}
    </div>
  );
}
