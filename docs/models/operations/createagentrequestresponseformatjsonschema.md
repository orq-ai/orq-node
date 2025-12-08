# CreateAgentRequestResponseFormatJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { CreateAgentRequestResponseFormatJSONSchema } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | *"json_schema"*                                                                                                                            | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `jsonSchema`                                                                                                                               | [operations.CreateAgentRequestResponseFormatAgentsJsonSchema](../../models/operations/createagentrequestresponseformatagentsjsonschema.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |