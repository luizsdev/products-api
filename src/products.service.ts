import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product as Product } from './product.model';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }
  async getOne(id: number): Promise<Product> {
    return this.productModel.findByPk(id);
  }
  async create(product: Product) {
    this.productModel.create(product);
  }
  async change(product: Product): Promise<[number]> {
    return this.productModel.update(product, {
      where: {
        id: product.id,
      },
    });
  }
  async delete(id: number) {
    const product: Product = await this.getOne(id);
    product.destroy();
  }
}
