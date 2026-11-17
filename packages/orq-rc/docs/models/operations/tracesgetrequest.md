# TracesGetRequest

## Example Usage

```typescript
import { TracesGetRequest } from "@orq-ai/node/models/operations";

let value: TracesGetRequest = {
  traceId: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `traceId`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `allAccessibleProjects`                                              | *boolean*                                                            | :heavy_minus_sign:                                                   | Spans every project the caller belongs to instead of the active one. |