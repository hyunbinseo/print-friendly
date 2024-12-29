# print-friendly

Responsive CSS for screen and paper. Optimized for printing and PDF conversion. [Demo]

[demo]: https://demo.hyunbin.page/print-friendly

[한국어](/docs/ko.md)

## Using the Stylesheet

The CSS file is hosted on CDNs such as [jsDelivr](https://www.jsdelivr.com/package/npm/print-friendly).

> [!IMPORTANT]
> Inform users to set the (Paper size) and (Margins: Default) in the print dialog.

> [!NOTE]
> This package follows the semantic versioning. To avoid unwanted breaking changes, set the major version in the jsDelivr URL.

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/print-friendly@0.3/index.css" />
  <style>
    /* Set the page size for print and screen. */
    /* Example uses A4 portrait. 21cm x 29.7cm */
    /* Microsoft Word's Narrow margin is 0.5in */
    @page {
      size: A4 portrait;
      margin: 0.5in;
    }
    @media screen {
      .page-container {
        --background-color: lightgray;
        --page-color: white;
        --page-width: 21cm;
        --page-height: 29.7cm;
        --page-padding: 0.25in;
        --page-gap-y: 0.5in;
      }
    }
    @media screen and (min-width: 21cm) {
      .page-container {
        --page-min-height: var(--page-height);
        --page-padding: 0.5in;
        --page-gap-y: 0.75in;
      }
    }
    .page > *:first-child {
      margin-top: 0;
    }
  </style>
</head>
```

```html
<div class="page-container">
  <!-- Elements without the .page class are hidden from print. -->
  <header>
    <!-- e.g. Guide users to print the page. -->
  </header>
  <!-- Multiple .page elements can be added. -->
  <div class="page"></div>
  <!-- Page gap is shown between the .page elements. -->
  <div class="page">
    <!-- Always printed starting on a new page. -->
  </div>
</div>
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
    content: url('/path-to-image');
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
