# Items

The schema for a workflow run


## Supported Types

### `operations.Items1`

```typescript
const value: operations.Items1 = {
  id: "<id>",
  workspaceId: "8daffd0c-9bf3-4585-bd80-e8a89f7bd197",
  startedAt: new Date("2024-10-23T22:09:03.351Z"),
  evals: [
    {
      type: "number",
      value: 976.05,
      id: "<id>",
      status: "completed",
      timestamp: new Date("2022-01-21T23:46:01.067Z"),
      relatedEntities: [
        {
          type: "contact",
          contactId: "<id>",
        },
      ],
    },
  ],
  productType: "remoteconfigs",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  data: {
    remoteConfigId: "efee56d7-2751-45fe-bf91-323e3610fc62",
    remoteConfigKey: "<value>",
    remoteConfigType: "<value>",
    remoteConfigVersion: 4341.63,
    remoteConfigVariantId: "81442e30-ffbd-421d-955b-c91501b42fda",
    remoteConfigVariantPosition: 1677.83,
    isDefaultMatched: false,
    action: "simulate",
  },
};
```

### `operations.Items2`

```typescript
const value: operations.Items2 = {
  id: "<id>",
  workspaceId: "ed418cfe-00a2-490b-b6cb-781aad03a860",
  startedAt: new Date("2022-11-14T23:31:26.880Z"),
  evals: [
    {
      type: "boolean",
      value: false,
      id: "<id>",
      status: "completed",
      timestamp: new Date("2023-08-21T05:45:34.061Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "7e38f7e0-804e-4676-ab68-1b8fd55a78f1",
        },
      ],
    },
  ],
  productType: "deployments",
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
  data: {
    deploymentId: "<id>",
    deploymentKey: "<value>",
    deploymentVariantVersion: "<value>",
    deploymentVariantPosition: 2193.71,
    deploymentVariantId: "9c4f27b7-8705-41c7-b6ca-62736e460e1a",
    isDefaultMatched: false,
    action: "simulate",
    promptConfig: {
      stream: false,
      model: "2",
      modelDbId: "41672c56-4466-48b1-a121-20dc05a2212a",
      modelType: "embedding",
      modelParameters: {},
      provider: "huggingface",
      messages: [
        {
          role: "exception",
          content: "<value>",
        },
      ],
    },
    variables: [
      {
        key: "<key>",
      },
    ],
    retries: [
      {
        retryAttempt: 9175.90,
        status: 6774.91,
      },
    ],
    promptSnippets: [
      {
        id: "<id>",
        key: "<key>",
        value: "<value>",
      },
    ],
  },
};
```

### `operations.Items3`

```typescript
const value: operations.Items3 = {
  id: "<id>",
  workspaceId: "5c79a581-dfe0-4dd2-ab0c-cf6768dd0a99",
  startedAt: new Date("2024-03-14T08:51:44.284Z"),
  evals: [
    {
      type: "string",
      value: "<value>",
      id: "<id>",
      status: "failed",
      timestamp: new Date("2024-06-27T16:57:19.473Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "530d8b31-2d49-457d-ab5e-5cc5879be9ef",
        },
      ],
    },
  ],
  productType: "playgrounds",
  relatedEntities: [
    {
      type: "playground_block",
      playgroundBlockId: "aba0333f-a320-4454-ab91-a4b722846c8e",
    },
  ],
  data: {
    choices: [
      {
        index: 1538.14,
      },
    ],
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "ATS",
      modelDbId: "a8b8ff4c-cd6e-46b9-853a-e61466a11222",
      modelType: "embedding",
      modelParameters: {},
      provider: "aws",
      messages: [
        {
          role: "expected_output",
          content: "<value>",
        },
      ],
    },
    variables: [
      {
        key: "<key>",
      },
    ],
    billing: {
      billable: false,
    },
    promptSnippets: [
      {
        id: "<id>",
        key: "<key>",
        value: "<value>",
      },
    ],
  },
};
```

### `operations.Items4`

```typescript
const value: operations.Items4 = {
  id: "<id>",
  workspaceId: "d3f005e9-0d26-41e0-8e23-322d653e953e",
  startedAt: new Date("2022-03-13T14:24:49.734Z"),
  evals: [
    {
      type: "rouge_n",
      value: {
        rouge1: {
          f1: 2770.94,
          precision: 1778.92,
          recall: 6050.91,
        },
        rouge2: {
          f1: 4563.72,
          precision: 1570.70,
          recall: 5744.56,
        },
        rougeL: {
          f1: 6672.32,
          precision: 6937.77,
          recall: 2521.44,
        },
      },
      id: "<id>",
      status: "completed",
      timestamp: new Date("2023-01-05T21:57:51.624Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "798fef37-7bb6-487c-97ad-a577f6eeb36a",
        },
      ],
    },
  ],
  productType: "experiments",
  relatedEntities: [
    {
      type: "experiment",
      experimentId: "79a94563-3721-4806-bbf7-4a2ec21ef42b",
    },
  ],
  data: {
    promptConfig: {
      stream: false,
      model: "Challenger",
      modelDbId: "55748d64-e835-4810-abb7-d9cec41060b7",
      modelType: "vision",
      modelParameters: {},
      provider: "cohere",
      messages: [
        {
          role: "correction",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://basic-porter.com",
              },
            },
          ],
        },
      ],
    },
    variables: [
      {
        key: "<key>",
      },
    ],
    promptSnippets: [
      {
        id: "<id>",
        key: "<key>",
        value: "<value>",
      },
    ],
  },
};
```

