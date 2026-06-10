# CreateRouterResponseResponsesResponseBody

Returns a response object or a stream of events.

## Example Usage

```typescript
import { CreateRouterResponseResponsesResponseBody } from "@orq-ai/node/models/operations";

let value: CreateRouterResponseResponsesResponseBody = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                 | *components.ResponseStreamEvent*                                                                       | :heavy_minus_sign:                                                                                     | A single server-sent event emitted on the response stream. The `type` field discriminates the payload. |