(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(74)},52:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(41),r=a.n(l),i=(a(52),a(4)),o=(a(53),a(12)),s=a.n(o),m=(a(58),function(e){return c.a.createElement("div",{className:"footerStyle"},c.a.createElement("p",null,c.a.createElement("img",{alt:"",src:"https://cosylab.iiitd.edu.in/recipedb/static/iiitd.png"})),c.a.createElement("p",{className:"copyright"},"Copyright \xa9 2023 \xa0 All rights reserved."),c.a.createElement("br",null),c.a.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/3.0/"},c.a.createElement("img",{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"})),c.a.createElement("p",{className:"text"},"All material on this website is a product of research and is provided for your information only and may not be construed as medical advice or instruction. ",c.a.createElement("br",null),c.a.createElement("span",{className:"extratext"}," No action or inaction should be taken based solely on the contents of this information; instead, readers should consult appropriate health professionals on any matter relating to their health and well-being.")),c.a.createElement("p",{className:"links"},c.a.createElement("a",{style:{color:"white"},href:"https://iiitd.ac.in/",target:"_blank"},c.a.createElement("strong",null,"Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)"))," | ",c.a.createElement("a",{style:{color:"white"},href:"https://cosylab.iiitd.edu.in/",target:"_blank"},"Prof. Ganesh Bagler")),c.a.createElement("p",null,c.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/ganesh.bagler"}),c.a.createElement("a",{target:"_blank",href:"https://twitter.com/gansbags"}),c.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/ganeshbagler"})),c.a.createElement("p",{className:"devlop"},"@ Devloped by Vickey Kumar and Suyash Kumar "))}),u=(a(59),a(2)),d=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=(a[0],a[1],Object(u.o)()),r=function(){l("/recipe-voice-bot/")};return c.a.createElement("nav",{className:"headerStyles"},c.a.createElement("ul",null,c.a.createElement("img",{src:"/logo.png",onClick:r,className:"headerlogo"}),c.a.createElement("p",{onClick:r,className:"headertitle"}," RecipeDB "),c.a.createElement("button",{className:"hamburger",onClick:function(){var e=document.querySelector(".main");null!=e&&("blur(5px)"==e.style.filter?e.style.filter="none":e.style.filter="blur(5px)");var t=document.querySelector(".tablestyle");null!=t&&("blur(5px)"==t.style.filter?t.style.filter="none":t.style.filter="blur(5px)")},onMouseOut:function(){null!=document.querySelector(".main")&&(document.querySelector(".main").style.filter="none"),null!=document.querySelector(".tablestyle")&&(document.querySelector(".tablestyle").style.filter="none")}},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"white"},c.a.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"}))),c.a.createElement("div",{className:"navigation-menu"},c.a.createElement("li",{onClick:r},"Home"),c.a.createElement("hr",{style:{width:"80%",marginTop:"2.5%",marginBottom:"2px"}}),c.a.createElement("li",{onClick:function(){window.open("https://cosylab.iiitd.edu.in/")}},"CoSyLab"),c.a.createElement("hr",{style:{width:"80%",marginTop:"2.5%",marginBottom:"2px"}}),c.a.createElement("li",{onClick:function(){l("/recipe-voice-bot/contact/")}},"Contact"))))},p=a(19),g=a(18),h=function(e){var t=Object(o.useSpeechRecognition)(),a=t.transcript,l=t.listening,r=t.browserSupportsSpeechRecognition,h=t.isMicrophoneAvailable,E=Object(u.o)(),b=Object(n.useState)(""),f=Object(i.a)(b,2),v=f[0],y=f[1],w=Object(n.useState)("none"),N=Object(i.a)(w,2),k=N[0],C=N[1];if(Object(n.useEffect)(function(){y(a)},[a]),!r||!h)return c.a.createElement("span",null,"Browser doesn't support speech recognition.");function S(e){var t=e.target;if("A"==t.tagName){var a=t.getElementsByTagName("div");"none"==k?(C("block"),a[0].style.display="block"):(C("none"),a[0].style.display="none")}}var j=Object(n.useState)(""),O=Object(i.a)(j,2),I=O[0],x=O[1];function R(e){console.log("user wants to say : ",v),v.trim().length>0&&(E("/recipe-voice-bot/search_recipe"),localStorage.setItem("userTranscript",v)),y("")}function D(e){I===e||(y(e),C("block"),x(e))}return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",{className:"main"},c.a.createElement("p",{className:"helpStyle"},c.a.createElement("span",{className:"ask"},"Search for Recipes by"),c.a.createElement("span",null,c.a.createElement("a",{className:"dropdown",id:"a1",onClick:S,style:{textDecoration:"None",color:"black"}},"\xa0\xa0 \xa0 \xa0 Cuisine(Country) ",c.a.createElement(p.a,{onClick:S,className:"fa",icon:g.a}),c.a.createElement("div",{className:"dropdown-content"},c.a.createElement("p",{className:"Show me Indian recipes."===I?"selected":"",onClick:function(){return D("Show me Indian recipes.")}},"Show me Indian recipes."),c.a.createElement("p",{className:"Could you suggest Chinese recipes for me to prepare at home?"===I?"selected":"",onClick:function(){return D("Could you suggest Chinese recipe  for me to prepare at home?")}}," Could you suggest Chinese recipes for me to prepare at home?"),c.a.createElement("p",{className:"Recommend some indigenous Korean recipes"===I?"selected":"",onClick:function(){return D("Recommend some indigenous Korean recipes")}},"Recommend some indigenous Korean recipes"),c.a.createElement("p",{className:"Give a list of some Australian recipes"===I?"selected":"",onClick:function(){return D("Give a list of some Australian recipes")}},"Give a list of some Australian recipes"),c.a.createElement("p",{className:"Show me some Belgian dishes involving Chocolate."===I?"selected":"",onClick:function(){return D("Show me some Belgian dishes involving Chocolate.")}},"Show me some Belgian dishes involving Chocolate."))),"\xa0\xa0 \xa0 \xa0",c.a.createElement("a",{className:"dropdown",id:"a2",onClick:S,style:{textDecoration:"None",color:"black"}}," Ingredients ",c.a.createElement(p.a,{className:"fa",icon:g.a}),c.a.createElement("div",{className:"dropdown-content2"},c.a.createElement("p",{className:"Recommend dishes with chicken, broccoli, and garlic for tonight's dinner."===I?"selected":"",onClick:function(){return D("Recommend dishes with chicken, broccoli, and garlic for tonight's dinner.")}},"Recommend dishes with chicken, broccoli, and garlic for tonight's dinner."),c.a.createElement("p",{className:"Show me some French recipes involving Cheese"===I?"selected":"",onClick:function(){return D("Show me some French recipes involving Cheese")}},"Show me some French recipes involving Cheese"),c.a.createElement("p",{className:"Provide Italian recipes that have wine as one the ingredients"===I?"selected":"",onClick:function(){return D("Provide Italian recipes that have wine as one the ingredients")}},"Provide Italian recipes that have wine as one the ingredients"),c.a.createElement("p",{className:"Show me a diet having almonds and eggs"===I?"selected":"",onClick:function(){return D("Show me a diet having almonds and eggs")}},"Show me a diet having almonds and eggs"),c.a.createElement("p",{className:"Show some desserts to make at home from sugar, milk, egg"===I?"selected":"",onClick:function(){return D("Show some desserts to make at home from sugar, milk, egg")}},"Show some desserts to make at home from sugar, milk, egg"))),"\xa0\xa0 \xa0 \xa0",c.a.createElement("a",{className:"dropdown",id:"a3",onClick:S,style:{textDecoration:"None",color:"black"}}," Ingredient Category ",c.a.createElement(p.a,{className:"fa",icon:g.a}),c.a.createElement("div",{className:"dropdown-content3"},c.a.createElement("p",{className:"Show vegetable and fruit salad recipes for a healthy meal choice."===I?"selected":"",onClick:function(){return D("Show vegetable and fruit salad recipes for a healthy meal choice.")}},"Show vegetable and fruit salad recipes for a healthy meal choice."),c.a.createElement("p",{className:"Suggest legume-based recipes for a nutritious and satisfying meal, please"===I?"selected":"",onClick:function(){return D("Suggest legume-based recipes for a nutritious and satisfying meal, please")}},"Suggest legume-based recipes for a nutritious and satisfying meal, please"),c.a.createElement("p",{className:"Show seafood recipes for a delectable ocean-inspired dining experience."===I?"selected":"",onClick:function(){return D("Show seafood recipes for a delectable ocean-inspired dining experience.")}},"Show seafood recipes for a delectable ocean-inspired dining experience."),c.a.createElement("p",{className:"Recommend bakery-style recipes."===I?"selected":"",onClick:function(){return D("Recommend bakery-style recipes.")}},"Recommend bakery-style recipes."),c.a.createElement("p",{className:"Suggest berry-infused recipes."===I?"selected":"",onClick:function(){return D("Suggest berry-infused recipes.")}},"Suggest berry-infused recipes."))),"\xa0\xa0 \xa0 \xa0",c.a.createElement("a",{className:"dropdown",id:"a4",onClick:S,style:{textDecoration:"None",color:"black"}}," Cooking Process ",c.a.createElement(p.a,{className:"fa",icon:g.a}),c.a.createElement("div",{className:"dropdown-content4"},c.a.createElement("p",{className:"Can you recommend some dishes for lunch which do not require refrigeration."===I?"selected":"",onClick:function(){return D("Can you recommend some dishes for lunch which do not require refrigeration.")}},"Can you recommend some dishes for lunch which do not require refrigeration."),c.a.createElement("p",{className:"Show me recipes using drain method"===I?"selected":"",onClick:function(){return D("Show me recipes using drain method")}},"Show me recipes using drain method"),c.a.createElement("p",{className:"Could you give dishes which involve seasoning with cilantro and lime"===I?"selected":"",onClick:function(){return D("Could you give dishes which involve seasoning with cilantro and lime")}},"Could you give dishes which involve seasoning with cilantro and lime"))),"\xa0\xa0 \xa0 \xa0",c.a.createElement("a",{className:"dropdown",id:"a5",onClick:S,style:{textDecoration:"None",color:"black"}},"  Utensils ",c.a.createElement(p.a,{className:"fa",icon:g.a}),c.a.createElement("div",{className:"dropdown-content5"},c.a.createElement("p",{className:"Can you give me some recipes which require cooking in a microwave?"===I?"selected":"",onClick:function(){return D("Can you give me some recipes which require cooking in a microwave?")}},"Can you give me some recipes which require cooking in a microwave?"),c.a.createElement("p",{className:"Show me some recipes which don't need a oven"===I?"selected":"",onClick:function(){return D("Show me some recipes which don't need a oven")}},"Show me some recipes which don't need a oven"),c.a.createElement("p",{className:"Can you recommend some recipes which don't need refrigeration"===I?"selected":"",onClick:function(){return D("Can you recommend some recipes which don't need refrigeration")}},"Can you recommend some recipes which don't need refrigeration"))))),c.a.createElement("div",{className:"image-and-text-container"},c.a.createElement("img",{src:"/logo.png",alt:"Your Image",className:"custom-image"}),c.a.createElement("p",{className:"custom-title"},c.a.createElement("h2",null,"Voice ChatBot"))),c.a.createElement("h2",{className:"left-margin"},l?"Listening...":""),c.a.createElement("form",{onSubmit:R,className:"centerdiv"},c.a.createElement("label",null,c.a.createElement("textarea",{type:"text",value:v,onChange:function(e){y(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&R()},placeholder:"Click SPEAK Button to ask queries to RecipeDB...",className:"textarea"}))),c.a.createElement("button",{className:"buttonstyle buttonmargin",onClick:s.a.startListening},"SPEAK"),c.a.createElement("button",{className:"buttonstyle buttonmargin1",onClick:function(){s.a.stopListening(),y("")}},"CLEAR"),c.a.createElement("button",{className:"buttonstyle buttonmargin2",onClick:R},"SUBMIT")),c.a.createElement(m,null))},E=(a(62),a(32)),b=[{Header:"Recipe Title",accessor:"recipe_title"},{Header:"Region",accessor:"region"},{Header:"Country",accessor:"sub_region"},{Header:"Servings",accessor:"servings"}],f=(a(64),function(e){var t=e.jsonData;console.log("data in BasicTable",JSON.stringify(t));var a=Object(n.useMemo)(function(){return b},[]),l=Object(n.useMemo)(function(){return t},[]),r=Object(E.useTable)({columns:a,data:l},E.usePagination),o=r.getTableProps,s=r.getTableBodyProps,m=r.headerGroups,u=r.page,d=r.nextPage,p=r.previousPage,g=r.canNextPage,h=r.canPreviousPage,f=r.pageOptions,v=r.state,y=r.setPageSize,w=r.prepareRow,N=v.pageIndex,k=(v.pageSize,Object(n.useState)(!0)),C=Object(i.a)(k,2),S=C[0],j=C[1];return Object(n.useEffect)(function(){S&&(y(20),j(!1))}),console.log("table props",o.pageSize),c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("div",null,c.a.createElement("table",Object.assign({className:"tablestyle"},o()),c.a.createElement("thead",null,m.map(function(e){return c.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return c.a.createElement("th",e.getHeaderProps(),e.render("Header"))}))})),c.a.createElement("tbody",s(),u.map(function(e){return w(e),c.a.createElement("tr",e.getRowProps(),c.a.createElement("td",{onClick:function(){return t=e.original,console.log(t.recipe_id),localStorage.setItem("id",t.recipe_id),void window.open("/recipe-voice-bot/recipe_info");var t},className:"recipe_title_color"},e.original.recipe_title),c.a.createElement("td",null,e.original.region),c.a.createElement("td",null,e.original.sub_region),c.a.createElement("td",null,e.original.servings))})))),c.a.createElement("div",{className:"pagenation"},c.a.createElement("span",null,"Page"," "," ",N+1," of ",f.length),c.a.createElement("button",{disabled:!h,className:"buttonstyle1",onClick:function(){return p()}},"Previous"),c.a.createElement("button",{disabled:!g,className:"buttonstyle1",onClick:function(){return d()}},"Next")))}),v=a(75),y=a(29),w=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],r=a[1],p=Object(n.useState)(localStorage.getItem("userTranscript"),""),g=Object(i.a)(p,2),h=g[0],E=g[1],b=Object(o.useSpeechRecognition)(),w=b.transcript,N=b.listening,k=b.browserSupportsSpeechRecognition,C=b.isMicrophoneAvailable,S=Object(u.o)(),j=Object(n.useState)(""),O=Object(i.a)(j,2),I=O[0],x=O[1];if(Object(n.useEffect)(function(){x(w)},[w]),!k||!C)return c.a.createElement("span",null,"Browser doesn't support speech recognition.");function R(e){console.log("user wants to say: ",I),I.trim().length>0&&(S("/recipe-voice-bot/search_recipe"),localStorage.setItem("userTranscript",I),window.location.reload(!1))}Object(n.useEffect)(function(){l||(Object(v.a)({method:"GET",url:"https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/findRecipeByText/"+h}).then(function(e){console.log("data got",e.data),_(e.data)}).catch(function(e){console.log("error got",e)}),r(!0))},[]);var D=Object(n.useState)(null),B=Object(i.a)(D,2),P=B[0],_=B[1],T=null===P?c.a.createElement("div",null,c.a.createElement("div",{className:"marginForSpinner"},c.a.createElement(y.a,{colors:["#309D66","#309D66","#309D66","#309D66","#309D66"]})),c.a.createElement(m,null)):c.a.createElement("div",null,c.a.createElement(f,{jsonData:P}),c.a.createElement(m,null));return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("h2",{className:"left-margin"},N?"Listening...":""),c.a.createElement("form",{onSubmit:R,className:"centerdiv"},c.a.createElement("label",null,c.a.createElement("textarea",{type:"text",value:I||h,onChange:function(e){x(e.target.value)},placeholder:"Click SPEAK Button to ask queries to RecipeDB...",className:"textareastyleRL"}))),c.a.createElement("button",{className:"rounded-buttonrl",onClick:s.a.startListening},"SPEAK"),c.a.createElement("button",{className:"rounded-buttonrl1",onClick:function(){s.a.stopListening(),x(""),E("")}},"CLEAR"),c.a.createElement("button",{className:"rounded-buttonrl2",onClick:R},"SUBMIT"),T)},N=(a(72),function(e){var t=localStorage.getItem("id"),a=Object(n.useState)(localStorage.getItem("userTranscript"),""),l=Object(i.a)(a,2),r=l[0],p=l[1],g=Object(n.useState)(null),h=Object(i.a)(g,2),E=h[0],b=h[1],f=Object(n.useState)(null),w=Object(i.a)(f,2),N=w[0],k=w[1],C=Object(n.useState)(null),S=Object(i.a)(C,2),j=S[0],O=S[1],I=Object(o.useSpeechRecognition)(),x=I.transcript,R=I.listening,D=I.browserSupportsSpeechRecognition,B=I.isMicrophoneAvailable,P=Object(u.o)(),_=Object(n.useState)(""),T=Object(i.a)(_,2),A=T[0],L=T[1];if(Object(n.useEffect)(function(){L(x)},[x]),!D||!B)return c.a.createElement("span",null,"Browser doesn't support speech recognition.");function q(e){console.log("user wants to say : ",A),A.trim().length>0&&(P("/recipe-voice-bot/search_recipe"),localStorage.setItem("userTranscript",A)),L("")}Object(n.useEffect)(function(){Object(v.a)({method:"GET",url:"https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/recipeDB/getingredientsbyrecipe/"+t}).then(function(e){console.log("data by geting",Object.values(e.data).length);for(var t=[],a=Object.values(e.data).length,n=0;n<a;){var c=e.data[n].ingredient_Phrase,l="";(n+=1)<a&&(l=e.data[n].ingredient_Phrase,n+=1),t.push({ing1:c,ing2:l})}O(t),console.log("lst data",t,"len: ",a)}).catch(function(e){console.log("error got while getting indridents",e)})},[t]),Object(n.useEffect)(function(){Object(v.a)({method:"GET",url:"https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/recipeDB/recipeInfo/"+t}).then(function(e){console.log("data by recipeInfo",e.data),k(e.data)}).catch(function(e){console.log("error got while getting recipeInfo",e)})},[t]),Object(n.useEffect)(function(){Object(v.a)({method:"GET",url:"https://cosylab.iiitd.edu.in/recipe-voice-bot-backend/api/recipeDB/instructions/"+t}).then(function(e){var t=[],a=1;e.data.forEach(function(e){"."!==e.trim()&&""!==e.trim()&&(t.push({id:a,name:e}),a+=1)}),b(t),console.log("data by instuction",t)}).catch(function(e){console.log("error got while getting instuctions",e)})},[t]);var G=null===j||null===N||null===E?c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("div",{className:"marginForSpinner"},c.a.createElement(y.a,{colors:["#309D66","#309D66","#309D66","#309D66","#309D66"]}))):c.a.createElement("div",null,c.a.createElement("h2",{className:"recipeName"}," ",N.recipe_title),c.a.createElement("hr",{style:{width:"90%"}}),c.a.createElement("div",{className:"recipeInfo"},c.a.createElement("table",{style:{margin:"4rem"}},c.a.createElement("tr",null,c.a.createElement("td",null," ",c.a.createElement("img",{src:"https://geniuskitchen.sndimg.com/gk/img/gk-shareGraphic.png"===N.img_url||"https://images.media-allrecipes.com/images/79591.png"===N.img_url?"https://cosylab.iiitd.edu.in/recipedb/static/recipe_temp.jpg":N.img_url,className:"recipeImage"})),c.a.createElement("td",null,c.a.createElement("div",{className:"recipeLocation"},c.a.createElement("p",{className:"cuisine"},"Cuisine: "),c.a.createElement("p",null,N.continent," >> ",N.region," >> ",N.sub_region),N.cook_time>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"cuisine"},"Preperation Time: "),c.a.createElement("p",null,"Cooking Time - ",N.cook_time," minutes, Preperation Time - ",N.cook_time," minutes")):""))))),c.a.createElement("hr",{style:{width:"90%"}}),c.a.createElement("div",null,c.a.createElement("h2",{className:"header2"},"Ingredients"),c.a.createElement("table",{className:"tablestyleIng "},c.a.createElement("tbody",null,j.map(function(e){return c.a.createElement("tr",null,c.a.createElement("td",{className:"equalWidth"},e.ing1),c.a.createElement("td",{className:"equalWidth"},e.ing2))})))),c.a.createElement("hr",{style:{width:"90%"}}),c.a.createElement("h2",{className:"header2"},"Cooking Instructions"),c.a.createElement("div",null,c.a.createElement("table",{className:"tablestyleIng"},c.a.createElement("tbody",null,E.map(function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.name))})))));return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("h2",{className:"left-margin"},R?"Listening...":""),c.a.createElement("form",{onSubmit:q,className:"centerdiv"},c.a.createElement("label",null,c.a.createElement("input",{type:"text",value:A||r,onChange:function(e){L(e.target.value)},placeholder:"Click here to search the recibedb",className:"textareastyleRL"}))),c.a.createElement("button",{className:"rounded-buttonrl",onClick:s.a.startListening},"SPEAK"),c.a.createElement("button",{className:"rounded-buttonrl1",onClick:function(){s.a.stopListening(),L(""),p("")}},"CLEAR"),c.a.createElement("button",{className:"rounded-buttonrl2",onClick:q},"SUBMIT"),G,c.a.createElement(m,null))}),k=(a(73),function(e){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",{className:"contactStyle"},c.a.createElement("h1",null,"GET IN TOUCH"),c.a.createElement("hr",{style:{width:"80%"}}),c.a.createElement("p",{style:{margin:"2rem"}},c.a.createElement("b",null,"Prof. Ganesh Bagler")),c.a.createElement("p",null,"Infosys Center for Artificial Intelligence"),c.a.createElement("p",null,"Department of Computational Biology, IIIT-Delhi, New Delhi"),c.a.createElement("a",{href:"mailto: bagler+voice@iiitd.ac.in"},c.a.createElement("b",null,"bagler+voice@iiitd.ac.in"))),c.a.createElement("hr",{style:{width:"80%"}}),c.a.createElement("div",null,c.a.createElement("iframe",{className:"googleMap",src:"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHazaZOXjDDkRVsV7DjQuWCw&key=AIzaSyBRBQG98E5YdUoooyAk2wd-_olpWmL5ACE"})),c.a.createElement(m,null))}),C=a(16),S=function(){return c.a.createElement(C.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",element:c.a.createElement(h,null)}),c.a.createElement(u.a,{path:"/recipe-voice-bot/",element:c.a.createElement(h,null)}),c.a.createElement(u.a,{path:"/recipe-voice-bot/search_recipe",element:c.a.createElement(w,null)}),c.a.createElement(u.a,{path:"/recipe-voice-bot/recipe_info",element:c.a.createElement(N,null)}),c.a.createElement(u.a,{path:"/recipe-voice-bot/contact",element:c.a.createElement(k,null)}))))},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null))),j()}},[[45,1,2]]]);
//# sourceMappingURL=main.fa85c62c.chunk.js.map