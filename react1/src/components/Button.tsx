

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classnames: string
  children:React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children,classnames ,...props }) => {
  return (
    <button className={`${classnames} text-gray-50 rounded-md px-4 py-2 font-semibold bg-green-500`}  {...props} >
      {children}
    </button>
  );
}

export default Button;