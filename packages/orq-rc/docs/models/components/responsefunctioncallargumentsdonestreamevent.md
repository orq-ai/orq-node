# ResponseFunctionCallArgumentsDoneStreamEvent

## Example Usage

```typescript
import { ResponseFunctionCallArgumentsDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseFunctionCallArgumentsDoneStreamEvent = {
  data: {
    arguments: "<value>",
    itemId: "<id>",
    outputIndex: 672268,
    sequenceNumber: 425865,
    type: "response.function_call_arguments.done",
  },
  event: "response.function_call_arguments.done",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                                     | [components.ResponseFunctionCallArgumentsDoneStreamEventData](../../models/components/responsefunctioncallargumentsdonestreameventdata.md) | :heavy_check_mark:                                                                                                                         | The event payload.                                                                                                                         |
| `event`                                                                                                                                    | *"response.function_call_arguments.done"*                                                                                                  | :heavy_check_mark:                                                                                                                         | The SSE event name, equal to the payload's `type`.                                                                                         |