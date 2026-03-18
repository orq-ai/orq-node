# Agent

## Example Usage

```typescript
import { Agent } from "@orq-ai/node/models/operations";

let value: Agent = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier of AI agent                                                  |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Human-readable agent name                                                      |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Free-form agent description                                                    |
| `source`                                                                       | [operations.ResponseBodySource](../../models/operations/responsebodysource.md) | :heavy_minus_sign:                                                             | Source of the agent manifest                                                   |