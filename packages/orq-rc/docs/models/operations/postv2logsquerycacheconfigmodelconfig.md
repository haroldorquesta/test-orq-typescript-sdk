# PostV2LogsQueryCacheConfigModelConfig

Configuration of embedding model to be used

## Example Usage

```typescript
import { PostV2LogsQueryCacheConfigModelConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryCacheConfigModelConfig = {
  model: "Model S",
  modelDbId: "7969c3e4-2a84-4ab4-9184-57b071d46020",
  modelType: "stt",
  modelParameters: {},
  provider: "aws",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `modelDbId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The id of the resource                                                                                                       |
| `modelType`                                                                                                                  | [operations.PostV2LogsQueryCacheConfigModelType](../../models/operations/postv2logsquerycacheconfigmodeltype.md)             | :heavy_check_mark:                                                                                                           | The type of the model                                                                                                        |
| `modelParameters`                                                                                                            | [operations.PostV2LogsQueryCacheConfigModelParameters](../../models/operations/postv2logsquerycacheconfigmodelparameters.md) | :heavy_check_mark:                                                                                                           | Model Parameters: Not all parameters apply to every model                                                                    |
| `provider`                                                                                                                   | [operations.PostV2LogsQueryCacheConfigProvider](../../models/operations/postv2logsquerycacheconfigprovider.md)               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `integrationId`                                                                                                              | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The id of the resource                                                                                                       |
| `version`                                                                                                                    | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |