# PostV2LogsQueryCacheConfigResponse200ModelConfig

Configuration of embedding model to be used

## Example Usage

```typescript
import { PostV2LogsQueryCacheConfigResponse200ModelConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryCacheConfigResponse200ModelConfig = {
  model: "Accord",
  modelDbId: "7505f4b2-2407-4f4a-9df0-d15b50b876ae",
  modelType: "vision",
  modelParameters: {},
  provider: "google",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                                                      | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `modelDbId`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The id of the resource                                                                                                                       |
| `modelType`                                                                                                                                  | [operations.PostV2LogsQueryCacheConfigResponseModelType](../../models/operations/postv2logsquerycacheconfigresponsemodeltype.md)             | :heavy_check_mark:                                                                                                                           | The type of the model                                                                                                                        |
| `modelParameters`                                                                                                                            | [operations.PostV2LogsQueryCacheConfigResponseModelParameters](../../models/operations/postv2logsquerycacheconfigresponsemodelparameters.md) | :heavy_check_mark:                                                                                                                           | Model Parameters: Not all parameters apply to every model                                                                                    |
| `provider`                                                                                                                                   | [operations.PostV2LogsQueryCacheConfigResponseProvider](../../models/operations/postv2logsquerycacheconfigresponseprovider.md)               | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `integrationId`                                                                                                                              | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The id of the resource                                                                                                                       |
| `version`                                                                                                                                    | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |