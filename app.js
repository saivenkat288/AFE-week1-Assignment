var arr = [];
function printValues(json) {
  var obj = JSON.parse(json);
  for (var k in obj) {
    arr.push(obj[k]);
  }
  return arr;
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] == value);
}
window.nearestChapter = function nearestChapter() {
  var target = document.getElementById("target").value;
  var temp_json = document.getElementById("myJson").value;
  var array = printValues(temp_json);
  const diffs = array.map((num) => Math.abs(target - num));
  const min = Math.min(...diffs);
  const result = Math.max(...array.filter((_, i) => diffs[i] === min));
  result_key = getKeyByValue(JSON.parse(temp_json), result);
  document.getElementById("result").innerHTML =
    "Nearest Chapter for the given page number is " + result_key;

  return result_key;
};
