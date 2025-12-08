# RedactedReasoningPartSchema

A message part containing reasoning or chain-of-thought content

## Example Usage

```typescript
import { RedactedReasoningPartSchema } from "@orq-ai/node/models/components";

let value: RedactedReasoningPartSchema = {
  type: "redacted_reasoning",
  data: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                          | *"redacted_reasoning"*                                                                                          | :heavy_check_mark:                                                                                              | The type of the content part. Always `reasoning`.                                                               |
| `data`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | The encrypted reasoning or thought process behind the response. Used for chain-of-thought or extended thinking. |