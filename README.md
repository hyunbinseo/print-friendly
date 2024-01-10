# print-friendly

Responsive CSS for screen and paper. Optimized for printing and PDF conversion.

[한국어](/docs/ko.md)

## 🚧 Features

- [x] CSS / Stylesheet
- [ ] Node.js CLI Tool
- [ ] VS Code Extension

## Using the Stylesheet

### HTML

The CSS file is hosted on CDNs such as [jsDelivr](https://www.jsdelivr.com/package/npm/print-friendly).

> [!IMPORTANT]
> Inform users to set the (Paper size: A4) and (Margins: Default) in the print dialog.

> [!NOTE]
> This package follows the semantic versioning. To manually bump the stylesheet version, and to avoid unwanted breaking changes, please set the major version in the jsDelivr URL.

```html
<html>
  <head>
    <!-- Add print-friendly stylesheet. -->
    <!-- The major version is set to 0. -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/print-friendly@0/dist/print-friendly.css"
    />
    <!-- (Optional) Use custom web font. -->
    <link
      href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "SUIT", sans-serif;
      }
    </style>
  </head>
  <body>
    <!-- Add content here. -->
  </body>
</html>
```

## 🚧 Work in Progress

- [ ] Dark theme
- [ ] Styled table
