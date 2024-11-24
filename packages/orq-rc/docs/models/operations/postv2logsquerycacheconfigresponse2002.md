# PostV2LogsQueryCacheConfigResponse2002

Schema for exact matching type of cache.

## Example Usage

```typescript
import { PostV2LogsQueryCacheConfigResponse2002 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryCacheConfigResponse2002 = {
  type: "semantic",
  modelConfig: {
    model: "ATS",
    modelDbId: "f5081abd-e45f-466e-b277-b6dae4c1cd6b",
    modelType: "completion",
    modelParameters: {},
    provider: "anyscale",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.PostV2LogsQueryCacheConfigResponse200Type](../../models/operations/postv2logsquerycacheconfigresponse200type.md)         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `modelConfig`                                                                                                                        | [operations.PostV2LogsQueryCacheConfigResponseModelConfig](../../models/operations/postv2logsquerycacheconfigresponsemodelconfig.md) | :heavy_check_mark:                                                                                                                   | Configuration of embedding model to be used                                                                                          |
| `ttl`                                                                                                                                | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Time To Live                                                                                                                         |
| `similarityScoreThreshold`                                                                                                           | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | A floating-point number typically ranging from 0 to 1.                                                                               |