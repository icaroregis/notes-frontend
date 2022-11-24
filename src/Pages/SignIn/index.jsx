import { Container, Form } from './style';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { FiMail, FiLock } from 'react-icons/fi';

export default function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Almeida Notes</h1>
        <p>Aplicação para salvar e gereniar seus links</p>

        <h2>Faça seu login</h2>

        <CustomInput placeholder="E-mail" type="text" icon={FiMail} />
        <CustomInput placeholder="Senha" type="password" icon={FiLock} />
        <CustomInput placeholder="Senha" type="password" icon={FiLock} />

        <CustomButton title="Entrar" loading />
      </Form>
    </Container>
  );
}
