"use client";
import classNames from "classnames";
import s from "./FilterItem.module.css";

export const FilterItem = ({title, list, isActive}) => {

    const openFindFilter = () => {
        console.log('click')
    };
    
  return (
    <>
    <div
      onClick={openFindFilter}
      className={classNames(s.filterButton, s.btnText)}
    >
      {title}
    </div>
    </>
  );
};
