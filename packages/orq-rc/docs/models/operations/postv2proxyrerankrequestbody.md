# PostV2ProxyRerankRequestBody

input

## Example Usage

```typescript
import { PostV2ProxyRerankRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyRerankRequestBody = {
  query: "<value>",
  documents: [],
  model: "Taurus",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `query`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The search query                                                                                    |
| `documents`                                                                                         | *operations.PostV2ProxyRerankDocuments*[]                                                           | :heavy_check_mark:                                                                                  | A list of document objects or strings to rerank.                                                    |
| `model`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The identifier of the model to use                                                                  |
| `topN`                                                                                              | *number*                                                                                            | :heavy_minus_sign:                                                                                  | The number of most relevant documents or indices to return, defaults to the length of the documents |
| `filename`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The filename of the document to rerank                                                              |