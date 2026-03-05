# Configuration

Configuration options for the agent invocation

## Example Usage

```typescript
import { Configuration } from "@orq-ai/node/models/operations";

let value: Configuration = {};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blocking`                                                                                                                                                                            | *boolean*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                    | Whether to block until the agent task completes. When true, the response will include the full task with messages. When false (default), returns immediately with task ID and status. |