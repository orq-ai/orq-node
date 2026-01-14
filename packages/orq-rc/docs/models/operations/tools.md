# Tools

## Example Usage

```typescript
import { Tools } from "@orq-ai/node/models/operations";

let value: Tools = {
  name: "<value>",
  schema: {
    type: "object",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `schema`                                                                                 | [operations.AgentToolInputRunSchema](../../models/operations/agenttoolinputrunschema.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |