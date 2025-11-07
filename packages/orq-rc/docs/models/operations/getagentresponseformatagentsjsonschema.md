# GetAgentResponseFormatAgentsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { GetAgentResponseFormatAgentsJSONSchema } from "@orq-ai/node/models/operations";

let value: GetAgentResponseFormatAgentsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.GetAgentResponseFormatAgentsResponseType](../../models/operations/getagentresponseformatagentsresponsetype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `jsonSchema`                                                                                                               | [operations.GetAgentResponseFormatJsonSchema](../../models/operations/getagentresponseformatjsonschema.md)                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |