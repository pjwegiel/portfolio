import './ContactForm.css'

import { useState, SyntheticEvent } from 'react'
import { send } from 'emailjs-com'

import { TextInput } from '../TextInput/TextInput'
import { Button } from '../Button/Button'

import { authenticators } from '../consts'

export const ContactForm = function ContactForm(): JSX.Element {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [errors, setErrors] = useState<string[]>([])
    const validate = function validate(): boolean {
        const errArray = []
        if (name.length === 0) {
            errArray.push('Imię za krótkie')
            setErrors(errArray)
            return false
        }
        if (
            !email
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        ) {
            errArray.push('Niepoprawny adres E-mail')
            setErrors(errArray)
            return false
        }
        if (subject.length === 0 || subject.length > 150) {
            errArray.push('Niepoprawna długość tematu')
            setErrors(errArray)
            return false
        }
        if (message.length === 0 || message.length > 500) {
            errArray.push('Niepoprawna długość wiadomości')
            setErrors(errArray)
            return false
        }
        setErrors([])
        return true
    }
    const submit = function submit(e: SyntheticEvent): void {
        e.preventDefault()
        const emailData = {
            from_name: name,
            to_name: 'Paweł',
            message,
            reply_to: email,
        }
        if (validate()) {
            send(
                authenticators.serviceId,
                authenticators.templateId,
                emailData,
                authenticators.userId
            )
                .then(() => {
                    alert('Wiadomość wysłana')
                    setName('')
                    setEmail('')
                    setSubject('')
                    setMessage('')
                })
                .catch((err) => console.log(err))
        }
    }
    return (
        <form className="contact-form-wrapper">
            <TextInput
                placeholder="Imię"
                type="text"
                set={(newVal) => setName(newVal)}
                val={name}
            />
            <TextInput
                placeholder="E-mail"
                type="email"
                set={(newVal) => setEmail(newVal)}
                val={email}
            />
            <TextInput
                placeholder="Temat"
                type="text"
                set={(newVal) => setSubject(newVal)}
                val={subject}
            />
            <TextInput
                placeholder="Wiadomość"
                type="text"
                set={(newVal) => setMessage(newVal)}
                val={message}
            />
            <ul>
                {errors.map((error) => (
                    <li>{error}</li>
                ))}
            </ul>
            <Button text="Wyślij" set={(e: SyntheticEvent) => submit(e)} />
        </form>
    )
}
