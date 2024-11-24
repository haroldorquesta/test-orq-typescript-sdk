# ResponseBodyData

## Example Usage

```typescript
import { ResponseBodyData } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyData = {
  remoteConfigId: "b96703f6-162d-4ee0-ad62-374d195139c9",
  remoteConfigKey: "<value>",
  remoteConfigType: "<value>",
  remoteConfigVersion: 4551.67,
  remoteConfigVariantId: "748a82cd-d4cb-45d9-ba53-d38040058cc0",
  remoteConfigVariantPosition: 7559.16,
  isDefaultMatched: false,
  action: "simulate",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `remoteConfigId`                                       | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigKey`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigType`                                     | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigVersion`                                  | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigVariantId`                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigVariantPosition`                          | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `remoteConfigValue`                                    | *any*                                                  | :heavy_minus_sign:                                     | N/A                                                    |
| `isDefaultMatched`                                     | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `action`                                               | [operations.Action](../../models/operations/action.md) | :heavy_check_mark:                                     | N/A                                                    |