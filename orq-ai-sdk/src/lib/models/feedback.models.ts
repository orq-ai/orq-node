export interface FeedbackReport {
	property: string;
	value: string[];
	trace_id: string;
}

export interface FeedbackResponse {
	id: string;
	product: string;
	property: string;
	trace_id: string;
	value: string[];
}

export interface FeedbackCorrection {
	correction: string;
	trace_id: string;
}

export interface FeedbackCorrectionResponse {
	id: string;
	product: string;
	property: "correction";
	trace_id: string;
	value: string;
}
