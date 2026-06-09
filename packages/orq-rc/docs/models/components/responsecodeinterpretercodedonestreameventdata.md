# ResponseCodeInterpreterCodeDoneStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseCodeInterpreterCodeDoneStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseCodeInterpreterCodeDoneStreamEventData = {
  code: "<value>",
  itemId: "<id>",
  outputIndex: 953638,
  sequenceNumber: 466063,
  type: "response.code_interpreter_call_code.done",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The completed code interpreter code.                                                                                                   |
| `itemId`                                                                                                                               | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | ID of the output item this event refers to.                                                                                            |
| `outputIndex`                                                                                                                          | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Index of the output item in the response output array.                                                                                 |
| `sequenceNumber`                                                                                                                       | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Monotonically increasing sequence number for ordering events.                                                                          |
| `type`                                                                                                                                 | [components.ResponseCodeInterpreterCodeDoneStreamEventType](../../models/components/responsecodeinterpretercodedonestreameventtype.md) | :heavy_check_mark:                                                                                                                     | The event type. Matches the SSE `event` field.                                                                                         |
| `additionalProperties`                                                                                                                 | Record<string, *any*>                                                                                                                  | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |