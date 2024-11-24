# PostV2LogsQueryEvals7

## Example Usage

```typescript
import { PostV2LogsQueryEvals7 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvals7 = {
  type: "llm_eval",
  workflowRun: {
    id: "<id>",
    startedAt: new Date("2022-08-25T03:30:03.482Z"),
    productType: "router",
    relatedEntities: [
      {
        type: "evaluator",
        evaluatorId: "71ccbff2-cabf-4d6e-bebe-7b09b6d748ea",
      },
    ],
    evals: [
      {
        type: "number",
        value: 6584.79,
        id: "<id>",
        status: "completed",
        timestamp: new Date("2022-09-20T01:53:45.615Z"),
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
        model: "A8",
        modelDbId: "923f68a7-b0a5-4e20-9083-c03d0c1dc367",
        modelType: "completion",
        modelParameters: {},
        provider: "huggingface",
        messages: [
          {
            role: "prompt",
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
  status: "pending",
  timestamp: new Date("2022-03-11T01:49:52.647Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "0b667459-3792-4486-8b37-d2e77a8d224f",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems27Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems27type.md)     | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `workflowRun`                                                                                                                                                                            | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONWorkflowRun](../../models/operations/postv2logsqueryevalsresponse200applicationjsonworkflowrun.md)                             | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `id`                                                                                                                                                                                     | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The id of the resource                                                                                                                                                                   |
| `status`                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems27Status](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems27status.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `timestamp`                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                            | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `relatedEntities`                                                                                                                                                                        | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems27RelatedEntities*[]                                                                                          | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |