"use client";
import s from "./Login.module.css";
import classNames from "classnames";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { errDel, loginUser, setAuthState, Token } from "@/store/feautures/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  let err = useAppSelector((state) => state.auth.error);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(setAuthState(true));
      await dispatch(
        loginUser({
          email: loginInput,
          password: passwordInput,
        })
      ).unwrap();
      await dispatch(
        Token({
          email: loginInput,
          password: passwordInput,
        })
      ).unwrap();
      dispatch(errDel(''))
      navigate.push("/Main");
    } catch (error: any) {
      if (error.message === "412" && loginInput === "") {
        dispatch (errDel("Введите логин"))
      }
      if (error.message === "412" && passwordInput === "") {
        dispatch (errDel("Введите пароль"))
      }
      if (
        error.message === "412" &&
        passwordInput === "" &&
        loginInput === ""
      ) {
        dispatch (errDel("Введите логин и пароль")) ;
      }
    }
  };
  return (
    <div className={s.wrapper}>
      <div className={s.containerCenter}>
        <div className={s.modalBlock}>
          <form onSubmit={handleLogin} className={s.modalFormLogin} action="#">
            <div className={s.modalLogo}>
              <Image src="/logo_modal.png" alt="logo" width={115} height={17} />
            </div>
            <input
              className={classNames(s.modalInput, s.login)}
              type="text"
              name="login"
              placeholder="Почта"
              onChange={(e) => setLoginInput(e.target.value)}
            />
            <input
              className={classNames(s.modalInput, s.password)}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <p className={s.error}>{err}</p>
            <button
              type="submit"
              className={classNames(s.modalBtnEnter, s.colorWhite)}
            >
              Войти
            </button>
            <Link href="/Register" className={s.modalBtnSignup}>
              Зарегистрироваться
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
