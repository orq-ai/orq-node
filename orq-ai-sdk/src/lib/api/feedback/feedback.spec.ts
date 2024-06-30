import { beforeEach, describe, expect, it, vi } from "vitest";
import { createHttpRequest } from "../../http";
import type { FeedbackCorrection, FeedbackReport } from "../../models";
import { Feedback } from "./feedback";

// Mock the createHttpRequest function
vi.mock("../http", () => ({
	createHttpRequest: vi.fn(),
}));

// Mock the Store object
vi.mock("../utils", () => ({
	Store: {
		apiKey: "mock-api-key",
	},
}));

describe("Feedback", () => {
	let feedback: Feedback;

	beforeEach(() => {
		feedback = new Feedback();
		vi.clearAllMocks();
	});

	describe("report", () => {
		it("should send a report and return the response", async () => {
			const mockResponse = {
				json: vi.fn().mockResolvedValue({
					id: "123",
					product: "test-product",
					property: "test-property",
					trace_id: "test-trace-id",
					value: ["test-value"],
				}),
			};
			vi.mocked(createHttpRequest).mockResolvedValue(mockResponse);

			const payload: FeedbackReport = {
				property: "test-type",
				value: ["test-value"],
				trace_id: "test-trace-id",
			};

			const result = await feedback.report(payload);

			expect(createHttpRequest).toHaveBeenCalledWith({
				method: "POST",
				apiKey: "mock-api-key",
				url: "feedback",
				data: payload,
			});
			expect(result).toEqual({
				id: "123",
				product: "test-product",
				property: "test-property",
				trace_id: "test-trace-id",
				value: ["test-value"],
			});
		});
	});

	describe("correct", () => {
		it("should send a correction and return the response", async () => {
			const mockResponse = {
				json: vi.fn().mockResolvedValue({
					id: "456",
					product: "test-product",
					property: "correction",
					trace_id: "test-trace-id",
					value: "corrected-value",
				}),
			};
			vi.mocked(createHttpRequest).mockResolvedValue(mockResponse);

			const payload: FeedbackCorrection = {
				correction: "corrected-value",
				trace_id: "test-trace-id",
			};

			const result = await feedback.correct(payload);

			expect(createHttpRequest).toHaveBeenCalledWith({
				method: "POST",
				apiKey: "mock-api-key",
				url: "feedback",
				data: { ...payload, type: "correction" },
			});
			expect(result).toEqual({
				id: "456",
				product: "test-product",
				property: "correction",
				trace_id: "test-trace-id",
				value: "corrected-value",
			});
		});
	});
});
