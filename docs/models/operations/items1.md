# Items1

The schema for a remote config workflow run

## Example Usage

```typescript
import { Items1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Items1 = {
  id: "<id>",
  workspaceId: "5c2a090b-c653-4d7c-a922-4d5eab407a5f",
  startedAt: new Date("2024-12-25T01:20:14.892Z"),
  evals: [
    {
      type: "bert_score",
      value: {
        f1: 5102.81,
        precision: 1643.25,
        recall: 6499.34,
      },
      id: "<id>",
      status: "pending",
      timestamp: new Date("2023-03-21T15:39:41.594Z"),
      relatedEntities: [
        {
          type: "contact",
          contactId: "<id>",
        },
      ],
    },
  ],
  productType: "remoteconfigs",
  relatedEntities: [
    {
      type: "remoteconfig_variant",
      remoteConfigVariantId: "<id>",
    },
  ],
  data: {
    remoteConfigId: "3087181f-b5d1-4ea1-8699-baad0f647fed",
    remoteConfigKey: "<value>",
    remoteConfigType: "<value>",
    remoteConfigVersion: 2859.72,
    remoteConfigVariantId: "da3deaf8-d4f5-412a-9c07-c8621545138f",
    remoteConfigVariantPosition: 4130.92,
    isDefaultMatched: false,
    action: "get_config",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The unique identifier for the workflow run                                                                                                 |
| `workspaceId`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The unique identifier for the workspace                                                                                                    |
| `workflowMetadata`                                                                                                                         | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Metadata for the workflow run                                                                                                              |
| `workflowInput`                                                                                                                            | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Input for the workflow run                                                                                                                 |
| `workflowOutput`                                                                                                                           | Record<string, *any*>                                                                                                                      | :heavy_minus_sign:                                                                                                                         | Output for the workflow run                                                                                                                |
| `projectId`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The optional project_id for the entity of the event                                                                                        |
| `requestProperties`                                                                                                                        | [operations.PostV2LogsQueryItemsResponse200RequestProperties](../../models/operations/postv2logsqueryitemsresponse200requestproperties.md) | :heavy_minus_sign:                                                                                                                         | An optional field that is filled if the workflow was triggered by an HTTP request                                                          |
| `startedAt`                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `finishedAt`                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `evals`                                                                                                                                    | *operations.PostV2LogsQueryItemsResponse200Evals*[]                                                                                        | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `productType`                                                                                                                              | [operations.PostV2LogsQueryItemsResponse200ProductType](../../models/operations/postv2logsqueryitemsresponse200producttype.md)             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `relatedEntities`                                                                                                                          | *operations.PostV2LogsQueryItemsResponse200RelatedEntities*[]                                                                              | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `data`                                                                                                                                     | [operations.ItemsData](../../models/operations/itemsdata.md)                                                                               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |