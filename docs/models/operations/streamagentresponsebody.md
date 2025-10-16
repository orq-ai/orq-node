# StreamAgentResponseBody

SSE stream of agent events

## Example Usage

```typescript
import { StreamAgentResponseBody } from "@orq-ai/node/models/operations";

let value: StreamAgentResponseBody = {
  data: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `data`                  | *string*                | :heavy_check_mark:      | JSON-encoded event data |