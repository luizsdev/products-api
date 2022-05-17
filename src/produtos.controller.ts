import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'Lista todos os produtos';
  }
  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }
  @Post()
  criar(@Body() req): string {
    console.log(req);
    return 'Produto criado';
  }
  @Put()
  alterar(@Body() req): string {
    console.log(req);
    return 'Produto alterado';
  }
  @Delete(':id')
  apagar(@Param() params): string {
    return `Apaga o produto ${params.id}`;
  }
}
