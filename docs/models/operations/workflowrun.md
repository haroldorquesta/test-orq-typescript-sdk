# WorkflowRun

## Example Usage

```typescript
import { WorkflowRun } from "orq-poc-typescript-multi-env-version/models/operations";

let value: WorkflowRun = {
  id: "<id>",
  startedAt: new Date("2023-06-05T21:45:54.566Z"),
  productType: "knowledge",
  relatedEntities: [
    {
      type: "evaluator",
      evaluatorId: "df084a91-1340-481c-9db9-2d9b6b6950c6",
    },
  ],
  evals: [
    {
      type: "string",
      value: "<value>",
      id: "<id>",
      status: "completed",
      timestamp: new Date("2022-09-21T11:01:47.985Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "f386d06a-ec6b-439a-aa23-59828b298ab7",
        },
      ],
    },
  ],
  data: {
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "A8",
      modelDbId: "46dff687-0ea2-43b9-98c2-2c9b308c1d59",
      modelType: "embedding",
      modelParameters: {},
      provider: "openai",
      messages: [
        {
          role: "user",
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowMetadata`                                                                            | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Metadata for the workflow run                                                                 |
| `workflowInput`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Input for the workflow run                                                                    |
| `workflowOutput`                                                                              | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Output for the workflow run                                                                   |
| `requestProperties`                                                                           | [operations.EvalsRequestProperties](../../models/operations/evalsrequestproperties.md)        | :heavy_minus_sign:                                                                            | An optional field that is filled if the workflow was triggered by an HTTP request             |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `finishedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `productType`                                                                                 | [operations.EvalsProductType](../../models/operations/evalsproducttype.md)                    | :heavy_check_mark:                                                                            | Orquesta product                                                                              |
| `relatedEntities`                                                                             | *operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody17RelatedEntities*[]        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evals`                                                                                       | *operations.EvalsEvals*[]                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [operations.EvalsData](../../models/operations/evalsdata.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |