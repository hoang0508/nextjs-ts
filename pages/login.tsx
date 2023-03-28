import React from "react";
import { authApi } from "../api-client";
import { useAuth } from "../hooks";

const LoginPage = () => {
  // useAuth
  const { authLogin, authLogout, profile } = useAuth({
    revalidateOnMount: false,
  });
  console.log("🚀 ~ file: login.tsx:8 ~ LoginPage ~ profile:", profile);

  const handleClickLogin = async () => {
    try {
      // await authApi.login({
      //   username: "hoang123",
      //   password: "hoang123",
      // });
      await authLogin();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleClickGetProfile = async () => {
  //   try {
  //     const res = await authApi.getProfile();
  //     console.log(
  //       "🚀 ~ file: login.tsx:19 ~ handleClickGetProfile ~ res:",
  //       res
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleClickLogout = async () => {
    try {
      // await authApi.logout();
      await authLogout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3>Login Page</h3>

      <button onClick={() => handleClickLogin()}>Login</button>
      {/* <button onClick={() => handleClickGetProfile()}>Get profile</button> */}
      <button onClick={() => handleClickLogout()}>Log out</button>
    </div>
  );
};

export default LoginPage;
