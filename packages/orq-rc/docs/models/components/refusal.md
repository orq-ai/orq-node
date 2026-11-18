# Refusal

A refusal from the model.

## Example Usage

```typescript
import { Refusal } from "@orq-ai/node/models/components";

let value: Refusal = {
  refusal: "<value>",
  type: "refusal",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `refusal`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The refusal text.                                                                                            |
| `type`                                                                                                       | [components.ResponseOutputMessageContent2Type](../../models/components/responseoutputmessagecontent2type.md) | :heavy_check_mark:                                                                                           | The part type.                                                                                               |
| `additionalProperties`                                                                                       | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |