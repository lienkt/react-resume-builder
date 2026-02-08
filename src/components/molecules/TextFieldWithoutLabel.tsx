import { type ChangeEvent } from 'react'

interface TextFieldWithoutLabelProps {
  required?: boolean,
  value?: string,
  defaultValue?: string,
  type?: string,
  placeholder?: string,
  className?: string,
  onChange?: (event: ChangeEvent<any>) => void
}

function TextFieldWithoutLabel({ 
  className,
  ...restProps
}: TextFieldWithoutLabelProps) {

  const combineClassesInput = `mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm ${className}`

  return (
    <>
      <input 
        className={combineClassesInput}
        {...restProps}
      />
    </>
  )
}

export default TextFieldWithoutLabel