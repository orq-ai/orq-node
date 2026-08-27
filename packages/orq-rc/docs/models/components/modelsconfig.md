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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `mode`                                                       | [components.Mode](../../models/components/mode.md)           | :heavy_check_mark:                                           | N/A                                                          |
| `models`                                                     | [components.ModelRef](../../models/components/modelref.md)[] | :heavy_check_mark:                                           | N/A                                                          |