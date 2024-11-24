# PostV2LogsQueryEvalsResponse200ApplicationJSONWorkflowRun

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJSONWorkflowRun } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJSONWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2024-08-14T22:50:28.709Z"),
  productType: "remoteconfigs",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "222cc219-b80c-4bb3-81f7-b18815ebbe4c",
    },
  ],
  evals: [
    {
      type: "boolean",
      value: false,
      id: "<id>",
      status: "completed",
      timestamp: new Date("2023-04-18T14:04:46.675Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "6db7fc0c-b0e7-437d-a4e1-198a04b54dcb",
        },
      ],
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Wrangler",
      modelDbId: "02744f00-e207-4e4e-9d46-e103320b2715",
      modelType: "rerank",
      modelParameters: {},
      provider: "perplexity",
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `workflowMetadata`                                                                                                   | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | Metadata for the workflow run                                                                                        |
| `workflowInput`                                                                                                      | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | Input for the workflow run                                                                                           |
| `workflowOutput`                                                                                                     | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | Output for the workflow run                                                                                          |
| `requestProperties`                                                                                                  | [operations.PostV2LogsQueryEvalsRequestProperties](../../models/operations/postv2logsqueryevalsrequestproperties.md) | :heavy_minus_sign:                                                                                                   | An optional field that is filled if the workflow was triggered by an HTTP request                                    |
| `startedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `finishedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `productType`                                                                                                        | [operations.PostV2LogsQueryEvalsProductType](../../models/operations/postv2logsqueryevalsproducttype.md)             | :heavy_check_mark:                                                                                                   | Orquesta product                                                                                                     |
| `relatedEntities`                                                                                                    | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems27WorkflowRunRelatedEntities*[]           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `evals`                                                                                                              | *operations.PostV2LogsQueryEvalsEvals*[]                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [operations.PostV2LogsQueryEvalsData](../../models/operations/postv2logsqueryevalsdata.md)                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |