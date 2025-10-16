# CreateAgentTeamOfAgents

## Example Usage

```typescript
import { CreateAgentTeamOfAgents } from "@orq-ai/node/models/operations";

let value: CreateAgentTeamOfAgents = {
  key: "<key>",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                     | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The unique key of the agent within the workspace                                                                                          |
| `role`                                                                                                                                    | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The role of the agent in this context. This is used to give extra information to the leader to help it decide which agent to hand off to. |