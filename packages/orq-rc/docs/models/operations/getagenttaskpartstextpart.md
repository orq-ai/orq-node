# GetAgentTaskPartsTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { GetAgentTaskPartsTextPart } from "@orq-ai/node/models/operations";

let value: GetAgentTaskPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                               | [operations.GetAgentTaskPartsAgentsResponse200ApplicationJSONKind](../../models/operations/getagenttaskpartsagentsresponse200applicationjsonkind.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `text`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |