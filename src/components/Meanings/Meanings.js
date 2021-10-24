import React from 'react';
import "./Meanings.css";

const Meanings = ({ word, language, meanings, lightMode }) => {
    return (
        <div className="meanings">

            {meanings[0] && word && language === "en" && (
                <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} className="audio" controls>
                    Your browser doesn't support audio element.
                </audio>
            )}

            {
                word === ""
                    ? (
                        <span className="subTitle">Start by typing a word in the search field</span>
                    ) : (
                        <>
                            {meanings.map((data) =>
                                data.meanings.map((items) =>
                                    items.definitions.map((def) => (
                                        <div className={lightMode ? "singleMeaningDark" : "singleMeaningLight"}>
                                            {def.definition && (
                                                <span>
                                                    <b>Definition: </b>
                                                    <span className="definition">{def.definition}</span>
                                                </span>
                                            )}
                                            {def.example && (
                                                <span>
                                                    <br />
                                                    <b>Example: </b>
                                                    <span>{def.example}</span>

                                                </span>
                                            )}
                                        </div>
                                    ))
                                )
                            )}
                        </>
                    )
            }
        </div >
    );
};

export default Meanings;
