import React from "react";

import useSWR from "swr";

interface IStudentDetails {
  studentId: string;
}

const StudentDetails = ({ studentId }: IStudentDetails) => {
  const { data, error } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
  });

  console.log(
    "🚀 ~ file: StudentDetails.tsx:12 ~ StudentDetails ~ data:",
    data
  );

  return (
    <div>
      <h3>StudentDetails</h3>
    </div>
  );
};

export default StudentDetails;
