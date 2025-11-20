# ListAgentTasksTaskArtifact

A file or data artifact produced by the agent during task execution. Follows the A2A SDK Artifact structure with required name field.

## Example Usage

```typescript
import { ListAgentTasksTaskArtifact } from "@orq-ai/node/models/operations";

let value: ListAgentTasksTaskArtifact = {
  artifactId: "<id>",
  name: "<value>",
  parts: [
    {
      kind: "data",
      data: {},
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `artifactId`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | Unique identifier for the artifact (ULID format)                                                        |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | Required name for the artifact (e.g., filename or descriptive title)                                    |
| `description`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Optional human-readable description of the artifact                                                     |
| `parts`                                                                                                 | *operations.ListAgentTasksAgentsParts*[]                                                                | :heavy_check_mark:                                                                                      | Array of artifact content parts (text, file, or data). Does not include tool_call or tool_result parts. |
| `extensions`                                                                                            | *string*[]                                                                                              | :heavy_minus_sign:                                                                                      | File extensions associated with this artifact (e.g., [".pdf"])                                          |
| `metadata`                                                                                              | Record<string, *any*>                                                                                   | :heavy_minus_sign:                                                                                      | Additional artifact metadata as key-value pairs                                                         |