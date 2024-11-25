# GetV2LogsIdEvalsResponseWorkflowRun

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponseWorkflowRun } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponseWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2023-08-10T08:29:51.766Z"),
  productType: "router",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "d9155e24-072f-46e3-a9bc-afb9db2c224b",
    },
  ],
  evals: [
    {
      type: "number",
      value: 8009.65,
      id: "<id>",
      status: "pending",
      timestamp: new Date("2022-11-22T18:34:29.972Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "558ef1ff-505c-4131-a0d9-e1a9d7487af5",
        },
      ],
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Cruze",
      modelDbId: "8e5ecbc8-3f44-4861-a75e-e9b93c45d500",
      modelType: "chat",
      modelParameters: {},
      provider: "nvidia",
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `workflowMetadata`                                                                                                                 | Record<string, *any*>                                                                                                              | :heavy_minus_sign:                                                                                                                 | Metadata for the workflow run                                                                                                      |
| `workflowInput`                                                                                                                    | Record<string, *any*>                                                                                                              | :heavy_minus_sign:                                                                                                                 | Input for the workflow run                                                                                                         |
| `workflowOutput`                                                                                                                   | Record<string, *any*>                                                                                                              | :heavy_minus_sign:                                                                                                                 | Output for the workflow run                                                                                                        |
| `requestProperties`                                                                                                                | [operations.GetV2LogsIdEvalsResponse200RequestProperties](../../models/operations/getv2logsidevalsresponse200requestproperties.md) | :heavy_minus_sign:                                                                                                                 | An optional field that is filled if the workflow was triggered by an HTTP request                                                  |
| `startedAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `finishedAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `productType`                                                                                                                      | [operations.GetV2LogsIdEvalsResponse200ProductType](../../models/operations/getv2logsidevalsresponse200producttype.md)             | :heavy_check_mark:                                                                                                                 | Orquesta product                                                                                                                   |
| `relatedEntities`                                                                                                                  | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody47WorkflowRunRelatedEntities*[]                                  | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `evals`                                                                                                                            | *operations.GetV2LogsIdEvalsResponse200Evals*[]                                                                                    | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `data`                                                                                                                             | [operations.GetV2LogsIdEvalsResponse200Data](../../models/operations/getv2logsidevalsresponse200data.md)                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |