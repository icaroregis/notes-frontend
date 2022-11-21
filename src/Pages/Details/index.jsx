import { Container, Links, Content } from './style';
import CustomButton from '../../components/CustomButton';
import CustomHeader from '../../components/CustomHeader';
import CustomSection from '../../components/CustomSection';
import CustomTags from '../../components/CustomTags';
import CustomTextButton from '../../components/CustomTextButtom';

export default function Details() {
  return (
    <Container>
      <CustomHeader />

      <main>
        <Content>
          <CustomTextButton title="Excluir Nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nobis. Facere illum, necessitatibus, explicabo, enim nisi vitae quidem iste optio architecto hic veniam sint unde alias.
            Asperiores eveniet unde, neque voluptatem hic et sit explicabo totam voluptatum facilis, accusantium laudantium dolor delectus consequuntur deleniti fugiat nesciunt, necessitatibus quia?
            Ratione, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut atque in qui, adipisci vel aliquid tenetur labore repudiandae, sunt, eum mollitia. Accusamus iste
            odit, incidunt ipsam non asperiores maxime recusandae quod facere iusto sunt itaque dolor obcaecati quas sit eveniet ab voluptatum possimus vitae quis? Officia, pariatur quas? Porro.
          </p>

          <CustomSection title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </CustomSection>

          <CustomSection title="Marcadores">
            <CustomTags title="express" />
            <CustomTags title="node" />
          </CustomSection>

          <CustomButton title="Entrar" loading />
        </Content>
      </main>
    </Container>
  );
}
