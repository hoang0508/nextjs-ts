import { LayoutProps } from "@/models/index";
import Link from "next/link";
import React from "react";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>Main Layout</h1>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
