# Settings

## Example Usage

```typescript
import { Settings } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Settings = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `outputMasking`                                                                                        | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `isCachingEnabled`                                                                                     | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `cacheConfig`                                                                                          | *operations.GetV2LogsIdResponseBodyCacheConfig*                                                        | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `evaluators`                                                                                           | *operations.ResponseBodyEvaluators*[]                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `guardrailsBehavior`                                                                                   | [operations.ResponseBodyGuardrailsBehavior](../../models/operations/responsebodyguardrailsbehavior.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |