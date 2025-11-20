# ListAgentTasksPartsAgentsTextPart

A text content part containing plain text or markdown. Used for agent messages, user input, and text-based responses.

## Example Usage

```typescript
import { ListAgentTasksPartsAgentsTextPart } from "@orq-ai/node/models/operations";

let value: ListAgentTasksPartsAgentsTextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                           | [operations.ListAgentTasksPartsAgentsResponse200ApplicationJSONResponseBodyKind](../../models/operations/listagenttaskspartsagentsresponse200applicationjsonresponsebodykind.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `text`                                                                                                                                                                           | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |