import { Deployment } from "./api";
import { Contacts } from "./api/contacts";
import { Feedback } from "./api/feedback";
import { Webhooks } from "./api/webhooks";
import type { Contact, OrqAIClientOptions, UserInfo } from "./models";
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

	/* @deprecated
	 * Use setContact instead
	 */
	public setUser(info: UserInfo) {
		Store.userInfo = info;
	}

	public async setContact(contact: Omit<Contact, "id">) {
		Store.contactId = contact.external_id;
		await this.contacts.create(contact);
	}

	get deployments() {
		return new Deployment();
	}

	get feedback() {
		return new Feedback();
	}

	get webhooks() {
		return new Webhooks();
	}

	get contacts() {
		return new Contacts();
	}
}
