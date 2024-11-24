# PostV2LogsQueryEvalsResponse200ApplicationJson3

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJson3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJson3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-12-05T13:48:33.318Z"),
  relatedEntities: [
    {
      type: "account",
      accountId: "a1ea92b3-ccfc-458a-a4c5-20a4dc18fdd4",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.PostV2LogsQueryEvalsResponseType](../../models/operations/postv2logsqueryevalsresponsetype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `value`                                                                                                    | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The id of the resource                                                                                     |
| `status`                                                                                                   | [operations.PostV2LogsQueryEvalsStatus](../../models/operations/postv2logsqueryevalsstatus.md)             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `timestamp`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `relatedEntities`                                                                                          | *operations.PostV2LogsQueryEvalsRelatedEntities*[]                                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |