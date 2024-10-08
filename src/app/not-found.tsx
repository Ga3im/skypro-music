'use client'
import { Navigation } from "@/components/Navigation/Navigation";
import s from "./NotFound.module.css";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const navigate = useRouter();
  const goToMain = () => {
    navigate.push("/Main");
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <header className={s.main}>
          <Navigation />
          <div className={s.centerblockSearch}>
            <svg className={s.searchSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
              className={s.searchText}
              type="search"
              placeholder="Поиск"
              name="search"
            />
          </div>
          <div className={s.sidebarPersonal}>
            <p className={s.sidebarPersonalName}></p>
            <div className={s.sidebarIcon}>
              <svg>
                <use xlinkHref="/icon/sprite.svg#logout"></use>
              </svg>
            </div>
          </div>
        </header>
        <main className={s.centerMain}>
          <h1 className={s.p404}>404</h1>
          <p className={s.page}>
            Страница не найдена <img src="/smile_crying.png" alt="" />{" "}
          </p>
          <p className={s.pageInfo}>
            Возможно, она была удалена или перенесена на другой адрес
          </p>
          <button className={s.buttonAgain} onClick={goToMain}>
            Вернуться на главную
          </button>
        </main>
        <footer className={s.footer}></footer>
      </div>
    </div>
  );
}
