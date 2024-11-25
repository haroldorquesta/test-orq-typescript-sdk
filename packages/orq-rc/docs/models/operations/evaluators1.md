# Evaluators1

## Example Usage

```typescript
import { Evaluators1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evaluators1 = {
  id: "<id>",
  configType: "input_guardrail",
  evaluatorId: "<id>",
  type: "evaluator",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `configType`                                                           | [operations.ConfigType](../../models/operations/configtype.md)         | :heavy_check_mark:                                                     | N/A                                                                    |
| `evaluatorId`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `enabled`                                                              | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [operations.EvaluatorsType](../../models/operations/evaluatorstype.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `sampleRate`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |