
export const Button = ({customClass,label,...rest}) => {
  return (
    <button className={`bg-purple-900 px-3 py-1 w-12 h-12 border-violet-500 border text-center text-white text-lg hover:bg-purple-700 focus:bg-purple-800 ${customClass}`} {...rest}>{label}</button>
    // <button className={`bg-purple-900 px-3 py-1 w-12 h-12 border-violet-500 border text-center text-white text-lg hover:bg-purple-700 focus:bg-purple-800 ${customClass}`} {...rest}>{label}</button>
    // <button className={`bg-purple-900 px-3 py-1 w-12 h-12 border-violet-500 border text-center text-white text-lg hover:bg-purple-700 focus:bg-purple-800 ${customClass}`} {...rest}>{label}</button>
  )
}
