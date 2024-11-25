# GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody3

Define the relationship between an entity and a human eval, also known as feedback

## Example Usage

```typescript
import { GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody3 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody3 = {
  type: "human_eval",
  humanEvalId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                             | [operations.GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody1Evals53Type](../../models/operations/getv2logsidrelatedentitiesresponse200applicationjsonresponsebody1evals53type.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `humanEvalId`                                                                                                                                                                                      | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | The id of the resource                                                                                                                                                                             |