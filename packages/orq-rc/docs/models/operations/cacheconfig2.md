# CacheConfig2

Schema for exact matching type of cache.

## Example Usage

```typescript
import { CacheConfig2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: CacheConfig2 = {
  type: "semantic",
  modelConfig: {
    model: "2",
    modelDbId: "27f99788-78cd-411a-9645-9bc1445c406c",
    modelType: "image",
    modelParameters: {},
    provider: "replicate",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [operations.GetV2LogsIdCacheConfigType](../../models/operations/getv2logsidcacheconfigtype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelConfig`                                                                                  | [operations.ModelConfig](../../models/operations/modelconfig.md)                               | :heavy_check_mark:                                                                             | Configuration of embedding model to be used                                                    |
| `ttl`                                                                                          | *number*                                                                                       | :heavy_minus_sign:                                                                             | Time To Live                                                                                   |
| `similarityScoreThreshold`                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | A floating-point number typically ranging from 0 to 1.                                         |