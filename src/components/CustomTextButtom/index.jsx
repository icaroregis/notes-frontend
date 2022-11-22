import { TextButton } from './style';

export default function CustomTextButton({ title, isActive = false, ...rest }) {
  return (
    <TextButton type="button" isActive={isActive} {...rest}>
      {title}
    </TextButton>
  );
}
