# Configuration

## Example Usage

```typescript
import { Configuration } from "@orq-ai/node/models/components";

let value: Configuration = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `fileSystemId`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | The id of the file system to attach.                                   |
| `fileSystemKey`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | The key of the file system to attach.                                  |
| `accessMode`                                                           | [components.AccessMode](../../models/components/accessmode.md)         | :heavy_minus_sign:                                                     | Whether the agent may only read this file system, or also write to it. |