import { SyntheticEvent } from 'react'
import './Button.css'

type ButttonProps = {
    text: string
    set: (e: SyntheticEvent) => void
}

export const Button = function Button({
    text,
    set,
}: ButttonProps): JSX.Element {
    return (
        <button
            type="submit"
            onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                set(e)
            }}
        >
            {text}
        </button>
    )
}
