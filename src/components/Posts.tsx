import { Suspense } from "react";

let status = "pending"
let result: any;

function fetchPosts() {
  let url = `https://jsonplaceholder.typicode.com/posts`
  let fetching = fetch(url)
    .then((res) => res.json())
    .then((success) => {
      status = "fulfilled"
      result = success
    })
    .catch((error) => {
      status = "rejected";
      result = error;
    });

  return () => {
    if (status === "pending") {
      throw fetching // Promise を throw
    } else if (status === "rejected") {
      throw result
    } else if (status === "fulfilled") {
      return result // Promise が解決したら、取得したデータを返す
    }
  }
}

const Posts = () => {
  const posts = fetchPosts()();

 return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <ul>
      {posts.map((post: any, idx: any) => (
        <li>{idx}: userId: {post?.userId}, id: {post?.id}</li>
      ))}
      </ul>
    </div>
  )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const MyPost = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Posts />
    </Suspense>
  )
}

export default MyPost
