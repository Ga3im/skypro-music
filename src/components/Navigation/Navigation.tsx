"use client";
import Image from "next/image";
import s from "@/components/Navigation/Navigation.module.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setIsLike } from "@/store/feautures/tracksSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Navigation = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { authState } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()
  const nav = useRouter();

  // const myTracksBtn = () =>{
  //   dispatch(setIsLike(true))
  // }

  // const main = ()=>{
  //   dispatch(setIsLike(false))
  // }

  const logout = ()=>{
    nav.push('/Login')
  }

  const openNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <nav className={s.mainNav}>
      <div className={s.navLogo}>
        <Image
          className={s.logoImage}
          alt="logo"
          src="/logo.png"
          width={115}
          height={17}
        />
      </div>
      <div className={s.navBurger} onClick={openNav}>
        <span className={s.burgerLine}></span>
        <span className={s.burgerLine}></span>
        <span className={s.burgerLine}></span>
      </div>
      {navIsOpen && (
        <div className={s.navMenu}>
          <ul className={s.menuList}>
            <li className={s.menuItem}>
              <Link href={'/Main'} className={s.menuLink}>
                Главное
              </Link>
            </li>
            <li className={s.menuItem}>
              <Link href={'/Main/Favorite'} className={s.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li className={s.menuItem}>{authState ? <p onClick={logout}>Выйти</p> : <p>Войти</p> }</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
