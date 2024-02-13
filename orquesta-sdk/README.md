<p align="left">
  <a href="https://orquesta.cloud" target="_blank">
    <img src="https://raw.githubusercontent.com/orquestadev/orquesta-node/main/img/banner.png" alt="Orquesta">
  </a>
</p>

![NPM Version](https://img.shields.io/npm/v/@orquesta/node)

# Orquesta Node SDK

## Contents

- [Installation](#installation)
- [Create a client instance](#createclient)
- [Deployments](#Deployments)
- [Logging](#logging)

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

<div id="deployments"/>

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

#### Adding messages as part of your request

If you are using the `invoke` method, you can include `messages` in your request to the model. The `messages` property allows you to combine `chat_history` with the prompt configuration in Orquesta, or to directly send `messages` to the model if you are managing the prompt in your code.

```ts
const deployment = await client.deployments.invoke({
  key: 'customer_service',
  messages: [
    {
      role: 'user',
      message:
        'A customer is asking about the latest software update features. Generate a detailed and informative response highlighting the key new features and improvements in the latest update.',
    },
  ],
  context: { environments: 'production', country: 'NLD' },
  inputs: { firstname: 'John', city: 'New York' },
  metadata: { customer_id: 'Qwtqwty90281' },
});

console.log(deployment?.choices[0].message.content);
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
  messages: [
    {
      role: 'user',
      message:
        'A customer is asking about the latest software update features. Generate a detailed and informative response highlighting the key new features and improvements in the latest update.',
    },
  ],
});
```

### Logging LLM responses

<div id="logging"/>

Wether you use the `get_config` or `invoke`, you can log the model generations to the deployment. Here are some examples on how to do this:

#### Logging the completion choices the model generated for the input prompt

```ts
deployment.addMetrics({
  choices: [
    {
      index: 0,
      finish_reason: 'stop',
      message: {
        role: 'assistant',
        content:
          "Dear customer: Thank you for your interest in our latest software update! We're excited to share with you the new features and improvements we've rolled out. Here's what you can look forward to in this update",
      },
    },
  ],
});
```

#### Logging the completion choices the model generated for the input prompt

You can save the images generated by the model in Orquesta. If the image format is `base64` we always store it as a `png`.

```ts
deployment.addMetrics({
  choices: [
    {
      index: 0,
      finish_reason: 'stop',
      message: {
        role: 'assistant',
        url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-HunR6LApWxZ7z1JS4w7Ot2ux/user-wB8Cy1SbfbQQsj6tw7hljqgU/img-nEQPFbZ9fvkPMSM5YkCEXCdv.png?st=2024-02-13T19%3A09%3A12Z&se=2024-02-13T21%3A09%3A12Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-02-13T17%3A31%3A27Z&ske=2024-02-14T17%3A31%3A27Z&sks=b&skv=2021-08-06&sig=3B3mlUIlVj8A1nKfyD2e1YEaR/RsO1dSpCCesI/tC0s%3D',
      },
    },
  ],
});
```

#### Logging the the output of the tool calls

```ts
deployment.addMetrics({
  choices: [
    {
      index: 0,
      message: {
        role: 'assistant',
        content: null,
        tool_calls: [
          {
            type: 'function',
            id: 'call_pDBPMMacPXOtoWhTWibW1D94',
            function: {
              name: 'get_weather',
              arguments: '{"location":"San Francisco, CA"}',
            },
          },
        ],
      },
      finish_reason: 'tool_calls',
    },
  ],
});
```
