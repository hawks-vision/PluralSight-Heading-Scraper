/*
 * popup.js
 * Copyright (C) 2020 root <root@hawks-vision>
 *
 * Distributed under terms of the MIT license.
 */

/*
 * popup.js
 * Copyright (C) 2020 root <root@hawks-vision>
 *
 * Distributed under terms of the MIT license.
 */

function scr(){
browser.tabs.executeScript({file:'/heading_extract.js'})
browser.tabs.create({url:"/newTab.html"})
}
document.getElementById('newTab').addEventListener('click',scr)

