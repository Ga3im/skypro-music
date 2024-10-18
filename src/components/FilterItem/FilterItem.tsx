"use client";
import classNames from "classnames";
import s from "./FilterItem.module.css";

type ItemProp = {
  title: string;
  list: string[];
  id: string;
  activeFilter: string | null;
  setActiveFilter: string | null;
};

export const FilterItem = ({
  title,
  list,
  id,
  setActiveFilter,
  activeFilter,
}: ItemProp) => {
  const openFindFilter = () => {
    setActiveFilter(() => (activeFilter === id ? null : id));
  };

  const filterBtn = () => {
    list.filter((i) => {
      if (i === 'По умолчанию') {
        console.log(i);
      }
    });
  };
  return (
    <>
      <div className={s.contentBlock}>
        {activeFilter && activeFilter === id ? (
          <div
            onClick={openFindFilter}
            className={classNames(s.filterButtonActive, s.btnText)}
          >
            {title}
          </div>
        ) : (
          <div
            onClick={openFindFilter}
            className={classNames(s.filterButton, s.btnText)}
          >
            {title}
          </div>
        )}

        {activeFilter === id && (
          <div className={s.listt}>
            <div className={s.list}>
              {list.map((i) => (
                <p onClick={filterBtn} key={i} className={s.listName}>
                  {i}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
      {activeFilter === id && (
        <div className={s.count}>
          <p>{list.length}</p>
        </div>
      )}
    </>
  );
};
