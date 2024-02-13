import { Deployments } from "./api";
import { OrquestaClientOptions, UserInfo } from "./models";
import { Store } from "./utils";

export function createClient(options: OrquestaClientOptions): Client {
	return new Client(options);
}

class Client {
	#deployments: Deployments | null = null;

	constructor(private options: OrquestaClientOptions) {
		Store.apiKey = options.apiKey;
		Store.environment = options.environment;
	}

	public setUser(info: UserInfo) {
		Store.userInfo = info;
	}

	get deployments() {
		if (!this.#deployments) {
			this.#deployments = new Deployments();
		}

		return this.#deployments;
	}
}
