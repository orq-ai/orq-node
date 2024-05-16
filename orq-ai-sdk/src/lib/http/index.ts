// Create a function that allow to create an http request with axios
export async function createHttpRequest<T extends { [key: string]: any }>({
	url,
	apiKey,
	data,
}: {
	method: string;
	url: string;
	apiKey: string;
	data?: T;
}) {
	return fetch(`https://api.orq.ai/v2/${url}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${apiKey}`,
			...(data?.["stream"] && { Accept: "text/event-stream" }),
		},
		body: JSON.stringify(data),
	});
}
