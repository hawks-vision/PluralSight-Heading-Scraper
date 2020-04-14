/*
 * newTab.js
 * Copyright (C) 2020 root <root@hawks-vision>
 *
 * Distributed under terms of the MIT license.
 */
function onGot(item) {
  console.log(item)
  for (k=0;k<item.f.i.length;k++){
 document.write(item.f.i[k])
document.write("<br>")
  }
  browser.storage.local.remove("f")
}
function onError(error) {
  console.log('Error: ${error}');
}
let f=browser.storage.local.get("f")
f.then(onGot,onError)


