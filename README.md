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
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Add print-friendly stylesheet. -->
    <!-- The version is set to 0.1. -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/print-friendly@0.1/dist/print-friendly.css"
    />
    <!-- (Optional) Set custom font-family. -->
  </head>
  <body>
    <!-- Elements without the .page class are visible on screen, hidden from print. -->
    <header>
      <!-- e.g. Guide users to print the page. -->
    </header>

    <!-- Multiple .page elements can be added. -->
    <div class="page"></div>
    <!-- Gap is shown between the .page elements. -->
    <div class="page">
      <!-- Always printed starting on a new page. -->
    </div>
  </body>
</html>
```

## 🚧 Work in Progress

- [ ] Dark theme
- [ ] Styled table
