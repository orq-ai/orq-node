# RetrieveAgentRequestResponseFormatAgentsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { RetrieveAgentRequestResponseFormatAgentsJSONSchema } from "@orq-ai/node/models/operations";

let value: RetrieveAgentRequestResponseFormatAgentsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [operations.RetrieveAgentRequestResponseFormatAgentsResponseType](../../models/operations/retrieveagentrequestresponseformatagentsresponsetype.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `jsonSchema`                                                                                                                                       | [operations.RetrieveAgentRequestResponseFormatJsonSchema](../../models/operations/retrieveagentrequestresponseformatjsonschema.md)                 | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |