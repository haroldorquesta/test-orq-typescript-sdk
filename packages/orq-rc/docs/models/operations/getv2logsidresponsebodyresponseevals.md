# GetV2LogsIdResponseBodyResponseEvals


## Supported Types

### `operations.GetV2LogsIdEvalsResponse2001`

```typescript
const value: operations.GetV2LogsIdEvalsResponse2001 = {
  type: "string",
  value: "<value>",
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-02-04T01:20:18.979Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "12e7de14-c36f-4666-8e8d-e5516f556e87",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse2002`

```typescript
const value: operations.GetV2LogsIdEvalsResponse2002 = {
  type: "number",
  value: 2604.87,
  id: "<id>",
  status: "completed",
  timestamp: new Date("2022-10-14T06:11:05.227Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "15afec01-b8c4-4744-8b32-1edd80422fc5",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse2003`

```typescript
const value: operations.GetV2LogsIdEvalsResponse2003 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "failed",
  timestamp: new Date("2023-10-29T23:02:26.222Z"),
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "b3447221-35b9-46b3-9587-c3dd6da898a6",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse2004`

```typescript
const value: operations.GetV2LogsIdEvalsResponse2004 = {
  type: "string_array",
  values: [
    "<value>",
  ],
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-07-16T02:36:01.008Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse2005`

```typescript
const value: operations.GetV2LogsIdEvalsResponse2005 = {
  type: "rouge_n",
  value: {
    rouge1: {
      f1: 3563.61,
      precision: 1038.48,
      recall: 5734.50,
    },
    rouge2: {
      f1: 9790.81,
      precision: 2701.23,
      recall: 8858.29,
    },
    rougeL: {
      f1: 200.65,
      precision: 4350.40,
      recall: 8608.89,
    },
  },
  id: "<id>",
  status: "pending",
  timestamp: new Date("2022-07-05T14:31:16.363Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse2006`

```typescript
const value: operations.GetV2LogsIdEvalsResponse2006 = {
  type: "bert_score",
  value: {
    f1: 9496.47,
    precision: 6283.03,
    recall: 903.08,
  },
  id: "<id>",
  status: "failed",
  timestamp: new Date("2022-01-07T12:06:56.751Z"),
  relatedEntities: [
    {
      type: "human_eval",
      humanEvalId: "<id>",
    },
  ],
};
```

### `operations.GetV2LogsIdEvalsResponse2007`

```typescript
const value: operations.GetV2LogsIdEvalsResponse2007 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2024-07-19T15:20:58.490Z"),
    productType: "playgrounds",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "3e267089-6016-46e5-bb90-7a4be490a86e",
      },
    ],
    evals: [
      {
        type: "number",
        value: 5322.39,
        id: "<id>",
        status: "pending",
        timestamp: new Date("2023-08-07T07:51:08.820Z"),
        relatedEntities: [
          {
            type: "evaluator",
            evaluatorId: "30634ed5-edf8-48fe-bf57-ca0e86c1794c",
          },
        ],
      },
    ],
    data: {
      action: "invoke",
      promptConfig: {
        stream: false,
        model: "Land Cruiser",
        modelDbId: "ae82df33-84d7-4301-85e5-2fa6be28bf37",
        modelType: "image",
        modelParameters: {},
        provider: "azure",
        messages: [
          {
            role: "prompt",
            content: [
              {
                type: "text",
                text: "<value>",
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
  status: "completed",
  timestamp: new Date("2022-07-07T22:28:26.700Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "5d70f2e8-9a65-40ff-b785-31f08aeb600c",
    },
  ],
};
```

