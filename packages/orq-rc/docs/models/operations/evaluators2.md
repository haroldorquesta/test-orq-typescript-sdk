# Evaluators2

## Example Usage

```typescript
import { Evaluators2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Evaluators2 = {
  id: "<id>",
  configType: "input_guardrail",
  evaluatorId: "<id>",
  type: "guardrail",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `configType`                                                                                 | [operations.EvaluatorsConfigType](../../models/operations/evaluatorsconfigtype.md)           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `evaluatorId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [operations.GetV2LogsIdEvaluatorsType](../../models/operations/getv2logsidevaluatorstype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sampleRate`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |