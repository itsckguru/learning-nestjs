import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  healthCheck(): object {
    return { status: 'ok' };
  }
  calculate(num1: number, num2: number): object {
    return { Total: num1 + num2 };
  }
}
