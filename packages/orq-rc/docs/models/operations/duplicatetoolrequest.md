# DuplicateToolRequest

## Example Usage

```typescript
import { DuplicateToolRequest } from "@orq-ai/node/models/operations";

let value: DuplicateToolRequest = {
  toolId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `toolId`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | The id of the tool to duplicate                                                            |
| `requestBody`                                                                              | [operations.DuplicateToolRequestBody](../../models/operations/duplicatetoolrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |