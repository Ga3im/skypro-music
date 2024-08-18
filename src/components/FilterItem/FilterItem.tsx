"use client";
import classNames from "classnames";
import s from "./FilterItem.module.css";

type ItemProp = {item:string[], title:string, list: unknown, key:string, isActive: boolean, setActiveFilter: string[]}
export const FilterItem = ({title, item, list, isActive, setActiveFilter}:ItemProp) => {

    const openFindFilter = () => {
        setActiveFilter((prev:unknown)=>(prev === item ? null : item))
    };
    
  return (
    <div className={s.contentBlock}>
    <div
      onClick={openFindFilter}
      className={classNames(s.filterButton, s.btnText)}
    >
      {title}
    </div>
    {isActive &&  <div className={s.list}>{list}</div>}
    </div>
  );
};
