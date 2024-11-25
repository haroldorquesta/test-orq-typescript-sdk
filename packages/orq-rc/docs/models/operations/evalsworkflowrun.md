# EvalsWorkflowRun

## Example Usage

```typescript
import { EvalsWorkflowRun } from "orq-poc-typescript-multi-env-version/models/operations";

let value: EvalsWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2022-09-22T00:11:36.515Z"),
  productType: "experiments",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "a9e3c19f-f207-469f-8229-a5adb0602981",
    },
  ],
  evals: [
    {
      type: "number",
      value: 1908.40,
      id: "<id>",
      status: "failed",
      timestamp: new Date("2022-05-10T11:49:57.929Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "16f744c0-56bc-498e-96fb-15d7f3fae3ba",
        },
      ],
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Countach",
      modelDbId: "03e5a69e-9c04-4f94-bcbf-fc00dcf81081",
      modelType: "completion",
      modelParameters: {},
      provider: "groq",
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `workflowMetadata`                                                                                           | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | Metadata for the workflow run                                                                                |
| `workflowInput`                                                                                              | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | Input for the workflow run                                                                                   |
| `workflowOutput`                                                                                             | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | Output for the workflow run                                                                                  |
| `requestProperties`                                                                                          | [operations.GetV2LogsIdEvalsRequestProperties](../../models/operations/getv2logsidevalsrequestproperties.md) | :heavy_minus_sign:                                                                                           | An optional field that is filled if the workflow was triggered by an HTTP request                            |
| `startedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `finishedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `productType`                                                                                                | [operations.GetV2LogsIdEvalsProductType](../../models/operations/getv2logsidevalsproducttype.md)             | :heavy_check_mark:                                                                                           | Orquesta product                                                                                             |
| `relatedEntities`                                                                                            | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody27WorkflowRunRelatedEntities*[]            | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `evals`                                                                                                      | *operations.GetV2LogsIdEvalsEvals*[]                                                                         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [operations.GetV2LogsIdEvalsData](../../models/operations/getv2logsidevalsdata.md)                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |