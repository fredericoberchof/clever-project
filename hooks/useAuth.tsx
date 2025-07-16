import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth(redirectTo = "/signin") {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (!isAuth) {
      router.push(redirectTo);
    } else {
      setCheckingAuth(false);
    }
  }, [router, redirectTo]);

  const logout = () => {
    localStorage.removeItem("isAuth");
    router.push("/signin");
  };

  return { checkingAuth, logout };
}