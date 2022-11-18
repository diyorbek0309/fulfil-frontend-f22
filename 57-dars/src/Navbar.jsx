import { useState } from "react";
import i18n from "./i18n";

const Navbar = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "uz");

  const changeHandler = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  return (
    <div>
      <select
        name="lang"
        onChange={(event) => changeHandler(event)}
        value={lang}
      >
        <option value="uz">O'zbek</option>
        <option value="ru">Russian</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default Navbar;
