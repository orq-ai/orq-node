# RunAgentPartsTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { RunAgentPartsTextPart } from "@orq-ai/node/models/operations";

let value: RunAgentPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `kind`                                                                       | [operations.RunAgentPartsKind](../../models/operations/runagentpartskind.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `text`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |