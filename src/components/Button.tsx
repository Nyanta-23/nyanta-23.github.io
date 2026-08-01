export default function Button({ children, className = "", ...attributes }: PropsButton) {

  return (
    <button
      type="button"
      className={`cursor-pointer ${className}`}
      {...attributes}
    >
      {children}
    </button>
  )
}