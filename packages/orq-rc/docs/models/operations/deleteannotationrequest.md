# DeleteAnnotationRequest

## Example Usage

```typescript
import { DeleteAnnotationRequest } from "@orq-ai/node/models/operations";

let value: DeleteAnnotationRequest = {
  traceId: "<id>",
  spanId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `traceId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier of the trace                                                                   |
| `spanId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier of the span                                                                    |
| `requestBody`                                                                                    | [operations.DeleteAnnotationRequestBody](../../models/operations/deleteannotationrequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |