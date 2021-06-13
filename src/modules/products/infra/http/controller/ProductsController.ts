import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';
import FindAllProductService from '@modules/products/services/FindAllProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity, image } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      price,
      quantity,
      image,
    });

    return response.json(product);
  }

  public async show(_: Request, response: Response): Promise<Response> {
    const productsService = container.resolve(FindAllProductService);

    const products = await productsService.execute();

    return response.json(products);
  }
}
