# FileSystemToolInput

Attaches a persistent file system to the agent, named by file_system_id or file_system_key in the configuration. The agent may only read it unless the configured access_mode is read_write.

## Example Usage

```typescript
import { FileSystemToolInput } from "@orq-ai/node/models/components";

let value: FileSystemToolInput = {
  type: "file_system",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `type`                                                                                              | *"file_system"*                                                                                     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requiresApproval`                                                                                  | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether this tool requires approval before execution                                                |
| `configuration`                                                                                     | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Static tool configuration set at design time. Merged over LLM-provided arguments at execution time. |