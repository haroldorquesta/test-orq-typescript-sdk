# ResponseBody1

The schema for a remote config workflow run

## Example Usage

```typescript
import { ResponseBody1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  workspaceId: "1186f450-eb37-422a-a690-73940302bdc3",
  startedAt: new Date("2022-05-16T13:13:19.025Z"),
  evals: [
    {
      type: "number",
      value: 6661.98,
      id: "<id>",
      status: "completed",
      timestamp: new Date("2023-05-20T01:55:09.989Z"),
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
    remoteConfigId: "7d280bdd-b414-4d3b-b613-cf8a83dd4607",
    remoteConfigKey: "<value>",
    remoteConfigType: "<value>",
    remoteConfigVersion: 1015.87,
    remoteConfigVariantId: "3c2c9a8a-7ad1-4319-8fc4-651e5ca80581",
    remoteConfigVariantPosition: 349.12,
    isDefaultMatched: false,
    action: "get_config",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the workflow run                                                    |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the workspace                                                       |
| `workflowMetadata`                                                                            | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Metadata for the workflow run                                                                 |
| `workflowInput`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Input for the workflow run                                                                    |
| `workflowOutput`                                                                              | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Output for the workflow run                                                                   |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The optional project_id for the entity of the event                                           |
| `requestProperties`                                                                           | [operations.RequestProperties](../../models/operations/requestproperties.md)                  | :heavy_minus_sign:                                                                            | An optional field that is filled if the workflow was triggered by an HTTP request             |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `finishedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `evals`                                                                                       | *operations.Evals*[]                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productType`                                                                                 | [operations.ProductType](../../models/operations/producttype.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `relatedEntities`                                                                             | *operations.RelatedEntities*[]                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [operations.ResponseBodyData](../../models/operations/responsebodydata.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |