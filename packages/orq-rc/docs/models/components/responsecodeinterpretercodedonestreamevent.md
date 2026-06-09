# ResponseCodeInterpreterCodeDoneStreamEvent

## Example Usage

```typescript
import { ResponseCodeInterpreterCodeDoneStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseCodeInterpreterCodeDoneStreamEvent = {
  data: {
    code: "<value>",
    itemId: "<id>",
    outputIndex: 12468,
    sequenceNumber: 811140,
    type: "response.code_interpreter_call_code.done",
  },
  event: "response.code_interpreter_call_code.done",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                 | [components.ResponseCodeInterpreterCodeDoneStreamEventData](../../models/components/responsecodeinterpretercodedonestreameventdata.md) | :heavy_check_mark:                                                                                                                     | The event payload.                                                                                                                     |
| `event`                                                                                                                                | *"response.code_interpreter_call_code.done"*                                                                                           | :heavy_check_mark:                                                                                                                     | The SSE event name, equal to the payload's `type`.                                                                                     |