import { Container, Button } from './style.js';
import { Link } from 'react-router-dom';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import CustomTextArea from '../../components/CustomTextArea';
import CustomNoteItem from '../../components/CustomNoteItem';
import CustomSection from '../../components/CustomSection';
import CustomButton from '../../components/CustomButton';

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

          <CustomSection title="Links úteis">
            <CustomNoteItem value="https://icaroregis.github.io/project__portifolio/" />
            <CustomNoteItem placeholder="novo link" isNew />
          </CustomSection>

          <CustomSection title="Marcadores">
            <div className="tags">
              <CustomNoteItem value="react" />
              <CustomNoteItem placeholder="nova tag" isNew />
            </div>
          </CustomSection>

          <CustomButton title="salvar" />
        </form>
      </main>
    </Container>
  );
}
