# GetTraceConversationResponse

## Example Usage

```typescript
import { GetTraceConversationResponse } from "@orq-ai/node/models/components";

let value: GetTraceConversationResponse = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `traceId`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `spanId`                                                                                                    | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Span the items were read from; empty when the trace holds no model call. Read its detail with GetTraceSpan. |
| `items`                                                                                                     | [components.Items](../../models/components/items.md)[]                                                      | :heavy_minus_sign:                                                                                          | Ordered OpenResponses items, including recorded instructions as a leading system message.                   |