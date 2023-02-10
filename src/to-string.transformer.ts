import { TransformFnParams } from 'class-transformer';

export const ToStringTransformer = ({ value }: TransformFnParams) => {
  if (value) {
    return value.toString();
  }
};
