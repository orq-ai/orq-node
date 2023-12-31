<p align="left">
  <a href="https://orquesta.cloud" target="_blank">
    <img src="https://raw.githubusercontent.com/orquestadev/orquesta-node/main/img/banner.png" alt="Orquesta">
  </a>
</p>

![npm](https://img.shields.io/pypi/v/orquesta-node)

# Orquesta Python SDK

## Contents

- [Installation](#installation)
- [Create a client instance](#createclient)
- [Usage](#usage)
- [References](https://github.com/orquestadev/orquesta-python/blob/main/docs/index.html)

## Installation

<div id="installation"/>

```bash
npm install @orquesta/node
```

```bash
yarn add @orquesta/node
```

## Creating a client instance

<div id="createclient"/>

_You can get your workspace API key from the settings section in your Orquesta workspace. `https://my.orquesta.dev/<workspace>/settings/developers`_

Initialize the Orquesta client with your API key:

```ts
import { createClient } from '@orquesta/node';

const client = createClient({
  apiKey: 'orquesta-api-key',
  environment: 'production',
});
```

When creating a client instance, the following connection settings can be adjusted:

- `api_key`: str - workspace API key to use for authentication.
- `environment`: Optional[str] - it is recommended, though not required, to specify the environment for the client. This ensures it is automatically added to the evaluation context.

## Deployments

The Deployments API delivers text outputs, images or tool calls based on the configuration established within Orquesta for your deployments. Additionally, this API supports streaming. To ensure ease of use and minimize errors, using the code snippets from the Orquesta Admin panel is highly recommended.

### Invoke a deployment

#### `invoke()`

```ts
const deployment = await client.deployments.invoke({
  key: 'customer_service',
  context: { environments: 'production', country: 'NLD' },
  inputs: { firstname: 'John', city: 'New York' },
  metadata: { customer_id: 'Qwtqwty90281' },
});

console.log(deployment?.choices[0].message.content);
```

#### `invoke_with_stream()`

```ts
const deployment = await client.deployments.invoke({
  key: 'customer_service',
  context: { environments: 'production', country: 'NLD' },
  inputs: { firstname: 'John', city: 'New York' },
  metadata: { customer_id: 'Qwtqwty90281' },
});

for await (const chunk of stream) {
  console.log(chunk.choices[0].message.content);
}
```

#### Logging metrics to the deployment configuration

After invoking, streaming or getting the configuration of a deployment, you can use the `add_metrics` method to add information to the deployment.

```ts
deployment.addMetrics({
  chain_id: 'c4a75b53-62fa-401b-8e97-493f3d299316',
  conversation_id: 'ee7b0c8c-eeb2-43cf-83e9-a4a49f8f13ea',
  user_id: 'e3a202a6-461b-447c-abe2-018ba4d04cd0',
  feedback: { score: 100 },
  metadata: {
    custom: 'custom_metadata',
    chain_id: 'ad1231xsdaABw',
  },
});
```

### Get deployment configuration

#### `get_config()`

```ts
const deploymentConfig = await client.deployments.getConfig({
  key: 'customer_service',
  context: { environments: 'production', country: 'NLD' },
  inputs: { firstname: 'John', city: 'New York' },
  metadata: { customer_id: 'Qwtqwty90281' },
});

console.log(deploymentConfig);
```

#### Logging metrics to the deployment configuration

After invoking, streaming or getting the configuration of a deployment, you can use the `add_metrics` method to add information to the deployment.

```ts
deployment.addMetrics({
  chain_id: 'c4a75b53-62fa-401b-8e97-493f3d299316',
  conversation_id: 'ee7b0c8c-eeb2-43cf-83e9-a4a49f8f13ea',
  user_id: 'e3a202a6-461b-447c-abe2-018ba4d04cd0',
  feedback: { score: 100 },
  metadata: {
    custom: 'custom_metadata',
    chain_id: 'ad1231xsdaABw',
  },
  usage: {
    prompt_tokens: 100,
    completion_tokens: 900,
    total_tokens: 1000,
  },
  performance: {
    latency: 9000,
    time_to_first_token: 250,
  },
});
```
