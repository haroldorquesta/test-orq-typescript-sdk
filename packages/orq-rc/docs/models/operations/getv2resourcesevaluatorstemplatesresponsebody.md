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
      displayName: "Grady81",
      description:
        "industrialize when till even woot foot whereas besides vice fuel",
      function: "meteor_score",
      outputType: "boolean",
      type: "function_eval",
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