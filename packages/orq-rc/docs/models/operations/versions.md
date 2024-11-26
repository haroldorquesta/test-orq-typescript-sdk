# Versions

Prompt version model returned from the API

## Example Usage

```typescript
import { Versions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Versions = {
  id: "<id>",
  createdById: "37613182-5d98-4f6e-8965-e948332bc56c",
  displayName: "Estefania4",
  updatedById: "89f24379-b06e-47d1-94b9-7ace7a6e76f0",
  promptConfig: {
    messages: [
      {
        role: "correction",
        content: "<value>",
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