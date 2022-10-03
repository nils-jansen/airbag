import { Status } from "./deps.ts";

export abstract class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number, options?: ErrorOptions) {
    super(message, options);
    this.statusCode = statusCode;
  }
}

// 400 Bad Request
export class BadRequestError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Bad Request", Status.BadRequest, options);
  }
}

// 401 Unauthorized
export class UnauthorizedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Unauthorized", Status.Unauthorized, options);
  }
}

// 402 Payment Required
export class PaymentRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Payment Required", Status.PaymentRequired, options);
  }
}

// 403 Forbidden
export class ForbiddenError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Forbidden", Status.Forbidden, options);
  }
}

// 404 Not Found
export class NotFoundError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Not Found", Status.NotFound, options);
  }
}

// 405 Method Not Allowed
export class MethodNotAllowedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Method Not Allowed", Status.MethodNotAllowed, options);
  }
}

// 406 Not Acceptable
export class NotAcceptableError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Not Acceptable", Status.NotAcceptable, options);
  }
}

// 407 Proxy Authentication Required
export class ProxyAuthenticationRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Proxy Authentication Required",
      Status.ProxyAuthRequired,
      options
    );
  }
}

// 408 Request Timeout
export class RequestTimeoutError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Request Timeout", Status.RequestTimeout, options);
  }
}

// 409 Conflict
export class ConflictError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Conflict", Status.Conflict, options);
  }
}

// 410 Gone
export class GoneError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Gone", Status.Gone, options);
  }
}

// 411 Length Required
export class LengthRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Length Required", Status.LengthRequired, options);
  }
}

// 412 Precondition Failed
export class PreconditionFailedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Precondition Failed", Status.PreconditionFailed, options);
  }
}

// 413 Payload Too Large
export class PayloadTooLargeError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Payload Too Large",
      Status.RequestEntityTooLarge,
      options
    );
  }
}

// 414 URI Too Long
export class URITooLongError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "URI Too Long", Status.RequestURITooLong, options);
  }
}

// 415 Unsupported Media Type
export class UnsupportedMediaTypeError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Unsupported Media Type",
      Status.UnsupportedMediaType,
      options
    );
  }
}

// 416 Range Not Satisfiable
export class RangeNotSatisfiableError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Range Not Satisfiable",
      Status.RequestedRangeNotSatisfiable,
      options
    );
  }
}

// 417 Expectation Failed
export class ExpectationFailedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Expectation Failed", Status.ExpectationFailed, options);
  }
}

// 418 I'm a teapot
export class ImATeapotError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "I'm a teapot", Status.Teapot, options);
  }
}

// 421 Misdirected Request
export class MisdirectedRequestError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Misdirected Request", Status.MisdirectedRequest, options);
  }
}

// 422 Unprocessable Entity
export class UnprocessableEntityError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Unprocessable Entity",
      Status.UnprocessableEntity,
      options
    );
  }
}

// 423 Locked
export class LockedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Locked", Status.Locked, options);
  }
}

// 424 Failed Dependency
export class FailedDependencyError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Failed Dependency", Status.FailedDependency, options);
  }
}

// 425 Too Early
export class TooEarlyError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Too Early", Status.TooEarly, options);
  }
}

// 426 Upgrade Required
export class UpgradeRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Upgrade Required", Status.UpgradeRequired, options);
  }
}

// 428 Precondition Required
export class PreconditionRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Precondition Required",
      Status.PreconditionRequired,
      options
    );
  }
}

// 429 Too Many Requests
export class TooManyRequestsError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Too Many Requests", Status.TooManyRequests, options);
  }
}

// 431 Request Header Fields Too Large
export class RequestHeaderFieldsTooLargeError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Request Header Fields Too Large",
      Status.RequestHeaderFieldsTooLarge,
      options
    );
  }
}

// 451 Unavailable For Legal Reasons
export class UnavailableForLegalReasonsError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Unavailable For Legal Reasons",
      Status.UnavailableForLegalReasons,
      options
    );
  }
}

// 500 Internal Server Error
export class InternalServerError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Internal Server Error",
      Status.InternalServerError,
      options
    );
  }
}

// 501 Not Implemented
export class NotImplementedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Not Implemented", Status.NotImplemented, options);
  }
}

// 502 Bad Gateway
export class BadGatewayError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Bad Gateway", Status.BadGateway, options);
  }
}

// 503 Service Unavailable
export class ServiceUnavailableError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Service Unavailable", Status.ServiceUnavailable, options);
  }
}

// 504 Gateway Timeout
export class GatewayTimeoutError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Gateway Timeout", Status.GatewayTimeout, options);
  }
}

// 505 HTTP Version Not Supported
export class HTTPVersionNotSupportedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "HTTP Version Not Supported",
      Status.HTTPVersionNotSupported,
      options
    );
  }
}

// 506 Variant Also Negotiates
export class VariantAlsoNegotiatesError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Variant Also Negotiates",
      Status.VariantAlsoNegotiates,
      options
    );
  }
}

// 507 Insufficient Storage
export class InsufficientStorageError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Insufficient Storage",
      Status.InsufficientStorage,
      options
    );
  }
}

// 508 Loop Detected
export class LoopDetectedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Loop Detected", Status.LoopDetected, options);
  }
}

// 510 Not Extended
export class NotExtendedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Not Extended", Status.NotExtended, options);
  }
}

// 511 Network Authentication Required
export class NetworkAuthenticationRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(
      message || "Network Authentication Required",
      Status.NetworkAuthenticationRequired,
      options
    );
  }
}
