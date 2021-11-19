import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target
        setFormValues((state) => ({
            ...state,
            [name]: value
        }))
    }
    return [formValues, onChange]
}