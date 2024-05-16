import { createClient } from "./orq-ai-sdk/src";

async function main() {
	const client = createClient({
		apiKey:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VJZCI6IjY0YWIyNjBlLTllOGMtNDYzNy04ZDI2LTA1YzViYmYwMDA0YiIsImlhdCI6MTY5Nzk3MTQ4ODAzMX0.s-Wl6RWcfmzJpXgN7hr_6faDif4298dd_ZGwpVURKX4",
		environment: "production",
	});

	const config = await client.deployments.getConfig({
		key: "functionCalling",
		context: {
			environments: [],
		},
		inputs: {
			overview:
				"General health for a 30y old. Gym session that also complements his Muay Thai beginner journey and also ads some aesthetic focus on building his chest",
			sessionDate: "2024-05-15",
			preferredWorkoutLength: "60min",
		},
		metadata: {
			"custom-field-name": "custom-metadata-value",
		},
	});
}

main();
