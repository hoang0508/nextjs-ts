import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";
const Header = dynamic(() => import("@/components/common/Header"), {
  ssr: false,
});

export interface AboutPageProps {}

const AboutPage: NextPageWithLayout = (props: AboutPageProps) => {
  const router = useRouter();
  const [postList, setPostList] = useState([]);

  const page = router.query?.page || 1;
  console.log("router query", router.query);

  useEffect(() => {
    if (!page) return;
    (async () => {
      const res = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await res.json();
      setPostList(data?.data);
    })();
  }, [page]);

  const handleNextPage = () => {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <>
      <div>About Page</div>
      <ul>
        {postList &&
          postList.length > 0 &&
          postList.map((item: any) => <li key={item.id}>{item?.title}</li>)}
      </ul>
      <Header />
      <button onClick={() => handleNextPage()}>Next Page</button>
    </>
  );
};

AboutPage.Layout = MainLayout;

export default AboutPage;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
