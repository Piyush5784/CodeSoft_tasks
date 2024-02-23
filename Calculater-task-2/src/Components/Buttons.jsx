import style from "./Buttons.module.css";

const Buttons = ({ onClickHandler }) => {
    const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <>
            {buttons.map(button => <button key={button} onClick={() => onClickHandler(button)} className={`${style.styleit}`}>{button}</button>)}
        </>
    )


}


export default Buttons;