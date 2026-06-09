# ResponseHostedToolCallStreamEvent

## Example Usage

```typescript
import { ResponseHostedToolCallStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                 | [components.ResponseHostedToolCallStreamEventData](../../models/components/responsehostedtoolcallstreameventdata.md)   | :heavy_check_mark:                                                                                                     | The event payload.                                                                                                     |
| `event`                                                                                                                | [components.ResponseHostedToolCallStreamEventEvent](../../models/components/responsehostedtoolcallstreameventevent.md) | :heavy_check_mark:                                                                                                     | The SSE event name, equal to the payload's `type`.                                                                     |