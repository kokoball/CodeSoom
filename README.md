# CodeSoom


- props는 object로 받아짐 Object.entries로 묶어서 처리
- ( props || {})은 null인 경우 처리
  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
- Expercted linebreaks to be 'LF' but found 'CRLF'  
빌드 시 개행문자 관련 경고 // .eslintrc.js 파일의 rules에 'linebreak-style':0, 추가
