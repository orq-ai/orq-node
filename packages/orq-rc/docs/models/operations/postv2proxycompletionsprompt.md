# PostV2ProxyCompletionsPrompt

Prompt configuration for the request

## Example Usage

```typescript
import { PostV2ProxyCompletionsPrompt } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsPrompt = {
  id: "prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  version: "latest",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | Unique identifier of the prompt to use                                                               | prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV                                                                    |
| `version`                                                                                            | [operations.PostV2ProxyCompletionsVersion](../../models/operations/postv2proxycompletionsversion.md) | :heavy_check_mark:                                                                                   | Version of the prompt to use (currently only "latest" supported)                                     | latest                                                                                               |