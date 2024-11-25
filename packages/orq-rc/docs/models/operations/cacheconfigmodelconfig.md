# CacheConfigModelConfig

Configuration of embedding model to be used

## Example Usage

```typescript
import { CacheConfigModelConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: CacheConfigModelConfig = {
  model: "Fortwo",
  modelDbId: "7164fbbb-8b2b-4069-b230-12129081a560",
  modelType: "stt",
  modelParameters: {},
  provider: "cohere",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `modelDbId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The id of the resource                                                                                               |
| `modelType`                                                                                                          | [operations.GetV2LogsIdCacheConfigModelType](../../models/operations/getv2logsidcacheconfigmodeltype.md)             | :heavy_check_mark:                                                                                                   | The type of the model                                                                                                |
| `modelParameters`                                                                                                    | [operations.GetV2LogsIdCacheConfigModelParameters](../../models/operations/getv2logsidcacheconfigmodelparameters.md) | :heavy_check_mark:                                                                                                   | Model Parameters: Not all parameters apply to every model                                                            |
| `provider`                                                                                                           | [operations.GetV2LogsIdCacheConfigProvider](../../models/operations/getv2logsidcacheconfigprovider.md)               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `integrationId`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The id of the resource                                                                                               |
| `version`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |