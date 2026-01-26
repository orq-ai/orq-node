# CreateTranscriptionLoadBalancerRouterAudioTranscriptions1

## Example Usage

```typescript
import { CreateTranscriptionLoadBalancerRouterAudioTranscriptions1 } from "@orq-ai/node/models/operations";

let value: CreateTranscriptionLoadBalancerRouterAudioTranscriptions1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
    {
      model: "anthropic/claude-3-5-sonnet",
      weight: 0.3,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [operations.CreateTranscriptionLoadBalancerRouterAudioTranscriptionsType](../../models/operations/createtranscriptionloadbalancerrouteraudiotranscriptionstype.md)       | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `models`                                                                                                                                                                 | [operations.CreateTranscriptionLoadBalancerRouterAudioTranscriptionsModels](../../models/operations/createtranscriptionloadbalancerrouteraudiotranscriptionsmodels.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |