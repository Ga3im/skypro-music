"use client";
import Image from "next/image";
import s from "@/components/Navigation/Navigation.module.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setIsFavorite } from "@/store/feautures/tracksSlice";

export const Navigation = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { authState } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const openNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  const myPlaylistBtn = () => {
    dispatch(setIsFavorite(true));
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
              <a href="#" className={s.menuLink}>
                Главное
              </a>
            </li>
            <li className={s.menuItem}>
              <a onClick={myPlaylistBtn} href="#" className={s.menuLink}>
                Мой плейлист
              </a>
            </li>
            <li className={s.menuItem}>{authState ? "Выйти" : "Войти"}</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
