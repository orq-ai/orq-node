export function isOrqAIError(payload: any): payload is OrqAIError {
	if (payload === null || payload === undefined) {
		return false;
	}

	return ["code", "error", "source"].every((key) => key in payload);
}

export async function handleRequestError(data: unknown) {
	if (isOrqAIError(data)) {
		const { code, error, source } = data;
		throw new OrqAIError(error, code, source);
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
		this.message = `[${source ?? "orq.ai"}][${code}]: ${error}`;
	}
}
