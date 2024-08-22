'use client'
import Image from "next/image"
import s from "@/components/Navigation/Navigation.module.css"
import { useState } from "react"

export const Navigation = () =>{
  const [navIsOpen, setNavIsOpen] = useState(false);
  const openNav = ()=>{
    setNavIsOpen(!navIsOpen)
  }
    return(
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
        {navIsOpen && <div className={s.navMenu}>
          <ul className={s.menuList}>
            <li className={s.menuItem}>
              <a href="#" className={s.menuLink}>
                Главное
              </a>
            </li>
            <li className={s.menuItem}>
              <a href="#" className={s.menuLink}>
                Мой плейлист
              </a>
            </li>
            <li className={s.menuItem}>
              <a href="../signin.html" className={s.menuLink}>
                Войти
              </a>
            </li>
          </ul>
        </div>}
        
      </nav>
    )
}