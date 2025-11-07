# ListAgentTasksResponseFormatAgentsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { ListAgentTasksResponseFormatAgentsJSONSchema } from "@orq-ai/node/models/operations";

let value: ListAgentTasksResponseFormatAgentsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.ListAgentTasksResponseFormatAgentsResponseType](../../models/operations/listagenttasksresponseformatagentsresponsetype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `jsonSchema`                                                                                                                           | [operations.ListAgentTasksResponseFormatJsonSchema](../../models/operations/listagenttasksresponseformatjsonschema.md)                 | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |