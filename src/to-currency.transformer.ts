import * as Currency from 'currency.js';
import { TransformFnParams } from 'class-transformer';

export const ToCurrencyTransformer = ({ value }: TransformFnParams) => {
  if (value || typeof value === 'number') {
    return Currency(value);
  }
};
