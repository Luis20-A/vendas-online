import { Input as InputCol, InputProps as InputPropsAntd} from 'antd';
import { BoxInput, TitleInput } from './Input.styles';

interface InputProps extends InputPropsAntd {
    titulo?: string
}

const Input = ({titulo, ...props}: InputProps) => {
    return (
        <BoxInput>
            <TitleInput>{titulo}</TitleInput>
            <InputCol {...props}/>
        </BoxInput>
    
)
};

export default Input;
