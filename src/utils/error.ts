//class for customized errors
export class CustomError extends Error {
  statusCode: number;
  errors?: Record<string, string>;

  constructor(message: string, statusCode = 400, errors?: Record<any, any>) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

//class for handling duplicate errors
export class DuplicateError extends Error {
  statusCode: number;
  errors?: Record<string, string>;

  constructor(message: string, statusCode = 409, errors?: Record<any, any>) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
