import { Controller, Get } from '@nestjs/common';
@Controller('')
export class HelloworldController {

    @Get('hello')
    hello(): string {
      return "Hello";
    }
    @Get('world')
    world(): string {
      return "World";
    }
  
}
