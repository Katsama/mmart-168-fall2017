// Katsama Amornnimit

let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else if (code === 'fr') {
        language = 'Franch'
    } else if (code === 'th') {
        language = 'Thai'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language
}
