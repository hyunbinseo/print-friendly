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
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- print-friendly 스타일 시트를 추가합니다. -->
    <!-- 버전이 0.1로 설정되어 있는 URL입니다. -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/print-friendly@0.1/dist/print-friendly.css"
    />
    <style>
      /* 추가적인 스타일을 입력하는 곳입니다. */
      /* 다음 장을 참고합니다. */
    </style>
  </head>
  <body>
    <!-- .page 클래스가 없는 요소들은 화면에서만 보이고 인쇄되지 않습니다. -->
    <header>
      <!-- 예시) 사용자들에게 인쇄 방법을 안내 -->
    </header>

    <!-- .page 요소를 여러 개 추가할 수 있습니다. -->
    <div class="page"></div>
    <!-- .page 요소 간에는 구분을 위해 간격이 표시됩니다. -->
    <div class="page">
      <!-- .page 요소는 언제나 새로운 페이지에서 인쇄됩니다. -->
    </div>
  </body>
</html>
```

## 추가적인 스타일

### 개요 왼쪽 여백 없애기

한컴오피스 한글에서는 문단 모양 / 여백에서 지정하는 값입니다.

```css
ol,
ul {
  /* 한컴오피스 한글 기본값은 0pt 또는 10pt */
  /* 웹 브라우저 기본값은 40px (단위 상이함) */
  padding-inline-start: 16px;
}
```

### 이미지 워터마크 추가하기

`배경 그래픽` 항목이 체크되어 있지 않아도 인쇄됩니다.

```css
/* 워터마크를 화면에서도 표시하려면 @media print 규칙을 제거합니다. */
@media print {
  .page {
    position: relative;
  }
  .page::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* 다음 값들을 지정합니다. */
    content: url("/path-to-image"); /* SVG 사용 가능 */
    /* 세로 여백 값은 명시적으로 지정해야 합니다. */
    /* 가로 방향으로 중앙 정렬되어 있습니다. */
    margin: 10cm auto; /* 세로 가로 */
    width: 10cm;
    opacity: 0.1;
  }
}
```

### 인쇄 시 기본 글자 크기 줄이기

```css
@media print {
  .page {
    /* 웹 브라우저 기본값은 16px */
    font-size: 12px;
  }
}
```
