# ListExperimentRunsResponse

## Example Usage

```typescript
import { ListExperimentRunsResponse } from "@orq-ai/node/models/components";

let value: ListExperimentRunsResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [components.Run](../../models/components/run.md)[]                    | :heavy_minus_sign:                                                    | Page of runs, newest first.                                           |
| `hasMore`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Whether more runs are available in the selected pagination direction. |