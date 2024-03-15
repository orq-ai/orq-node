import axios from "axios";

export function isOrqAIError(payload: any): payload is OrqAIError {
	if (payload === null || payload === undefined) {
		return false;
	}

	return ["code", "error", "source"].every((key) => key in payload);
}

export function handleRequestError(err: unknown) {
	if (axios.isAxiosError(err)) {
		if (err.response && isOrqAIError(err.response.data)) {
			const { code, error, source } = err.response.data;
			throw new OrqAIError(error, code, source);
		}
		throw new OrqAIError(
			"Unexpected error occurred",
			err.response?.status ?? 500,
		);
	}

	throw new OrqAIError("Unexpected error occurred", 500);
}

class OrqAIError extends Error {
	constructor(
		public error: string,
		public code: number,
		public source?: string,
	) {
		super(error);
		this.name = "OrqAIError";
		this.message = `[${source ?? "OrqAI"}][${code}]: ${error}`;
	}
}
