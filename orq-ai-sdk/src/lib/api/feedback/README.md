# Feedback

The Feedback class in the orq.ai Node SDK allows you to send feedback reports and corrections to the orq.ai API. This is useful for improving the quality of AI-generated content and tracking user interactions with your AI applications.

## Installation

The Feedback class is included in the main orq.ai Node SDK. If you haven't already installed the SDK, you can do so using npm or yarn:

```bash
npm install @orq-ai/node
```

or

```bash
yarn add @orq-ai/node
```

## Usage

First, initialize the orq.ai client with your API key:

```typescript
import { createClient } from '@orq-ai/node';

const client = createClient({
  apiKey: 'your-orq-api-key',
  environment: 'production',
});
```

### Sending a Feedback Report

To send a feedback report, use the `report` method of the client.feedback:

```typescript
const reportPayload: FeedbackReport = {
  property: 'rating',
  values: ['good'],
  trace_id: 'unique-trace-id',
};

try {
  const response = await client.feedback.report(reportPayload);
  console.log('Feedback report sent:', response);
} catch (error) {
  console.error('Error sending feedback report:', error);
}
```

### Sending a Correction

To send a correction, use the `correct` method of the `client.feedback`:

```typescript
const correctionPayload: FeedbackCorrection = {
  correction: 'This is the corrected text for the AI-generated content.',
  trace_id: 'unique-trace-id',
};

try {
  const response = await client.feedback.correct(correctionPayload);
  console.log('Correction sent:', response);
} catch (error) {
  console.error('Error sending correction:', error);
}
```

## More information

When your workspace is created, a set of feedback properties and values is automatically added. There are three default properties we add to every workspace: `rating`, `defects`, and `interactions`.

## Rating (rating)

| Value | Description                               |
| ----- | ----------------------------------------- |
| good  | The response was helpful and accurate.    |
| bad   | The response was unhelpful or inaccurate. |

### Example

```typescript
// Correction property only accept one value at a time

const feedbackPayload: FeedbackReport = {
  property: 'rating',
  value: ['good'], // or ['bad']
  trace_id: 'unique-trace-id',
};

await client.feedback.report(feedbackPayload);
```

## Defects (defects)

| Value          | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| grammatical    | Flag for responses that contain grammatical errors.                     |
| spelling       | Flag for responses that contain spelling errors.                        |
| hallucination  | Flag for responses that contain hallucinations or factual inaccuracies. |
| repetition     | Flag for responses that contain unnecessary repetition.                 |
| inappropriate  | Flag for responses that are deemed inappropriate or offensive.          |
| off_topic      | Flag for responses that do not address the user's query.                |
| incompleteness | Flag for responses that are incomplete or partially address the query.  |
| ambiguity      | Flag for responses that are vague or unclear.                           |

#### Example

```typescript
const feedbackPayload: FeedbackReport = {
  property: 'defects',
  value: ['grammatical', 'hallucination'], // Can include multiple defects
  trace_id: 'unique-trace-id',
};

await client.feedback.report(feedbackPayload);
```

#### Interactions (interactions)

| Value    | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| saved    | Indicates if the user saved the response                           |
| selected | Indicates if the user selected this response from multiple options |
| deleted  | Indicates if the user deleted or discarded the response            |
| shared   | Indicates if the user shared the response with others              |
| copied   | Indicates if the user copied the response for use elsewhere        |
| reported | Indicates if the user reported this response for review            |

#### Example

```typescript
const feedbackPayload: FeedbackReport = {
  property: 'interactions',
  value: ['saved', 'copied'], // Can include multiple interactions
  trace_id: 'unique-trace-id',
};

await feedback.report(feedbackPayload);
```

## Best Practices

1. Always make sure to include the `trace_id` in your feedback reports and corrections to associate them with the corresponding model generated response.

2. Handle errors appropriately when sending feedback or corrections, as network issues.

3. Use the feedback functionality in conjunction with the Deployments API to create a comprehensive system for improving AI-generated content based on user interactions.

4. Is important to note that if you send a `property` or an option in the `value` array that does not exists in your workspace, the request will be rejected.

## API Reference

### `report(payload: FeedbackReport): Promise<FeedbackResponse>`

Sends a feedback report to the orq.ai API.

- `payload`: An object containing the following properties:
  - `property`: string - The property which the feedback value refers to
  - `value`: string[] - An array of strings describing the values to be reported
  - `trace_id`: string - The unique identifer returned by the `client.deployments.invoke` or the `client.deployments.getConfig` methods.

Returns a Promise that resolves to a `FeedbackResponse` object.

### `correct(payload: FeedbackCorrection): Promise<FeedbackCorrectionResponse>`

Sends a correction for AI-generated content to the orq.ai API.

- `payload`: An object containing the following properties:
  - `correction`: string - The value of the correction provided by the user or custom implementation
  - `trace_id`: string - The unique identifer returned by the `client.deployments.invoke` or the `client.deployments.getConfig` methods.

Returns a Promise that resolves to a `FeedbackCorrectionResponse` object.

## Disclaimer

This functionality is currently in beta and may change in the future. If you have any questions or feedback, please contact us at our [Support Center](https://orq.atlassian.net/servicedesk/customer/portals)
