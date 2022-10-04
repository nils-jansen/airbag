# Airbag
A simple solution to error handling in [oak](https://github.com/oakserver/oak)

## Usage
```ts
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { Airbag, BadRequestError } from "https://deno.land/x/airbag@0.4/mod.ts";

const app = new Application();
const router = new Router();

// Providing a logger is optional
const loggingFn = (e: Error) => console.log(e);

// Tell your app to use Airbag
const airbag = Airbag(loggingFn);
app.use(airbag);

// Throw an Airbag HTTP Error from anywhere inside a route
router.get("/:domain", async (ctx) => {
  const domain = ctx.params["domain"];
  if(!domain){
    throw new BadRequestError("Domain is required");
  }
  return { domain };
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
```

If no domain is provided in the code sample above, the response will look like this:
```
HTTP Status: 400 Bad Request
Body:
{
    "status": 400,
    "message": "Domain is required"
}
```

In case a non-HTTP error is thrown, `500: Internal Server Error` will be returned. The original error will be logged (if logger was provided), but won't be leaked in the response.
