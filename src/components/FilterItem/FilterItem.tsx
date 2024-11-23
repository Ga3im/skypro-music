"use client";
import classNames from "classnames";
import s from "./FilterItem.module.css";
import { useAppDispatch } from "@/store/store";
import { setFilters } from "@/store/feautures/tracksSlice";
import React from "react";

type ItemProp = {
  title: string;
  list: string[];
  id: string;
  activeFilter: string | null;
  setActiveFilter: (id: string | null) => void;
  selected: string[] | string;
};

export const FilterItem = React.memo(
  ({ title, list, id, selected, setActiveFilter, activeFilter }: ItemProp) => {
    const dispatch = useAppDispatch();

    const openFindFilter = () => {
      setActiveFilter(activeFilter === id ? null : id);
    };

    const filterBtn = (item: string) => {
      if (selected instanceof Array) {
        dispatch(
          setFilters({
            [id]: selected.includes(item)
              ? selected.filter((el: string) => el !== item)
              : [...selected, item],
          })
        );
      }

      if (id === "date") {
        dispatch(setFilters({ date: item }));
        return;
      }
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
                  <p
                    onClick={() => filterBtn(i)}
                    key={i}
                    className={classNames(s.listName, {
                      [s.listNameActive]: selected.includes(i),
                    })}
                  >
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
  }
);
