# ResponseFunctionCallArgumentsDeltaStreamEvent

## Example Usage

```typescript
import { ResponseFunctionCallArgumentsDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseFunctionCallArgumentsDeltaStreamEvent = {
  data: {
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 112514,
    sequenceNumber: 271326,
    type: "response.function_call_arguments.delta",
  },
  event: "response.function_call_arguments.delta",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                       | [components.ResponseFunctionCallArgumentsDeltaStreamEventData](../../models/components/responsefunctioncallargumentsdeltastreameventdata.md) | :heavy_check_mark:                                                                                                                           | The event payload.                                                                                                                           |
| `event`                                                                                                                                      | *"response.function_call_arguments.delta"*                                                                                                   | :heavy_check_mark:                                                                                                                           | The SSE event name, equal to the payload's `type`.                                                                                           |