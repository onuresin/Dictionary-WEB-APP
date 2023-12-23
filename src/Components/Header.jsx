import { useState } from "react";

export default function Header() {
    const [selectFont, setSelectFont] = useState('Serif');
    const [darkTheme, setDarkTeheme] = useState(false);
   
    const handleFontsChange = (font) => {
        setSelectFont(font);
        document.body.style.fontFamily = font;
    };

    const handleThemeChange = () => {
        setDarkTeheme(!darkTheme);
        document.body.classList.toggle('dark-theme');
    }

    return (
        <div className="header">
            <div className="header-inner">
                <div className="inner-left">
                    <img src="images/book-shape.svg" alt="book" />
                </div>
                <div className="inner-right">
                    <span className="right-font">
                        <select value={selectFont} onChange={(e) => handleFontsChange(e.target.value)}>
                            <option value="serif">Serif</option>
                            <option value="Sans-serif">Sans-Serif</option>
                            <option value="monospace">Mono</option>
                        </select>
                    </span>
                    <span className="right-theme" onClick={handleThemeChange}>
                        {darkTheme ? 
                            (<img src="images/Lightmode.svg" alt="light mode" />) 
                            : 
                            (<img src="images/darkmode.svg"  alt="dark mode" />)
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}