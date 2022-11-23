import { Container } from './style';

//por padrão o componente começa com letra maiúscula, nesse caso podemos "renomear" a propriedade recebia via props com letra minuscula com letra maiúscula.
export default function CustomInput({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}
