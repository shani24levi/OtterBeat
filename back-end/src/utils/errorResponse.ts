import { StatusCode } from './statusCode';

class ErrorResponse extends Error {
  public statusCode: StatusCode.Error = StatusCode.Error.Unauthorized;

  constructor(message: string, statusCode: StatusCode.Error) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorResponse;
