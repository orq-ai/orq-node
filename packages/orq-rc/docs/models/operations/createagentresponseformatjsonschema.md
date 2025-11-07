# CreateAgentResponseFormatJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { CreateAgentResponseFormatJSONSchema } from "@orq-ai/node/models/operations";

let value: CreateAgentResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [operations.CreateAgentResponseFormatAgentsRequestRequestBodyFallbackModelsType](../../models/operations/createagentresponseformatagentsrequestrequestbodyfallbackmodelstype.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `jsonSchema`                                                                                                                                                                     | [operations.CreateAgentResponseFormatAgentsJsonSchema](../../models/operations/createagentresponseformatagentsjsonschema.md)                                                     | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |