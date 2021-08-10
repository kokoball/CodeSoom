# CodeSoom


- props는 object로 받아짐 Object.entries로 묶어서 처리
- ( props || {})은 null인 경우 처리
  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });
