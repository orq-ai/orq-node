# TracesGetConversationRequest

## Example Usage

```typescript
import { TracesGetConversationRequest } from "@orq-ai/node/models/operations";

let value: TracesGetConversationRequest = {
  traceId: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `traceId`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `spanId`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Read the conversation from this span instead of the automatically selected one. |