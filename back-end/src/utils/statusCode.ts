export namespace StatusCode {
  export enum Error {
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ServerError = 500,
  }
  export enum Success {
    OK = 200,
    Created = 201,
    Accepted = 202,
    Content = 204,
  }
}
