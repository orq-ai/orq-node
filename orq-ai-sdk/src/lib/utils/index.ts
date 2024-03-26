import type { OrqAIClientOptions, UserInfo } from "../models";

export function extractSSEData(input: string): string {
	const entries = input.split("\n\n");
	return entries.map((entry) => entry.replace(/^data: /, "").trim()).join("");
}

export function safeJSONParse(input: string) {
	const cleanedInput = input.replace(/\[DONE\]/g, "");

	if (!cleanedInput || cleanedInput === "[DONE]") {
		return [];
	}

	return parseJson(cleanedInput);
}

export function parseJson(input: string) {
	const results = [];
	let braceCount = 0;
	let currentObject = "";
	let inString = false;

	for (const char of input) {
		if (char === '"' && currentObject[currentObject.length - 1] !== "\\") {
			inString = !inString;
		}

		if (char === "{" && !inString) {
			braceCount++;
		}
		if (char === "}" && !inString) {
			braceCount--;
		}

		currentObject += char;

		if (braceCount === 0 && currentObject !== "") {
			try {
				const parsed = JSON.parse(currentObject);
				results.push(parsed);
			} catch (e) {
				// eslint-disable-next-line no-console
				continue;
			}
			currentObject = "";
		}
	}

	return results;
}
export const Store: OrqAIClientOptions & { userInfo?: UserInfo } =
	{} as OrqAIClientOptions;
