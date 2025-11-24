# Output

## Example Usage

```typescript
import { Output } from "@orq-ai/node/models/operations";

let value: Output = {
  messageId: "<id>",
  role: "system",
  parts: [],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `messageId`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `role`                                                                                                                               | [operations.CreateAgentResponseRequestAgentsResponsesRole](../../models/operations/createagentresponserequestagentsresponsesrole.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `parts`                                                                                                                              | *any*[]                                                                                                                              | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `metadata`                                                                                                                           | Record<string, *any*>                                                                                                                | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |