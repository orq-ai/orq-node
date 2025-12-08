# RunAgentResponseFormatJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { RunAgentResponseFormatJSONSchema } from "@orq-ai/node/models/operations";

let value: RunAgentResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | *"json_schema"*                                                                                                        | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `jsonSchema`                                                                                                           | [operations.RunAgentResponseFormatAgentsJsonSchema](../../models/operations/runagentresponseformatagentsjsonschema.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |