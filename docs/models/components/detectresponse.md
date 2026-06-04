# DetectResponse

## Example Usage

```typescript
import { DetectResponse } from "@orq-ai/node/models/components";

let value: DetectResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `hasPii`                                                              | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   |
| `entities`                                                            | Record<string, *number*>                                              | :heavy_minus_sign:                                                    | Per-entity-type counts. Populated only when include_entities was set. |