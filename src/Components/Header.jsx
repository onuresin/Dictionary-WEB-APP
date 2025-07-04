import { useEffect, useState } from "react";
import Book from "../images/book-shape.svg";
import Vertical from "../images/vertical-short.svg";
import DarkButton from "../images/darkmode.svg";
import LightButton from "../images/Lightmode.svg";

export default function Header() {
    const [selectFont, setSelectFont] = useState('Serif');
    const [darkTheme, setDarkTheme] = useState(false);
   
    const handleFontsChange = (font) => {
        setSelectFont(font);
        document.body.style.fontFamily = font;
    };

    const handleThemeChange = () => {
        setDarkTheme(!darkTheme);
    }
    useEffect(() => {
        document.body.classList.toggle('dark-theme', darkTheme);
    }, [darkTheme]);

    return (
        <div className="header">
            <div className="header-inner">
                <div className="inner-left">
                    <img src={Book} alt="book" />
                </div>
                <div className="inner-right">
                    <span className="right-font">
                        <select value={selectFont} onChange={(e) => handleFontsChange(e.target.value)}>
                            <option value="serif">Serif</option>
                            <option value="Sans-serif">Sans-Serif</option>
                            <option value="monospace">Mono</option>
                        </select>
                    </span>
                    <img src={Vertical} alt="vertical stick" />
                    <span className="right-theme" onClick={handleThemeChange}>
                        {darkTheme ? 
                            (<img src={DarkButton} alt="light mode" />) 
                            : 
                            (<img src={LightButton} alt="dark mode" />)
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}