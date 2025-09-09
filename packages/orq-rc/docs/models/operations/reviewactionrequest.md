# ReviewActionRequest

## Example Usage

```typescript
import { ReviewActionRequest } from "@orq-ai/node/models/operations";

let value: ReviewActionRequest = {
  agentKey: "<value>",
  taskId: "<id>",
  actionId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `agentKey`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `taskId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `actionId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.ReviewActionRequestBody](../../models/operations/reviewactionrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |