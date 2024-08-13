import Image from "next/image"
import s from '@/components/Sidebar/Sidebar.module.css'

export const Sidebar = ()=>{
    return(
        <div className="main__sidebar sidebar">
              <div className={s.sidebarPersonal}>
                <p className={s.sidebarPersonalName}>Sergey.Ivanov</p>
                <div className={s.sidebarIcon}>
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
    )
}