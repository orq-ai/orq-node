# InputTransformation

## Example Usage

```typescript
import { InputTransformation } from "@orq-ai/node/models/components";

let value: InputTransformation = {
  action: "removed",
  id: "<id>",
  reason: "end_user_mismatch",
  type: "reasoning",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `action`                                                                                 | [components.Action](../../models/components/action.md)                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Original reasoning item ID.                                                              |
| `reason`                                                                                 | [components.Reason](../../models/components/reason.md)                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [components.InputTransformationType](../../models/components/inputtransformationtype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |