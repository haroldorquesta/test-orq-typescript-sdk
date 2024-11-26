# ResponseBodyVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ResponseBodyVersions } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyVersions = {
  id: "<id>",
  createdById: "c2cf842e-5766-4cea-8f39-abc5e24794e7",
  displayName: "Reece_Hegmann-Luettgen80",
  updatedById: "db09079a-e4d7-4acb-8cac-ee5f0973818d",
  promptConfig: {
    messages: [
      {
        role: "user",
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

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `createdById`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `displayName`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `updatedById`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `description`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `promptConfig`                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsResponsePromptConfig](../../models/operations/updatepromptresponsebodypromptsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `metadata`                                                                                                                                       | [operations.UpdatePromptResponseBodyPromptsResponseMetadata](../../models/operations/updatepromptresponsebodypromptsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `commit`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `timestamp`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |