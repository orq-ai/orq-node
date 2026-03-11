# PostV2AgentsA2aRequestBody

## Example Usage

```typescript
import { PostV2AgentsA2aRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2AgentsA2aRequestBody = {
  key: "<key>",
  displayName: "Jakob_Ward-Little",
  description: "bah about bump grizzled that",
  path: "/rescue",
  agentUrl: "https://buzzing-hello.info/",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `key`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | Unique identifier for the agent                                          |
| `displayName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Display name for the agent                                               |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Description of the agent                                                 |
| `path`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Project path for organizing the agent                                    |
| `agentUrl`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The A2A agent endpoint URL                                               |
| `cardUrl`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | Optional explicit agent card URL (must be different from agent_url)      |
| `headers`                                                                | Record<string, [operations.Headers](../../models/operations/headers.md)> | :heavy_minus_sign:                                                       | Authentication headers for the A2A agent                                 |