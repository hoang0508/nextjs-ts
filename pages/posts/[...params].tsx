import { useRouter } from "next/router";
import React from "react";

export interface ParamsPageProps {}

export default function ParamsPageProps(props: ParamsPageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Param Page</h1>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  );
}
