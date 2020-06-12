import axios from "axios";
import { Post } from "../models/post";

const postClient = axios.create({
  baseURL: "http://localhost:8080",
  // If you don't have the following line, your login won't work!
  withCredentials: true,
});
//@get /posts/all
//@ gets all posts in order by create date (earliest first), returning array of posts
export async function getAllPostsByUSerId(id: number): Promise<Post[]> {
  const response = await postClient.get("/posts/all" + id);
  return response.data.map((postObj: any) => {
    const { post_id, author, date_posted, title, content } = postObj;
    return new Post(post_id, author, date_posted, title, content);
  });
}

export async function getAllPostsId(): Promise<Post[]> {
  const response = await postClient.get("/posts/all");
  return response.data.map((postObj: any) => {
    const { post_id, author, date_posted, title, content } = postObj;
    return new Post(post_id, author, date_posted, title, content);
  });
}

//get post by post id
export async function getPostsByPostId(postid: number): Promise<Post> {
  const response = await postClient.get("/posts/search" + postid);
  const { post_id, author, date_posted, title, content } = response.data;
  return new Post(post_id, author, date_posted, title, content);
}

//get post of certain user
export async function getPostsByUserId(userid: number): Promise<Post[]> {
  const response = await postClient.get("/posts/search" + userid);
  return response.data.map((postObj: any) => {
    const { post_id, author, date_posted, title, content } = postObj;
    return new Post(post_id, author, date_posted, title, content);
  });
}

export async function addNewPost(p: Post): Promise<Post> {
  const response = await postClient.post("/post/new", {
    post_id: p.postId,
    author: p.author,
    date_posted: p.datePosted,
    title: p.title,
    content: p.content,
  });
  const { post_id, author, date_posted, title, content } = response.data;
  return new Post(post_id, author, date_posted, title, content);
}
