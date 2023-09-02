import textEN from '@/assets/en.text.json'
import textES from '@/assets/es.text.json'
import { createContext, useState } from "react"

type LangType = 'es' | 'en'

export const LangContext = createContext({
    lang: "es",
    text: textES,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changeLang: (lang: LangType) => { }
})

export default function LangProvider(props: { children: JSX.Element }) {
    const langs = {
        es: textES,
        en: textEN
    }

    const [lang, setLang] = useState<LangType>(localStorage.getItem('lang') as LangType || 'es')
    const [text, setText] = useState(langs[localStorage.getItem('lang') as LangType || 'es'])

    const changeLang = (lang: LangType) => {
        localStorage.setItem('lang', lang)
        setLang(lang)
        setText(langs[lang])
    }

    return <LangContext.Provider value={{ lang, text, changeLang }}>
        {props.children}
    </LangContext.Provider>
}