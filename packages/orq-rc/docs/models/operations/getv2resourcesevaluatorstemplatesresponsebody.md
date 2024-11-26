# GetV2ResourcesEvaluatorsTemplatesResponseBody

Successful operation

## Example Usage

```typescript
import { GetV2ResourcesEvaluatorsTemplatesResponseBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2ResourcesEvaluatorsTemplatesResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      displayName: "Kristian_Cummings",
      description: "kiddingly woot amid",
      prompt: "<value>",
      outputType: "number",
      type: "llm_eval",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                 | [operations.GetV2ResourcesEvaluatorsTemplatesObject](../../models/operations/getv2resourcesevaluatorstemplatesobject.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `data`                                                                                                                   | *operations.GetV2ResourcesEvaluatorsTemplatesData*[]                                                                     | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `hasMore`                                                                                                                | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |