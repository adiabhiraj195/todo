import React from 'react'
import "./inputField.css";

interface TextFieldProps {
    id: string;
    value: string | number;
    placeholder?: string;
    type: "text" | "password" | "email";
    onInput: Function;
    label?: string;

}

const InputField = ({
    id,
    value,
    type,
    placeholder,
    onInput,
    label,
}: TextFieldProps) => {


    return (
        <div className='input-filed-wrap'>
            {label && <label className='input-label'>{label}</label>}
           
            <input
                id={id}
                value={value}
                type={type}
                placeholder={placeholder}
                onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
                className='input-field'
            />
        </div>
    )
}

export default InputField;