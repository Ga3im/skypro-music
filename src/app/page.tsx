"use client";

import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";

export default function Home() {
  const isAuth = useAppSelector((state) => state.auth.authState);
  const nav = useRouter();
  if (isAuth) {
    nav.push("/Main");
  } else {
    nav.push("/Login");
  }
}
