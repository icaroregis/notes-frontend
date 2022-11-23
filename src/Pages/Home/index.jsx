import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import CustomTextButton from '../../components/CustomTextButtom';
import CustomHeader from '../../components/CustomHeader';
import CustomSection from '../../components/CustomSection';
import CustomInput from '../../components/CustomInput';
import CustomNote from '../../components/CustomNote';

export default function Home() {
  return (
    <Container>
      <section>
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
      </section>

      <section>
        <div>
          <CustomHeader />

          <Search>
            <CustomInput placeholder="Pesquisar pelo título." />
          </Search>
        </div>

        <div>
          <Content>
            <CustomSection title="Minhas Notas">
              <CustomNote
                data={{
                  title: 'React',
                  tags: [
                    { id: 1, name: 'react' },
                    { id: 2, name: 'node js' },
                  ],
                }}
              />
              <CustomNote
                data={{
                  title: 'React',
                  tags: [
                    { id: 1, name: 'react' },
                    { id: 2, name: 'node js' },
                  ],
                }}
              />
              <CustomNote
                data={{
                  title: 'React',
                  tags: [
                    { id: 1, name: 'react' },
                    { id: 2, name: 'node js' },
                  ],
                }}
              />
              <CustomNote
                data={{
                  title: 'React',
                  tags: [
                    { id: 1, name: 'react' },
                    { id: 2, name: 'node js' },
                  ],
                }}
              />
            </CustomSection>
          </Content>
        </div>
      </section>
    </Container>
  );
}
