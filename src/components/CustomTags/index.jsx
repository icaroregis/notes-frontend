import { Span } from './style';

export default function CustomTags({ title, ...rest }) {
  return <Span {...rest}>{title}</Span>;
}
