import { Deployment } from "./api";
import { Feedback } from "./api/feedback";
import type { OrqAIClientOptions, UserInfo } from "./models";
import { Store } from "./utils";

export function createClient(options: OrqAIClientOptions): Client {
	return new Client(options.apiKey, options.environment);
}

export class Client {
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
		return new Deployment();
	}

	get feedback() {
		return new Feedback();
	}
}
