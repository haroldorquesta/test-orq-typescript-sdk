# ResponseBodyMetadata

## Example Usage

```typescript
import { ResponseBodyMetadata } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyMetadata = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `outputMasking`                                                                | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `isCachingEnabled`                                                             | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cacheConfig`                                                                  | *operations.ResponseBodyCacheConfig*                                           | :heavy_minus_sign:                                                             | N/A                                                                            |
| `evaluators`                                                                   | *operations.Evaluators*[]                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `guardrailsBehavior`                                                           | [operations.GuardrailsBehavior](../../models/operations/guardrailsbehavior.md) | :heavy_minus_sign:                                                             | N/A                                                                            |