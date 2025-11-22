# StreamRunAgentPartsAgentsTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { StreamRunAgentPartsAgentsTextPart } from "@orq-ai/node/models/operations";

let value: StreamRunAgentPartsAgentsTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                           | [operations.StreamRunAgentPartsAgentsResponse200TextEventStreamResponseBodyKind](../../models/operations/streamrunagentpartsagentsresponse200texteventstreamresponsebodykind.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `text`                                                                                                                                                                           | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |