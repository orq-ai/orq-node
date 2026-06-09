# ResponseCodeInterpreterCodeDeltaStreamEvent

## Example Usage

```typescript
import { ResponseCodeInterpreterCodeDeltaStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseCodeInterpreterCodeDeltaStreamEvent = {
  data: {
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 613084,
    sequenceNumber: 833513,
    type: "response.code_interpreter_call_code.delta",
  },
  event: "response.code_interpreter_call_code.delta",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                   | [components.ResponseCodeInterpreterCodeDeltaStreamEventData](../../models/components/responsecodeinterpretercodedeltastreameventdata.md) | :heavy_check_mark:                                                                                                                       | The event payload.                                                                                                                       |
| `event`                                                                                                                                  | *"response.code_interpreter_call_code.delta"*                                                                                            | :heavy_check_mark:                                                                                                                       | The SSE event name, equal to the payload's `type`.                                                                                       |