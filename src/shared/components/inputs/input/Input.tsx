import { Input as InputCol, InputProps as InputPropsAntd} from 'antd';
import { BoxInput, TitleInput } from './Input.styles';

interface InputProps extends InputPropsAntd {
    titulo?: string
    margin?: string
}

const Input = ({titulo, margin, ...props}: InputProps) => {
    return (
        <BoxInput style={{margin}}>
            <TitleInput>{titulo}</TitleInput>
            <InputCol placeholder={props.title} {...props }/>
        </BoxInput>
    
)
};

export default Input;
