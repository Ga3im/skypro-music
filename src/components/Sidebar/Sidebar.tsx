import Image from "next/image";
import s from "./Sidebar.module.css";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { logout, setAuthState, tokenDel, userType } from "@/store/feautures/authSlice";
import { setTrackState } from "@/store/feautures/tracksSlice";
import Link from "next/link";

export const Sidebar = () => {
  const nav = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setAuthState(false));
    dispatch(logout());
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    dispatch(tokenDel());
    nav.push("/Login");
    dispatch(setTrackState([]));
  };
  return (
    <div className="main__sidebar sidebar">
      <div className={s.sidebarPersonal}>
        <p className={s.sidebarPersonalName}>{user?.username}</p>
        <div onClick={handleLogout} className={s.sidebarIcon}>
          <svg>
            <use xlinkHref="/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={s.sidebarBlock}>
        <div className={s.sidebarList}>
          <div className={s.sidebarItem}>
            <Link href={"/Main/2"} className={s.sidebarLink}>
              <Image
                className={s.sidebarImg}
                src="/playlist01.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={s.sidebarItem}>
            <Link  className={s.sidebarLink} href="/Main/3">
              <Image
                className={s.sidebarImg}
                src="/playlist02.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={s.sidebarItem}>
            <Link className={s.sidebarLink} href="/Main/4">
              <Image
                className={s.sidebarImg}
                src="/playlist03.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
