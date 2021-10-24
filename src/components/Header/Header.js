import React from "react";
import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import countries from "../../Data/categories";
import "./Header.css";

const Header = ({ language, setLanguage, word, setWord, lightMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : "#FFF",
            },
            mode: lightMode ? "dark" : 'light',
        },
    });

    const resetSearchWord = (lang) => {
        setLanguage(lang);
        setWord("");
    };

    return (
        <div className="header">
            <div className="title-container">
                <span className="title">{word ? word : "Dictionary"}</span>
            </div>
            <div className="inputs">

                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="Search a Word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        select
                        label="Language"
                        className="select"
                        value={language}
                        onChange={(e) => resetSearchWord(e.target.value)}

                    >
                        {countries.map((lang) => (
                            <MenuItem key={lang.label} value={lang.label}>
                                {lang.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;
