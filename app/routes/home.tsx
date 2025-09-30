import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import CustomData from "~/components/componentdata";
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
const updatePost = async (data: IPost) => {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data);
  return res.data;
}
const updateData = async (data: IPost) => {
  const res = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data.title)
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
  const { mutate: mutateUpdate, isPending: updatePending } = useMutation({
    mutationFn: updatePost,
    mutationKey: ["UPDATE POST"]
  })
  const { mutate: mutateUpInput, isPending: upPending } = useMutation({
    mutationFn: updateData,
    mutationKey: ["UP INPUT"]
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
      <CustomButton1 title="update" onClick={() => {
        mutateUpdate({
          body: "avvas",
          id: 1,
          title: "title2",
          userid: 1234567
        }, {
          onSuccess(data, variables, onMutateResult, context) {
            alert(`item update with id:${data}`)
          },
        })
      }} />
      {data?.map((item, index) => {
        return (<CustomData onclick1={() => {
          deleteMutate(item.id, {
            onSuccess(data, variables, onMutateResult, context) {
              alert(`data delet with ${data}`);
            },
          });
        } } id={item.id} index={index} place={item.title} />)
      })}
    </div>
  );
}
