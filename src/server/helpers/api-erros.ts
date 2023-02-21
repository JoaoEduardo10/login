export class ApiErros extends Error {
  constructor(message: string, public readonly statusCode: number) {
    super(message);
  }
}

export class Bad_Request extends ApiErros {
  constructor(message: string) {
    super(message, 400);
  }
}

export class Not_Found extends ApiErros {
  constructor(message: string) {
    super(message, 404);
  }
}

export class Anouthorized extends ApiErros {
  constructor(message: string) {
    super(message, 401);
  }
}

export class Internal_Server_Error extends ApiErros {
  constructor(message: string) {
    super(message, 500);
  }
}
