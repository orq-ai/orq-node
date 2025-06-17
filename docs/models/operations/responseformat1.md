# ResponseFormat1

## Example Usage

```typescript
import { ResponseFormat1 } from "@orq-ai/node/models/operations";

let value: ResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [operations.ResponseFormatType](../../models/operations/responseformattype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `jsonSchema`                                                                   | [operations.JsonSchema](../../models/operations/jsonschema.md)                 | :heavy_check_mark:                                                             | N/A                                                                            |