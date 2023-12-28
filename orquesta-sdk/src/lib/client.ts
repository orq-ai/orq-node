import { Deployments } from './api';
import { OrquestaClientOptions } from './models';

export function createClient(options: OrquestaClientOptions): Client {
  return new Client(options);
}

class Client {
  #deployments: Deployments | null = null;

  constructor(private options: OrquestaClientOptions) {}

  get deployments() {
    if (!this.#deployments) {
      this.#deployments = new Deployments(this.options);
    }
    return this.#deployments;
  }
}
