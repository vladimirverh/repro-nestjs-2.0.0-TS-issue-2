import { Expose, Transform, Type } from 'class-transformer';
import * as Currency from 'currency.js';
import { ToStringTransformer } from './to-string.transformer';

export class AccountingStatsTotalsDto {
  // Total Book Size

  @Expose()
  @Type(() => String)
  @Transform(ToStringTransformer)
  totalBookSize?: Currency;

  @Expose()
  @Type(() => String)
  @Transform(ToStringTransformer)
  totalBookSizeEligible?: Currency;

  constructor(partial: Partial<AccountingStatsTotalsDto>) {
    Object.assign(this, partial);
  }
}
