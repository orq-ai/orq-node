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
yarn add @orq-ai/node
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
    externalId: "user_12345",
    displayName: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://example.com/avatars/jane-smith.jpg",
    tags: [
      "premium",
      "beta-user",
      "enterprise",
    ],
    metadata: {
      "department": "Engineering",
      "role": "Senior Developer",
      "subscription_tier": "premium",
      "last_login": "2024-01-15T10:30:00Z",
    },
  });

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
    externalId: "user_12345",
    displayName: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://example.com/avatars/jane-smith.jpg",
    tags: [
      "premium",
      "beta-user",
      "enterprise",
    ],
    metadata: {
      "department": "Engineering",
      "role": "Senior Developer",
      "subscription_tier": "premium",
      "last_login": "2024-01-15T10:30:00Z",
    },
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [budgets](docs/sdks/budgets/README.md)

* [list](docs/sdks/budgets/README.md#list) - List contact budget configurations
* [create](docs/sdks/budgets/README.md#create) - Create budget configuration
* [get](docs/sdks/budgets/README.md#get) - Get contact budget configuration
* [update](docs/sdks/budgets/README.md#update) - Update budget configuration
* [delete](docs/sdks/budgets/README.md#delete) - Delete budget configuration

### [chunking](docs/sdks/chunking/README.md)

* [parse](docs/sdks/chunking/README.md#parse) - Parse text

### [contacts](docs/sdks/contacts/README.md)

* [create](docs/sdks/contacts/README.md#create) - Create a contact
* [list](docs/sdks/contacts/README.md#list) - List contacts
* [retrieve](docs/sdks/contacts/README.md#retrieve) - Retrieve a contact
* [update](docs/sdks/contacts/README.md#update) - Update a contact
* [delete](docs/sdks/contacts/README.md#delete) - Delete a contact

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
* [clear](docs/sdks/datasets/README.md#clear) - Delete all datapoints

### [deployments](docs/sdks/deployments/README.md)

* [list](docs/sdks/deployments/README.md#list) - List all deployments
* [getConfig](docs/sdks/deployments/README.md#getconfig) - Get config
* [invoke](docs/sdks/deployments/README.md#invoke) - Invoke
* [stream](docs/sdks/deployments/README.md#stream) - Stream

#### [deployments.metrics](docs/sdks/metrics/README.md)

* [create](docs/sdks/metrics/README.md#create) - Add metrics

### [evals](docs/sdks/evals/README.md)

* [all](docs/sdks/evals/README.md#all) - Get all Evaluators
* [create](docs/sdks/evals/README.md#create) - Create an Evaluator
* [update](docs/sdks/evals/README.md#update) - Update an Evaluator
* [delete](docs/sdks/evals/README.md#delete) - Delete an Evaluator
* [bertScore](docs/sdks/evals/README.md#bertscore) - Run BertScore Evaluator
* [bleuScore](docs/sdks/evals/README.md#bleuscore) - Run BLEU Score Evaluator
* [containsAll](docs/sdks/evals/README.md#containsall) - Run Contains All Evaluator
* [containsAny](docs/sdks/evals/README.md#containsany) - Run Contains Any Evaluator
* [containsEmail](docs/sdks/evals/README.md#containsemail) - Run Contains Email Evaluator
* [containsNone](docs/sdks/evals/README.md#containsnone) - Run Contains None Evaluator
* [containsUrl](docs/sdks/evals/README.md#containsurl) - Run Contains URL Evaluator
* [containsValidLink](docs/sdks/evals/README.md#containsvalidlink) - Run Contains Valid Link Evaluator
* [contains](docs/sdks/evals/README.md#contains) - Run Contains Evaluator
* [endsWith](docs/sdks/evals/README.md#endswith) - Run Ends With Evaluator
* [exactMatch](docs/sdks/evals/README.md#exactmatch) - Run Exact Match Evaluator
* [lengthBetween](docs/sdks/evals/README.md#lengthbetween) - Run Length Between Evaluator
* [lengthGreaterThan](docs/sdks/evals/README.md#lengthgreaterthan) - Run Length Greater Than Evaluator
* [lengthLessThan](docs/sdks/evals/README.md#lengthlessthan) - Run Length Less Than Evaluator
* [validJson](docs/sdks/evals/README.md#validjson) - Run JSON Validation Evaluator
* [ageAppropriate](docs/sdks/evals/README.md#ageappropriate) - Run Age Appropriate Evaluator
* [botDetection](docs/sdks/evals/README.md#botdetection) - Run Bot Detection Evaluator
* [factCheckingKnowledgeBase](docs/sdks/evals/README.md#factcheckingknowledgebase) - Run Fact Checking Knowledge Base Evaluator
* [grammar](docs/sdks/evals/README.md#grammar) - Run Grammar Evaluator
* [localization](docs/sdks/evals/README.md#localization) - Run Localization Evaluator
* [pii](docs/sdks/evals/README.md#pii) - Run PII Evaluator
* [sentimentClassification](docs/sdks/evals/README.md#sentimentclassification) - Run Sentiment Classification Evaluator
* [summarization](docs/sdks/evals/README.md#summarization) - Run Summarization Evaluator
* [toneOfVoice](docs/sdks/evals/README.md#toneofvoice) - Run Tone of Voice Evaluator
* [translation](docs/sdks/evals/README.md#translation) - Run Translation Evaluator
* [ragasCoherence](docs/sdks/evals/README.md#ragascoherence) - Run Coherence Evaluator
* [ragasConciseness](docs/sdks/evals/README.md#ragasconciseness) - Run Conciseness Evaluator
* [ragasContextPrecision](docs/sdks/evals/README.md#ragascontextprecision) - Run Context Precision Evaluator
* [ragasContextRecall](docs/sdks/evals/README.md#ragascontextrecall) - Run Context Recall Evaluator
* [ragasContextEntitiesRecall](docs/sdks/evals/README.md#ragascontextentitiesrecall) - Run Context Entities Recall Evaluator
* [ragasCorrectness](docs/sdks/evals/README.md#ragascorrectness) - Run Correctness Evaluator
* [ragasFaithfulness](docs/sdks/evals/README.md#ragasfaithfulness) - Run Faithfulness Evaluator
* [ragasHarmfulness](docs/sdks/evals/README.md#ragasharmfulness) - Run Harmfulness Evaluator
* [ragasMaliciousness](docs/sdks/evals/README.md#ragasmaliciousness) - Run Maliciousness Evaluator
* [ragasNoiseSensitivity](docs/sdks/evals/README.md#ragasnoisesensitivity) - Run Noise Sensitivity Evaluator
* [ragasResponseRelevancy](docs/sdks/evals/README.md#ragasresponserelevancy) - Run Response Relevancy Evaluator
* [ragasSummarization](docs/sdks/evals/README.md#ragassummarization) - Run Summarization Evaluator
* [invoke](docs/sdks/evals/README.md#invoke) - Invoke a Custom Evaluator

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
* [search](docs/sdks/knowledge/README.md#search) - Search knowledge base
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

- [`budgetsCreate`](docs/sdks/budgets/README.md#create) - Create budget configuration
- [`budgetsDelete`](docs/sdks/budgets/README.md#delete) - Delete budget configuration
- [`budgetsGet`](docs/sdks/budgets/README.md#get) - Get contact budget configuration
- [`budgetsList`](docs/sdks/budgets/README.md#list) - List contact budget configurations
- [`budgetsUpdate`](docs/sdks/budgets/README.md#update) - Update budget configuration
- [`chunkingParse`](docs/sdks/chunking/README.md#parse) - Parse text
- [`contactsCreate`](docs/sdks/contacts/README.md#create) - Create a contact
- [`contactsDelete`](docs/sdks/contacts/README.md#delete) - Delete a contact
- [`contactsList`](docs/sdks/contacts/README.md#list) - List contacts
- [`contactsRetrieve`](docs/sdks/contacts/README.md#retrieve) - Retrieve a contact
- [`contactsUpdate`](docs/sdks/contacts/README.md#update) - Update a contact
- [`datasetsClear`](docs/sdks/datasets/README.md#clear) - Delete all datapoints
- [`datasetsCreate`](docs/sdks/datasets/README.md#create) - Create a dataset
- [`datasetsCreateDatapoint`](docs/sdks/datasets/README.md#createdatapoint) - Create a datapoint
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
- [`evalsAgeAppropriate`](docs/sdks/evals/README.md#ageappropriate) - Run Age Appropriate Evaluator
- [`evalsAll`](docs/sdks/evals/README.md#all) - Get all Evaluators
- [`evalsBertScore`](docs/sdks/evals/README.md#bertscore) - Run BertScore Evaluator
- [`evalsBleuScore`](docs/sdks/evals/README.md#bleuscore) - Run BLEU Score Evaluator
- [`evalsBotDetection`](docs/sdks/evals/README.md#botdetection) - Run Bot Detection Evaluator
- [`evalsContains`](docs/sdks/evals/README.md#contains) - Run Contains Evaluator
- [`evalsContainsAll`](docs/sdks/evals/README.md#containsall) - Run Contains All Evaluator
- [`evalsContainsAny`](docs/sdks/evals/README.md#containsany) - Run Contains Any Evaluator
- [`evalsContainsEmail`](docs/sdks/evals/README.md#containsemail) - Run Contains Email Evaluator
- [`evalsContainsNone`](docs/sdks/evals/README.md#containsnone) - Run Contains None Evaluator
- [`evalsContainsUrl`](docs/sdks/evals/README.md#containsurl) - Run Contains URL Evaluator
- [`evalsContainsValidLink`](docs/sdks/evals/README.md#containsvalidlink) - Run Contains Valid Link Evaluator
- [`evalsCreate`](docs/sdks/evals/README.md#create) - Create an Evaluator
- [`evalsDelete`](docs/sdks/evals/README.md#delete) - Delete an Evaluator
- [`evalsEndsWith`](docs/sdks/evals/README.md#endswith) - Run Ends With Evaluator
- [`evalsExactMatch`](docs/sdks/evals/README.md#exactmatch) - Run Exact Match Evaluator
- [`evalsFactCheckingKnowledgeBase`](docs/sdks/evals/README.md#factcheckingknowledgebase) - Run Fact Checking Knowledge Base Evaluator
- [`evalsGrammar`](docs/sdks/evals/README.md#grammar) - Run Grammar Evaluator
- [`evalsInvoke`](docs/sdks/evals/README.md#invoke) - Invoke a Custom Evaluator
- [`evalsLengthBetween`](docs/sdks/evals/README.md#lengthbetween) - Run Length Between Evaluator
- [`evalsLengthGreaterThan`](docs/sdks/evals/README.md#lengthgreaterthan) - Run Length Greater Than Evaluator
- [`evalsLengthLessThan`](docs/sdks/evals/README.md#lengthlessthan) - Run Length Less Than Evaluator
- [`evalsLocalization`](docs/sdks/evals/README.md#localization) - Run Localization Evaluator
- [`evalsPii`](docs/sdks/evals/README.md#pii) - Run PII Evaluator
- [`evalsRagasCoherence`](docs/sdks/evals/README.md#ragascoherence) - Run Coherence Evaluator
- [`evalsRagasConciseness`](docs/sdks/evals/README.md#ragasconciseness) - Run Conciseness Evaluator
- [`evalsRagasContextEntitiesRecall`](docs/sdks/evals/README.md#ragascontextentitiesrecall) - Run Context Entities Recall Evaluator
- [`evalsRagasContextPrecision`](docs/sdks/evals/README.md#ragascontextprecision) - Run Context Precision Evaluator
- [`evalsRagasContextRecall`](docs/sdks/evals/README.md#ragascontextrecall) - Run Context Recall Evaluator
- [`evalsRagasCorrectness`](docs/sdks/evals/README.md#ragascorrectness) - Run Correctness Evaluator
- [`evalsRagasFaithfulness`](docs/sdks/evals/README.md#ragasfaithfulness) - Run Faithfulness Evaluator
- [`evalsRagasHarmfulness`](docs/sdks/evals/README.md#ragasharmfulness) - Run Harmfulness Evaluator
- [`evalsRagasMaliciousness`](docs/sdks/evals/README.md#ragasmaliciousness) - Run Maliciousness Evaluator
- [`evalsRagasNoiseSensitivity`](docs/sdks/evals/README.md#ragasnoisesensitivity) - Run Noise Sensitivity Evaluator
- [`evalsRagasResponseRelevancy`](docs/sdks/evals/README.md#ragasresponserelevancy) - Run Response Relevancy Evaluator
- [`evalsRagasSummarization`](docs/sdks/evals/README.md#ragassummarization) - Run Summarization Evaluator
- [`evalsSentimentClassification`](docs/sdks/evals/README.md#sentimentclassification) - Run Sentiment Classification Evaluator
- [`evalsSummarization`](docs/sdks/evals/README.md#summarization) - Run Summarization Evaluator
- [`evalsToneOfVoice`](docs/sdks/evals/README.md#toneofvoice) - Run Tone of Voice Evaluator
- [`evalsTranslation`](docs/sdks/evals/README.md#translation) - Run Translation Evaluator
- [`evalsUpdate`](docs/sdks/evals/README.md#update) - Update an Evaluator
- [`evalsValidJson`](docs/sdks/evals/README.md#validjson) - Run JSON Validation Evaluator
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
- [`knowledgeSearch`](docs/sdks/knowledge/README.md#search) - Search knowledge base
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
  environment: "<value>",
  contactId: "<id>",
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.deployments.stream({
    key: "<key>",
  });

  for await (const event of result) {
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
    externalId: "user_12345",
    displayName: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://example.com/avatars/jane-smith.jpg",
    tags: [
      "premium",
      "beta-user",
      "enterprise",
    ],
    metadata: {
      "department": "Engineering",
      "role": "Senior Developer",
      "subscription_tier": "premium",
      "last_login": "2024-01-15T10:30:00Z",
    },
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
    externalId: "user_12345",
    displayName: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://example.com/avatars/jane-smith.jpg",
    tags: [
      "premium",
      "beta-user",
      "enterprise",
    ],
    metadata: {
      "department": "Engineering",
      "role": "Senior Developer",
      "subscription_tier": "premium",
      "last_login": "2024-01-15T10:30:00Z",
    },
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`OrqError`](./src/models/errors/orqerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Orq } from "@orq-ai/node";
import * as errors from "@orq-ai/node/models/errors";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  try {
    const result = await orq.contacts.retrieve({
      id: "<id>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.OrqError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.RetrieveContactResponseBody) {
        console.log(error.data$.error); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`OrqError`](./src/models/errors/orqerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (92)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`OrqError`](./src/models/errors/orqerror.ts)**:
* [`HonoApiError`](./src/models/errors/honoapierror.ts): Applicable to 6 of 99 methods.*
* [`RetrieveContactResponseBody`](./src/models/errors/retrievecontactresponsebody.ts): Contact not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`UpdateContactResponseBody`](./src/models/errors/updatecontactresponsebody.ts): Contact not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`DeleteContactResponseBody`](./src/models/errors/deletecontactresponsebody.ts): Contact not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`UpdatePromptResponseBody`](./src/models/errors/updatepromptresponsebody.ts): Prompt not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetPromptVersionResponseBody`](./src/models/errors/getpromptversionresponsebody.ts): Not Found - The prompt or prompt version does not exist. Status code `404`. Applicable to 1 of 99 methods.*
* [`GetEvalsResponseBody`](./src/models/errors/getevalsresponsebody.ts): Workspace ID is not found on the request. Status code `404`. Applicable to 1 of 99 methods.*
* [`CreateEvalResponseBody`](./src/models/errors/createevalresponsebody.ts): Workspace ID is not found on the request. Status code `404`. Applicable to 1 of 99 methods.*
* [`UpdateEvalResponseBody`](./src/models/errors/updateevalresponsebody.ts): Workspace ID is not found on the request. Status code `404`. Applicable to 1 of 99 methods.*
* [`DeleteEvalResponseBody`](./src/models/errors/deleteevalresponsebody.ts): Workspace ID is not found on the request. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsBertScoreResponseBody`](./src/models/errors/evalsbertscoreresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsBleuScoreResponseBody`](./src/models/errors/evalsbleuscoreresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsContainsAllResponseBody`](./src/models/errors/evalscontainsallresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsContainsAnyResponseBody`](./src/models/errors/evalscontainsanyresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsContainsEmailResponseBody`](./src/models/errors/evalscontainsemailresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsContainsNoneResponseBody`](./src/models/errors/evalscontainsnoneresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsContainsUrlResponseBody`](./src/models/errors/evalscontainsurlresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsContainsValidLinkResponseBody`](./src/models/errors/evalscontainsvalidlinkresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsContainsResponseBody`](./src/models/errors/evalscontainsresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsEndsWithResponseBody`](./src/models/errors/evalsendswithresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsExactMatchResponseBody`](./src/models/errors/evalsexactmatchresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsLengthBetweenResponseBody`](./src/models/errors/evalslengthbetweenresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsLengthGreaterThanResponseBody`](./src/models/errors/evalslengthgreaterthanresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsLengthLessThanResponseBody`](./src/models/errors/evalslengthlessthanresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsValidJsonResponseBody`](./src/models/errors/evalsvalidjsonresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsAgeAppropriateResponseBody`](./src/models/errors/evalsageappropriateresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsBotDetectionResponseBody`](./src/models/errors/evalsbotdetectionresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsFactCheckingKnowledgeBaseResponseBody`](./src/models/errors/evalsfactcheckingknowledgebaseresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsGrammarResponseBody`](./src/models/errors/evalsgrammarresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsLocalizationResponseBody`](./src/models/errors/evalslocalizationresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsPiiResponseBody`](./src/models/errors/evalspiiresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsSentimentClassificationResponseBody`](./src/models/errors/evalssentimentclassificationresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsSummarizationResponseBody`](./src/models/errors/evalssummarizationresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsToneOfVoiceResponseBody`](./src/models/errors/evalstoneofvoiceresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsTranslationResponseBody`](./src/models/errors/evalstranslationresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasCoherenceResponseBody`](./src/models/errors/evalsragascoherenceresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasConcisenessResponseBody`](./src/models/errors/evalsragasconcisenessresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasContextPrecisionResponseBody`](./src/models/errors/evalsragascontextprecisionresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasContextRecallResponseBody`](./src/models/errors/evalsragascontextrecallresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasContextEntitiesRecallResponseBody`](./src/models/errors/evalsragascontextentitiesrecallresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasCorrectnessResponseBody`](./src/models/errors/evalsragascorrectnessresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasFaithfulnessResponseBody`](./src/models/errors/evalsragasfaithfulnessresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasHarmfulnessResponseBody`](./src/models/errors/evalsragasharmfulnessresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasMaliciousnessResponseBody`](./src/models/errors/evalsragasmaliciousnessresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasNoiseSensitivityResponseBody`](./src/models/errors/evalsragasnoisesensitivityresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasResponseRelevancyResponseBody`](./src/models/errors/evalsragasresponserelevancyresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsRagasSummarizationResponseBody`](./src/models/errors/evalsragassummarizationresponsebody.ts): Evaluator not found. Status code `404`. Applicable to 1 of 99 methods.*
* [`InvokeEvalResponseBody`](./src/models/errors/invokeevalresponsebody.ts): Workspace ID is not found on the request. Status code `404`. Applicable to 1 of 99 methods.*
* [`EvalsBertScoreEvalsResponseBody`](./src/models/errors/evalsbertscoreevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsBleuScoreEvalsResponseBody`](./src/models/errors/evalsbleuscoreevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsContainsAllEvalsResponseBody`](./src/models/errors/evalscontainsallevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsContainsAnyEvalsResponseBody`](./src/models/errors/evalscontainsanyevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsContainsEmailEvalsResponseBody`](./src/models/errors/evalscontainsemailevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsContainsNoneEvalsResponseBody`](./src/models/errors/evalscontainsnoneevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsContainsUrlEvalsResponseBody`](./src/models/errors/evalscontainsurlevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsContainsValidLinkEvalsResponseBody`](./src/models/errors/evalscontainsvalidlinkevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsContainsEvalsResponseBody`](./src/models/errors/evalscontainsevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsEndsWithEvalsResponseBody`](./src/models/errors/evalsendswithevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsExactMatchEvalsResponseBody`](./src/models/errors/evalsexactmatchevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsLengthBetweenEvalsResponseBody`](./src/models/errors/evalslengthbetweenevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsLengthGreaterThanEvalsResponseBody`](./src/models/errors/evalslengthgreaterthanevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsLengthLessThanEvalsResponseBody`](./src/models/errors/evalslengthlessthanevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsValidJsonEvalsResponseBody`](./src/models/errors/evalsvalidjsonevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsAgeAppropriateEvalsResponseBody`](./src/models/errors/evalsageappropriateevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsBotDetectionEvalsResponseBody`](./src/models/errors/evalsbotdetectionevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsFactCheckingKnowledgeBaseEvalsResponseBody`](./src/models/errors/evalsfactcheckingknowledgebaseevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsGrammarEvalsResponseBody`](./src/models/errors/evalsgrammarevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsLocalizationEvalsResponseBody`](./src/models/errors/evalslocalizationevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsPiiEvalsResponseBody`](./src/models/errors/evalspiievalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsSentimentClassificationEvalsResponseBody`](./src/models/errors/evalssentimentclassificationevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsSummarizationEvalsResponseBody`](./src/models/errors/evalssummarizationevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsToneOfVoiceEvalsResponseBody`](./src/models/errors/evalstoneofvoiceevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsTranslationEvalsResponseBody`](./src/models/errors/evalstranslationevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasCoherenceEvalsResponseBody`](./src/models/errors/evalsragascoherenceevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasConcisenessEvalsResponseBody`](./src/models/errors/evalsragasconcisenessevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasContextPrecisionEvalsResponseBody`](./src/models/errors/evalsragascontextprecisionevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasContextRecallEvalsResponseBody`](./src/models/errors/evalsragascontextrecallevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasContextEntitiesRecallEvalsResponseBody`](./src/models/errors/evalsragascontextentitiesrecallevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasCorrectnessEvalsResponseBody`](./src/models/errors/evalsragascorrectnessevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasFaithfulnessEvalsResponseBody`](./src/models/errors/evalsragasfaithfulnessevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasHarmfulnessEvalsResponseBody`](./src/models/errors/evalsragasharmfulnessevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasMaliciousnessEvalsResponseBody`](./src/models/errors/evalsragasmaliciousnessevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasNoiseSensitivityEvalsResponseBody`](./src/models/errors/evalsragasnoisesensitivityevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasResponseRelevancyEvalsResponseBody`](./src/models/errors/evalsragasresponserelevancyevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`EvalsRagasSummarizationEvalsResponseBody`](./src/models/errors/evalsragassummarizationevalsresponsebody.ts): Internal server error. Status code `500`. Applicable to 1 of 99 methods.*
* [`InvokeEvalEvalsResponseBody`](./src/models/errors/invokeevalevalsresponsebody.ts): Error running the evaluator. Status code `500`. Applicable to 1 of 99 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
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
    externalId: "user_12345",
    displayName: "Jane Smith",
    email: "jane.smith@example.com",
    avatarUrl: "https://example.com/avatars/jane-smith.jpg",
    tags: [
      "premium",
      "beta-user",
      "enterprise",
    ],
    metadata: {
      "department": "Engineering",
      "role": "Senior Developer",
      "subscription_tier": "premium",
      "last_login": "2024-01-15T10:30:00Z",
    },
  });

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

const sdk = new Orq({ httpClient: httpClient });
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
