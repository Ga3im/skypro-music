import Image from "next/image";
import s from "@/components/Sidebar/Sidebar.module.css";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setAuthState } from "@/store/feautures/authSlice";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth)
  const handleLogin = () => {
    isAuth ? dispatch(setAuthState(false)) : dispatch(setAuthState(true));
  };
  return (
    <div className="main__sidebar sidebar">
      <div className={s.sidebarPersonal}>
        <p className={s.sidebarPersonalName}>Войти</p>
        <div onClick={handleLogin} className={s.sidebarIcon}>
          <svg>
            <use xlinkHref="/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={s.sidebarBlock}>
        <div className={s.sidebarList}>
          <div className={s.sidebarItem}>
            <a className={s.sidebarLink} href="#">
              <Image
                className={s.sidebarImg}
                src="/playlist01.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={s.sidebarItem}>
            <a className={s.sidebarLink} href="#">
              <Image
                className={s.sidebarImg}
                src="/playlist02.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </a>
          </div>
          <div className={s.sidebarItem}>
            <a className={s.sidebarLink} href="#">
              <Image
                className={s.sidebarImg}
                src="/playlist03.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
