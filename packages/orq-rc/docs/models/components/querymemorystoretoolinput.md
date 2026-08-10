# QueryMemoryStoreToolInput

Queries agent memory stores for context

## Example Usage

```typescript
import { QueryMemoryStoreToolInput } from "@orq-ai/node/models/components";

let value: QueryMemoryStoreToolInput = {
  type: "query_memory_store",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"query_memory_store"*                                                                              | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |