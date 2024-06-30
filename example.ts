import { createClient } from "./orq-ai-sdk/src";

async function main() {
	const client = createClient({
		apiKey:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VJZCI6ImRkOWQ0ZTcxLTYyMzEtNDg3Ny1iYzY5LWE2YjA4MzU0NmYwYSIsImlhdCI6MTY5Nzk3MDU1MjUxOH0.2MsRZGdK78qA4axKbR0sqacVzPVPQiAFwIQGCCjZKBE",
		environment: "production",
	});

	const stream = await client.deployments.invoke({
		key: "20240503-1523_x7qu_58",
		context: {
			environments: [],
		},
		metadata: {
			example: "nodejs",
		},
	});

	if (!stream) return;

	await client.feedback.report({
		property: "rating",
		value: ["good"],
		trace_id: stream.id,
	});

	await client.feedback.report({
		property: "defects",
		value: ["spelling", "off_topic"],
		trace_id: stream.id,
	});

	await client.feedback.correct({
		correction: "Thank you for sharing the video of your workout.",
		trace_id: stream.id,
	});
}

main();
