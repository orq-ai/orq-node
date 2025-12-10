# GenerateConversationNameRequestBody

## Example Usage

```typescript
import { GenerateConversationNameRequestBody } from "@orq-ai/node/models/operations";

let value: GenerateConversationNameRequestBody = {
  context: "What is the weather in San Francisco?",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `context`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | The conversation context (e.g., user message or conversation summary) to generate a display name from | What is the weather in San Francisco?                                                                 |