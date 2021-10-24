const categories = [
    { value: "English", label: "en" },
    { value: "Hindi", label: "hi" },
    { value: "Spanish", label: "es" },
    { value: "French", label: "fr" },
    { value: "Japanese", label: "ja" },
    { value: "Russian", label: "ru" },
    { value: "German", label: "de" },
    { value: "Italian", label: "it" },
    { value: "Korean", label: "ko" },
    { value: "Brazilian Portuguese", label: "pt-BR" },
    { value: "Arabic", label: "ar" },
    { value: "Turkish", label: "tr" },
];

categories.sort((a, b) => (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0));

export default categories;
