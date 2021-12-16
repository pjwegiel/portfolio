import './Logolist.css'

import { useEffect, useState } from 'react'
import ReactLogo from '../../Assets/Logos/react.png'
import TypescriptLogo from '../../Assets/Logos/typescript.png'
import HTMLLogo from '../../Assets/Logos/html.png'
import CSSLLogo from '../../Assets/Logos/css.png'

import { LogoListItem } from '../LogoListItem/LogoListItem'

type Logo = {
    name: string
    img: string
    link: string
}

export const Logolist = function Logolist(): JSX.Element {
    const [logos, setLogos] = useState([] as Logo[])
    useEffect(() => {
        const logoList: Logo[] = [
            {
                name: 'react.js',
                img: ReactLogo,
                link: 'https://reactjs.org/',
            },
            {
                name: 'typescript',
                img: TypescriptLogo,
                link: 'https://www.typescriptlang.org/',
            },
            {
                name: 'html5',
                img: HTMLLogo,
                link: 'https://www.w3schools.com/html/default.asp',
            },
            {
                name: 'css',
                img: CSSLLogo,
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            },
        ]
        setLogos(logoList)
    }, [])
    return (
        <div className="logolistWrapper">
            {logos.map((logo) => (
                <LogoListItem
                    name={logo.name}
                    img={logo.img}
                    link={logo.link}
                />
            ))}
        </div>
    )
}
