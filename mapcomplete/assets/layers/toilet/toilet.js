parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mhHe":[function(require,module,exports) {
module.exports={id:"toilet",name:{en:"Toilets",de:"Toiletten",fr:"Toilettes",nl:"Toiletten",ru:"Туалеты",it:"Servizi igienici"},minzoom:12,source:{osmTags:"amenity=toilets"},title:{render:{en:"Toilet",de:"Toilette",fr:"Toilettes",nl:"Toilet",ru:"Туалет",it:"Servizi igienici"}},icon:{render:"./assets/layers/toilet/toilets.svg",mappings:[{if:"wheelchair=yes",then:"./assets/layers/toilet/wheelchair.svg"},{if:{or:["toilets:position=urinals","toilets:position=urinal"]},then:"./assets/layers/toilet/urinal.svg"}]},color:{render:"#0000ff"},wayHandling:1,presets:[{title:{en:"Toilet",de:"Toilette",fr:"Toilettes",nl:"Toilet",ru:"Туалет",it:"Servizi igienici"},tags:["amenity=toilets"],description:{en:"A publicly accessible toilet or restroom",de:"Eine öffentlich zugängliche Toilette",fr:"Des toilettes",nl:"Een publieke toilet",it:"Servizi igienici aperti al pubblico",ru:"Туалет или комната отдыха со свободным доступом"}},{title:{en:"Toilets with wheelchair accessible toilet",de:"Toiletten mit rollstuhlgerechter Toilette",fr:"Toilettes accessible aux personnes à mobilité réduite",nl:"Een rolstoeltoegankelijke toilet",it:"Servizi igienici accessibili per persone in sedia a rotelle",ru:"Туалет с доступом для пользователей кресел-колясок"},tags:["amenity=toilets","wheelchair=yes"],description:{en:"A restroom which has at least one wheelchair-accessible toilet",de:"Eine Toilettenanlage mit mindestens einer rollstuhlgerechten Toilette",fr:"Toilettes avec au moins un WC accessible aux personnes à mobilité réduite",nl:"Deze toiletten hebben op zijn minst één rolstoeltoegankelijke WC",it:"Servizi igienici che hanno almeno una toilette accessibile a persone in sedia a rotelle"}}],tagRenderings:["images",{question:{en:"Are these toilets publicly accessible?",de:"Sind diese Toiletten öffentlich zugänglich?",fr:"Ces toilettes sont-elles accessibles au public ?",nl:"Zijn deze toiletten publiek toegankelijk?",it:"Questi servizi igienici sono aperti al pubblico?",ru:"Есть ли свободный доступ к этим туалетам?"},render:{en:"Access is {access}",de:"Zugang ist {access}",fr:"L'accès est {access}",nl:"Toegankelijkheid is {access}",it:"L'accesso è {access}"},freeform:{key:"access",addExtraTags:["fixme=the tag access was filled out by the user and might need refinement"]},mappings:[{if:"access=yes",then:{en:"Public access",de:"Öffentlicher Zugang",fr:"Accès publique",nl:"Publiek toegankelijk",it:"Accesso pubblico",ru:"Свободный доступ"}},{if:"access=customers",then:{en:"Only access to customers",de:"Nur Zugang für Kunden",fr:"Accès réservé aux clients",nl:"Enkel toegang voor klanten",it:"Accesso riservato ai clienti e alle clienti"}},{if:"access=no",then:{en:"Not accessible",de:"Nicht zugänglich",fr:"Toilettes privées",nl:"Niet toegankelijk",ru:"Недоступно",it:"Non accessibile"}},{if:"access=key",then:{en:"Accessible, but one has to ask a key to enter",de:"Zugänglich, aber man muss einen Schlüssel für die Eingabe verlangen",fr:"Accessible, mais vous devez demander la clé",nl:"Toegankelijk na het vragen van de sleutel",it:"Accessibile, ma occorre chiedere una chiave per accedere"}}]},{question:{en:"Are these toilets free to use?",de:"Können diese Toiletten kostenlos benutzt werden?",fr:"Ces toilettes sont-elles payantes ?",nl:"Zijn deze toiletten gratis te gebruiken?",it:"Questi servizi igienici sono gratuiti?"},mappings:[{then:{en:"These are paid toilets",de:"Dies sind bezahlte Toiletten",fr:"Toilettes payantes",nl:"Men moet betalen om deze toiletten te gebruiken",ru:"Это платные туалеты",it:"Questi servizi igienici sono a pagamento"},if:"fee=yes"},{if:"fee=no",then:{en:"Free to use",de:"Kostenlose Nutzung",fr:"Toilettes gratuites",nl:"Gratis te gebruiken",it:"Gratis"}}]},{question:{en:"How much does one have to pay for these toilets?",de:"Wie viel muss man für diese Toiletten bezahlen?",fr:"Quel est le prix d'accès de ces toilettes ?",nl:"Hoeveel moet men betalen om deze toiletten te gebruiken?",it:"Quanto costa l'accesso a questi servizi igienici?",ru:"Сколько стоит посещение туалета?"},render:{en:"The fee is {charge}",de:"Die Gebühr beträgt {charge}",fr:"Le prix est {charge}",nl:"De toiletten gebruiken kost {charge}",it:"La tariffa è {charge}",ru:"Стоимость {charge}"},condition:"fee=yes",freeform:{key:"charge",type:"string"}},{question:{en:"Is there a dedicated toilet for wheelchair users",de:"Gibt es eine Toilette für Rollstuhlfahrer?",fr:"Y a-t-il des toilettes réservées aux personnes en fauteuil roulant ?",nl:"Is er een rolstoeltoegankelijke toilet voorzien?",it:"C'è un WC riservato alle persone in sedia a rotelle"},mappings:[{then:{en:"There is a dedicated toilet for wheelchair users",de:"Es gibt eine Toilette für Rollstuhlfahrer",fr:"Il y a des toilettes réservées pour les personnes à mobilité réduite",nl:"Er is een toilet voor rolstoelgebruikers",it:"C'è un WC riservato alle persone in sedia a rotelle"},if:"wheelchair=yes"},{if:"wheelchair=no",then:{en:"No wheelchair access",de:"Kein Zugang für Rollstuhlfahrer",fr:"Non accessible aux personnes à mobilité réduite",nl:"Niet toegankelijk voor rolstoelgebruikers",it:"Non accessibile in sedia a rotelle",ru:"Недоступно пользователям кресел-колясок"}}]},{question:{en:"Which kind of toilets are this?",de:"Welche Art von Toiletten sind das?",fr:"De quel type sont ces toilettes ?",nl:"Welke toiletten zijn dit?",it:"Di che tipo di servizi igienici si tratta?",ru:"Какие это туалеты?"},mappings:[{if:"toilets:position=seated",then:{en:"There are only seated toilets",de:"Es gibt nur Sitztoiletten",fr:"Il y a uniquement des sièges de toilettes",nl:"Er zijn enkel WC's om op te zitten",it:"Ci sono solo WC con sedile"}},{if:"toilets:position=urinal",then:{en:"There are only urinals here",de:"Hier gibt es nur Pissoirs",fr:"Il y a uniquement des urinoirs",nl:"Er zijn enkel urinoirs",it:"Ci sono solo urinali"}},{if:"toilets:position=squat",then:{en:"There are only squat toilets here",de:"Es gibt hier nur Hocktoiletten",fr:"Il y a uniquement des toilettes turques",nl:"Er zijn enkel hurktoiletten",it:"Ci sono solo turche"}},{if:"toilets:position=seated;urinal",then:{en:"Both seated toilets and urinals are available here",de:"Sowohl Sitztoiletten als auch Pissoirs sind hier verfügbar",fr:"Il y a des sièges de toilettes et des urinoirs",nl:"Er zijn zowel urinoirs als zittoiletten",it:"Ci sono sia sedili, sia urinali"}}]},{question:{en:"Is a changing table (to change diapers) available?",de:"Ist ein Wickeltisch (zum Wechseln der Windeln) vorhanden?",fr:"Ces toilettes disposent-elles d'une table à langer ?",nl:"Is er een luiertafel beschikbaar?",it:"È disponibile un fasciatoio (per cambiare i pannolini)?"},mappings:[{then:{en:"A changing table is available",de:"Ein Wickeltisch ist verfügbar",fr:"Une table à langer est disponible",nl:"Er is een luiertafel",it:"È disponibile un fasciatoio"},if:"changing_table=yes"},{if:"changing_table=no",then:{en:"No changing table is available",de:"Es ist kein Wickeltisch verfügbar",fr:"Aucune table à langer",nl:"Geen luiertafel",it:"Non è disponibile un fasciatoio"}}]},{question:{en:"Where is the changing table located?",de:"Wo befindet sich der Wickeltisch?",fr:"Où se situe la table à langer ?",nl:"Waar bevindt de luiertafel zich?",it:"Dove si trova il fasciatoio?"},render:{en:"The changing table is located at {changing_table:location}",de:"Die Wickeltabelle befindet sich in {changing_table:location}",fr:"Emplacement de la table à langer : {changing_table:location}",nl:"De luiertafel bevindt zich in {changing_table:location}",it:"Il fasciatoio si trova presso {changing_table:location}"},condition:"changing_table=yes",freeform:{key:"changing_table:location"},mappings:[{then:{en:"The changing table is in the toilet for women. ",de:"Der Wickeltisch befindet sich in der Damentoilette. ",fr:"La table à langer est dans les toilettes pour femmes. ",nl:"De luiertafel bevindt zich in de vrouwentoiletten ",it:"Il fasciatoio è nei servizi igienici femminili. "},if:"changing_table:location=female_toilet"},{then:{en:"The changing table is in the toilet for men. ",de:"Der Wickeltisch befindet sich in der Herrentoilette. ",fr:"La table à langer est dans les toilettes pour hommes. ",nl:"De luiertafel bevindt zich in de herentoiletten ",it:"Il fasciatoio è nei servizi igienici maschili. "},if:"changing_table:location=male_toilet"},{if:"changing_table:location=wheelchair_toilet",then:{en:"The changing table is in the toilet for wheelchair users. ",de:"Der Wickeltisch befindet sich in der Toilette für Rollstuhlfahrer. ",fr:"La table à langer est dans les toilettes pour personnes à mobilité réduite. ",nl:"De luiertafel bevindt zich in de rolstoeltoegankelijke toilet ",it:"Il fasciatoio è nei servizi igienici per persone in sedia a rotelle. "}},{if:"changing_table:location=dedicated_room",then:{en:"The changing table is in a dedicated room. ",de:"Der Wickeltisch befindet sich in einem eigenen Raum. ",fr:"La table à langer est dans un espace dédié. ",nl:"De luiertafel bevindt zich in een daartoe voorziene kamer ",it:"Il fasciatoio è in una stanza dedicata. "}}]}]};
},{}]},{},["mhHe"], null)
//# sourceMappingURL=assets/layers/toilet/toilet.js.map