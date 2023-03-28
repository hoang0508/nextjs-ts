import { StudentDetails } from "@/components/swr";
import React from "react";

const SWRPage = () => {
  return (
    <div>
      <h1>SWR background</h1>

      <StudentDetails studentId="lea11nlelf3n3uoe" />
      <StudentDetails studentId="lea11nlelf3n3uoe" />
      <StudentDetails studentId="lea11nlelf3n3uoe" />
    </div>
  );
};

export default SWRPage;
