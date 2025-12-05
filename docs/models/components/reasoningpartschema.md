# ReasoningPartSchema

A message part containing reasoning or chain-of-thought content

## Example Usage

```typescript
import { ReasoningPartSchema } from "@orq-ai/node/models/components";

let value: ReasoningPartSchema = {
  type: "reasoning",
  reasoning: "<value>",
  signature: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `type`                                                                                                | *"reasoning"*                                                                                         | :heavy_check_mark:                                                                                    | The type of the content part. Always `reasoning`.                                                     |
| `reasoning`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | The reasoning or thought process behind the response. Used for chain-of-thought or extended thinking. |
| `signature`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | Optional cryptographic signature to verify the authenticity and integrity of the reasoning content    |