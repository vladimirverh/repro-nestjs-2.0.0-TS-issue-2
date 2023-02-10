import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AppService } from './app.service';
import { AccountingStatsTotalsDto } from './accounting-stats-totals.dto';
import * as Currency from 'currency.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const test = await this.httpService.get('https://www.google.com/').toPromise();
    console.log(`TEST: ${JSON.stringify(test.statusText)}`);
    return this.appService.getHello();
  }

  @Get('accounting-stats-totals')
  @UseInterceptors(ClassSerializerInterceptor)
  async getAccountingStatsTotals(): Promise<AccountingStatsTotalsDto> {
    return new AccountingStatsTotalsDto({
      totalBookSize: Currency(0),
      totalBookSizeEligible: Currency(1),
    });
  }
}
