# DuplicateAgentResponseFormatAgentsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { DuplicateAgentResponseFormatAgentsJSONSchema } from "@orq-ai/node/models/operations";

let value: DuplicateAgentResponseFormatAgentsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.DuplicateAgentResponseFormatAgentsResponseType](../../models/operations/duplicateagentresponseformatagentsresponsetype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `jsonSchema`                                                                                                                           | [operations.DuplicateAgentResponseFormatJsonSchema](../../models/operations/duplicateagentresponseformatjsonschema.md)                 | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |