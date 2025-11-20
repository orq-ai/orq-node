# InvokeAgentPartsTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { InvokeAgentPartsTextPart } from "@orq-ai/node/models/operations";

let value: InvokeAgentPartsTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                             | [operations.InvokeAgentPartsAgentsResponse200ApplicationJSONKind](../../models/operations/invokeagentpartsagentsresponse200applicationjsonkind.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `text`                                                                                                                                             | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |