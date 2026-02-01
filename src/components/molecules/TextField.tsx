import React, { type ChangeEvent } from 'react'

interface TextFieldProps {
  icon: React.ComponentType<any>,
  label: string,
  required?: boolean,
  value: string,
  type?: string,
  placeholder?: string,
  onChange?: (event: ChangeEvent<any>) => void
}

function TextField({ 
  icon: Icon, 
  label, 
  required, 
  value, 
  type = 'text',
  placeholder = '',
  onChange
}: TextFieldProps) {
  return (
    <>
      <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <Icon className="size-4" />
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <input 
        placeholder={placeholder}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm" 
        required={required}
        type={type}
        value={value}
        onChange={onChange} 
      />
    </>
  )
}

export default TextField