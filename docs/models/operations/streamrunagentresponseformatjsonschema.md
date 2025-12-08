# StreamRunAgentResponseFormatJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { StreamRunAgentResponseFormatJSONSchema } from "@orq-ai/node/models/operations";

let value: StreamRunAgentResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | *"json_schema"*                                                                                                                    | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `jsonSchema`                                                                                                                       | [operations.StreamRunAgentResponseFormatAgentsJsonSchema](../../models/operations/streamrunagentresponseformatagentsjsonschema.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |