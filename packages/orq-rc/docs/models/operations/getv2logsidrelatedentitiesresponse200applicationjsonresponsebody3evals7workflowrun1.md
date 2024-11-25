# GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody3Evals7WorkflowRun1

Define the relationship between an evaluator and an entity. Can be LLM Evals, Code Evals or HTTP Evals

## Example Usage

```typescript
import {
  GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody3Evals7WorkflowRun1,
} from "orq-poc-typescript-multi-env-version/models/operations";

let value:
  GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody3Evals7WorkflowRun1 =
    {
      type: "evaluator",
      evaluatorId: "9c017285-bcb3-440d-884a-f1b656335e04",
    };
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                 | [operations.GetV2LogsIdRelatedEntitiesResponse200ApplicationJSONResponseBody3Evals7WorkflowRunType](../../models/operations/getv2logsidrelatedentitiesresponse200applicationjsonresponsebody3evals7workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                    |
| `evaluatorId`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                     | The id of the resource                                                                                                                                                                                                 |