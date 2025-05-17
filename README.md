# @orq-ai/node

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@orq-ai/node* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@orq-ai/node&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

orq.ai API: orq.ai API documentation

For more information about the API: [orq.ai Documentation](https://docs.orq.ai)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@orq-ai/node](#orq-ainode)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Server-sent event streaming](#server-sent-event-streaming)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @orq-ai/node
```

### PNPM

```bash
pnpm add @orq-ai/node
```

### Bun

```bash
bun add @orq-ai/node
```

### Yarn

```bash
yarn add @orq-ai/node zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Orq": {
      "command": "npx",
      "args": [
        "-y", "--package", "@orq-ai/node",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--contact-id", "...",
        "--environment", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Orq": {
      "command": "npx",
      "args": [
        "-y", "--package", "@orq-ai/node",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--contact-id", "...",
        "--environment", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @orq-ai/node -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      | Environment Variable |
| -------- | ---- | ----------- | -------------------- |
| `apiKey` | http | HTTP Bearer | `ORQ_API_KEY`        |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [contacts](docs/sdks/contacts/README.md)

* [create](docs/sdks/contacts/README.md#create) - Update user information

### [datasets](docs/sdks/datasets/README.md)

* [list](docs/sdks/datasets/README.md#list) - List datasets
* [create](docs/sdks/datasets/README.md#create) - Create a dataset
* [retrieve](docs/sdks/datasets/README.md#retrieve) - Retrieve a dataset
* [update](docs/sdks/datasets/README.md#update) - Update a dataset
* [delete](docs/sdks/datasets/README.md#delete) - Delete a dataset
* [listDatapoints](docs/sdks/datasets/README.md#listdatapoints) - List datapoints
* [createDatapoint](docs/sdks/datasets/README.md#createdatapoint) - Create a datapoint
* [retrieveDatapoint](docs/sdks/datasets/README.md#retrievedatapoint) - Retrieve a datapoint
* [updateDatapoint](docs/sdks/datasets/README.md#updatedatapoint) - Update a datapoint
* [deleteDatapoint](docs/sdks/datasets/README.md#deletedatapoint) - Delete a datapoint
* [createDatapoints](docs/sdks/datasets/README.md#createdatapoints) - Create multiple datapoints
* [clear](docs/sdks/datasets/README.md#clear) - Delete all datapoints

### [deployments](docs/sdks/deployments/README.md)

* [list](docs/sdks/deployments/README.md#list) - List all deployments
* [getConfig](docs/sdks/deployments/README.md#getconfig) - Get config
* [invoke](docs/sdks/deployments/README.md#invoke) - Invoke
* [stream](docs/sdks/deployments/README.md#stream) - Stream

#### [deployments.metrics](docs/sdks/metrics/README.md)

* [create](docs/sdks/metrics/README.md#create) - Add metrics

### [feedback](docs/sdks/feedback/README.md)

* [create](docs/sdks/feedback/README.md#create) - Submit feedback

### [files](docs/sdks/files/README.md)

* [create](docs/sdks/files/README.md#create) - Create file
* [list](docs/sdks/files/README.md#list) - List all files
* [get](docs/sdks/files/README.md#get) - Retrieve a file
* [delete](docs/sdks/files/README.md#delete) - Delete file

### [knowledge](docs/sdks/knowledge/README.md)

* [list](docs/sdks/knowledge/README.md#list) - List all knowledge bases
* [create](docs/sdks/knowledge/README.md#create) - Create a knowledge
* [retrieve](docs/sdks/knowledge/README.md#retrieve) - Retrieves a knowledge base
* [update](docs/sdks/knowledge/README.md#update) - Updates a knowledge
* [delete](docs/sdks/knowledge/README.md#delete) - Deletes a knowledge
* [listDatasources](docs/sdks/knowledge/README.md#listdatasources) - List all datasources
* [createDatasource](docs/sdks/knowledge/README.md#createdatasource) - Create a new datasource
* [retrieveDatasource](docs/sdks/knowledge/README.md#retrievedatasource) - Retrieve a datasource
* [deleteDatasource](docs/sdks/knowledge/README.md#deletedatasource) - Deletes a datasource
* [updateDatasource](docs/sdks/knowledge/README.md#updatedatasource) - Update a datasource
* [createChunks](docs/sdks/knowledge/README.md#createchunks) - Create chunks for a datasource
* [listChunks](docs/sdks/knowledge/README.md#listchunks) - List all chunks for a datasource
* [updateChunk](docs/sdks/knowledge/README.md#updatechunk) - Update a chunk
* [deleteChunk](docs/sdks/knowledge/README.md#deletechunk) - Delete a chunk
* [retrieveChunk](docs/sdks/knowledge/README.md#retrievechunk) - Retrieve a chunk

### [models](docs/sdks/models/README.md)

* [list](docs/sdks/models/README.md#list) - List models


### [prompts](docs/sdks/prompts/README.md)

* [list](docs/sdks/prompts/README.md#list) - List all prompts
* [create](docs/sdks/prompts/README.md#create) - Create a prompt
* [retrieve](docs/sdks/prompts/README.md#retrieve) - Retrieve a prompt
* [update](docs/sdks/prompts/README.md#update) - Update a prompt
* [delete](docs/sdks/prompts/README.md#delete) - Delete a prompt
* [listVersions](docs/sdks/prompts/README.md#listversions) - List all prompt versions
* [getVersion](docs/sdks/prompts/README.md#getversion) - Retrieve a prompt version

### [remoteconfigs](docs/sdks/remoteconfigs/README.md)

* [retrieve](docs/sdks/remoteconfigs/README.md#retrieve) - Retrieve a remote config

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`contactsCreate`](docs/sdks/contacts/README.md#create) - Update user information
- [`datasetsClear`](docs/sdks/datasets/README.md#clear) - Delete all datapoints
- [`datasetsCreate`](docs/sdks/datasets/README.md#create) - Create a dataset
- [`datasetsCreateDatapoint`](docs/sdks/datasets/README.md#createdatapoint) - Create a datapoint
- [`datasetsCreateDatapoints`](docs/sdks/datasets/README.md#createdatapoints) - Create multiple datapoints
- [`datasetsDelete`](docs/sdks/datasets/README.md#delete) - Delete a dataset
- [`datasetsDeleteDatapoint`](docs/sdks/datasets/README.md#deletedatapoint) - Delete a datapoint
- [`datasetsList`](docs/sdks/datasets/README.md#list) - List datasets
- [`datasetsListDatapoints`](docs/sdks/datasets/README.md#listdatapoints) - List datapoints
- [`datasetsRetrieve`](docs/sdks/datasets/README.md#retrieve) - Retrieve a dataset
- [`datasetsRetrieveDatapoint`](docs/sdks/datasets/README.md#retrievedatapoint) - Retrieve a datapoint
- [`datasetsUpdate`](docs/sdks/datasets/README.md#update) - Update a dataset
- [`datasetsUpdateDatapoint`](docs/sdks/datasets/README.md#updatedatapoint) - Update a datapoint
- [`deploymentsGetConfig`](docs/sdks/deployments/README.md#getconfig) - Get config
- [`deploymentsInvoke`](docs/sdks/deployments/README.md#invoke) - Invoke
- [`deploymentsList`](docs/sdks/deployments/README.md#list) - List all deployments
- [`deploymentsMetricsCreate`](docs/sdks/metrics/README.md#create) - Add metrics
- [`deploymentsStream`](docs/sdks/deployments/README.md#stream) - Stream
- [`feedbackCreate`](docs/sdks/feedback/README.md#create) - Submit feedback
- [`filesCreate`](docs/sdks/files/README.md#create) - Create file
- [`filesDelete`](docs/sdks/files/README.md#delete) - Delete file
- [`filesGet`](docs/sdks/files/README.md#get) - Retrieve a file
- [`filesList`](docs/sdks/files/README.md#list) - List all files
- [`knowledgeCreate`](docs/sdks/knowledge/README.md#create) - Create a knowledge
- [`knowledgeCreateChunks`](docs/sdks/knowledge/README.md#createchunks) - Create chunks for a datasource
- [`knowledgeCreateDatasource`](docs/sdks/knowledge/README.md#createdatasource) - Create a new datasource
- [`knowledgeDelete`](docs/sdks/knowledge/README.md#delete) - Deletes a knowledge
- [`knowledgeDeleteChunk`](docs/sdks/knowledge/README.md#deletechunk) - Delete a chunk
- [`knowledgeDeleteDatasource`](docs/sdks/knowledge/README.md#deletedatasource) - Deletes a datasource
- [`knowledgeList`](docs/sdks/knowledge/README.md#list) - List all knowledge bases
- [`knowledgeListChunks`](docs/sdks/knowledge/README.md#listchunks) - List all chunks for a datasource
- [`knowledgeListDatasources`](docs/sdks/knowledge/README.md#listdatasources) - List all datasources
- [`knowledgeRetrieve`](docs/sdks/knowledge/README.md#retrieve) - Retrieves a knowledge base
- [`knowledgeRetrieveChunk`](docs/sdks/knowledge/README.md#retrievechunk) - Retrieve a chunk
- [`knowledgeRetrieveDatasource`](docs/sdks/knowledge/README.md#retrievedatasource) - Retrieve a datasource
- [`knowledgeUpdate`](docs/sdks/knowledge/README.md#update) - Updates a knowledge
- [`knowledgeUpdateChunk`](docs/sdks/knowledge/README.md#updatechunk) - Update a chunk
- [`knowledgeUpdateDatasource`](docs/sdks/knowledge/README.md#updatedatasource) - Update a datasource
- [`modelsList`](docs/sdks/models/README.md#list) - List models
- [`promptsCreate`](docs/sdks/prompts/README.md#create) - Create a prompt
- [`promptsDelete`](docs/sdks/prompts/README.md#delete) - Delete a prompt
- [`promptsGetVersion`](docs/sdks/prompts/README.md#getversion) - Retrieve a prompt version
- [`promptsList`](docs/sdks/prompts/README.md#list) - List all prompts
- [`promptsListVersions`](docs/sdks/prompts/README.md#listversions) - List all prompt versions
- [`promptsRetrieve`](docs/sdks/prompts/README.md#retrieve) - Retrieve a prompt
- [`promptsUpdate`](docs/sdks/prompts/README.md#update) - Update a prompt
- [`remoteconfigsRetrieve`](docs/sdks/remoteconfigs/README.md#retrieve) - Retrieve a remote config

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.deployments.stream({
    key: "<key>",
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();

```

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Orq } from "@orq-ai/node";
import { openAsBlob } from "node:fs";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.files.create({
    file: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
    externalId: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `list` method may throw the following errors:

| Error Type          | Status Code | Content Type     |
| ------------------- | ----------- | ---------------- |
| errors.HonoApiError | 500         | application/json |
| errors.APIError     | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Orq } from "@orq-ai/node";
import { HonoApiError, SDKValidationError } from "@orq-ai/node/models/errors";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await orq.deployments.list({});

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof HonoApiError): {
        // Handle err.data$: HonoApiErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Orq } from "@orq-ai/node";

const orq = new Orq({
  serverURL: "https://my.orq.ai",
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Orq } from "@orq-ai/node";
import { HTTPClient } from "@orq-ai/node/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Orq({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Orq } from "@orq-ai/node";

const sdk = new Orq({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ORQ_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@orq-ai/node&utm_campaign=typescript)
