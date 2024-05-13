
function Input({name,placeholder,type,required}) {
  return <input  name={name}
                placeholder={placeholder}
                type={type}
                required={required}
            className="dark:bg-dark-200
                        dark:text-gray-200
                        text-dark-100
                        rounded-full
                        px-4
                        py-2
                        pl-5
                        outline-none
                        w-80
                        placeholder:text-gray-400
                        placeholder:dark:text-gray-600
                        placeholder:text-xs
                        placeholder:uppercase
                        placeholder:font-bold
                        focus: border-2
                        focus:border-proje-100
                        focus:dark:border-proje-200
                        focus:invalid:border-red-500
                        dark:focus:invalid:border-red-500
                        "

          />
}

export default Input;