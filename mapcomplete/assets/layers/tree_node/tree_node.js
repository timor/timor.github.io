parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"h9tP":[function(require,module,exports) {
module.exports={id:"tree_node",name:{nl:"Boom",en:"Tree",it:"Albero",ru:"Дерево",fr:"Arbre"},minzoom:14,source:{osmTags:{and:["natural=tree"]}},title:{render:{nl:"Boom",en:"Tree",it:"Albero",ru:"Дерево",fr:"Arbre"},mappings:[{if:"name~*",then:{nl:"<i>{name}</i>",en:"<i>{name}</i>",ca:"<i>{name}</i>",de:"<i>{name}</i>",fr:"<i>{name}</i>",it:"<i>{name}</i>",ru:"<i>{name}</i>",id:"<i>{name}</i>"}}]},tagRenderings:["images",{render:{nl:"Hoogte: {height}",en:"Height: {height}",it:"Altezza: {height}",ru:"Высота: {height}",fr:"Hauteur : {height}"},condition:{and:["height~*"]},mappings:[{if:{and:["height~^[0-9.]+$"]},then:{nl:"Hoogte: {height}&nbsp;m",en:"Height: {height}&nbsp;m",it:"Altezza: {height}&nbsp;m",ru:"Высота: {height}&nbsp;м",fr:"Hauteur&nbsp;: {height}&nbsp;m"}}]},{question:{nl:"Is dit een naald- of loofboom?",en:"Is this a broadleaved or needleleaved tree?",it:"Si tratta di un albero latifoglia o aghifoglia?",fr:"Cet arbre est-il un feuillu ou un résineux ?"},mappings:[{if:{and:["leaf_type=broadleaved"]},then:{nl:'<img src="./assets/themes/trees/broadleaved.svg" style="width:1.5em;height:1.5em" alt=""/> Loofboom',en:'<img src="./assets/themes/trees/broadleaved.svg" style="width:1.5em;height:1.5em" alt=""/> Broadleaved',it:'<img src="./assets/themes/trees/broadleaved.svg" style="width:1.5em;height:1.5em" alt=""/> Latifoglia',fr:'<img src="./assets/themes/trees/broadleaved.svg" style="width:1.5em;height:1.5em" alt=""/> Feuillu'}},{if:{and:["leaf_type=needleleaved"]},then:{nl:'<img src="./assets/themes/trees/needleleaved.svg" style="width:1.5em;height:1.5em" alt=""/> Naaldboom',en:'<img src="./assets/themes/trees/needleleaved.svg" style="width:1.5em;height:1.5em" alt=""/> Needleleaved',it:'<img src="./assets/themes/trees/needleleaved.svg" style="width:1.5em;height:1.5em" alt=""/> Aghifoglia',fr:'<img src="./assets/themes/trees/needleleaved.svg" style="width:1.5em;height:1.5em" alt=""/> Résineux'}},{if:{and:["leaf_type=leafless"]},then:{nl:'<img src="./assets/themes/trees/leafless.svg" style="width:1.5em;height:1.5em" alt=""/> Permanent bladloos',en:'<img src="./assets/themes/trees/leafless.svg" style="width:1.5em;height:1.5em" alt=""/> Permanently leafless',it:'<img src="./assets/themes/trees/leafless.svg" style="width:1.5em;height:1.5em" alt=""/> Privo di foglie (permanente)',fr:'<img src="./assets/themes/trees/leafless.svg" style="width:1.5em;height:1.5em" alt=""/> Sans feuilles (Permanent)'},hideInAnswer:!0}]},{question:{nl:"Hoe significant is deze boom? Kies het eerste antwoord dat van toepassing is.",en:"How significant is this tree? Choose the first answer that applies.",it:"Quanto significativo è questo albero? Scegli la prima risposta che corrisponde.",fr:"Quelle est l'importance de cet arbre ? Choisissez la première réponse qui s'applique."},mappings:[{if:{and:["denotation=landmark"]},then:{nl:"De boom valt op door zijn grootte of prominente locatie. Hij is nuttig voor navigatie.",en:"The tree is remarkable due to its size or prominent location. It is useful for navigation.",it:"È un albero notevole per le sue dimensioni o per la posizione prominente. È utile alla navigazione.",fr:"L'arbre est remarquable en raison de sa taille ou de son emplacement proéminent. Il est utile pour la navigation."}},{if:{and:["denotation=natural_monument"]},then:{nl:"De boom is een natuurlijk monument, bijvoorbeeld doordat hij bijzonder oud of van een waardevolle soort is.",en:"The tree is a natural monument, e.g. because it is especially old, or of a valuable species.",it:"L’albero è un monumento naturale, ad esempio perché specialmente antico o appartenente a specie importanti.",fr:"Cet arbre est un monument naturel (ex : âge, espèce, etc…)"}},{if:{and:["denotation=agricultural"]},then:{nl:"De boom wordt voor landbouwdoeleinden gebruikt, bijvoorbeeld in een boomgaard.",en:"The tree is used for agricultural purposes, e.g. in an orchard.",it:"L’albero è usato per scopi agricoli, ad esempio in un frutteto.",fr:"Cet arbre est utilisé à but d’agriculture (ex : dans un verger)"}},{if:{and:["denotation=park"]},then:{nl:"De boom staat in een park of dergelijke (begraafplaats, schoolterrein, …).",en:"The tree is in a park or similar (cemetery, school grounds, …).",it:"L’albero è in un parco o qualcosa di simile (cimitero, aree didattiche, etc.).",fr:"Cet arbre est dans un parc ou une aire similaire (ex : cimetière, cour d’école, …)."}},{if:{and:["denotation=garden"]},then:{nl:"De boom staat in de tuin bij een woning/flatgebouw.",en:"The tree is a residential garden.",it:"L’albero è un giardino residenziale.",fr:"Cet arbre est dans une cour résidentielle."}},{if:{and:["denotation=avenue"]},then:{nl:"Dit is een laanboom.",en:"This is a tree along an avenue.",it:"Fa parte di un viale alberato.",fr:"C'est un arbre le long d'une avenue."}},{if:{and:["denotation=urban"]},then:{nl:"De boom staat in een woonkern.",en:"The tree is an urban area.",it:"L’albero si trova in un’area urbana.",fr:"L'arbre est une zone urbaine."}},{if:{and:["denotation=none"]},then:{nl:"De boom staat buiten een woonkern.",en:"The tree is outside of an urban area.",it:"L’albero si trova fuori dall’area urbana.",fr:"Cet arbre est en zone rurale."}}]},{question:{nl:"Is deze boom groenblijvend of bladverliezend?",en:"Is this tree evergreen or deciduous?",it:"È un sempreverde o caduco?",ru:"Это дерево вечнозелёное или листопадное?",fr:"L’arbre est-il à feuillage persistant ou caduc ?"},mappings:[{if:{and:["leaf_cycle=deciduous"]},then:{nl:"Bladverliezend: de boom is een periode van het jaar kaal.",en:"Deciduous: the tree loses its leaves for some time of the year.",it:"Caduco: l’albero perde le sue foglie per un periodo dell’anno.",ru:"Листопадное: у дерева опадают листья в определённое время года.",fr:"Caduc : l’arbre perd son feuillage une partie de l’année."}},{if:{and:["leaf_cycle=evergreen"]},then:{nl:"Groenblijvend.",en:"Evergreen.",it:"Sempreverde.",fr:"À feuilles persistantes.",ru:"Вечнозелёное."}}],condition:{and:["leaf_type!~^leafless$"]}},{render:{nl:"Naam: {name}",en:"Name: {name}",it:"Nome: {name}",ru:"Название: {name}",fr:"Nom : {name}",id:"Nama: {name}"},question:{nl:"Heeft de boom een naam?",en:"Does the tree have a name?",it:"L’albero ha un nome?",fr:"L'arbre a-t-il un nom ?",ru:"Есть ли у этого дерева название?"},freeform:{key:"name",addExtraTags:["noname="]},mappings:[{if:{and:["name=","noname=yes"]},then:{nl:"De boom heeft geen naam.",en:"The tree does not have a name.",it:"L’albero non ha un nome.",fr:"L'arbre n'a pas de nom.",ru:"У этого дерева нет названия."}}],condition:{or:["denotation=landmark","denotation=natural_monument","name~*"]}},{question:{nl:"Is deze boom erkend als erfgoed?",en:"Is this tree registered heritage?",it:"Quest’albero è registrato come patrimonio?",fr:"Cet arbre est-il inscrit au patrimoine ?"},mappings:[{if:{and:["heritage=4","heritage:operator=OnroerendErfgoed"]},then:{nl:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/> Erkend als houtig erfgoed door Onroerend Erfgoed Vlaanderen',en:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/> Registered as heritage by <i>Onroerend Erfgoed</i> Flanders',it:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/>Registrato come patrimonio da <i>Onroerend Erfgoed</i> Flanders',fr:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/> Fait partie du patrimoine par <i>Onroerend Erfgoed</i>'}},{if:{and:["heritage=4","heritage:operator=aatl"]},then:{nl:"Erkend als natuurlijk erfgoed door Directie Cultureel Erfgoed Brussel",en:"Registered as heritage by <i>Direction du Patrimoine culturel</i> Brussels",it:"Registrato come patrimonio da <i>Direction du Patrimoine culturel</i> di Bruxelles",fr:"Enregistré comme patrimoine par la <i>Direction du Patrimoine culturel</i> Bruxelles"}},{if:{and:["heritage=yes","heritage:operator="]},then:{nl:"Erkend als erfgoed door een andere organisatie",en:"Registered as heritage by a different organisation",it:"Registrato come patrimonio da un’organizzazione differente",fr:"Enregistré comme patrimoine par une autre organisation"}},{if:{and:["heritage=no","heritage:operator="]},then:{nl:"Niet erkend als erfgoed",en:"Not registered as heritage",it:"Non è registrato come patrimonio",fr:"Non enregistré comme patrimoine"}},{if:{and:["heritage~*"]},then:{nl:"Erkend als erfgoed door een andere organisatie",en:"Registered as heritage by a different organisation",it:"Registrato come patrimonio da un’organizzazione differente",fr:"Enregistré comme patrimoine par une autre organisation"},hideInAnswer:!0}],condition:{or:["denotation=landmark","denotation=natural_monument"]}},{render:{nl:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/> Onroerend Erfgoed-ID: <a href="https://id.erfgoed.net/erfgoedobjecten/{ref:OnroerendErfgoed}">{ref:OnroerendErfgoed}</a>',en:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/> Onroerend Erfgoed ID: <a href="https://id.erfgoed.net/erfgoedobjecten/{ref:OnroerendErfgoed}">{ref:OnroerendErfgoed}</a>',it:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/> Onroerend Erfgoed ID: <a href="https://id.erfgoed.net/erfgoedobjecten/{ref:OnroerendErfgoed}">{ref:OnroerendErfgoed}</a>',ru:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/> Onroerend Erfgoed ID: <a href="https://id.erfgoed.net/erfgoedobjecten/{ref:OnroerendErfgoed}">{ref:OnroerendErfgoed}</a>',fr:'<img src="./assets/layers/tree_node/Onroerend_Erfgoed_logo_without_text.svg" style="width:0.85em;height:1em;vertical-align:middle" alt=""/> Identifiant Onroerend Erfgoed : <a href="https://id.erfgoed.net/erfgoedobjecten/{ref:OnroerendErfgoed}">{ref:OnroerendErfgoed}</a>'},question:{nl:"Wat is het ID uitgegeven door Onroerend Erfgoed Vlaanderen?",en:"What is the ID issued by Onroerend Erfgoed Flanders?",it:"Qual è l’ID rilasciato da Onroerend Erfgoed Flanders?",fr:"Quel est son identifiant donné par Onroerend Erfgoed ?"},freeform:{key:"ref:OnroerendErfgoed",type:"nat"},condition:{and:["heritage=4","heritage:operator=OnroerendErfgoed"]}},{render:{nl:'<img src="./assets/svg/wikidata.svg" style="width:1em;height:0.56em;vertical-align:middle" alt=""/> Wikidata: <a href="http://www.wikidata.org/entity/{wikidata}">{wikidata}</a>',en:'<img src="./assets/svg/wikidata.svg" style="width:1em;height:0.56em;vertical-align:middle" alt=""/> Wikidata: <a href="http://www.wikidata.org/entity/{wikidata}">{wikidata}</a>',it:'<img src="./assets/svg/wikidata.svg" style="width:1em;height:0.56em;vertical-align:middle" alt=""/> Wikidata: <a href="http://www.wikidata.org/entity/{wikidata}">{wikidata}</a>',ru:'<img src="./assets/svg/wikidata.svg" style="width:1em;height:0.56em;vertical-align:middle" alt=""/> Wikidata: <a href="http://www.wikidata.org/entity/{wikidata}">{wikidata}</a>',fr:'<img src="./assets/svg/wikidata.svg" style="width:1em;height:0.56em;vertical-align:middle" alt=""/> Wikidata : <a href="http://www.wikidata.org/entity/{wikidata}">{wikidata}</a>'},question:{nl:"Wat is het Wikidata-ID van deze boom?",en:"What is the Wikidata ID for this tree?",it:"Qual è l’ID Wikidata per questo albero?",fr:"Quel est l'identifiant Wikidata de cet arbre ?"},freeform:{key:"wikidata",type:"wikidata"},condition:{or:["denotation=landmark","denotation=natural_monument","wikidata~*"]}}],icon:{render:"circle:#ffffff;./assets/themes/trees/unknown.svg",mappings:[{if:{and:["leaf_type=broadleaved"]},then:"circle:#ffffff;./assets/themes/trees/broadleaved.svg"},{if:{and:["leaf_type=needleleaved"]},then:"circle:#ffffff;./assets/themes/trees/needleleaved.svg"}]},wayHandling:1,width:{render:"8"},iconSize:{render:"40,40,bottom"},color:{render:"#00f"},presets:[{tags:["natural=tree","leaf_type=broadleaved"],title:{nl:"Loofboom",en:"Broadleaved tree",it:"Albero latifoglia",fr:"Arbre feuillu",ru:"Лиственное дерево"},description:{nl:"Een boom van een soort die blaadjes heeft, bijvoorbeeld eik of populier.",en:"A tree of a species with leaves, such as oak or populus.",it:"Un albero di una specie con foglie larghe come la quercia o il pioppo.",fr:"Un arbre d'une espèce avec de larges feuilles, comme le chêne ou le peuplier."}},{tags:["natural=tree","leaf_type=needleleaved"],title:{nl:"Naaldboom",en:"Needleleaved tree",it:"Albero aghifoglia",ru:"Хвойное дерево",fr:"Arbre résineux"},description:{nl:"Een boom van een soort met naalden, bijvoorbeeld den of spar.",en:"A tree of a species with needles, such as pine or spruce.",it:"Un albero di una specie con aghi come il pino o l’abete.",ru:"Дерево с хвоей (иглами), например, сосна или ель.",fr:"Une espèce d’arbre avec des épines comme le pin ou l’épicéa."}},{tags:["natural=tree"],title:{nl:"Boom",en:"Tree",it:"Albero",ru:"Дерево",fr:"Arbre",id:"Pohon"},description:{nl:"Wanneer je niet zeker bent of het nu een loof- of naaldboom is.",en:"If you're not sure whether it's a broadleaved or needleleaved tree.",it:"Qualora non si sia sicuri se si tratta di un albero latifoglia o aghifoglia.",fr:"Si vous n'êtes pas sûr(e) de savoir s'il s'agit d'un arbre à feuilles larges ou à aiguilles.",ru:"Если вы не уверены в том, лиственное это дерево или хвойное."}}]};
},{}]},{},["h9tP"], null)
//# sourceMappingURL=assets/layers/tree_node/tree_node.js.map