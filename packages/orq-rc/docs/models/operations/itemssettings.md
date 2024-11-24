# ItemsSettings

## Example Usage

```typescript
import { ItemsSettings } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsSettings = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `outputMasking`                                                                          | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isCachingEnabled`                                                                       | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `cacheConfig`                                                                            | *operations.PostV2LogsQueryItemsResponseCacheConfig*                                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `evaluators`                                                                             | *operations.ItemsEvaluators*[]                                                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `guardrailsBehavior`                                                                     | [operations.ItemsGuardrailsBehavior](../../models/operations/itemsguardrailsbehavior.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |