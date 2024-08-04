import { createHttpRequest } from "../../http";
import type { Contact } from "../../models";

const CONTACTS_API = "v2/contacts";

/**
 * Creates a new contact.
 * @param payload - The contact data to be created.
 * @returns A promise that resolves to the created contact.
 */
export class Contacts {
	async create(payload: Omit<Contact, "id">): Promise<Contact> {
		const response = await createHttpRequest({
			method: "POST",
			url: CONTACTS_API,
			data: payload,
		});

		return await response.json();
	}
}
