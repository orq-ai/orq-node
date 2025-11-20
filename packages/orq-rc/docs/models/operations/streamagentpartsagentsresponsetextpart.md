# StreamAgentPartsAgentsResponseTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { StreamAgentPartsAgentsResponseTextPart } from "@orq-ai/node/models/operations";

let value: StreamAgentPartsAgentsResponseTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                                 | [operations.StreamAgentPartsAgentsResponse200TextEventStreamResponseBodyData12Kind](../../models/operations/streamagentpartsagentsresponse200texteventstreamresponsebodydata12kind.md) | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `text`                                                                                                                                                                                 | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |