import React, { HTMLInputTypeAttribute } from "react"

import cx from "classnames"

interface Input {
  value: string | number
  onChange: () => void
  label: string
  type: HTMLInputTypeAttribute
  name: string
  id: string
  errors: [] | [string]
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
}: Input) {
  return (
    <div>
      <div
        className={cx(
          errors.length > 0 && "border-red-300 focus-within:border-red-400"
        )}
      >
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
      {errors && (
        <p className="mt-2 text-xs text-red-500" id={`${id}-error`}>
          {errors[0]}
        </p>
      )}
    </div>
  )
}
