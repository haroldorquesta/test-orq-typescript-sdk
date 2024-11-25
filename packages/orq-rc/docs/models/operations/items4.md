# Items4

The schema for the experiment workflow run

## Example Usage

```typescript
import { Items4 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Items4 = {
  id: "<id>",
  workspaceId: "bd76402f-d4f5-442e-9f5b-51681d739c5b",
  startedAt: new Date("2024-11-22T14:24:07.004Z"),
  evals: [
    {
      type: "bert_score",
      value: {
        f1: 3563.51,
        precision: 177.48,
        recall: 6575.20,
      },
      id: "<id>",
      status: "pending",
      timestamp: new Date("2022-05-14T13:54:35.410Z"),
      relatedEntities: [
        {
          type: "evaluator",
          evaluatorId: "f4427dbd-3be4-4b64-9f51-67cfde7b415b",
        },
      ],
    },
  ],
  productType: "experiments",
  relatedEntities: [
    {
      type: "account",
      accountId: "c35d355c-0196-4a4e-bc1c-ffb194fb9b75",
    },
  ],
  data: {
    promptConfig: {
      stream: false,
      model: "Corvette",
      modelDbId: "06caf1e5-7613-4b02-90d9-2cfee0949527",
      modelType: "rerank",
      modelParameters: {},
      provider: "cohere",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url",
              imageUrl: {
                url: "https://quiet-ribbon.info",
              },
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
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The unique identifier for the workflow run                                                                                           |
| `workspaceId`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The unique identifier for the workspace                                                                                              |
| `workflowMetadata`                                                                                                                   | Record<string, *any*>                                                                                                                | :heavy_minus_sign:                                                                                                                   | Metadata for the workflow run                                                                                                        |
| `workflowInput`                                                                                                                      | Record<string, *any*>                                                                                                                | :heavy_minus_sign:                                                                                                                   | Input for the workflow run                                                                                                           |
| `workflowOutput`                                                                                                                     | Record<string, *any*>                                                                                                                | :heavy_minus_sign:                                                                                                                   | Output for the workflow run                                                                                                          |
| `projectId`                                                                                                                          | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The optional project_id for the entity of the event                                                                                  |
| `requestProperties`                                                                                                                  | [operations.PostV2LogsQueryItemsResponseRequestProperties](../../models/operations/postv2logsqueryitemsresponserequestproperties.md) | :heavy_minus_sign:                                                                                                                   | An optional field that is filled if the workflow was triggered by an HTTP request                                                    |
| `startedAt`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `finishedAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `evals`                                                                                                                              | *operations.PostV2LogsQueryItemsResponseEvals*[]                                                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `productType`                                                                                                                        | [operations.PostV2LogsQueryItemsResponseProductType](../../models/operations/postv2logsqueryitemsresponseproducttype.md)             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `relatedEntities`                                                                                                                    | *operations.PostV2LogsQueryItemsResponseRelatedEntities*[]                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `data`                                                                                                                               | [operations.PostV2LogsQueryItemsResponse200Data](../../models/operations/postv2logsqueryitemsresponse200data.md)                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |