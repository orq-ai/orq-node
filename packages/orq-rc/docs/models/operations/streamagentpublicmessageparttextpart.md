# StreamAgentPublicMessagePartTextPart

Text content part. Use this to send text messages to the agent.

## Example Usage

```typescript
import { StreamAgentPublicMessagePartTextPart } from "@orq-ai/node/models/operations";

let value: StreamAgentPublicMessagePartTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                     | [operations.StreamAgentPublicMessagePartKind](../../models/operations/streamagentpublicmessagepartkind.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `text`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |