import s from "./Login.module.css";
import classNames from "classnames";
import { FormEvent } from "react";
import { useAppDispatch } from "@/store/store";
import { loginUser, setAuthState, Token } from "@/store/feautures/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Login = () => {
  const dispatch = useAppDispatch();
  const nav = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      dispatch(loginUser({
        email: "test@test.ru",
        password: "test@test.ru",
      }))
      await dispatch(
        Token({
          email: "test@test.ru",
          password: "test@test.ru",
        })
      );
      console.log('успех');
      dispatch(setAuthState(true))
    } catch (error) {
      if (error instanceof Error) {
        console.log("Ошибка:", error.message);
      }
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.containerCenter}>
        <div className={s.modalBlock}>
          <form onSubmit={handleLogin} className={s.modalFormLogin} action="#">
            <a href="../">
              <div className={s.modalLogo}>
                <Image src="/logo_modal.png" alt="logo" width={115} height={17} />
              </div>
            </a>
            <input
              className={classNames(s.modalInput, s.login)}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={classNames(s.modalInput, s.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button type="submit" className={s.modalBtnEnter}>
              Войти
            </button>
            <button className={s.modalBtnSignup}>
              <a>Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
