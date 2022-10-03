import { Middleware } from "./deps.ts";
import { HttpError } from "./errors.ts";

export type ErrorLoggingFunction = (error: Error) => void;

export const Airbag: (loggingFunction?: ErrorLoggingFunction) => Middleware =
  (loggingFunction?: ErrorLoggingFunction) => async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      let message = "Internal Server Error";
      let status = 500;
      if (err instanceof HttpError) {
        message = err.message;
        status = err.statusCode;
      }
      if (loggingFunction) loggingFunction(err);
      ctx.response.status = status;
      ctx.response.body = { status, message };
    }
  };
