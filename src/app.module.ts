import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService],
})
export class AppModule {}
