import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  obterTodos(): Promise<Product[]> {
    return this.productsService.getAll();
  }
  @Get(':id')
  obterUm(@Param() params): Promise<Product> {
    return this.productsService.getOne(params.id);
  }
  @Post()
  criar(@Body() product: Product) {
    this.productsService.create(product);
  }
  @Put()
  alterar(@Body() product): Promise<[number]> {
    return this.productsService.change(product);
  }
  @Delete(':id')
  apagar(@Param() params) {
    this.productsService.delete(params.id);
  }
}
