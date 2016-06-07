// 曾文彬
// https://github.com/zwenbin1991/viewport
// 终端适配js库

'use strict';

/**
 * @param {Number} width 设计稿宽度
 * @param {Number} fontSize 字体大小 ps:设置html 根节点字体大小
 */
function viewport (width, fontSize) {
    var doc = document;
    var rootElement = doc.documentElement;
    doc.getElementsByTagName('head')[0].appendChild('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />');
    rootElement.style.fontSize = rootElement.clientWidth / width * fontSize + 'px';              
}