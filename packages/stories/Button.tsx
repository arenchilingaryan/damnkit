import React from 'react';
import { css } from '@emotion/react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}
const style = css`
  color: red;
`;

const SomeComponent = ({ children }: React.PropsWithChildren) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <SomeComponent>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </SomeComponent>
  );
};
