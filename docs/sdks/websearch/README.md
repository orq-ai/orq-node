# Websearch

## Overview

### Available Operations

* [search](#search) - Search the web with a selected provider

## search

Search with Exa, Ceramic, Linkup, Tavily, Serper, OpenAI, or Perplexity and return page URLs, titles, and descriptions in one response format. Authenticate with an API key that grants **websearch.execute** and send **Content-Type: application/json**.

### Provider and credentials

Each request uses the selected provider. Exa uses **auto** search, Linkup uses **standard** depth, Tavily uses **basic** depth, and Perplexity uses its standard Search API. OpenAI runs one forced **web_search** tool call on gpt-5.6-luna through the Responses API and returns the raw search results.

Credentials are selected from the authenticated workspace. A configured provider integration takes precedence over ORQ-managed credentials: the default integration is used, or the first configured integration if no default is set. Configure BYOK in the workspace integrations settings. Invalid integration credentials cause an error.

### Billing

Managed searches use the same credits as the **AI Gateway** and charge the provider cost plus **US$0.001 per search** (US$1 per 1,000 searches). BYOK searches consume no ORQ credits and add no ORQ markup; the provider bills the integration owner directly.

Exa's published auto rate is **US$7 per 1,000 requests** for up to 10 results, or **US$8 per 1,000** including the ORQ markup. Exa charges use the actual cost reported by the provider.

Perplexity's published Search API rate is **US$5 per 1,000 requests**. OpenAI web search costs **US$10 per 1,000 tool calls** plus the gpt-5.6-luna tokens of the Responses call, computed from the usage reported by OpenAI, so each search is typically US$0.012 to US$0.015 before the ORQ markup.

A successful managed search is billable even if an output guardrail or output redaction failure prevents the results from being returned.

### Policies and observability

PII Redaction is the only supported request plugin. Workspace PII settings and matching guardrail rules also apply. Query redaction runs before input guardrails and the provider call; result redaction runs before output guardrails and the response.

Search spans and metrics record the provider, latency, result count, and cost. Use the **x-orq-trace-id** response header to find the trace.

### Example Usage: basic

<!-- UsageSnippet language="typescript" operationID="search-web" method="post" path="/v3/websearch" example="basic" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.websearch.search({
    provider: "exa",
    query: "Things to do in Salt Lake City in fall",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { websearchSearch } from "@orq-ai/node/funcs/websearchSearch.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await websearchSearch(orq, {
    provider: "exa",
    query: "Things to do in Salt Lake City in fall",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websearchSearch failed:", res.error);
  }
}

run();
```
### Example Usage: customer_search

<!-- UsageSnippet language="typescript" operationID="search-web" method="post" path="/v3/websearch" example="customer_search" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.websearch.search({
    identity: {
      id: "customer-123",
    },
    provider: "exa",
    query: "Things to do in Salt Lake City in fall",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { websearchSearch } from "@orq-ai/node/funcs/websearchSearch.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await websearchSearch(orq, {
    identity: {
      id: "customer-123",
    },
    provider: "exa",
    query: "Things to do in Salt Lake City in fall",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websearchSearch failed:", res.error);
  }
}

run();
```
### Example Usage: insufficient_credits

<!-- UsageSnippet language="typescript" operationID="search-web" method="post" path="/v3/websearch" example="insufficient_credits" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.websearch.search({
    provider: "tavily",
    query: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { websearchSearch } from "@orq-ai/node/funcs/websearchSearch.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await websearchSearch(orq, {
    provider: "tavily",
    query: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websearchSearch failed:", res.error);
  }
}

run();
```
### Example Usage: invalid_request

<!-- UsageSnippet language="typescript" operationID="search-web" method="post" path="/v3/websearch" example="invalid_request" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.websearch.search({
    provider: "tavily",
    query: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { websearchSearch } from "@orq-ai/node/funcs/websearchSearch.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await websearchSearch(orq, {
    provider: "tavily",
    query: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websearchSearch failed:", res.error);
  }
}

run();
```
### Example Usage: no_results

<!-- UsageSnippet language="typescript" operationID="search-web" method="post" path="/v3/websearch" example="no_results" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.websearch.search({
    provider: "tavily",
    query: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { websearchSearch } from "@orq-ai/node/funcs/websearchSearch.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await websearchSearch(orq, {
    provider: "tavily",
    query: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websearchSearch failed:", res.error);
  }
}

run();
```
### Example Usage: pii_redaction

<!-- UsageSnippet language="typescript" operationID="search-web" method="post" path="/v3/websearch" example="pii_redaction" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.websearch.search({
    limit: 5,
    plugins: [
      {
        id: "pii_redaction",
      },
    ],
    provider: "exa",
    query: "Travel advice for john.smith@example.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { websearchSearch } from "@orq-ai/node/funcs/websearchSearch.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await websearchSearch(orq, {
    limit: 5,
    plugins: [
      {
        id: "pii_redaction",
      },
    ],
    provider: "exa",
    query: "Travel advice for john.smith@example.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websearchSearch failed:", res.error);
  }
}

run();
```
### Example Usage: results

<!-- UsageSnippet language="typescript" operationID="search-web" method="post" path="/v3/websearch" example="results" -->
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.websearch.search({
    provider: "tavily",
    query: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "@orq-ai/node/core.js";
import { websearchSearch } from "@orq-ai/node/funcs/websearchSearch.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await websearchSearch(orq, {
    provider: "tavily",
    query: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("websearchSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchWebRequestBody](../../models/operations/searchwebrequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchWebResponse](../../models/operations/searchwebresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.SearchWebResponseBody                     | 400                                              | application/json                                 |
| errors.SearchWebWebsearchResponseBody            | 401                                              | application/json                                 |
| errors.SearchWebWebsearchResponseResponseBody    | 402                                              | application/json                                 |
| errors.SearchWebWebsearchResponse403ResponseBody | 403                                              | application/json                                 |
| errors.SearchWebWebsearchResponse415ResponseBody | 415                                              | application/json                                 |
| errors.SearchWebWebsearchResponse422ResponseBody | 422                                              | application/json                                 |
| errors.SearchWebWebsearchResponse429ResponseBody | 429                                              | application/json                                 |
| errors.SearchWebWebsearchResponse500ResponseBody | 500                                              | application/json                                 |
| errors.SearchWebWebsearchResponse502ResponseBody | 502                                              | application/json                                 |
| errors.SearchWebWebsearchResponse503ResponseBody | 503                                              | application/json                                 |
| errors.SearchWebWebsearchResponse504ResponseBody | 504                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |