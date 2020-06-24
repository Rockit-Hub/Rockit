// urlListData Function 序列化字符串

const urlListData = function (data) {
  var ulrStr = ''
  for (var item in data) {
    ulrStr += item + '=' + data[item] + '&'
  }
  return ulrStr.replace(/&$/, '')
}