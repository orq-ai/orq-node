# StreamRunAgentPartsTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { StreamRunAgentPartsTextPart } from "@orq-ai/node/models/operations";

let value: StreamRunAgentPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `kind`                                                                                   | [operations.StreamRunAgentPartsKind](../../models/operations/streamrunagentpartskind.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `text`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |