"use client";
import Link from "next/link";
import Edit from "./Edit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "@/redux/slices/posts";
import { getPost } from "@/lib/getPost";
import { getBlogPosts } from "@/firebase";

export default function Page() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.posts);
  useEffect(() => {
    if (posts?.length === 0) {
      getBlogPosts().then((data) => dispatch(setPosts(data)));
    }
  }, [posts]);

  return (
    <>
      {posts?.posts && <Edit posts={posts.posts} />}{" "}
      {posts?.posts?.length === 0 && (
        <div className="flex flex-col items-center justify-center space-y-6 w-full mx-auto h-screen absolute top-0 right-0">
          <h1 className="text-3xl w-max mx-auto text-white drop-shadow shadow-black">
            Brak postów
          </h1>
          <Link
            href="/admin/blog/new"
            className="p-3 bg-green-400 test-white mx-auto"
          >
            Dodaj post
          </Link>
        </div>
      )}
    </>
  );
}
