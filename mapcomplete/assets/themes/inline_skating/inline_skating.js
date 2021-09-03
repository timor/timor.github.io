parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aj0c":[function(require,module,exports) {
module.exports={id:"inline_skating",title:{en:"Inline Skating Infrastructure"},shortDescription:{en:"A map where you can view and edit things related to inline skating."},description:{en:"A map where you can view and edit things related to inline skating."},language:["en","nl"],maintainer:"timor",defaultBackgroundId:"CartoDB.Voyager",icon:"./assets/themes/cycle_infra/cycle-infra.svg",version:"0",startLat:51,startLon:3.75,startZoom:11,widenFactor:.008,socialImage:"./assets/themes/cycle_infra/cycle-infra.svg",enableDownload:!0,layers:[{id:"footways",name:{en:"Footways"},minzoom:17,source:{osmTags:{or:["highway=service","highway=footway","highway=living_street","highway=path","highway=pedestrian","public_transport=platform",{and:["highway=cycleway",{or:["foot=designated","foot=yes"]}]}]}},title:{render:{en:"Footways"}},description:{},tagRenderings:[{"#":"Footway Smoothness",question:{en:"What can you ride here?"},condition:{or:["highway=footway","highway=path","public_transport=platform","highway=service","highway=living_street","highway=pedestrian"]},mappings:[{if:"smoothness=excellent",then:{en:"Usable for thin rollers: rollerblade, skateboard",nl:"Geschikt voor fijne rollers: rollerblade, skateboard"}},{if:"smoothness=good",then:{en:"Usable for thin wheels: racing bike",nl:"Geschikt voor fijne wielen: racefiets"}},{if:"smoothness=intermediate",then:{en:"Usable for normal wheels: city bike, wheelchair, scooter",nl:"Geschikt voor normale wielen: stadsfiets, rolstoel, scooter"}},{if:"smoothness=bad",then:{en:"Usable for robust wheels: trekking bike, car, rickshaw",nl:"Geschikt voor brede wielen: trekfiets, auto, rickshaw"}},{if:"smoothness=very_bad",then:{en:"Usable for vehicles with high clearance: light duty off-road vehicle",nl:"Geschikt voor voertuigen met hoge banden: lichte terreinwagen"}},{if:"smoothness=horrible",then:{en:"Usable for off-road vehicles: heavy duty off-road vehicle",nl:"Geschikt voor terreinwagens: zware terreinwagen"}},{if:"smoothness=very_horrible",then:{en:"Usable for specialized off-road vehicles: tractor, ATV",nl:"Geschikt voor gespecialiseerde terreinwagens: tractor, alleterreinwagen"}},{if:"smoothness=impassable",then:{en:"Impassable / No wheeled vehicle",nl:"Niet geschikt voor voertuigen met wielen"}}]}],showArrows:!0,allowSplit:!0,isShown:{render:"yes",mappings:[{if:{or:["access=no","foot=no","access=private","foot=private"]},then:"no"}]},width:"7",color:{render:"rgba(170, 170, 170, 0.7)",mappings:[{if:"smoothness=excellent",then:"rgba(0, 200, 0, 0.7)"},{if:"smoothness=good",then:"rgba(80, 160, 0, 0.7)"},{if:"smoothness=intermediate",then:"rgba(200, 160, 0, 0.7)"},{if:{or:["smoothness!="]},then:"rgba(200, 0, 0, 0.7)"}]}},{id:"sidewalks",name:{en:"Sidewalks"},minzoom:17,source:{osmTags:{or:["highway=residential","highway=tertiary","highway=unclassified","highway=primary","highway=primary_link","highway=secondary","highway=secondary_link"]}},title:{render:{en:"Sidewalks"}},description:{},tagRenderings:[{"#":"Sidewalk Smoothness(both)",question:{en:"What can you ride on both sidewalks? (Skip if different)"},condition:{and:["sidewalk=both","sidewalk:left:smoothness=","sidewalk:right:smoothness=","sidewalk:left!=separate","sidewalk:right!=separate"]},mappings:[{if:"sidewalk:both:smoothness=excellent",then:{en:"Both sides usable for thin rollers: rollerblade, skateboard",nl:"Geschikt voor fijne rollers: rollerblade, skateboard"}},{if:"sidewalk:both:smoothness=good",then:{en:"Both sides usable for thin wheels: racing bike",nl:"Geschikt voor fijne wielen: racefiets"}},{if:"sidewalk:both:smoothness=intermediate",then:{en:"Both sides usable for normal wheels: city bike, wheelchair, scooter",nl:"Geschikt voor normale wielen: stadsfiets, rolstoel, scooter"}},{if:"sidewalk:both:smoothness=bad",then:{en:"Both sides usable for robust wheels: trekking bike, car, rickshaw",nl:"Geschikt voor brede wielen: trekfiets, auto, rickshaw"}},{if:"sidewalk:both:smoothness=very_bad",then:{en:"Both sides usable for vehicles with high clearance: light duty off-road vehicle",nl:"Geschikt voor voertuigen met hoge banden: lichte terreinwagen"}},{if:"sidewalk:both:smoothness=horrible",then:{en:"Both sides usable for off-road vehicles: heavy duty off-road vehicle",nl:"Geschikt voor terreinwagens: zware terreinwagen"}},{if:"sidewalk:both:smoothness=very_horrible",then:{en:"Both sides usable for specialized off-road vehicles: tractor, ATV",nl:"Geschikt voor gespecialiseerde terreinwagens: tractor, alleterreinwagen"}},{if:"sidewalk:both:smoothness=impassable",then:{en:"Impassable / No wheeled vehicle",nl:"Niet geschikt voor voertuigen met wielen"}}]},{"#":"Sidewalk Smoothness(right)",question:{en:"What can you ride on the right sidewalk?"},condition:{or:[{and:["sidewalk=both","sidewalk:right!=separate"]},{and:["sidewalk=right","sidewalk:right!=separate"]}]},mappings:[{if:"sidewalk:right:smoothness=excellent",then:{en:"right side usable for thin rollers: rollerblade, skateboard",nl:"Geschikt voor fijne rollers: rollerblade, skateboard"}},{if:"sidewalk:right:smoothness=good",then:{en:"right side usable for thin wheels: racing bike",nl:"Geschikt voor fijne wielen: racefiets"}},{if:"sidewalk:right:smoothness=intermediate",then:{en:"right side usable for normal wheels: city bike, wheelchair, scooter",nl:"Geschikt voor normale wielen: stadsfiets, rolstoel, scooter"}},{if:"sidewalk:right:smoothness=bad",then:{en:"right side usable for robust wheels: trekking bike, car, rickshaw",nl:"Geschikt voor brede wielen: trekfiets, auto, rickshaw"}},{if:"sidewalk:right:smoothness=very_bad",then:{en:"right side usable for vehicles with high clearance: light duty off-road vehicle",nl:"Geschikt voor voertuigen met hoge banden: lichte terreinwagen"}},{if:"sidewalk:right:smoothness=horrible",then:{en:"right side usable for off-road vehicles: heavy duty off-road vehicle",nl:"Geschikt voor terreinwagens: zware terreinwagen"}},{if:"sidewalk:right:smoothness=very_horrible",then:{en:"right side usable for specialized off-road vehicles: tractor, ATV",nl:"Geschikt voor gespecialiseerde terreinwagens: tractor, alleterreinwagen"}},{if:"sidewalk:right:smoothness=impassable",then:{en:"Impassable / No wheeled vehicle",nl:"Niet geschikt voor voertuigen met wielen"}}]},{"#":"Sidewalk Smoothness(left)",question:{en:"What can you ride on the left sidewalk?"},condition:{or:[{and:["sidewalk=both","sidewalk:left!=separate"]},{and:["sidewalk=left","sidewalk:left!=separate"]}]},mappings:[{if:"sidewalk:left:smoothness=excellent",then:{en:"left side usable for thin rollers: rollerblade, skateboard",nl:"Geschikt voor fijne rollers: rollerblade, skateboard"}},{if:"sidewalk:left:smoothness=good",then:{en:"left side usable for thin wheels: racing bike",nl:"Geschikt voor fijne wielen: racefiets"}},{if:"sidewalk:left:smoothness=intermediate",then:{en:"left side usable for normal wheels: city bike, wheelchair, scooter",nl:"Geschikt voor normale wielen: stadsfiets, rolstoel, scooter"}},{if:"sidewalk:left:smoothness=bad",then:{en:"left side usable for robust wheels: trekking bike, car, rickshaw",nl:"Geschikt voor brede wielen: trekfiets, auto, rickshaw"}},{if:"sidewalk:left:smoothness=very_bad",then:{en:"left side usable for vehicles with high clearance: light duty off-road vehicle",nl:"Geschikt voor voertuigen met hoge banden: lichte terreinwagen"}},{if:"sidewalk:left:smoothness=horrible",then:{en:"left side usable for off-road vehicles: heavy duty off-road vehicle",nl:"Geschikt voor terreinwagens: zware terreinwagen"}},{if:"sidewalk:left:smoothness=very_horrible",then:{en:"left side usable for specialized off-road vehicles: tractor, ATV",nl:"Geschikt voor gespecialiseerde terreinwagens: tractor, alleterreinwagen"}},{if:"sidewalk:left:smoothness=impassable",then:{en:"Impassable / No wheeled vehicle",nl:"Niet geschikt voor voertuigen met wielen"}}]}],isShown:{render:"yes",mappings:[{if:{or:["access=no","access=private","sidewalk=no","sidewalk=none","sidewalk=separate","foot=use_sidepath"]},then:"no"}]},showArrows:!0,allowSplit:!0,leftOffsetColor:{render:"rgba(170, 170, 170, 0.7)",mappings:[{if:"sidewalk:left:smoothness=excellent",then:"rgba(0, 200, 0, 0.7)"},{if:"sidewalk:left:smoothness=good",then:"rgba(80, 160, 0, 0.7)"},{if:"sidewalk:left:smoothness=intermediate",then:"rgba(200, 160, 0, 0.7)"},{if:{or:["sidewalk:left:smoothness~.+"]},then:"rgba(200, 0, 0, 0.7)"}]},rightOffsetColor:{render:"rgba(170, 170, 170, 0.7)",mappings:[{if:"sidewalk:right:smoothness=excellent",then:"rgba(0, 200, 0, 0.7)"},{if:"sidewalk:right:smoothness=good",then:"rgba(80, 160, 0, 0.7)"},{if:"sidewalk:right:smoothness=intermediate",then:"rgba(200, 160, 0, 0.7)"},{if:{or:["sidewalk:right:smoothness~.+"]},then:"rgba(200, 0, 0, 0.7)"}]},width:"9",color:{render:"rgba(170, 170, 170, 0.2)",mappings:[{if:"sidewalk:both:smoothness=excellent",then:"rgba(0, 200, 0, 0.7)"},{if:"sidewalk:both:smoothness=good",then:"rgba(80, 160, 0, 0.7)"},{if:"sidewalk:both:smoothness=intermediate",then:"rgba(200, 160, 0, 0.7)"},{if:{or:["sidewalk:both:smoothness~.+"]},then:"rgba(200, 0, 0, 0.7)"}]}}]};
},{}]},{},["aj0c"], null)
//# sourceMappingURL=assets/themes/inline_skating/inline_skating.js.map