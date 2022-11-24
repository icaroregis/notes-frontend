import { Container, Form, Background } from './style';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

export default function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Almeida Notes</h1>
        <p>Aplicação para salvar e gereniar seus links</p>

        <h2>Crie sua conta</h2>

        <CustomInput placeholder="Nome" type="text" icon={FiUser} />
        <CustomInput placeholder="E-mail" type="text" icon={FiMail} />
        <CustomInput placeholder="Senha" type="password" icon={FiLock} />

        <CustomButton title="Cadastrar" loading />

        <Link to="/">Voltar para o login</Link>
      </Form>

      <Background />
    </Container>
  );
}
