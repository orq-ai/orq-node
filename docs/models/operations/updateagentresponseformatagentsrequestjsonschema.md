# UpdateAgentResponseFormatAgentsRequestJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { UpdateAgentResponseFormatAgentsRequestJSONSchema } from "@orq-ai/node/models/operations";

let value: UpdateAgentResponseFormatAgentsRequestJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | *"json_schema"*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `jsonSchema`                                                                                                                                                     | [operations.UpdateAgentResponseFormatAgentsRequestRequestBodyJsonSchema](../../models/operations/updateagentresponseformatagentsrequestrequestbodyjsonschema.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |