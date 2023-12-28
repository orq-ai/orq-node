import axios from 'axios';

export function isOrquestaError(payload: any): payload is OrquestaError {
  if (payload === null || payload === undefined) {
    return false;
  }

  return ['code', 'error', 'source'].every((key) => key in payload);
}

export function handleRequestError(err: unknown) {
  if (axios.isAxiosError(err)) {
    if (isOrquestaError(err.response?.data)) {
      const { code, error, source } = err.response.data;
      throw new OrquestaError(error, code, source);
    }
    throw new OrquestaError(
      'Unexpected error occurred',
      err.response?.status ?? 500
    );
  }

  throw new OrquestaError('Unexpected error occurred', 500);
}

class OrquestaError extends Error {
  constructor(
    public error: string,
    public code: number,
    public source?: string
  ) {
    super(error);
    this.name = 'OrquestaError';
    this.message = `[${source ?? 'Orquesta'}][${code}]: ${error}`;
  }
}
