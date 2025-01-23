import { ButtonProps } from "antd"
import { ButtonAntd } from "./button.style"


const Button = ({...props}: ButtonProps) => {
    return (
        <ButtonAntd {...props}></ButtonAntd>
    )
}

export default Button