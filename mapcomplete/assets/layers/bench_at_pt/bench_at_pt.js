parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sXko":[function(require,module,exports) {
module.exports={id:"bench_at_pt",name:{en:"Benches at public transport stops",de:"Sitzbänke bei Haltestellen",fr:"Bancs des arrêts de transport en commun",nl:"Zitbanken aan bushaltes",es:"Bancos en una parada de transporte público",hu:"Padok megállókban",it:"Panchine alle fermate del trasporto pubblico",ru:"Скамейки на остановках общественного транспорта",zh_Hans:"在公交站点的长椅",nb_NO:"Benker",zh_Hant:"大眾運輸站點的長椅",pt_BR:"Bancos em pontos de transporte público",pl:"Ławki na przystankach komunikacji miejskiej"},minzoom:14,source:{osmTags:{or:["bench=yes","bench=stand_up_bench"]}},title:{render:{en:"Bench",de:"Sitzbank",fr:"Banc",nl:"Zitbank",es:"Banco",hu:"Pad",it:"Panchina",ru:"Скамейка",id:"Bangku",zh_Hans:"长椅",nb_NO:"Benk",zh_Hant:"長椅",pt_BR:"Banco",fi:"Penkki",pl:"Ławka"},mappings:[{if:{or:["public_transport=platform","railway=platform","highway=bus_stop"]},then:{en:"Bench at public transport stop",de:"Sitzbank bei Haltestelle",fr:"Banc d'un arrêt de transport en commun",nl:"Zitbank aan een bushalte",hu:"Pad megállóban",it:"Panchina alla fermata del trasporto pubblico",ru:"Скамейка на остановке общественного транспорта",zh_Hans:"在公交站点的长椅",zh_Hant:"大眾運輸站點的長椅",pt_BR:"Banco em ponto de transporte público",pl:"Ławka na przystanku komunikacji miejskiej"}},{if:{and:["amenity=shelter"]},then:{en:"Bench in shelter",de:"Sitzbank in Unterstand",fr:"Banc dans un abri",nl:"Zitbank in een schuilhokje",hu:"Pad fedett helyen",it:"Panchina in un riparo",zh_Hans:"在庇护所的长椅",ru:"Скамейка в укрытии",zh_Hant:"涼亭內的長椅",pt_BR:"Banco em abrigo"}}]},tagRenderings:["images",{render:{en:"{name}",de:"{name}",fr:"{name}",nl:"{name}",hu:"{name}",it:"{name}",ru:"{name}",id:"{name}",zh_Hans:"{name}",zh_Hant:"{name}",pt_BR:"{name}",fi:"{name}",pl:"{name}"},freeform:{key:"name"}},{render:{en:"Stand up bench",de:"Stehbank",fr:"Banc assis debout",nl:"Leunbank",it:"Panca in piedi",zh_Hans:"站立长凳",ru:"Встаньте на скамейке",zh_Hant:"站立長椅"},freeform:{key:"bench",addExtraTags:[]},condition:{and:["bench=stand_up_bench"]}}],icon:{render:"./assets/themes/benches/bench_public_transport.svg"},width:{render:"8"},iconSize:{render:"35,35,center"},color:{render:"#00f"}};
},{}]},{},["sXko"], null)
//# sourceMappingURL=assets/layers/bench_at_pt/bench_at_pt.js.map