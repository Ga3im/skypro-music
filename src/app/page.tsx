"use client";
import { Login } from "@/components/Login/Login";
import { Main } from "@/components/Main/Main";
import { useAppSelector } from "@/store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "@/router/routes";

export default function Home() {
  const { authState } = useAppSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <>
          {authState ? (
            <Route path={routes.main} element={<Main />} />
          ) : (
            <Route path={routes.log} element={<Login />} />
          )}
        </>
        ;
      </Routes>
    </BrowserRouter>
  );
}
