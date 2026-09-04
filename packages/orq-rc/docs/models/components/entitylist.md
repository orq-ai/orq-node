# EntityList

EntityList wraps a repeated string because proto3 maps cannot hold
 repeated values directly.

## Example Usage

```typescript
import { EntityList } from "@orq-ai/node/models/components";

let value: EntityList = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `entities`         | *string*[]         | :heavy_minus_sign: | N/A                |