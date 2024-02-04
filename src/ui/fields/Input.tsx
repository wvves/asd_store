import React, { ChangeEvent } from 'react';
import classes from './input.module.css';

export interface FieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  availableChars?: RegExp;
}

export const Input: React.FC<FieldProps> = ({
  label,
  onChange,
  availableChars,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={classes.fd_box}>
      <input
        ref={inputRef}
        className={classes.fd_input}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (!!onChange && !event.target.value) return onChange(event);
          if (!!onChange && event.target.value) return onChange(event);
        }}
        {...props}
      />
      <label htmlFor={props.id} className={classes.fd_label}>
        {label}
      </label>
    </div>
  );
};
