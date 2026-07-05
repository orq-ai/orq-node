# Headers

Optional replacement generic webhook headers. Secret header values returned by GET or LIST are masked as an empty string; omit those entries or replace them with the real value when updating.

## Example Usage

```typescript
import { Headers } from "@orq-ai/node/models/components";

let value: Headers = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |