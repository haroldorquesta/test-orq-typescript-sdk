# GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody2Evals7WorkflowRun1

Define the relationship between an evaluator and an entity. Can be LLM Evals, Code Evals or HTTP Evals

## Example Usage

```typescript
import {
  GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody2Evals7WorkflowRun1,
} from "orq-poc-typescript-multi-env-version/models/operations";

let value:
  GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody2Evals7WorkflowRun1 =
    {
      type: "evaluator",
      evaluatorId: "21036e1d-8ae6-46ea-bb5b-13bb6d4f1e51",
    };
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                 | [operations.GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody2Evals7WorkflowRunType](../../models/operations/getv2logsidrelatedentitiesresponse200applicationjsonresponsebody2evals7workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `evaluatorId`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                     | The id of the resource                                                                                                                                                                                                 |