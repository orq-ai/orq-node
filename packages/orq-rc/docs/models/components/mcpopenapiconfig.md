# McpOpenApiConfig

## Example Usage

```typescript
import { McpOpenApiConfig } from "@orq-ai/node/models/components";

let value: McpOpenApiConfig = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `documentUrl`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | URL the document is fetched from; `:sync` fetches it again.            |
| `operations`                                                           | *string*[]                                                             | :heavy_minus_sign:                                                     | Tool names of the operations to expose; empty exposes every operation. |
| `title`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | `info.title` of the compiled document.                                 |
| `version`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | `info.version` of the compiled document.                               |