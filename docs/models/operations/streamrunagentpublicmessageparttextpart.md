# StreamRunAgentPublicMessagePartTextPart

Text content part. Use this to send text messages to the agent.

## Example Usage

```typescript
import { StreamRunAgentPublicMessagePartTextPart } from "@orq-ai/node/models/operations";

let value: StreamRunAgentPublicMessagePartTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                           | [operations.StreamRunAgentPublicMessagePartKind](../../models/operations/streamrunagentpublicmessagepartkind.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `text`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |