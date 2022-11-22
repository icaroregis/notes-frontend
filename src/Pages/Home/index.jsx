import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import CustomTextButton from '../../components/CustomTextButtom';
import CustomHeader from '../../components/CustomHeader';
import CustomTags from '../../components/CustomTags';
import CustomSection from '../../components/CustomSection';
import CustomInput from '../../components/CustomInput';

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
              <CustomTextButton title="Todos" isActive />
            </li>

            <li>
              <CustomTextButton title="Frontend" />
            </li>

            <li>
              <CustomTextButton title="NodeJs" />
            </li>

            <li>
              <CustomTextButton title="ReactJs" />
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
            <CustomInput placeholder="Pesquisar pelo título." />
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
