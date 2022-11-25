import { Container, Form, Avatar } from './style';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/icaroregis.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <CustomInput placeholder="Nome" type="text" icon={FiUser} />
        <CustomInput placeholder="E-mail" type="text" icon={FiMail} />
        <CustomInput placeholder="Senha atual" type="password" icon={FiLock} />
        <CustomInput placeholder="Nova senha" type="password" icon={FiLock} />

        <CustomButton title="salvar" />
      </Form>
    </Container>
  );
}
