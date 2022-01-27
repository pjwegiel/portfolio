import ReactLogo from '../Assets/Logos/react.png'
import TypescriptLogo from '../Assets/Logos/typescript.png'
import HTMLLogo from '../Assets/Logos/html.png'
import CSSLLogo from '../Assets/Logos/css.png'

export const authenticators = {
    serviceId:
        process.env.REACT_APP_SERVICE_ID !== undefined
            ? process.env.REACT_APP_SERVICE_ID
            : '',
    templateId:
        process.env.REACT_APP_TEMPLATE_ID !== undefined
            ? process.env.REACT_APP_TEMPLATE_ID
            : '',
    userId:
        process.env.REACT_APP_USER_ID !== undefined
            ? process.env.REACT_APP_USER_ID
            : '',
}

export type Logo = {
    name: string
    img: string
    link: string
}

export const logoList: Logo[] = [
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
