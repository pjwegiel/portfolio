import './Logolist.css'

import { useEffect, useState } from 'react'

import { LogoListItem } from '../LogoListItem/LogoListItem'
import { logoList, Logo } from '../consts'

export const Logolist = function Logolist(): JSX.Element {
    const [logos, setLogos] = useState([] as Logo[])
    useEffect(() => {
        setLogos(logoList)
    }, [])
    return (
        <div className="logolistWrapper">
            {logos.map((logo) => (
                <LogoListItem
                    key={logo.name}
                    name={logo.name}
                    img={logo.img}
                    link={logo.link}
                />
            ))}
        </div>
    )
}
