# print-friendly

화면과 종이를 위한 반응형 CSS. 인쇄와 PDF 변환에 최적화 돼있습니다.

[English](/#readme)

## 스타일 시트 사용

### HTML

CSS 파일은 [jsDelivr](https://www.jsdelivr.com/package/npm/print-friendly) 등의 CDN에 호스팅 돼있습니다.

> [!IMPORTANT]
> 인쇄 대화상자에서 (용지 크기: A4) 그리고 (여백: 기본) 값을 설정하도록 사용자에게 안내하세요.

> [!NOTE]
> 이 패키지는 유의적(semantic) 버전을 따릅니다. 직접 버전 번호를 올릴 수 있도록, 그리고 의도치 않은 주요(breaking) 사항들을 피하기 위해 반드시 jsDelivr URL에 주(major) 버전을 지정해 두세요.

```html
<html>
  <head>
    <!-- print-friendly 스타일 시트를 추가합니다. -->
    <!-- 주 버전이 0으로 설정되어 있는 URL입니다. -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/print-friendly@0/dist/print-friendly.css"
    />
    <!-- (선택) 사용자 지정 웹 폰트를 사용합니다. -->
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
    <!-- 이곳에 콘텐츠를 추가합니다. -->
  </body>
</html>
```
