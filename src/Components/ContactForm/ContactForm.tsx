import './ContactForm.css'

import { useState } from 'react'

import { TextInput } from '../TextInput/TextInput'

export const ContactForm = function ContactForm(): JSX.Element {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    return (
        <div className="contact-form-wrapper">
            <TextInput placeholder="name" />
            <TextInput placeholder="email" />
        </div>
    )
}
