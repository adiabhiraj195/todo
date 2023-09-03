import React from 'react'
import "./textArea.css";

interface TextAreaProps {
    id: string;
    value: string | number;
    placeholder?: string;
    onInput: Function;
    label?: string;
    rows?: number;
    cols?: number;
    // borderColor: React.CSSProperties;
    borderColor: string;
}

const TextArea = ({
    id,
    value,
    placeholder,
    onInput,
    label,
    rows,
    cols,
    borderColor
}: TextAreaProps) => {


    return (
        <div className='input-filed-wrap'>
            {label && <label className='text-area-label'>{label}</label>}
           
            <textarea
                id={id}
                value={value}
                placeholder={placeholder}
                onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
                className='text-area'
                rows={rows}
                cols={cols}
                style={{borderColor: `${borderColor}`}}
            />
        </div>
    )
}

export default TextArea