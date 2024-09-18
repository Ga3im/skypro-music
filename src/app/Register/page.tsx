'use client'
import Image from "next/image";
import s from "./Register.module.css";
import classNames from "classnames";
import { useAppDispatch } from "@/store/store";
import { FormEvent, useState } from "react";
import { getUser } from "@/store/feautures/authSlice";
import Link from "next/link";

 const Register = () => {
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const dispatch = useAppDispatch();

  const handleRegUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(
        getUser({
          email: loginInput,
          password: passwordInput,
        })
      );
      console.log("успех");
    } catch (error) {
      if (error instanceof Error) {
        console.log("Ошибка:", error.message);
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
              onChange={(e) => e.target.value}
            />
            <button className={s.modalBtnSignupEnt}>
              <a>Зарегистрироваться</a>
            </button>
            <Link className={s.authorization} href="/Login">Авторизация</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
