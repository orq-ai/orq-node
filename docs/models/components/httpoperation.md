# HttpOperation

OpenAPI operation the tool calls, for `MCP_CONNECTION_TYPE_OPENAPI` servers.

## Example Usage

```typescript
import { HttpOperation } from "@orq-ai/node/models/components";

let value: HttpOperation = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `method`                                       | *string*                                       | :heavy_minus_sign:                             | HTTP method, upper case.                       |
| `path`                                         | *string*                                       | :heavy_minus_sign:                             | Path template relative to the server base URL. |