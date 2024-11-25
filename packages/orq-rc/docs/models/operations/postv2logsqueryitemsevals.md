# PostV2LogsQueryItemsEvals


## Supported Types

### `operations.PostV2LogsQueryEvalsResponse1`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse1 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "failed",
  timestamp: new Date("2023-09-27T04:25:54.105Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse2`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse2 = {
  type: "number",
  value: 3188.78,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-03-21T21:26:59.863Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse3`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2024-08-31T06:49:25.044Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse4`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse4 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-03-20T01:26:08.224Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "39105bbc-b973-49a1-9918-211e94182c7b",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse5`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse5 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 7023.23,
      precision: 6846.14,
      recall: 5614.16,
    },
    rouge2: {
      f1: 8457.40,
      precision: 5824.74,
      recall: 5781.10,
    },
    rougeL: {
      f1: 3079.83,
      precision: 9315.06,
      recall: 5171.40,
    },
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2023-08-17T15:21:31.814Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "448b428d-674c-412f-ba8c-f3c5bbf10b9b",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse6`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse6 = {
  type: "bert_score",
  value: {
    f1: 4935.07,
    precision: 3565.35,
    recall: 7703.76,
  },
  id: "<id>",
  status: "completed",
  timestamp: new Date("2023-11-13T22:08:43.644Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "204c9f84-cada-4740-a406-3b31d0ce187c",
    },
  ],
};
```

### `operations.PostV2LogsQueryEvalsResponse7`

```typescript
const value: operations.PostV2LogsQueryEvalsResponse7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2022-11-01T23:42:16.112Z"),
    productType: "remoteconfigs",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "7ee2d01f-6170-4083-8952-f304445c051f",
      },
    ],
    evals: [
      {
        type: "number",
        value: 4800.43,
        id: "<id>",
        status: "failed",
        timestamp: new Date("2022-10-26T06:31:29.994Z"),
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
        model: "2",
        modelDbId: "e1725a24-ad98-412f-a07c-3774eeb0a342",
        modelType: "vision",
        modelParameters: {},
        provider: "anthropic",
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
  timestamp: new Date("2022-01-28T01:28:09.985Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "d8a6622e-77a0-48e6-a67d-9bb0fb90e7e6",
    },
  ],
};
```

