# GetV2LogsIdEvalsWorkflowRun

## Example Usage

```typescript
import { GetV2LogsIdEvalsWorkflowRun } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2023-12-03T23:24:49.677Z"),
  productType: "router",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "b4052b09-1367-400b-a487-7b8822e3328c",
    },
  ],
  evals: [
    {
      type: "string",
      value: "<value>",
      id: "<id>",
      status: "pending",
      timestamp: new Date("2024-03-02T18:24:11.242Z"),
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
      model: "911",
      modelDbId: "c853dc84-21b3-461e-9be0-140243a63849",
      modelType: "chat",
      modelParameters: {},
      provider: "google-ai",
      messages: [
        {
          role: "assistant",
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `workflowMetadata`                                                                                                           | Record<string, *any*>                                                                                                        | :heavy_minus_sign:                                                                                                           | Metadata for the workflow run                                                                                                |
| `workflowInput`                                                                                                              | Record<string, *any*>                                                                                                        | :heavy_minus_sign:                                                                                                           | Input for the workflow run                                                                                                   |
| `workflowOutput`                                                                                                             | Record<string, *any*>                                                                                                        | :heavy_minus_sign:                                                                                                           | Output for the workflow run                                                                                                  |
| `requestProperties`                                                                                                          | [operations.GetV2LogsIdEvalsResponseRequestProperties](../../models/operations/getv2logsidevalsresponserequestproperties.md) | :heavy_minus_sign:                                                                                                           | An optional field that is filled if the workflow was triggered by an HTTP request                                            |
| `startedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `finishedAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `productType`                                                                                                                | [operations.GetV2LogsIdEvalsResponseProductType](../../models/operations/getv2logsidevalsresponseproducttype.md)             | :heavy_check_mark:                                                                                                           | Orquesta product                                                                                                             |
| `relatedEntities`                                                                                                            | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody37WorkflowRunRelatedEntities*[]                            | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `evals`                                                                                                                      | *operations.GetV2LogsIdEvalsResponseEvals*[]                                                                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `data`                                                                                                                       | [operations.GetV2LogsIdEvalsResponseData](../../models/operations/getv2logsidevalsresponsedata.md)                           | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |