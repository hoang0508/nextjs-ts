import { LayoutProps } from "@/models/index";
import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
