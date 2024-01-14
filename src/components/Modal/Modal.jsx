import { useEffect} from 'react';

import css from "./Modal.module.css"

const Modal = ({ data: { author, content }, closeModal }) => {
    
    useEffect(() => {  
        const handleEsc = (e) => {
        if (e.code === "Escape") {
        closeModal()
        }
        }
        document.addEventListener("keydown", handleEsc)
        return () => {
            document.removeEventListener("keydown",handleEsc)
        }
  }, [closeModal])

    return (
        <div onClick={closeModal} className={css.modal}>
            <div className={css.content}>
                <p className={css.name}>{author}</p>
                <p className={css.text}>{content}</p>
            </div>
        </div>
    )
}

export default Modal