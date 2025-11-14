# AgentToolInputRunTools

## Example Usage

```typescript
import { AgentToolInputRunTools } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunTools = {
  name: "<value>",
  schema: {
    type: "object",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `schema`                                                                                 | [operations.AgentToolInputRunSchema](../../models/operations/agenttoolinputrunschema.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |