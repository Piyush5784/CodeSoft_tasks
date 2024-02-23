import style from "./Display.module.css";


function Display({ displayValue }) {

    return <div>
        <input className={`${style.width} ${style.height}`} type="text" value={displayValue} readOnly /></div>;
}


export default Display;