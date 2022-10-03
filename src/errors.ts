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
    this.name = BadRequestError.name;
  }
}

// 401 Unauthorized
export class UnauthorizedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Unauthorized", Status.Unauthorized, options);
    this.name = UnauthorizedError.name;
  }
}

// 402 Payment Required
export class PaymentRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Payment Required", Status.PaymentRequired, options);
    this.name = PaymentRequiredError.name;
  }
}

// 403 Forbidden
export class ForbiddenError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Forbidden", Status.Forbidden, options);
    this.name = ForbiddenError.name;
  }
}

// 404 Not Found
export class NotFoundError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Not Found", Status.NotFound, options);
    this.name = NotFoundError.name;
  }
}

// 405 Method Not Allowed
export class MethodNotAllowedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Method Not Allowed", Status.MethodNotAllowed, options);
    this.name = MethodNotAllowedError.name;
  }
}

// 406 Not Acceptable
export class NotAcceptableError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Not Acceptable", Status.NotAcceptable, options);
    this.name = NotAcceptableError.name;
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
    this.name = ProxyAuthenticationRequiredError.name;
  }
}

// 408 Request Timeout
export class RequestTimeoutError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Request Timeout", Status.RequestTimeout, options);
    this.name = RequestTimeoutError.name;
  }
}

// 409 Conflict
export class ConflictError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Conflict", Status.Conflict, options);
    this.name = ConflictError.name;
  }
}

// 410 Gone
export class GoneError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Gone", Status.Gone, options);
    this.name = GoneError.name;
  }
}

// 411 Length Required
export class LengthRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Length Required", Status.LengthRequired, options);
    this.name = LengthRequiredError.name;
  }
}

// 412 Precondition Failed
export class PreconditionFailedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Precondition Failed", Status.PreconditionFailed, options);
    this.name = PreconditionFailedError.name;
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
    this.name = PayloadTooLargeError.name;
  }
}

// 414 URI Too Long
export class URITooLongError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "URI Too Long", Status.RequestURITooLong, options);
    this.name = URITooLongError.name;
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
    this.name = UnsupportedMediaTypeError.name;
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
    this.name = RangeNotSatisfiableError.name;
  }
}

// 417 Expectation Failed
export class ExpectationFailedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Expectation Failed", Status.ExpectationFailed, options);
    this.name = ExpectationFailedError.name;
  }
}

// 418 I'm a teapot
export class ImATeapotError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "I'm a teapot", Status.Teapot, options);
    this.name = ImATeapotError.name;
  }
}

// 421 Misdirected Request
export class MisdirectedRequestError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Misdirected Request", Status.MisdirectedRequest, options);
    this.name = MisdirectedRequestError.name;
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
    this.name = UnprocessableEntityError.name;
  }
}

// 423 Locked
export class LockedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Locked", Status.Locked, options);
    this.name = LockedError.name;
  }
}

// 424 Failed Dependency
export class FailedDependencyError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Failed Dependency", Status.FailedDependency, options);
    this.name = FailedDependencyError.name;
  }
}

// 425 Too Early
export class TooEarlyError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Too Early", Status.TooEarly, options);
    this.name = TooEarlyError.name;
  }
}

// 426 Upgrade Required
export class UpgradeRequiredError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Upgrade Required", Status.UpgradeRequired, options);
    this.name = UpgradeRequiredError.name;
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
    this.name = PreconditionRequiredError.name;
  }
}

// 429 Too Many Requests
export class TooManyRequestsError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Too Many Requests", Status.TooManyRequests, options);
    this.name = TooManyRequestsError.name;
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
    this.name = RequestHeaderFieldsTooLargeError.name;
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
    this.name = UnavailableForLegalReasonsError.name;
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
    this.name = InternalServerError.name;
  }
}

// 501 Not Implemented
export class NotImplementedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Not Implemented", Status.NotImplemented, options);
    this.name = NotImplementedError.name;
  }
}

// 502 Bad Gateway
export class BadGatewayError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Bad Gateway", Status.BadGateway, options);
    this.name = BadGatewayError.name;
  }
}

// 503 Service Unavailable
export class ServiceUnavailableError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Service Unavailable", Status.ServiceUnavailable, options);
    this.name = ServiceUnavailableError.name;
  }
}

// 504 Gateway Timeout
export class GatewayTimeoutError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Gateway Timeout", Status.GatewayTimeout, options);
    this.name = GatewayTimeoutError.name;
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
    this.name = HTTPVersionNotSupportedError.name;
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
    this.name = VariantAlsoNegotiatesError.name;
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
    this.name = InsufficientStorageError.name;
  }
}

// 508 Loop Detected
export class LoopDetectedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Loop Detected", Status.LoopDetected, options);
    this.name = LoopDetectedError.name;
  }
}

// 510 Not Extended
export class NotExtendedError extends HttpError {
  constructor(message?: string, options?: ErrorOptions) {
    super(message || "Not Extended", Status.NotExtended, options);
    this.name = NotExtendedError.name;
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
    this.name = NetworkAuthenticationRequiredError.name;
  }
}
