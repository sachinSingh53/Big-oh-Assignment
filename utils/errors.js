import { StatusCodes } from 'http-status-codes';

class CustomError extends Error {
  constructor(message, comingFrom) {
    super(message);
    this.comingFrom = comingFrom;
  }

  serializeErrors() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
      comingFrom: this.comingFrom,
    };
  }
}

class BadRequestError extends CustomError {
  constructor(message, comingFrom) {
    super(message, comingFrom);
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.status = 'error';
  }
}

class NotFoundError extends CustomError {
  constructor(message, comingFrom) {
    super(message, comingFrom);
    this.statusCode = StatusCodes.NOT_FOUND;
    this.status = 'error';
  }
}

class NotAuthorizedError extends CustomError {
  constructor(message, comingFrom) {
    super(message, comingFrom);
    this.statusCode = StatusCodes.UNAUTHORIZED;
    this.status = 'error';
  }
}

class FileTooLargeError extends CustomError {
  constructor(message, comingFrom) {
    super(message, comingFrom);
    this.statusCode = StatusCodes.REQUEST_TOO_LONG;
    this.status = 'error';
  }
}

class ServerError extends CustomError {
  constructor(message, comingFrom) {
    super(message, comingFrom);
    this.statusCode = StatusCodes.SERVICE_UNAVAILABLE;
    this.status = 'error';
  }
}

export {
  CustomError,
  BadRequestError,
  NotFoundError,
  NotAuthorizedError,
  FileTooLargeError,
  ServerError,
};
