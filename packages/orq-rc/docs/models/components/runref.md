# RunRef

Identifies a run by experiment and run ID.

## Example Usage

```typescript
import { RunRef } from "@orq-ai/node/models/components";

let value: RunRef = {
  experimentId: "<id>",
  runId: "<id>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `experimentId`                           | *string*                                 | :heavy_check_mark:                       | ID of the experiment the run belongs to. |
| `runId`                                  | *string*                                 | :heavy_check_mark:                       | ID of the run.                           |