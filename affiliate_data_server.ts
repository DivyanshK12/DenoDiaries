import {
  Application,
  Router,
  Status,
} from "https://deno.land/x/oak@v6.5.0/mod.ts";
import * as log from "https://deno.land/std@0.89.0/log/mod.ts";
import { Product } from "./products.ts";

const productsJson = await Deno.readTextFile("affiliate_products.json");
const productsArray = JSON.parse(productsJson) as Product[];

const router = new Router();
router
  .get("/products", (context: any) => {
    context.response.body = JSON.stringify(productsArray, null, "  ");
    log.info("Returning all products");
  })
  .get("/products/:id", (context: any) => {
    // deno-fmt-ignore
    const requestedProduct = productsArray.find(p => p.productId == context.params.id);
    if (requestedProduct) {
      context.response.body = JSON.stringify(requestedProduct, null, "  ");
      log.info(`Returning product : ${requestedProduct.name}`);
    } else {
      context.response.status = Status.NotFound;
      log.error(`Requested product ${context.params.id} not found`);
    }
  });
// can be made more secure
// have read write and delete, here only read

const app = new Application();
app.use(router.routes());

log.info("Listening for requests");

await app.listen({ port: 8000 });
