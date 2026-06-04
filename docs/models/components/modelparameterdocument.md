# ModelParameterDocument

## Example Usage

```typescript
import { ModelParameterDocument } from "@orq-ai/node/models/components";

let value: ModelParameterDocument = {
  config: {},
  description: "meh gee pfft in-joke repeatedly",
  id: "<id>",
  isActive: true,
  name: "<value>",
  parameter: "<value>",
  parameterType: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `config`              | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `description`         | *string*              | :heavy_check_mark:    | N/A                   |
| `hints`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `isActive`            | *boolean*             | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `parameter`           | *string*              | :heavy_check_mark:    | N/A                   |
| `parameterType`       | *string*              | :heavy_check_mark:    | N/A                   |
| `position`            | *number*              | :heavy_minus_sign:    | N/A                   |