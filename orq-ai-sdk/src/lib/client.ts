import { Deployment } from "./api";
import type { OrqAIClientOptions, UserInfo } from "./models";
import { Store } from "./utils";

export function createClient(options: OrqAIClientOptions): Client {
	return new Client(options.apiKey, options.environment);
}

export class Client {
	#deployments: Deployment | null = null;

	constructor(
		protected apiKey: string,
		protected environment?: string,
	) {
		Store.apiKey = apiKey;
		Store.environment = environment;
	}

	public setUser(info: UserInfo) {
		Store.userInfo = info;
	}

	get deployments() {
		if (!this.#deployments) {
			this.#deployments = new Deployment();
		}

		return this.#deployments;
	}
}
