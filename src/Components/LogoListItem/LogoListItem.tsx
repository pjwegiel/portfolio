import './LogoListItem.css'

type LogoListItemProps = {
    name: string
    img: string
    link: string
}

export const LogoListItem = function LogoListItem({
    name,
    img,
    link,
}: LogoListItemProps): JSX.Element {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt={name} />
        </a>
    )
}
