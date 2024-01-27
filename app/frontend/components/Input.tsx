import { HTMLInputTypeAttribute } from "react"

interface InputProps {
  value: string | number
  onChange: (e: any) => void
  label: string
  type: HTMLInputTypeAttribute
  name: string
  id: string
  errors: string | [] | [string]
}

export default function Input({
  value,
  onChange,
  label,
  type = "text",
  name,
  id,
  errors = [],
  ...rest
}: InputProps) {
  return (
    <div>
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          {...rest}
        />
      </div>
      {errors && <p id={`${id}-error`}>{errors[0]}</p>}
    </div>
  )
}
