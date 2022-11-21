import { TextButton } from './style';

export default function CustomTextButton({ title, ...rest }) {
  return (
    <TextButton type="button" {...rest}>
      {title}
    </TextButton>
  );
}
