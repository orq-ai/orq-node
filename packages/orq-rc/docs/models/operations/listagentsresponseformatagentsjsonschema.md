# ListAgentsResponseFormatAgentsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { ListAgentsResponseFormatAgentsJSONSchema } from "@orq-ai/node/models/operations";

let value: ListAgentsResponseFormatAgentsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.ListAgentsResponseFormatAgentsResponseType](../../models/operations/listagentsresponseformatagentsresponsetype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `jsonSchema`                                                                                                                   | [operations.ListAgentsResponseFormatJsonSchema](../../models/operations/listagentsresponseformatjsonschema.md)                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |