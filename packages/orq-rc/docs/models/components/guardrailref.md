# GuardrailRef

## Example Usage

```typescript
import { GuardrailRef } from "@orq-ai/node/models/components";

let value: GuardrailRef = {
  executeOn: "output",
  id: "<id>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `executeOn`                                                  | [components.ExecuteOn](../../models/components/executeon.md) | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `isGuardrail`                                                | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `sampleRate`                                                 | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |