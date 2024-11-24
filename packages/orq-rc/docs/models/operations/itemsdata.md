# ItemsData

## Example Usage

```typescript
import { ItemsData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsData = {
  remoteConfigId: "f7afda7b-00c2-4c6f-9184-180375d45e29",
  remoteConfigKey: "<value>",
  remoteConfigType: "<value>",
  remoteConfigVersion: 651.40,
  remoteConfigVariantId: "cf69dc84-4d19-477c-82f5-d2cacfa8bc73",
  remoteConfigVariantPosition: 218.76,
  isDefaultMatched: false,
  action: "simulate",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `remoteConfigId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `remoteConfigKey`                                                                                                    | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `remoteConfigType`                                                                                                   | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `remoteConfigVersion`                                                                                                | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `remoteConfigVariantId`                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `remoteConfigVariantPosition`                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `remoteConfigValue`                                                                                                  | *any*                                                                                                                | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `isDefaultMatched`                                                                                                   | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `action`                                                                                                             | [operations.PostV2LogsQueryItemsResponse200Action](../../models/operations/postv2logsqueryitemsresponse200action.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |