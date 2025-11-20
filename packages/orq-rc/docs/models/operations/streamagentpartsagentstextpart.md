# StreamAgentPartsAgentsTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { StreamAgentPartsAgentsTextPart } from "@orq-ai/node/models/operations";

let value: StreamAgentPartsAgentsTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                     | [operations.StreamAgentPartsAgentsResponse200TextEventStreamResponseBodyKind](../../models/operations/streamagentpartsagentsresponse200texteventstreamresponsebodykind.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `text`                                                                                                                                                                     | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |