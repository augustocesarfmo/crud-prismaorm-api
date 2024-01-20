import fastify from "fastify";
import { prisma } from "./lib/prisma";

import { Prisma } from "@prisma/client";

export const app = fastify({ logger: true });

app.get("/products", async (req, res) => {
  const result = await prisma.product.findMany();
  return result;
});

app.post<{
  Body: Prisma.ProductCreateInput;
}>(`/products`, async (req, res) => {
  const result = await prisma.product.create({
    data: req.body,
  });

  return result;
});

app.put<{
  Params: { productId: string };
  Body: Prisma.ProductUpdateInput;
}>("/products/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await prisma.product.update({
      where: { id: productId },
      data: req.body,
    });

    return product;
  } catch (error) {
    return {
      error: `Product with ID ${productId} does not exist in the database`,
    };
  }
});

app.delete<{
  Params: { productId: string };
}>(`/products/:productId`, async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    return product;
  } catch (error) {
    return {
      error: `Product with ID ${productId} does not exist in the database`,
    };
  }
});
