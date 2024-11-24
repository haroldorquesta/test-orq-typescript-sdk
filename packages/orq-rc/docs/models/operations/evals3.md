# Evals3

## Example Usage

```typescript
import { Evals3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evals3 = {
  type: "boolean",
  value: false,
  id: "<id>",
  status: "pending",
  timestamp: new Date("2023-11-05T01:54:44.183Z"),
  relatedEntities: [
    {
      type: "contact",
      contactId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.GetV2LogsIdEvalsResponseType](../../models/operations/getv2logsidevalsresponsetype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The id of the resource                                                                             |
| `status`                                                                                           | [operations.GetV2LogsIdEvalsStatus](../../models/operations/getv2logsidevalsstatus.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `timestamp`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `relatedEntities`                                                                                  | *operations.GetV2LogsIdEvalsResponseRelatedEntities*[]                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |