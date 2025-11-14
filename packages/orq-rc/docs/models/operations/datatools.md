# DataTools

## Example Usage

```typescript
import { DataTools } from "@orq-ai/node/models/operations";

let value: DataTools = {
  name: "<value>",
  schema: {
    type: "object",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `schema`                                                                             | [operations.GetAllToolsDataSchema](../../models/operations/getalltoolsdataschema.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |