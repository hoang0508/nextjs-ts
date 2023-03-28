import { GetStaticPropsContext, GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";

interface PageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PageProps) {
  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((item) => (
          <ul key={item.id}>
            <li>
              <Link href={`/posts/${item.id}`}>{item?.title}</Link>
            </li>
          </ul>
        ))}
    </>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
