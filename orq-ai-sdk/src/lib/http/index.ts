import { Store } from "../utils";

// Create a function that allow to create an http request with axios
export async function createHttpRequest<T extends { [key: string]: any }>({
	method = "POST",
	url,
	data,
}: {
	method: string;
	url: string;
	data?: T;
}) {
	return fetch(`https://api.orq.ai/${url}`, {
		method,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${Store.apiKey}`,
			...(Store.contactId && { "X-Orq-Contact-Id": Store.contactId }),
			...(data?.["stream"] && { Accept: "text/event-stream" }),
		},
		body: JSON.stringify(data),
	});
}
