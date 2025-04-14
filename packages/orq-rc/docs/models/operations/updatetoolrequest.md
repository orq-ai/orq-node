# UpdateToolRequest

## Example Usage

```typescript
import { UpdateToolRequest } from "@orq-ai/node/models/operations";

let value: UpdateToolRequest = {
  toolKey: "<value>",
  requestBody: {
    path: "Customer Service/Billing/Refund",
    status: "live",
    versionHash: "<value>",
    type: "function",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `toolKey`                          | *string*                           | :heavy_check_mark:                 | N/A                                |
| `requestBody`                      | *operations.UpdateToolRequestBody* | :heavy_minus_sign:                 | The tool to update                 |