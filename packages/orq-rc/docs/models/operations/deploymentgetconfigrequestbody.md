# DeploymentGetConfigRequestBody

## Example Usage

```typescript
import { DeploymentGetConfigRequestBody } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigRequestBody = {
  key: "<key>",
};
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                     | The deployment id to invoke                                                                                                                                                                                            |
| `inputs`                                                                                                                                                                                                               | Record<string, *operations.Inputs*>                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                     | Key-value pairs variables to replace in your prompts. If a variable is not provided that is defined in the prompt, the default variables are used.                                                                     |
| `context`                                                                                                                                                                                                              | Record<string, *any*>                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                     | Key-value pairs that match your data model and fields declared in your configuration matrix. If you send multiple prompt keys, the context will be applied to the evaluation of each key.                              |
| `prefixMessages`                                                                                                                                                                                                       | [operations.PrefixMessages](../../models/operations/prefixmessages.md)[]                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | A list of messages to include after the `System` message, but before the  `User` and `Assistant` pairs configured in your deployment.                                                                                  |
| `messages`                                                                                                                                                                                                             | [operations.Messages](../../models/operations/messages.md)[]                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                     | A list of messages to send to the deployment.                                                                                                                                                                          |
| `fileIds`                                                                                                                                                                                                              | *string*[]                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                     | A list of file IDs that are associated with the deployment request.                                                                                                                                                    |
| `metadata`                                                                                                                                                                                                             | Record<string, *any*>                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                     | Key-value pairs that you want to attach to the log generated by this request.                                                                                                                                          |
| `chainId`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | Unique ID that identifies a chaining operation. This is useful for tracking a chain of completions across multiple                                                                                                     |
| `conversationId`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | Unique ID that identifies a chat conversation. This is useful for tracking the same conversation across multiple requests                                                                                              |
| `userId`                                                                                                                                                                                                               | *operations.UserId*                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                     | Unique ID that identifies a user. This is useful for tracking the same user across multiple requests                                                                                                                   |
| `deploymentId`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | Unique ID that identifies a deployment entity.                                                                                                                                                                         |
| `deploymentVariantId`                                                                                                                                                                                                  | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | Unique ID that identifies a specific variant of a deployment.                                                                                                                                                          |
| `extraParams`                                                                                                                                                                                                          | Record<string, *any*>                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                     | Utilized for passing additional parameters to the model provider. Exercise caution when using this feature, as the included parameters will overwrite any parameters specified in the deployment prompt configuration. |
| `invokeOptions`                                                                                                                                                                                                        | [operations.InvokeOptions](../../models/operations/invokeoptions.md)                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |