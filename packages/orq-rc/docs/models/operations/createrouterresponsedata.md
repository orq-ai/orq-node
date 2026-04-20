# CreateRouterResponseData

A server-sent event in the response stream.

## Example Usage

```typescript
import { CreateRouterResponseData } from "@orq-ai/node/models/operations";

let value: CreateRouterResponseData = {
  sequenceNumber: 529091,
  type: "response.mcp_call_arguments.done",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `sequenceNumber`                                                                           | *number*                                                                                   | :heavy_check_mark:                                                                         | Monotonically increasing sequence number for ordering events.                              |
| `type`                                                                                     | [operations.CreateRouterResponseType](../../models/operations/createrouterresponsetype.md) | :heavy_check_mark:                                                                         | The event type.                                                                            |