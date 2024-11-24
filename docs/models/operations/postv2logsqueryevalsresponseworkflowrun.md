# PostV2LogsQueryEvalsResponseWorkflowRun

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponseWorkflowRun } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponseWorkflowRun = {
  id: "<id>",
  startedAt: new Date("2022-12-20T19:42:29.360Z"),
  productType: "deployments",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "8b18f3a9-07b0-4e80-b3f9-14706739c39a",
    },
  ],
  evals: [
    {
      type: "string_array",
      values: [
        "<value>",
      ],
      id: "<id>",
      status: "failed",
      timestamp: new Date("2023-06-22T12:00:18.977Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "f271ffb5-4428-425a-ab06-ad7f4074d34c",
        },
      ],
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Grand Caravan",
      modelDbId: "b600810f-d20f-442b-914f-a86c2fd90be8",
      modelType: "chat",
      modelParameters: {},
      provider: "groq",
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `workflowMetadata`                                                                                                                         | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Metadata for the workflow run                                                                                                              |
| `workflowInput`                                                                                                                            | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Input for the workflow run                                                                                                                 |
| `workflowOutput`                                                                                                                           | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Output for the workflow run                                                                                                                |
| `requestProperties`                                                                                                                        | [operations.PostV2LogsQueryEvalsResponse200RequestProperties](../../models/operations/postv2logsqueryevalsresponse200requestproperties.md) | :heavy_minus_sign:                                                                                                                         | An optional field that is filled if the workflow was triggered by an HTTP request                                                          |
| `startedAt`                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `finishedAt`                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `productType`                                                                                                                              | [operations.PostV2LogsQueryEvalsResponse200ProductType](../../models/operations/postv2logsqueryevalsresponse200producttype.md)             | :heavy_check_mark:                                                                                                                         | Orquesta product                                                                                                                           |
| `relatedEntities`                                                                                                                          | *operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems47WorkflowRunRelatedEntities*[]                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `evals`                                                                                                                                    | *operations.PostV2LogsQueryEvalsResponse200Evals*[]                                                                                        | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `data`                                                                                                                                     | [operations.PostV2LogsQueryEvalsResponse200Data](../../models/operations/postv2logsqueryevalsresponse200data.md)                           | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |