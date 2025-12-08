# Chunking

## Overview

### Available Operations

* [parse](#parse) - Parse text

## parse

Split large text documents into smaller, manageable chunks using different chunking strategies optimized for RAG (Retrieval-Augmented Generation) workflows. This endpoint supports multiple chunking algorithms including token-based, sentence-based, recursive, semantic, and specialized strategies.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="parse" method="post" path="/v2/chunking" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.chunking.parse({
    text: "The quick brown fox jumps over the lazy dog. This is a sample text that will be chunked into smaller pieces. Each chunk will maintain context while respecting the maximum chunk size.",
    metadata: true,
    strategy: "semantic",
    chunkSize: 256,
    threshold: 0.8,
    embeddingModel: "openai/text-embedding-3-small",
    dimensions: 512,
    mode: "window",
    similarityWindow: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { chunkingParse } from "@orq-ai/node/funcs/chunkingParse.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await chunkingParse(orq, {
    text: "The quick brown fox jumps over the lazy dog. This is a sample text that will be chunked into smaller pieces. Each chunk will maintain context while respecting the maximum chunk size.",
    metadata: true,
    strategy: "semantic",
    chunkSize: 256,
    threshold: 0.8,
    embeddingModel: "openai/text-embedding-3-small",
    dimensions: 512,
    mode: "window",
    similarityWindow: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chunkingParse failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ParseChunkingRequest](../../models/operations/parsechunkingrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ParseResponseBody](../../models/operations/parseresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |