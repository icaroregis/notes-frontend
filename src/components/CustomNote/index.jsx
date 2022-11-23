import { Container } from './style';
import CustomTags from '../CustomTags';

export default function CustomNote({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data ? data.title : ''}</h1>

      {data && data.tags && (
        <footer>
          {data.tags.map((tag) => {
            return (
              <div key={tag.name}>
                <CustomTags title={tag.name} />
              </div>
            );
          })}
        </footer>
      )}
    </Container>
  );
}
