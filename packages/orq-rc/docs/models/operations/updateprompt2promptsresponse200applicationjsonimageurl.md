# UpdatePrompt2PromptsResponse200ApplicationJSONImageUrl

## Example Usage

```typescript
import { UpdatePrompt2PromptsResponse200ApplicationJSONImageUrl } from "orq-poc-typescript-multi-env-version/models/operations";

let value: UpdatePrompt2PromptsResponse200ApplicationJSONImageUrl = {
  url: "https://defensive-hospitalization.info/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The orq.ai id of the image                                                           |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |