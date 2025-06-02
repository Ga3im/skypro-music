"use client";
import Image from "next/image";
import s from "./Register.module.css";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { FormEvent, useState } from "react";
import {
  errDel,
  getUser,
  loginUser,
  setAuthState,
  Token,
} from "@/store/feautures/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const dispatch = useAppDispatch();
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useRouter();
  const error = useAppSelector((state) => state.auth.error);

  const handleRegUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(setAuthState(true));
      await dispatch(
        getUser({
          email: loginInput,
          password: passwordInput,
        })
      ).unwrap();
      const user = await dispatch(
       loginUser({
          email: loginInput,
          password: passwordInput,
        })
      ).unwrap();
      localStorage.setItem('user', JSON.stringify(user))
      await dispatch(
        Token({
          email: loginInput,
          password: passwordInput,
        })
      ).unwrap();
      dispatch(errDel(""));
      navigate.push("/Main");
    } catch (error) {
      if (passwordInput != repeatPassword) {
        dispatch(errDel("Пароли не совпали"));
        if (repeatPassword === "") {
          dispatch(errDel("Подтвердите пароль"));
        }
      }
      if (error instanceof Error) {
        if (error.message === "Неправильный формат Email" && loginInput === "") {
          dispatch(errDel("Введите логин"));
        }
        if (
          error.message === "Неправильный формат Email" &&
          passwordInput === "" &&
          repeatPassword === ""
        ) {
          dispatch(errDel("Введите пароль"));
        }
        if (
          error.message === "Неправильный формат Email" &&
          passwordInput === "" &&
          loginInput === ""
        ) {
          dispatch(errDel("Введите логин и пароль"));
        }
     
      }
   
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.containerSignup}>
        <div className={s.modalBlock}>
          <form onSubmit={handleRegUser} className={s.modalFormLogin}>
            <a href="../">
              <div className={s.modalLogo}>
                <Image
                  src="/logo_modal.png"
                  alt="logo"
                  width={115}
                  height={17}
                />
              </div>
            </a>
            <input
              className={classNames(s.modalInput, s.login)}
              type="text"
              name="login"
              placeholder="Почта"
              onChange={(e) => setLoginInput(e.target.value)}
            />
            <input
              className={classNames(s.modalInput, s.passwordFirst)}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <input
              className={classNames(s.modalInput, s.passwordDouble)}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <p className={s.error}>{error}</p>
            <button className={s.modalBtnSignupEnt}>
              <a>Зарегистрироваться</a>
            </button>
            <Link className={s.authorization} href="/Login">
              Авторизация
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
