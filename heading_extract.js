let k=document.getElementsByTagName('h3');
console.log(k[0].innerText);
var p=[];
for (i=0;i<k.length;i++)
{p.push(k[i].innerText);}
function onGot(item) {
  console.log(item.f.i);
}
function onError(error) {
  console.log('Error: ${error}');
}
browser.storage.local.set({"f":{"i":p}})
let m=browser.storage.local.get("f")
m.then(onGot,onError)

