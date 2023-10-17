import { Controller, Get, Post, RawBodyRequest, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('healthz')
  helathCheck(): object {
    return this.appService.healthCheck();
  }
  @Post('calculate')
  calculate(@Req() req: RawBodyRequest<Request>): object {
    const { num1, num2 } = req.body;
    return this.appService.calculate(num1, num2);
  }
}
