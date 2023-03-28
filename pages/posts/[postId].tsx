import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";

export interface PostPageProps {
  post: any;
}

export default function PostDetailsPageProps({ post }: PostPageProps) {
  const router = useRouter();
  // if (!post) return null;
  return (
    <div>
      <h1>Post Detail Page</h1>

      <p>{post?.title}</p>
      <p>{post?.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    paths: data.map((post: any) => ({
      params: { postId: String(post?.id) },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context?.params?.postId;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};
