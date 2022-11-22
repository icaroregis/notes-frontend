import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Link } from 'react-router-dom';
import CustomHeader from '../../components/CustomHeader';
import CustomTags from '../../components/CustomTags';
import CustomSection from '../../components/CustomSection';

export default function Home() {
  return (
    <Container>
      <div>
        <section>
          <Brand>
            <h1>Almeidanotes</h1>
          </Brand>

          <Menu>
            <li>
              <Link to="">Todos</Link>
            </li>

            <li>
              <Link to="">Frontend</Link>
            </li>

            <li>
              <Link to="">Node</Link>
            </li>

            <li>
              <Link to="">React</Link>
            </li>
          </Menu>
        </section>

        <section>
          <NewNote>Criar Nota</NewNote>
        </section>
      </div>

      <div>
        <CustomHeader />

        <div>
          <Search>
            <input type="text" placeholder="Pesquisar pelo título" />
          </Search>

          <Content>
            <CustomSection title="Minhas Notas">
              <div>
                <h1>React Modal</h1>
                <CustomTags title="React" />
              </div>

              <div>
                <h1>React Modal</h1>
                <CustomTags title="React" />
              </div>
            </CustomSection>
          </Content>
        </div>
      </div>
    </Container>
  );
}
