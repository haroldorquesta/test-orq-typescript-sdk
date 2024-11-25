# GetV2LogsIdResponseBody

The schema for a workflow run


## Supported Types

### `operations.ResponseBody1`

```typescript
const value: operations.ResponseBody1 = {
  id: "<id>",
  workspaceId: "8b915d3b-476c-42b5-a706-0a2eab4206f1",
  startedAt: new Date("2022-11-18T05:14:44.771Z"),
  evals: [
    {
      type: "rouge_n",
      value: {
        rouge1: {
          f1: 2017.26,
          precision: 2703.75,
          recall: 8485.76,
        },
        rouge2: {
          f1: 5953.30,
          precision: 3065.62,
          recall: 4922.98,
        },
        rougeL: {
          f1: 7388.82,
          precision: 1819.21,
          recall: 6023.53,
        },
      },
      id: "<id>",
      status: "completed",
      timestamp: new Date("2024-12-31T08:10:01.806Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "776c620d-27cd-4d04-88dc-a13ff5a83992",
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
    remoteConfigId: "aee67b46-7e59-4862-96d6-5923d9e90549",
    remoteConfigKey: "<value>",
    remoteConfigType: "<value>",
    remoteConfigVersion: 5249.20,
    remoteConfigVariantId: "25f42097-0339-48fc-87cd-c5b53df7e585",
    remoteConfigVariantPosition: 6582.34,
    isDefaultMatched: false,
    action: "get_config",
  },
};
```

### `operations.ResponseBody2`

```typescript
const value: operations.ResponseBody2 = {
  id: "<id>",
  workspaceId: "3e063fa2-ab19-4845-a68c-3e1232c5453d",
  startedAt: new Date("2022-11-03T12:11:10.797Z"),
  evals: [
    {
      type: "llm_eval",
      workflowRun: {
        id: "<id>",
        startedAt: new Date("2024-10-04T10:42:07.849Z"),
        productType: "knowledge",
        relatedEntities: [
          {
            type: "evaluator",
            evaluatorId: "408c5dce-894a-4027-9e9b-b119ea33ae3c",
          },
        ],
        evals: [
          {
            type: "string_array",
            values: [
              "<value>",
            ],
            id: "<id>",
            status: "pending",
            timestamp: new Date("2024-08-13T22:58:38.642Z"),
            relatedEntities: [
              {
                type: "human_eval",
                humanEvalId: "<id>",
              },
            ],
          },
        ],
        data: {
          action: "invoke",
          promptConfig: {
            stream: false,
            model: "Cruze",
            modelDbId: "ba300f87-5eae-43ae-b834-5dca9e3dc0c4",
            modelType: "rerank",
            modelParameters: {},
            provider: "google",
            messages: [
              {
                role: "system",
                content: "<value>",
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
      },
      id: "<id>",
      status: "completed",
      timestamp: new Date("2024-04-20T23:49:12.365Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "8c315fe8-5f23-4231-b898-0c10c269b314",
        },
      ],
    },
  ],
  productType: "deployments",
  relatedEntities: [
    {
      type: "deployment_variant",
      deploymentVariantId: "2e76dc89-4438-4e1f-acca-2f5cbeb503a3",
    },
  ],
  data: {
    deploymentId: "<id>",
    deploymentKey: "<value>",
    deploymentVariantVersion: "<value>",
    deploymentVariantPosition: 7062.53,
    deploymentVariantId: "379f2b11-3ac9-4d69-8517-f877a6e250dc",
    isDefaultMatched: false,
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Land Cruiser",
      modelDbId: "8183c20d-5a70-4932-8722-612475911106",
      modelType: "vision",
      modelParameters: {},
      provider: "replicate",
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
    retries: [
      {
        retryAttempt: 1833.70,
        status: 987.81,
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

### `operations.ResponseBody3`

```typescript
const value: operations.ResponseBody3 = {
  id: "<id>",
  workspaceId: "911f156a-a02f-4660-9019-503c4b482647",
  startedAt: new Date("2023-10-27T11:27:51.249Z"),
  evals: [
    {
      type: "llm_eval",
      workflowRun: {
        id: "<id>",
        startedAt: new Date("2022-10-10T04:35:15.256Z"),
        productType: "knowledge",
        relatedEntities: [
          {
            type: "evaluator",
            evaluatorId: "84a4e761-2252-4ec3-adbe-4026fb052381",
          },
        ],
        evals: [
          {
            type: "string",
            value: "<value>",
            id: "<id>",
            status: "failed",
            timestamp: new Date("2024-04-27T16:24:28.118Z"),
            relatedEntities: [
              {
                type: "human_eval",
                humanEvalId: "<id>",
              },
            ],
          },
        ],
        data: {
          action: "invoke",
          promptConfig: {
            stream: false,
            model: "1",
            modelDbId: "ffeefb44-0105-49e0-8369-0cdd54beb2fe",
            modelType: "chat",
            modelParameters: {},
            provider: "nvidia",
            messages: [
              {
                role: "prompt",
                content: [
                  {
                    type: "image_url",
                    imageUrl: {
                      url: "https://that-presume.biz/",
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
      },
      id: "<id>",
      status: "failed",
      timestamp: new Date("2022-10-10T10:34:49.981Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "2568a471-7f14-4b68-a7ea-76e77a00d527",
        },
      ],
    },
  ],
  productType: "playgrounds",
  relatedEntities: [
    {
      type: "account",
      accountId: "8d2a230f-f81e-4088-a066-5f88c4e5f6b9",
    },
  ],
  data: {
    choices: [
      {
        index: 1937.61,
      },
    ],
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Golf",
      modelDbId: "5fe1f393-83e8-4c21-ab6d-1ea92dc8c4c0",
      modelType: "stt",
      modelParameters: {},
      provider: "anthropic",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://direct-lender.name",
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

### `operations.ResponseBody4`

```typescript
const value: operations.ResponseBody4 = {
  id: "<id>",
  workspaceId: "a8158f1a-dc76-4c80-ac64-325a94737904",
  startedAt: new Date("2022-11-03T13:43:09.180Z"),
  evals: [
    {
      type: "string_array",
      values: [
        "<value>",
      ],
      id: "<id>",
      status: "pending",
      timestamp: new Date("2022-07-23T23:02:11.015Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "12068e87-f3a5-4477-a035-42f8aaff4d17",
        },
      ],
    },
  ],
  productType: "experiments",
  relatedEntities: [
    {
      type: "account",
      accountId: "d2f8b670-2037-44ae-8b24-23bebaf6fe53",
    },
  ],
  data: {
    promptConfig: {
      stream: false,
      model: "XTS",
      modelDbId: "8397c2ec-be5b-4058-8ec1-c2dcef00a2c3",
      modelType: "chat",
      modelParameters: {},
      provider: "google-ai",
      messages: [
        {
          role: "correction",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://yearly-bell.biz/",
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

