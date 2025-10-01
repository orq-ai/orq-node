# GetAgentTaskResponseBody

Agent task retrieved

## Example Usage

```typescript
import { GetAgentTaskResponseBody } from "@orq-ai/node/models/operations";

let value: GetAgentTaskResponseBody = {
  id: "<id>",
  contextId: "<id>",
  kind: "task",
  status: {
    state: "South Carolina",
  },
  history: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `contextId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `kind`                                                                         | [operations.GetAgentTaskKind](../../models/operations/getagenttaskkind.md)     | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [operations.GetAgentTaskStatus](../../models/operations/getagenttaskstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `history`                                                                      | *any*[]                                                                        | :heavy_check_mark:                                                             | N/A                                                                            |
| `artifacts`                                                                    | *any*[]                                                                        | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |