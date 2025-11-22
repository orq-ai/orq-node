# RunAgentPublicMessagePartTextPart

Text content part. Use this to send text messages to the agent.

## Example Usage

```typescript
import { RunAgentPublicMessagePartTextPart } from "@orq-ai/node/models/operations";

let value: RunAgentPublicMessagePartTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `kind`                                                                                               | [operations.RunAgentPublicMessagePartKind](../../models/operations/runagentpublicmessagepartkind.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `text`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |