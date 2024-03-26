# print-friendly

Responsive CSS for screen and paper. Optimized for printing and PDF conversion.

[한국어](/docs/ko.md)

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
    <style>
      /* Additional styling goes here. */
      /* Reference the following section. */
    </style>
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

## Additional Styling

### Remove left margin on lists.

```css
ol,
ul {
  /* Browser default is 40px. */
  padding-inline-start: 16px;
}
```

### Add image watermark to pages.

Printed even when the `Background graphics` is unchecked.

```css
/* To show the watermark on the screen, remove the @media print at-rule. */
@media print {
  .page {
    position: relative;
  }
  .page::after {
    position: absolute;
    top: 50%;
    left: 50%;
    /* Use the scale() function to set the size. */
    transform: translate(-50%, -50%) scale(0.5);
    content: url("/path-to-image");
    opacity: 0.1;
  }
}
```

### Reduce base font-size in print.

```css
@media print {
  .page {
    /* Browser default is 16px. */
    font-size: 12px;
  }
}
```
