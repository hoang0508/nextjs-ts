import useSWR from "swr";
import { authApi } from "../api-client";

export function useAuth(options?: any) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  async function authLogin() {
    await authApi.login({
      username: "hoang123",
      password: "hoang123",
    });
    await mutate();
  }

  async function authLogout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    authLogin,
    authLogout,
  };
}
