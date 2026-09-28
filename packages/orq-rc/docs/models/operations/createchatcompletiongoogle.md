# CreateChatCompletionGoogle

## Example Usage

```typescript
import { CreateChatCompletionGoogle } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionGoogle = {};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `thoughtSignature`                                                                                                                                                    | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Encrypted representation of the model internal reasoning state during function calling. Required by Gemini 3 models when continuing a conversation after a tool call. |