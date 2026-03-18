# ThinkingConfigAdaptiveSchema

Enables adaptive thinking mode where the model dynamically determines thinking depth

## Example Usage

```typescript
import { ThinkingConfigAdaptiveSchema } from "@orq-ai/node/models/components";

let value: ThinkingConfigAdaptiveSchema = {
  type: "adaptive",
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                | *"adaptive"*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                    | Lets the model dynamically determine when and how much to use extended thinking based on the complexity of each request. Supported on Claude Opus 4.6 and Sonnet 4.6. |