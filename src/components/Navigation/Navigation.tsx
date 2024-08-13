import Image from "next/image"
import s from "@/components/Navigation/Navigation.module.css"

export const Navigation = () =>{
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
        <div className={s.navBurger}>
          <span className={s.burgerLine}></span>
          <span className={s.burgerLine}></span>
          <span className={s.burgerLine}></span>
        </div>
        <div className={s.navMenu}>
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
        </div>
      </nav>
    )
}