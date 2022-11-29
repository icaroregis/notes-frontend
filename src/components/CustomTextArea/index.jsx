import { Container } from './style';

export default function CustomTextArea({ value, ...rest }) {
  return <Container {...rest}>{value}</Container>;
}
