# PostV2LogsQueryCacheConfigResponse2

Schema for exact matching type of cache.

## Example Usage

```typescript
import { PostV2LogsQueryCacheConfigResponse2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryCacheConfigResponse2 = {
  type: "semantic",
  modelConfig: {
    model: "CTS",
    modelDbId: "d38c0861-d65a-4758-b5cc-cc8d4e682010",
    modelType: "stt",
    modelParameters: {},
    provider: "google-ai",
  },
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                             | [operations.PostV2LogsQueryCacheConfigResponse200ApplicationJSONResponseBodyType](../../models/operations/postv2logsquerycacheconfigresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `modelConfig`                                                                                                                                                                      | [operations.PostV2LogsQueryCacheConfigResponse200ModelConfig](../../models/operations/postv2logsquerycacheconfigresponse200modelconfig.md)                                         | :heavy_check_mark:                                                                                                                                                                 | Configuration of embedding model to be used                                                                                                                                        |
| `ttl`                                                                                                                                                                              | *number*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | Time To Live                                                                                                                                                                       |
| `similarityScoreThreshold`                                                                                                                                                         | *number*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | A floating-point number typically ranging from 0 to 1.                                                                                                                             |