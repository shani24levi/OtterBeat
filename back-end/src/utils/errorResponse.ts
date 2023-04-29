import { StatusCode } from './statusCode';

class ErrorResponse extends Error {
  public statusCode: StatusCode.Error;

  constructor(message: string, statusCode: StatusCode.Error = StatusCode.Error.Unauthorized) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorResponse;
