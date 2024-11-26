# Versions

Prompt version model returned from the API

## Example Usage

```typescript
import { Versions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Versions = {
  id: "<id>",
  createdById: "d14b97ac-e7a6-4e76-af05-d7596545ef1b",
  displayName: "Lonie_Goodwin49",
  updatedById: "8dee873d-cd31-4bee-88a1-48e790f72582",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: [
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  },
  metadata: {},
  commit: "<value>",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                   | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `createdById`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `displayName`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `updatedById`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `promptConfig`                                                                                                                                         | [operations.UpdatePromptResponseBodyPromptsResponse200PromptConfig](../../models/operations/updatepromptresponsebodypromptsresponse200promptconfig.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `metadata`                                                                                                                                             | [operations.UpdatePromptResponseBodyPromptsResponse200Metadata](../../models/operations/updatepromptresponsebodypromptsresponse200metadata.md)         | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `commit`                                                                                                                                               | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `timestamp`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |