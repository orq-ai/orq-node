# JSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { JSONSchema } from "@orq-ai/node/models/operations";

let value: JSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.CreateAgentRequestResponseFormatAgentsType](../../models/operations/createagentrequestresponseformatagentstype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `jsonSchema`                                                                                                                   | [operations.ResponseFormatJsonSchema](../../models/operations/responseformatjsonschema.md)                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |