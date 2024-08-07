import { IoMdPerson } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.contactWrap}>
      <div className={css.wrap}>
        <div className={css.line}>
          <IoMdPerson size="22" className={css.icon} />
          <p className={css.contactText}>{name}</p>
        </div>
        <div className={css.line}>
          <AiFillPhone size="22" className={css.icon} />
          <p className={css.contactText}>{number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
