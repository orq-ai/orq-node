# CreateAnnotationRequest

## Example Usage

```typescript
import { CreateAnnotationRequest } from "@orq-ai/node/models/operations";

let value: CreateAnnotationRequest = {
  traceId: "<id>",
  spanId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `traceId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier of the trace                                                                   |
| `spanId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier of the span                                                                    |
| `requestBody`                                                                                    | [operations.CreateAnnotationRequestBody](../../models/operations/createannotationrequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |