# GetAgentTeamOfAgents

## Example Usage

```typescript
import { GetAgentTeamOfAgents } from "@orq-ai/node/models/operations";

let value: GetAgentTeamOfAgents = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                      | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `role`                                                                                                                                    | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The role of the agent in this context. This is used to give extra information to the leader to help it decide which agent to hand off to. |