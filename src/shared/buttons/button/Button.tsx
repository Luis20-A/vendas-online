import { ButtonProps } from "antd"
import { ButtonAntd } from "./Button.style"

const Button = ({...props}: ButtonProps) => {
    return (
        <ButtonAntd {...props}></ButtonAntd>
    )
}

export default Button