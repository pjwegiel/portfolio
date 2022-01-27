import { FormEvent } from 'react'
import './TextInput.css'

type TextInputProps = {
    placeholder: string
    type: string
    set: (value: string) => void
    val: string
}

export const TextInput = function TextInput({
    placeholder,
    type,
    set,
    val,
}: TextInputProps): JSX.Element {
    return (
        <div className="input-wrapper">
            <label className="form-label" htmlFor={placeholder}>
                <h4>{placeholder}</h4>
            </label>
            {placeholder === 'Wiadomość' ? (
                <textarea
                    value={val}
                    className="form-input"
                    rows={12}
                    onChange={(e: FormEvent<HTMLTextAreaElement>) => {
                        e.preventDefault()
                        const newValue: string = e.currentTarget.value
                        set(newValue)
                    }}
                />
            ) : (
                <input
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                        e.preventDefault()
                        const newValue = e.currentTarget.value
                        set(newValue)
                    }}
                    className="form-input"
                    type={type}
                    id={placeholder}
                    value={val}
                />
            )}
        </div>
    )
}
