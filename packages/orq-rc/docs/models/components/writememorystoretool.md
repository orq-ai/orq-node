# WriteMemoryStoreTool

Writes information to agent memory stores

## Example Usage

```typescript
import { WriteMemoryStoreTool } from "@orq-ai/node/models/components";

let value: WriteMemoryStoreTool = {
  type: "write_memory_store",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [components.WriteMemoryStoreToolType](../../models/components/writememorystoretooltype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requiresApproval`                                                                         | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |