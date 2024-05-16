import { parseJson, safeJSONParse } from "./";

describe("safeJSONParse", () => {
	it("should return undefined when input is empty", () => {
		const input = "";
		const result = safeJSONParse(input);
		expect(result).toBeUndefined();
	});

	it("should return undefined when input is '[DONE]'", () => {
		const input = "[DONE]";
		const result = safeJSONParse(input);
		expect(result).toBeUndefined();
	});

	it("should parse valid JSON input", () => {
		const input = '{"name": "John", "age": 30}';
		const result = safeJSONParse(input);
		expect(result).toEqual({ name: "John", age: 30 });
	});

	it("should fallback to parseJson method when JSON parsing fails", () => {
		const input = '{"name": "John", "age": 30,}';
		const result = safeJSONParse(input);
		expect(result).toEqual(parseJson(input));
	});
});

describe("parseJson", () => {
	it("should parse valid JSON input", () => {
		const input = '{"name": "John", "age": 30}';
		const result = parseJson(input);
		expect(result).toEqual([{ name: "John", age: 30 }]);
	});

	it("should handle multiple JSON objects in the input", () => {
		const input = '{"name": "John"}{"name": "Jane"}';
		const result = parseJson(input);
		expect(result).toEqual([{ name: "John" }, { name: "Jane" }]);
	});

	it("should ignore invalid JSON objects", () => {
		const input = '{"name": "John"}{name: "Jane"}';
		const result = parseJson(input);
		expect(result).toEqual([{ name: "John" }]);
	});
});
