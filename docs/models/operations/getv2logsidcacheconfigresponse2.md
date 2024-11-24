# GetV2LogsIdCacheConfigResponse2

Schema for exact matching type of cache.

## Example Usage

```typescript
import { GetV2LogsIdCacheConfigResponse2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdCacheConfigResponse2 = {
  type: "semantic",
  modelConfig: {
    model: "A8",
    modelDbId: "348ea0c0-d6e9-45a1-803d-6d4b1fd230fd",
    modelType: "image",
    modelParameters: {},
    provider: "fal",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                             | [operations.GetV2LogsIdCacheConfigResponse200ApplicationJSONType](../../models/operations/getv2logsidcacheconfigresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `modelConfig`                                                                                                                                      | [operations.GetV2LogsIdCacheConfigModelConfig](../../models/operations/getv2logsidcacheconfigmodelconfig.md)                                       | :heavy_check_mark:                                                                                                                                 | Configuration of embedding model to be used                                                                                                        |
| `ttl`                                                                                                                                              | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Time To Live                                                                                                                                       |
| `similarityScoreThreshold`                                                                                                                         | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A floating-point number typically ranging from 0 to 1.                                                                                             |