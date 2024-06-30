import { createHttpRequest } from "../../http";
import type {
	FeedbackCorrection,
	FeedbackCorrectionResponse,
	FeedbackReport,
	FeedbackResponse,
} from "../../models";
import { Store } from "../../utils";

const FEEDBACK_POST = "feedback";

type FeedbackData =
	| FeedbackReport
	| (Omit<FeedbackCorrection, "correction"> & {
			value: string;
			property: "correction";
	  });

export class Feedback {
	#createFeedbackRequest(data: FeedbackData) {
		return createHttpRequest({
			method: "POST",
			apiKey: Store.apiKey,
			url: FEEDBACK_POST,
			data,
		});
	}
	/**
	 * Add a feedback to the log of the llm transaction
	 *
	 * @param {FeedbackReport} payload
	 * @return {*}  {Promise<FeedbackResponse>}
	 * @memberof Feedback
	 */
	async report(payload: FeedbackReport): Promise<FeedbackResponse> {
		const response = await this.#createFeedbackRequest(payload);
		return await response.json();
	}
	/**
	 * Add a correction feedback to the log of the llm transaction
	 *
	 * @param {FeedbackCorrection} payload
	 * @return {*}  {Promise<FeedbackCorrectionResponse>}
	 * @memberof Feedback
	 */
	async correct(
		payload: FeedbackCorrection,
	): Promise<FeedbackCorrectionResponse> {
		const response = await this.#createFeedbackRequest({
			trace_id: payload.trace_id,
			value: payload.correction,
			property: "correction",
		});
		return await response.json();
	}
}
