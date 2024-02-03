# 이것저것 하다가 생긴 일들을 적은 팁

## react.ts 에서 TwailWind Css : Error 해결법

error code :
>PostCSS plugin postcss-nested requires PostCSS 8.

postCss 버전에 의한 문제 - 기존 것을 uninstall 하고 7버전으로 다시 받자
```
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
