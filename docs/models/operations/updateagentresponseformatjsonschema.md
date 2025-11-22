# UpdateAgentResponseFormatJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { UpdateAgentResponseFormatJSONSchema } from "@orq-ai/node/models/operations";

let value: UpdateAgentResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.UpdateAgentResponseFormatAgentsRequestType](../../models/operations/updateagentresponseformatagentsrequesttype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `jsonSchema`                                                                                                                   | [operations.UpdateAgentResponseFormatAgentsJsonSchema](../../models/operations/updateagentresponseformatagentsjsonschema.md)   | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |