parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eVP7":[function(require,module,exports) {
module.exports={id:"bench",name:{en:"Benches",de:"Sitzbänke",fr:"Bancs",nl:"Zitbanken",es:"Bancos",hu:"Padok",id:"Bangku",it:"Panchine",ru:"Скамейки",zh_Hans:"长椅",zh_Hant:"長椅",nb_NO:"Benker",fi:"Penkit",pl:"Ławki",pt_BR:"Bancos"},minzoom:14,source:{osmTags:"amenity=bench"},title:{render:{en:"Bench",de:"Sitzbank",fr:"Banc",nl:"Zitbank",es:"Banco",hu:"Pad",id:"Bangku",it:"Panchina",ru:"Скамейка",zh_Hans:"长椅",zh_Hant:"長椅",nb_NO:"Benk",fi:"Penkki",pl:"Ławka",pt_BR:"Banco"}},tagRenderings:["images",{render:{en:"Backrest",de:"Rückenlehne",fr:"Dossier",nl:"Rugleuning",es:"Respaldo",hu:"Háttámla",id:"Sandaran",it:"Schienale",ru:"Спинка",zh_Hans:"靠背",zh_Hant:"靠背",nb_NO:"Rygglene",fi:"Selkänoja",pl:"Oparcie",pt_BR:"Encosto"},freeform:{key:"backrest"},mappings:[{if:"backrest=yes",then:{en:"Backrest: Yes",de:"Rückenlehne: Ja",fr:"Dossier : Oui",nl:"Heeft een rugleuning",es:"Respaldo: Si",hu:"Háttámla: Igen",id:"Sandaran: Ya",it:"Schienale: Sì",ru:"Со спинкой",zh_Hans:"靠背：有",zh_Hant:"靠背：有",nb_NO:"Rygglene: Ja",fi:"Selkänoja: kyllä",pl:"Oparcie: Tak",pt_BR:"Encosto: Sim"}},{if:"backrest=no",then:{en:"Backrest: No",de:"Rückenlehne: Nein",fr:"Dossier : Non",nl:"Rugleuning ontbreekt",es:"Respaldo: No",hu:"Háttámla: Nem",id:"Sandaran: Tidak",it:"Schienale: No",ru:"Без спинки",zh_Hans:"靠背：无",zh_Hant:"靠背：無",nb_NO:"Rygglene: Nei",fi:"Selkänoja: ei",pl:"Oparcie: Nie",pt_BR:"Encosto: Não"}}],question:{en:"Does this bench have a backrest?",de:"Hat diese Bank eine Rückenlehne?",fr:"Ce banc dispose-t-il d'un dossier ?",nl:"Heeft deze zitbank een rugleuning?",es:"¿Este banco tiene un respaldo?",hu:"Van háttámlája ennek a padnak?",id:"Apakah bangku ini memiliki sandaran?",it:"Questa panchina ha lo schienale?",ru:"Есть ли у этой скамейки спинка?",zh_Hans:"这个长椅有靠背吗？",zh_Hant:"這個長椅是否有靠背？",nb_NO:"Har denne beken et rygglene?",pl:"Czy ta ławka ma oparcie?",pt_BR:"Este assento tem um escosto?"}},{render:{en:"{seats} seats",de:"{seats} Sitzplätze",fr:"{seats} places",nl:"{seats} zitplaatsen",es:"{seats} asientos",hu:"{seats} ülőhely",id:"{seats} kursi",it:"{seats} posti",ru:"{seats} мест",zh_Hant:"{seats} 座位數",nb_NO:"{seats} seter",pl:"{seats} siedzeń",pt_BR:"{seats} assentos"},freeform:{key:"seats",type:"nat"},question:{en:"How many seats does this bench have?",de:"Wie viele Sitzplätze hat diese Bank?",fr:"De combien de places dispose ce banc ?",nl:"Hoeveel zitplaatsen heeft deze bank?",es:"¿Cuántos asientos tiene este banco?",hu:"Hány ülőhely van ezen a padon?",it:"Quanti posti ha questa panchina?",ru:"Сколько мест на этой скамейке?",zh_Hans:"这个长椅有几个座位？",zh_Hant:"這個長椅有幾個位子？",nb_NO:"Hvor mange sitteplasser har denne benken?",pl:"Ile siedzeń ma ta ławka?",pt_BR:"Quantos assentos este banco tem?"}},{render:{en:"Material: {material}",de:"Material: {material}",fr:"Matériau : {material}",nl:"Gemaakt van {material}",es:"Material: {material}",hu:"Anyag: {material}",it:"Materiale: {material}",ru:"Материал: {material}","zh_Hanå¨s":"材质: {material}",zh_Hant:"材質：{material}",nb_NO:"Materiale: {material}",fi:"Materiaali: {material}",zh_Hans:"材质: {material}",pl:"Materiał: {material}",pt_BR:"Material: {material}"},freeform:{key:"material",addExtraTags:[]},mappings:[{if:"material=wood",then:{en:"Material: wood",de:"Material: Holz",fr:"Matériau : bois",nl:"Gemaakt uit hout",es:"Material: madera",hu:"Anyag: fa",it:"Materiale: legno",ru:"Материал: дерево",zh_Hans:"材质：木",nb_NO:"Materiale: tre",zh_Hant:"材質：木頭",pt_BR:"Material: madeira",fi:"Materiaali: puu",pl:"Materiał: drewno"}},{if:"material=metal",then:{en:"Material: metal",de:"Material: Metall",fr:"Matériau : métal",nl:"Gemaakt uit metaal",es:"Material: metal",hu:"Anyag: fém",it:"Materiale: metallo",ru:"Материал: металл",zh_Hans:"材质：金属",nb_NO:"Materiale: metall",zh_Hant:"材質：金屬",pl:"Materiał: metal",pt_BR:"Material: metal"}},{if:"material=stone",then:{en:"Material: stone",de:"Material: Stein",fr:"Matériau : pierre",nl:"Gemaakt uit steen",es:"Material: piedra",hu:"Anyag: kő",it:"Materiale: pietra",ru:"Материал: камень",zh_Hans:"材质：石头",nb_NO:"Materiale: stein",zh_Hant:"材質：石頭",pt_BR:"Material: pedra",fi:"Materiaali: kivi",pl:"Materiał: kamień"}},{if:"material=concrete",then:{en:"Material: concrete",de:"Material: Beton",fr:"Matériau : béton",nl:"Gemaakt uit beton",es:"Material: concreto",hu:"Anyag: beton",it:"Materiale: cemento",ru:"Материал: бетон",zh_Hans:"材质：混凝土",nb_NO:"Materiale: betong",zh_Hant:"材質：水泥",pt_BR:"Material: concreto",fi:"Materiaali: betoni",pl:"Materiał: beton"}},{if:"material=plastic",then:{en:"Material: plastic",de:"Material: Kunststoff",fr:"Matériau : plastique",nl:"Gemaakt uit plastiek",es:"Material: plastico",hu:"Anyag: műanyag",it:"Materiale: plastica",ru:"Материал: пластик",zh_Hans:"材质：塑料",nb_NO:"Materiale: plastikk",zh_Hant:"材質：塑膠",pt_BR:"Material: plástico",fi:"Materiaali: muovi",pl:"Materiał: plastik"}},{if:"material=steel",then:{en:"Material: steel",de:"Material: Stahl",fr:"Matériau : acier",nl:"Gemaakt uit staal",es:"Material: acero",hu:"Anyag: acél",it:"Materiale: acciaio",ru:"Материал: сталь",zh_Hans:"材质：不锈钢",nb_NO:"Materiale: stål",zh_Hant:"材質：鋼鐵",pt_BR:"Material: aço",fi:"Materiaali: teräs",pl:"Materiał: stal"}}],question:{en:"What is the bench (seating) made from?",de:"Aus welchem Material besteht die Sitzbank (Sitzfläche)?",fr:"De quel matériau ce banc est-il fait ?",nl:"Uit welk materiaal is het zitgedeelte van deze zitbank gemaakt?",hu:"Miből van a pad (ülő része)?",it:"Di che materiale è fatta questa panchina?",zh_Hans:"这个长椅（或座椅）是用什么材料做的？",ru:"Из какого материала сделана скамейка?",zh_Hant:"這個長椅 (座位) 是什麼做的？",pt_BR:"De que é feito o banco (assento)?",pl:"Z czego wykonana jest ławka (siedzisko)?"}},{question:{en:"In which direction are you looking when sitting on the bench?",de:"In welche Richtung schaut man, wenn man auf der Bank sitzt?",nl:"In welke richting kijk je wanneer je op deze zitbank zit?",fr:"Dans quelle direction regardez-vous quand vous êtes assis sur le banc ?",hu:"Milyen irányba néz a pad?",it:"In che direzione si guarda quando si è seduti su questa panchina?",ru:"В каком направлении вы смотрите, когда сидите на скамейке?",zh_Hans:"坐在长椅上的时候你目视的方向是哪边？",zh_Hant:"坐在長椅時是面對那個方向？",pt_BR:"Em que direção você olha quando está sentado no banco?",pl:"W jakim kierunku patrzysz siedząc na ławce?"},render:{en:"When sitting on the bench, one looks towards {direction}°.",de:"Wenn man auf der Bank sitzt, schaut man in Richtung {direction}°.",nl:"Wanneer je op deze bank zit, dan kijk je in {direction}°.",fr:"Assis sur le banc, on regarde vers {direction}°.",hu:"A pad {direction}° felé néz.",it:"Quando si è seduti su questa panchina, si guarda verso {direction}°.",zh_Hans:"坐在长椅上的时候目视方向为 {direction}°方位。",ru:"Сидя на скамейке, вы смотрите в сторону {direction}°.",zh_Hant:"當坐在長椅時，那個人朝向 {direction}°。",pl:"Siedząc na ławce, patrzy się w kierunku {direction}°.",pt_BR:"Ao sentar-se no banco, olha-se para {direction} °."},freeform:{key:"direction",type:"direction"}},{render:{en:"Colour: {colour}",de:"Farbe: {colour}",fr:"Couleur : {colour}",nl:"Kleur: {colour}",hu:"Szín: {colour}",it:"Colore: {colour}",ru:"Цвет: {colour}",id:"Warna: {colour}",zh_Hans:"颜色： {colour}",zh_Hant:"顏色：{colour}",nb_NO:"Farge: {colour}",pt_BR:"Cor: {colour}",fi:"Väri: {colour}",pl:"Kolor: {colour}"},question:{en:"Which colour does this bench have?",de:"Welche Farbe hat diese Sitzbank?",fr:"Quelle est la couleur de ce banc ?",nl:"Welke kleur heeft deze zitbank?",hu:"Milyen színű a pad?",it:"Di che colore è questa panchina?",ru:"Какого цвета скамейка?",zh_Hans:"这个长椅是什么颜色的？",zh_Hant:"這個長椅是什麼顏色的？",pt_BR:"Qual a cor dessa bancada?",pl:"Jaki kolor ma ta ławka?"},freeform:{key:"colour",type:"color"},mappings:[{if:"colour=brown",then:{en:"Colour: brown",de:"Farbe: braun",fr:"Couleur : marron",nl:"De kleur is bruin",hu:"Szín: barna",it:"Colore: marrone",ru:"Цвет: коричневый",zh_Hans:"颜色：棕",zh_Hant:"顏色：棕色",nb_NO:"Farge: brun",pt_BR:"Cor: marrom",fi:"Väri: ruskea",pl:"Kolor: brązowy"}},{if:"colour=green",then:{en:"Colour: green",de:"Farbe: grün",fr:"Couleur : verte",nl:"De kleur is groen",hu:"Szín: zöld",it:"Colore: verde",ru:"Цвет: зеленый",zh_Hans:"颜色：绿",zh_Hant:"顏色：綠色",nb_NO:"Farge: grønn",pt_BR:"Cor: verde",fi:"Väri: vihreä",pl:"Kolor: zielony"}},{if:"colour=gray",then:{en:"Colour: gray",de:"Farbe: grau",fr:"Couleur : gris",nl:"De kleur is grijs",hu:"Szín: szürke",it:"Colore: grigio",ru:"Цвет: серый",zh_Hans:"颜色：灰",zh_Hant:"顏色：灰色",nb_NO:"Farge: grå",pt_BR:"Cor: cinza",fi:"Väri: harmaa",pl:"Kolor: szary"}},{if:"colour=white",then:{en:"Colour: white",de:"Farbe: weiß",fr:"Couleur : blanc",nl:"De kleur is wit",hu:"Szín: fehér",it:"Colore: bianco",ru:"Цвет: белый",zh_Hans:"颜色：白",zh_Hant:"顏色：白色",nb_NO:"Farge: hvit",pt_BR:"Cor: branco",fi:"Väri: valkoinen",pl:"Kolor: biały"}},{if:"colour=red",then:{en:"Colour: red",de:"Farbe: rot",fr:"Couleur : rouge",nl:"De kleur is rood",hu:"Szín: piros",it:"Colore: rosso",ru:"Цвет: красный",zh_Hans:"颜色：红",zh_Hant:"顏色：紅色",nb_NO:"Farge: rød",pt_BR:"Cor: vermelho",fi:"Väri: punainen",pl:"Kolor: czerwony"}},{if:"colour=black",then:{en:"Colour: black",de:"Farbe: schwarz",fr:"Couleur : noire",nl:"De kleur is zwart",hu:"Szín: fekete",it:"Colore: nero",ru:"Цвет: чёрный",zh_Hans:"颜色：黑",zh_Hant:"顏色：黑色",nb_NO:"Farge: svart",pt_BR:"Cor: preto",fi:"Väri: musta",pl:"Kolor: czarny"}},{if:"colour=blue",then:{en:"Colour: blue",de:"Farbe: blau",fr:"Couleur : bleu",nl:"De kleur is blauw",hu:"Szín: kék",it:"Colore: blu",ru:"Цвет: синий",zh_Hans:"颜色：蓝",zh_Hant:"顏色：藍色",nb_NO:"Farge: blå",pt_BR:"Cor: azul",fi:"Väri: sininen",pl:"Kolor: niebieski"}},{if:"colour=yellow",then:{en:"Colour: yellow",de:"Farbe: gelb",fr:"Couleur : jaune",nl:"De kleur is geel",hu:"Szín: sárga",it:"Colore: giallo",ru:"Цвет: желтый",zh_Hans:"颜色：黄",zh_Hant:"顏色：黃色",nb_NO:"Farge: gul",pt_BR:"Cor: amarelo",fi:"Väri: keltainen",pl:"Kolor: żółty"}}]},{question:{en:"When was this bench last surveyed?",nl:"Wanneer is deze laatste bank laatst gesurveyed?",fr:"Quand ce banc a-t-il été contrôlé pour la dernière fois ?",it:"Quando è stata verificata l’ultima volta questa panchina?",zh_Hans:"上次对这个长椅实地调查是什么时候？",de:"Wann wurde diese Bank zuletzt überprüft?",ru:"Когда последний раз обследовали эту скамейку?",zh_Hant:"上一次探察長椅是什麼時候？",pt_BR:"Quando esta bancada foi pesquisada pela última vez?",pl:"Kiedy ostatnio badano tę ławkę?"},render:{en:"This bench was last surveyed on {survey:date}",nl:"Deze bank is laatst gesurveyd op {survey:date}",fr:"Ce banc a été contrôlé pour la dernière fois le {survey:date}",it:"Questa panchina è stata controllata l’ultima volta in data {survey:date}",zh_Hans:"这个长椅于 {survey:date}最后一次实地调查",de:"Diese Bank wurde zuletzt überprüft am {survey:date}",ru:"Последний раз обследование этой скамейки проводилось {survey:date}",zh_Hant:"這個長椅最後是在 {survey:date} 探查的",pt_BR:"Esta bancada foi pesquisada pela última vez em {survey:date}",pl:"Ławka ta była ostatnio badana w dniu {survey:date}"},freeform:{key:"survey:date",type:"date"},mappings:[{if:"survey:date:={_now:date}",then:"Surveyed today!"}]}],icon:{render:"circle:#FE6F32;./assets/layers/bench/bench.svg"},iconSize:{render:"35,35,center"},color:{render:"#00f"},presets:[{tags:["amenity=bench"],title:{en:"Bench",de:"Sitzbank",fr:"Banc",nl:"Zitbank",es:"Banco",it:"Panchina",ru:"Скамейка",id:"Bangku",zh_Hans:"长椅",nb_NO:"Benk",zh_Hant:"長椅",pt_BR:"Banco",fi:"Penkki",pl:"Ławka"},description:{en:"Add a new bench",de:"Neue Sitzbank eintragen",fr:"Ajouter un nouveau banc",nl:"Voeg een nieuwe zitbank toe",es:"Añadir un nuevo banco",hu:"Pad hozzáadása",it:"Aggiungi una nuova panchina",ru:"Добавить новую скамейку",zh_Hans:"增加一个新的长椅",nb_NO:"Legg til en ny benk",zh_Hant:"新增長椅",pt_BR:"Adicionar um novo banco",fi:"Lisää uusi penkki",pl:"Dodaj nową ławkę"}}]};
},{}]},{},["eVP7"], null)
//# sourceMappingURL=assets/layers/bench/bench.js.map