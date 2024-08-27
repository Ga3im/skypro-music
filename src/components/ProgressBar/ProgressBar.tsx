import { ChangeEventHandler } from "react";
import s from './ProgressBar.module.css'
type props = {
    max:number;
    value: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function ProgressBar({ max, value, onChange }:props) {
  return (
    <input
	    className={s.styledProgressInput}
        type="range"
	    min="0"
	    max={max} 
	    value={value} 
	    step={0.1} 
	    onChange={onChange}
	  />
  );
}