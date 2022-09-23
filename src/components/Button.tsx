import { ReactNode, CSSProperties } from 'react';

type Props = {
  onClick: () => void;
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg'
  testId: string
  style?: CSSProperties
}

const SIZE_MAP = {
  sm: 'py-1 px-3',
  md: 'py-2 px-4',
  lg: 'py-4 px-6'
}

function Button({
  onClick,
  children,
  testId='button',
  size = 'md',
  ...props
}: Props) {

  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${SIZE_MAP[size]} rounded`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;