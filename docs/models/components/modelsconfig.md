# ModelsConfig

## Example Usage

```typescript
import { ModelsConfig } from "@orq-ai/node/models/components";

let value: ModelsConfig = {
  mode: "weighted",
  models: [
    {
      model: "Land Cruiser",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `fallbackOnCodes`                                                          | *number*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `mode`                                                                     | [components.ModelsConfigMode](../../models/components/modelsconfigmode.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `models`                                                                   | [components.ModelRef](../../models/components/modelref.md)[]               | :heavy_check_mark:                                                         | N/A                                                                        |