# GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody1Evals7WorkflowRunEvals13

Define the relationship between an entity and a human eval, also known as feedback

## Example Usage

```typescript
import {
  GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody1Evals7WorkflowRunEvals13,
} from "orq-poc-typescript-multi-env-version/models/operations";

let value:
  GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody1Evals7WorkflowRunEvals13 =
    {
      type: "human_eval",
      humanEvalId: "<id>",
    };
```

## Fields

| Field                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                             | [operations.GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody1Evals7WorkflowRunEvals1Type](../../models/operations/getv2logsidrelatedentitiesresponse200applicationjsonresponsebody1evals7workflowrunevals1type.md) | :heavy_check_mark:                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                |
| `humanEvalId`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | The id of the resource                                                                                                                                                                                                             |