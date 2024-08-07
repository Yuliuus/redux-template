import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.box}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
