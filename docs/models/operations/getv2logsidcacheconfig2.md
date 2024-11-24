# GetV2LogsIdCacheConfig2

Schema for exact matching type of cache.

## Example Usage

```typescript
import { GetV2LogsIdCacheConfig2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdCacheConfig2 = {
  type: "semantic",
  modelConfig: {
    model: "Ranchero",
    modelDbId: "748f7493-756b-4183-9589-7e22657ad1fd",
    modelType: "stt",
    modelParameters: {},
    provider: "anthropic",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.GetV2LogsIdCacheConfigResponseType](../../models/operations/getv2logsidcacheconfigresponsetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `modelConfig`                                                                                                  | [operations.CacheConfigModelConfig](../../models/operations/cacheconfigmodelconfig.md)                         | :heavy_check_mark:                                                                                             | Configuration of embedding model to be used                                                                    |
| `ttl`                                                                                                          | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Time To Live                                                                                                   |
| `similarityScoreThreshold`                                                                                     | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | A floating-point number typically ranging from 0 to 1.                                                         |