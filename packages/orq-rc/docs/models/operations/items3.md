# Items3

The schema for the deployment workflow run

## Example Usage

```typescript
import { Items3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Items3 = {
  id: "<id>",
  workspaceId: "87603797-5cbf-40b0-84ec-a6047670a70f",
  startedAt: new Date("2022-07-05T20:53:04.906Z"),
  evals: [
    {
      type: "bert_score",
      value: {
        f1: 3486.63,
        precision: 6115.48,
        recall: 59.66,
      },
      id: "<id>",
      status: "completed",
      timestamp: new Date("2022-01-28T05:14:01.831Z"),
      relatedEntities: [
        {
          type: "account",
          accountId: "3f4d6da0-1013-4cb3-86d1-91f7e2f00dc3",
        },
      ],
    },
  ],
  productType: "playgrounds",
  relatedEntities: [
    {
      type: "playground_block",
      playgroundBlockId: "fadd29f1-7cf1-46c9-9e18-9dd790b0a8f2",
    },
  ],
  data: {
    choices: [
      {
        index: 8572.98,
      },
    ],
    action: "invoke",
    promptConfig: {
      stream: false,
      model: "Focus",
      modelDbId: "d8ae0e2c-95fd-4435-952e-ed7c5de87831",
      modelType: "stt",
      modelParameters: {},
      provider: "perplexity",
      messages: [
        {
          role: "correction",
          content: "<value>",
        },
      ],
    },
    variables: [
      {
        key: "<key>",
      },
    ],
    billing: {
      billable: false,
    },
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
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The unique identifier for the workflow run                                                                           |
| `workspaceId`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The unique identifier for the workspace                                                                              |
| `workflowMetadata`                                                                                                   | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | Metadata for the workflow run                                                                                        |
| `workflowInput`                                                                                                      | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | Input for the workflow run                                                                                           |
| `workflowOutput`                                                                                                     | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | Output for the workflow run                                                                                          |
| `projectId`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The optional project_id for the entity of the event                                                                  |
| `requestProperties`                                                                                                  | [operations.PostV2LogsQueryItemsRequestProperties](../../models/operations/postv2logsqueryitemsrequestproperties.md) | :heavy_minus_sign:                                                                                                   | An optional field that is filled if the workflow was triggered by an HTTP request                                    |
| `startedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `finishedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `evals`                                                                                                              | *operations.PostV2LogsQueryItemsEvals*[]                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `productType`                                                                                                        | [operations.PostV2LogsQueryItemsProductType](../../models/operations/postv2logsqueryitemsproducttype.md)             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `relatedEntities`                                                                                                    | *operations.PostV2LogsQueryItemsRelatedEntities*[]                                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [operations.PostV2LogsQueryItemsResponseData](../../models/operations/postv2logsqueryitemsresponsedata.md)           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |