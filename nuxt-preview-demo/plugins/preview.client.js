// plugins/preview.client.js
export default function ({ query, enablePreview }) {
    if (query.preview) {
      enablePreview()
    }
  }