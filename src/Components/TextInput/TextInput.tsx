import './TextInput.css'

type TextInputProps = {
    placeholder: string
}

export const TextInput = function TextInput({
    placeholder,
}: TextInputProps): JSX.Element {
    return (
        <div className="input-wrapper">
            <input type="text" placeholder={placeholder} id={placeholder} />
            <label className="form-label" htmlFor={placeholder}>
                {placeholder}
            </label>
        </div>
    )
}
