# TwoImageUrl

## Example Usage

```typescript
import { TwoImageUrl } from "orq-poc-typescript-multi-env-version/models/operations";

let value: TwoImageUrl = {
  url: "https://spirited-earth.name",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |