# PostV2LogsQueryCacheConfig2

Schema for exact matching type of cache.

## Example Usage

```typescript
import { PostV2LogsQueryCacheConfig2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryCacheConfig2 = {
  type: "semantic",
  modelConfig: {
    model: "Roadster",
    modelDbId: "2ab51b87-d74b-4443-b1cb-6bf778437849",
    modelType: "tts",
    modelParameters: {},
    provider: "anthropic",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.PostV2LogsQueryCacheConfigType](../../models/operations/postv2logsquerycacheconfigtype.md)               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `modelConfig`                                                                                                        | [operations.PostV2LogsQueryCacheConfigModelConfig](../../models/operations/postv2logsquerycacheconfigmodelconfig.md) | :heavy_check_mark:                                                                                                   | Configuration of embedding model to be used                                                                          |
| `ttl`                                                                                                                | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Time To Live                                                                                                         |
| `similarityScoreThreshold`                                                                                           | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | A floating-point number typically ranging from 0 to 1.                                                               |