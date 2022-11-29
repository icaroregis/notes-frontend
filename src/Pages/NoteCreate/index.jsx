import { Container, Button } from './style.js';
import { Link } from 'react-router-dom';
import CustomHeader from '../../components/CustomHeader/index.jsx';
import CustomInput from '../../components/CustomInput/index.jsx';
import CustomTextArea from '../../components/CustomTextArea/index.jsx';

export default function CreateNote() {
  return (
    <Container>
      <header>
        <CustomHeader />
      </header>

      <main>
        <form>
          <div>
            <h1>Criar nota</h1>

            <Button>
              <Link to="/">voltar</Link>
            </Button>
          </div>

          <CustomInput placeholder="Título" />
          <CustomTextArea placeholder="Observações" />
        </form>
      </main>
    </Container>
  );
}
