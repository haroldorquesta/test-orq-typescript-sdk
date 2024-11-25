# GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody4

Define the relationship between an evaluator and an entity. Can be LLM Evals, Code Evals or HTTP Evals

## Example Usage

```typescript
import { GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody4 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody4 = {
  type: "evaluator",
  evaluatorId: "20f5b9cd-670a-4358-a79f-ce9eca34433b",
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [operations.GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody1Evals54Type](../../models/operations/getv2logsidrelatedentitiesresponse200applicationjsonresponsebody1evals54type.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `evaluatorId`                                                                                                                                                                                      | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The id of the resource                                                                                                                                                                             |