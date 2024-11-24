# GetV2LogsIdCacheConfigModelConfig

Configuration of embedding model to be used

## Example Usage

```typescript
import { GetV2LogsIdCacheConfigModelConfig } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdCacheConfigModelConfig = {
  model: "Explorer",
  modelDbId: "0c651f89-ed68-42fe-894e-307c0b914da6",
  modelType: "image",
  modelParameters: {},
  provider: "anyscale",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `modelDbId`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The id of the resource                                                                                                               |
| `modelType`                                                                                                                          | [operations.GetV2LogsIdCacheConfigResponseModelType](../../models/operations/getv2logsidcacheconfigresponsemodeltype.md)             | :heavy_check_mark:                                                                                                                   | The type of the model                                                                                                                |
| `modelParameters`                                                                                                                    | [operations.GetV2LogsIdCacheConfigResponseModelParameters](../../models/operations/getv2logsidcacheconfigresponsemodelparameters.md) | :heavy_check_mark:                                                                                                                   | Model Parameters: Not all parameters apply to every model                                                                            |
| `provider`                                                                                                                           | [operations.GetV2LogsIdCacheConfigResponseProvider](../../models/operations/getv2logsidcacheconfigresponseprovider.md)               | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `integrationId`                                                                                                                      | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The id of the resource                                                                                                               |
| `version`                                                                                                                            | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |