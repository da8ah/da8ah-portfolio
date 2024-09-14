import textEN from '@/assets/en.text.json'
import textES from '@/assets/es.text.json'
import { createContext, useState } from "react"

type LangType = 'es' | 'en'

const DEFAULT_LANG = 'en'
const LANGUAGES = {
    es: textES,
    en: textEN,
}

export const LangContext = createContext({
    lang: DEFAULT_LANG,
    text: LANGUAGES[DEFAULT_LANG],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changeLang: (_lang: LangType) => { }
})

export default function LangProvider(props: { children: JSX.Element }) {

    const [lang, setLang] = useState<LangType>(localStorage.getItem('lang') as LangType || DEFAULT_LANG)
    const [text, setText] = useState(LANGUAGES[localStorage.getItem('lang') as LangType || DEFAULT_LANG])

    const changeLang = (lang: LangType) => {
        localStorage.setItem('lang', lang)
        setLang(lang)
        setText(LANGUAGES[lang])
    }

    return <LangContext.Provider value={{ lang, text, changeLang }}>
        {props.children}
    </LangContext.Provider>
}