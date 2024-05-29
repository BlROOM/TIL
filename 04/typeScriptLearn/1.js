// 'a' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.ts(7006)
function sum(a, b) {
    return a + b;
}
var result = sum(10, 20);
console.log(result);
