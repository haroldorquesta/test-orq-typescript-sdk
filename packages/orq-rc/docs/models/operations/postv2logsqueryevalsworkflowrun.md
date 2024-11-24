# PostV2LogsQueryEvalsWorkflowRun

## Example Usage

```typescript
import { PostV2LogsQueryEvalsWorkflowRun } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2024-08-20T05:20:49.819Z"),
  productType: "router",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "c0831c38-8370-40e6-ae76-4149c8c29e33",
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
      timestamp: new Date("2022-12-30T09:36:43.666Z"),
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
      model: "El Camino",
      modelDbId: "97cdd997-0417-4d9a-9342-d482155595c1",
      modelType: "tts",
      modelParameters: {},
      provider: "anyscale",
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
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `workflowMetadata`                                                                                                                   | Record<string, *any*>                                                                                                                | :heavy_minus_sign:                                                                                                                   | Metadata for the workflow run                                                                                                        |
| `workflowInput`                                                                                                                      | Record<string, *any*>                                                                                                                | :heavy_minus_sign:                                                                                                                   | Input for the workflow run                                                                                                           |
| `workflowOutput`                                                                                                                     | Record<string, *any*>                                                                                                                | :heavy_minus_sign:                                                                                                                   | Output for the workflow run                                                                                                          |
| `requestProperties`                                                                                                                  | [operations.PostV2LogsQueryEvalsResponseRequestProperties](../../models/operations/postv2logsqueryevalsresponserequestproperties.md) | :heavy_minus_sign:                                                                                                                   | An optional field that is filled if the workflow was triggered by an HTTP request                                                    |
| `startedAt`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `finishedAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `productType`                                                                                                                        | [operations.PostV2LogsQueryEvalsResponseProductType](../../models/operations/postv2logsqueryevalsresponseproducttype.md)             | :heavy_check_mark:                                                                                                                   | Orquesta product                                                                                                                     |
| `relatedEntities`                                                                                                                    | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems37WorkflowRunRelatedEntities*[]                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `evals`                                                                                                                              | *operations.PostV2LogsQueryEvalsResponseEvals*[]                                                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `data`                                                                                                                               | [operations.PostV2LogsQueryEvalsResponseData](../../models/operations/postv2logsqueryevalsresponsedata.md)                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |