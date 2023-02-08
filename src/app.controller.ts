import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AppService } from './app.service';

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
}
