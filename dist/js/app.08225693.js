(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),r=a.n(n);r.a},1:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[""==t.currentComponent?a("v-row",{staticStyle:{"text-align":"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v("Arrangementer")]),a("v-card-text",[a("v-container",[a("v-tabs",{staticClass:"mx-1",attrs:{grow:""}},[a("v-tab",[t._v("Login")]),a("v-tab",[t._v("Ny Bruker")]),a("v-tab-item",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"hide-details":"",label:"Epost/Brukernavn",filled:""},model:{value:t.user.userEmail,callback:function(e){t.$set(t.user,"userEmail",e)},expression:"user.userEmail"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"hide-details":"",label:"Passoord",filled:""},model:{value:t.user.userPassword,callback:function(e){t.$set(t.user,"userPassword",e)},expression:"user.userPassword"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticStyle:{color:"black"},on:{click:t.checkLogin}},[t._v("Login")])],1)],1)],1),a("v-tab-item",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"hide-details":"",label:"Epost/Brukernavn",filled:""},model:{value:t.user.userEmail,callback:function(e){t.$set(t.user,"userEmail",e)},expression:"user.userEmail"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"hide-details":"",label:"Passoord",filled:""},model:{value:t.user.userPassword,callback:function(e){t.$set(t.user,"userPassword",e)},expression:"user.userPassword"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticStyle:{color:"black"},on:{click:t.lagBruker}},[t._v("Lag Bruker")])],1)],1)],1)],1)],1)],1)],1)],1)],1):t._e(),a(t.currentComponent,{tag:"component",on:{cleanCurrentComponent:function(e){t.currentComponent=e}}})],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-5",staticStyle:{"text-align":"center"}},[a("v-row",{staticClass:"px-3",staticStyle:{"background-color":"lightgrey"},attrs:{align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{icon:""}},[a("v-btn",{staticStyle:{color:"black"},on:{click:function(e){return t.cleanCurrentComponent()}}},[a("v-icon",[t._v("mdi-chevron-left")])],1)],1),a("v-col",[a("v-select",{attrs:{"hide-details":"",items:t.maneder,"item-text":"text","item-value":"value",placeholder:"Alle",filled:"",label:"Måned"},model:{value:t.maned,callback:function(e){t.maned=e},expression:"maned"}})],1),a("v-col",[a("v-select",{attrs:{placeholder:"Alle","hide-details":"",items:t.datoer,"item-text":"text","item-value":"text",filled:"",label:"Dato"},model:{value:t.dato,callback:function(e){t.dato=e},expression:"dato"}})],1),a("v-col",[a("v-text-field",{attrs:{placeholder:"Alle","hide-details":"",filled:"",label:"Vert"},model:{value:t.vert,callback:function(e){t.vert=e},expression:"vert"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",filled:"",label:"Søk"},model:{value:t.soketekst,callback:function(e){t.soketekst=e},expression:"soketekst"}})],1),2==t.currentItem?a("v-col",{attrs:{cols:"1"}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.editorModeIsOn=!t.editorModeIsOn}}},[a("v-icon",[t._v("mdi-wrench")])],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.currentComponent="appNyttArrangement"}}},[a("v-icon",[t._v("mdi-file-plus")])],1)],1)],1)],1):t._e()],1),a("v-tabs",{staticClass:"mx-1",attrs:{grow:""},model:{value:t.currentItem,callback:function(e){t.currentItem=e},expression:"currentItem"}},[a("v-tab",[t._v("Arrangementer Liste")]),a("v-tab",{on:{click:function(e){return t.hentSkal()}}},[t._v("Interessert")]),a("v-tab",[t._v("Egne Arrangementer")]),a("v-tab-item",[a("v-row",{staticClass:"pa-4 mx-1 display-flex"},t._l(t.arrangementListe,(function(e){return a("v-col",{key:e.index,staticClass:"arrangement",attrs:{cols:"3"},on:{click:function(a){return t.detaljer(e)}}},[a("v-img",{staticStyle:{width:"100%"},attrs:{src:e.bilde}}),a("div",{staticStyle:{"background-color":"white"}},[a("h3",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.$sanitize(e.tittel))}}),a("br"),a("h6",{staticClass:"mt-n4",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.$sanitize(e.vert+"<br>"+e.sted+" "+e.tidspunkt+" "+e.dato+"/"+e.maned))}}),a("p",{staticStyle:{"text-align":"justify"},domProps:{innerHTML:t._s(t.$sanitize(e.tekst))}})])],1)})),1)],1),a("v-tab-item",[a("v-row",{staticClass:"pa-4 mx-1 display-flex"},t._l(t.arrangementListe,(function(e){return a("v-col",{key:e.index,staticClass:"arrangement",attrs:{cols:"3"},on:{click:function(a){return t.detaljer(e)}}},[a("v-img",{staticStyle:{width:"100%"},attrs:{src:e.bilde}}),a("div",{staticStyle:{"background-color":"white"}},[a("h3",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.$sanitize(e.tittel))}}),a("br"),a("h6",{staticClass:"mt-n4",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.$sanitize(e.vert+"<br>"+e.sted+" "+e.tidspunkt+" "+e.dato+"/"+e.maned))}}),a("p",{staticStyle:{"text-align":"justify"},domProps:{innerHTML:t._s(t.$sanitize(e.tekst))}})])],1)})),1)],1),a("v-tab-item",[a("v-row",{staticClass:"pa-4 mx-1 display-flex"},t._l(t.arrangementListe,(function(e){return a("v-col",{key:e.index,staticClass:"arrangement",attrs:{cols:"3"}},[t.editorModeIsOn?a("v-row",{staticClass:"pa-2"},[a("v-col",{attrs:{cols:"12"},on:{click:function(a){return t.detaljer(e)}}},[a("v-img",{attrs:{"max-height":"175",contain:"",src:e.bilde},on:{click:function(e){t.currentComponent="appImageUpload"}}}),a("v-btn",{staticClass:"my-2",staticStyle:{color:"black"},on:{click:function(e){t.currentComponent="appImageUpload"}}},[t._v("Legg Til Bilde")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{"hide-details":"",filled:"",label:"Tekst"},model:{value:e.tekst,callback:function(a){t.$set(e,"tekst",a)},expression:"arrangement.tekst"}})],1),a("v-row",{staticClass:"py-0"},[a("v-col",[a("v-text-field",{attrs:{"hide-details":"",label:"Tittel",filled:""},model:{value:e.tittel,callback:function(a){t.$set(e,"tittel",a)},expression:"arrangement.tittel"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",label:"Sted",filled:""},model:{value:e.sted,callback:function(a){t.$set(e,"sted",a)},expression:"arrangement.sted"}})],1)],1),a("v-row",{staticClass:"py-0"},[a("v-col",[a("v-text-field",{attrs:{"hide-details":"",label:"Arrangement Vert",filled:""},model:{value:e.vert,callback:function(a){t.$set(e,"vert",a)},expression:"arrangement.vert"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",type:"number",label:"Måned",filled:""},model:{value:e.maned,callback:function(a){t.$set(e,"maned",a)},expression:"arrangement.maned"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",type:"number",label:"Dato",filled:""},model:{value:e.dato,callback:function(a){t.$set(e,"dato",a)},expression:"arrangement.dato"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",type:"time",label:"Tidspunkt",filled:""},model:{value:e.tidspunkt,callback:function(a){t.$set(e,"tidspunkt",a)},expression:"arrangement.tidspunkt"}})],1)],1),a("v-btn",{staticClass:"mb-2",staticStyle:{color:"black"},on:{click:function(a){return t.slettArrangement(e.id)}}},[t._v("Slett Arrangement")]),a("v-btn",{staticStyle:{color:"black"},on:{click:function(a){return t.oppdaterArrangement(e)}}},[t._v("Oppdater Arrangement")])],1):a("v-row",{staticClass:"pa-2"},[a("v-img",{staticStyle:{width:"100%"},attrs:{src:e.bilde}}),a("div",[a("h3",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.$sanitize(e.tittel))}}),a("br"),a("h6",{staticClass:"mt-n4",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.$sanitize(e.vert+"<br>"+e.sted+" "+e.tidspunkt+" "+e.dato+"/"+e.maned))}}),a("p",{staticStyle:{"text-align":"justify"},domProps:{innerHTML:t._s(t.$sanitize(e.tekst))}})])],1)],1)})),1)],1)],1),a(t.currentComponent,{tag:"component",attrs:{arrangement:t.arrangement},on:{cleanCurrentComponent:function(e){t.currentComponent=e}}})],1)},o=[],l=(a("caad"),a("4e827"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"800px"},on:{"click:outside":t.cleanCurrentComponent},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Nytt Arrangement")]),a("v-card-text",[a("v-container",[a("v-row",{staticClass:"py-0"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{attrs:{"max-height":"175",contain:"",src:t.arrangement.bilde},on:{click:function(e){t.currentComponent="appImageUpload"}}}),a("v-btn",{staticClass:"my-2",staticStyle:{color:"black"},on:{click:function(e){t.currentComponent="appImageUpload"}}},[t._v("Legg Til Bilde")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{"hide-details":"",filled:"",label:"Tekst"},model:{value:t.arrangement.tekst,callback:function(e){t.$set(t.arrangement,"tekst",e)},expression:"arrangement.tekst"}})],1),a("v-row",{staticClass:"py-0"},[a("v-col",[a("v-text-field",{attrs:{"hide-details":"",label:"Tittel",filled:""},model:{value:t.arrangement.tittel,callback:function(e){t.$set(t.arrangement,"tittel",e)},expression:"arrangement.tittel"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",label:"Sted",filled:""},model:{value:t.arrangement.sted,callback:function(e){t.$set(t.arrangement,"sted",e)},expression:"arrangement.sted"}})],1)],1),a("v-row",{staticClass:"py-0"},[a("v-col",[a("v-text-field",{attrs:{"hide-details":"",label:"Arrangement Vert",filled:""},model:{value:t.arrangement.vert,callback:function(e){t.$set(t.arrangement,"vert",e)},expression:"arrangement.vert"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",type:"number",label:"Måned",filled:""},model:{value:t.arrangement.maned,callback:function(e){t.$set(t.arrangement,"maned",e)},expression:"arrangement.maned"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",type:"number",label:"Dato",filled:""},model:{value:t.arrangement.dato,callback:function(e){t.$set(t.arrangement,"dato",e)},expression:"arrangement.dato"}})],1),a("v-col",[a("v-text-field",{attrs:{"hide-details":"",type:"time",label:"Tidspunkt",filled:""},model:{value:t.arrangement.tidspunkt,callback:function(e){t.$set(t.arrangement,"tidspunkt",e)},expression:"arrangement.tidspunkt"}})],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"my-2",staticStyle:{color:"black"},on:{click:function(e){return t.nyttArrangement()}}},[t._v("Lag Arrangement")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.cleanCurrentComponent}},[t._v("Close")])],1)],1)],1),a(t.currentComponent,{tag:"component",attrs:{currentComponent:t.currentComponent,row:t.arrangement},on:{cleanCurrentComponent:function(e){t.currentComponent=e}}})],1)}),c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"1200px"},on:{"click:outside":t.cleanCurrentComponent},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Image")]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"col-lg-4"},[a("picture-input",{ref:"pictureInput",attrs:{hideChangeButton:!0,removeButtonClass:"v-btn v-btn--contained theme--light v-size--default",removable:!0,zIndex:0,crop:!1,prefill:t.row.bilde,"custom-strings":{upload:"<h1>Error!</h1>",drag:"Upload Image"}},on:{change:t.onImageChange,remove:t.onImageRemoval}}),t.img?a("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[a("b",[t._v("Before:")]),a("span",[t._v(t._s(t.original.size))]),a("span",[t._v("|")]),a("b",[t._v("After:")]),a("span",[t._v(t._s(t.compressed.size))])]):t._e()],1),a("v-col",{staticClass:"col-lg-8"},[a("v-tabs",{attrs:{grow:""},model:{value:t.currentItem,callback:function(e){t.currentItem=e},expression:"currentItem"}},[a("v-tab",[t._v("Cropper")]),a("v-tab",[t._v("Compress")]),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-text-field",{attrs:{type:"number","hide-details":"",filled:"",label:"Height Aspect"},model:{value:t.aspectHeight,callback:function(e){t.aspectHeight=e},expression:"aspectHeight"}})],1),a("v-col",[a("v-text-field",{attrs:{type:"number","hide-details":"",filled:"",label:"Width Aspect"},model:{value:t.aspectWidth,callback:function(e){t.aspectWidth=e},expression:"aspectWidth"}})],1),a("v-col",[a("v-btn",{staticClass:"mb-2",attrs:{height:"100%"},on:{click:t.ChangeAspect}},[t._v("Change Aspect")])],1),a("v-btn",{staticClass:"mt-2",on:{click:t.cropImage}},[t._v("Crop Image")]),0==t.currentItem?a("cropper",{ref:"cropper",staticClass:"cropper",attrs:{src:t.row.bilde,"stencil-props":{aspectRatio:t.aH/t.aW}}}):t._e()],1)],1)],1)],1),a("v-tab-item",[a("v-card",{staticClass:"pa-0",attrs:{flat:""}},[a("v-card-text",[a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-text-field",{attrs:{type:"number","hide-details":"",filled:"",label:"Image Scale"},model:{value:t.scale,callback:function(e){t.scale=e},expression:"scale"}})],1),a("v-col",[a("v-text-field",{attrs:{type:"number","hide-details":"",filled:"",label:"Image Quality"},model:{value:t.quality,callback:function(e){t.quality=e},expression:"quality"}})],1),a("v-col",[a("v-btn",{staticClass:"mb-2",attrs:{height:"100%"},on:{click:t.compressImage}},[t._v("Compress Image")])],1),t.img?a("v-col",{staticClass:"pt-0",staticStyle:{width:"100%"},attrs:{cols:"12"}},[t.img?a("img",{attrs:{alt:"",src:t.img}}):t._e()]):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.cleanCurrentComponent}},[t._v("Close")])],1)],1)],1)},d=[],m=(a("a434"),a("b0c0"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("ddb0"),a("2b3d"),a("e597")),p=a("a2c1"),h=a("90a4"),v=a.n(h),g={props:{row:Object},data:function(){return{dialog:!0,aH:1,aW:1,currentItem:0,img:"",scale:100,quality:75,originalSize:!0,original:{},compressed:{},file:{},result:{},reader:{},imgSrc:""}},mounted:function(){this.img=this.row.bilde,this.onChange()},watch:{scale:function(){return this.redraw()},quality:function(){return this.redraw()}},components:{PictureInput:m["a"],Cropper:p["a"]},methods:{onChange:function(){this.file=this.row.bilde,this.reader=new FileReader,this.reader.readAsDataURL(v()(this.file.split(",")[1],"image/jpeg")),this.reader.onload=this.fileOnLoad},drawImage:function(t){var e=document.createElement("canvas");this.canvas=e;var a=this.canvas.getContext("2d"),n=new Image;n.src=t;var r=this.scale/100,s=n.width*r,i=n.height*r;this.canvas.setAttribute("width",s),this.canvas.setAttribute("height",i),a.drawImage(n,0,0,s,i);var o=this.quality?this.quality/100:1,l=this.canvas.toDataURL("image/jpeg",o),c=this.result.file.name;c=".jpeg";var u=l.length-"data:image/png;base64,".length,d=4*Math.ceil(u/3)*.5624896334383812,m={canvas:this.canvas,original:this.result,compressed:{blob:l,base64:l,name:c,file:this.buildFile(this.toBlob(l),c)}};m.compressed.size=Math.round(d/1e3)+" kB",m.compressed.type="image/jpeg",this.getFiles(m)},redraw:function(){this.result.base64&&this.drawImage(this.result.base64)},fileOnLoad:function(){var t=this.file,e=this.reader.result.length-"data:image/png;base64,".length,a=4*Math.ceil(e/3)*.5624896334383812,n={name:t.name,type:t.type,size:Math.round(a/1e3)+" kB",base64:this.reader.result,file:t};this.result=n,this.drawImage(this.result.base64)},toBlob:function(t){var e=v()(t.split(",")[1],"image/jpeg"),a=window.URL.createObjectURL(e);return a},buildFile:function(t,e){return new File([t],e)},compressImage:function(){this.row.bilde=this.compressed.blob,this.rowWasChanged()},getFiles:function(t){this.img=t.compressed.blob,this.original=t.original,this.compressed=t.compressed},deleteEvent:function(t,e){e.splice(t,1)},onImageChange:function(t){console.log(t),this.row.bilde=t,this.onChange(),this.rowWasChanged(),this.$refs.pictureInput.image?console.log("Picture loaded."):console.log("FileReader API not supported: use the <form>, Luke!")},onImageRemoval:function(){this.row.bilde="",this.rowWasChanged()},cleanCurrentComponent:function(){this.$emit("cleanCurrentComponent","")},rowWasChanged:function(){this.$emit("rowWasChanged",this.row)},cropImage:function(){var t=this.$refs.cropper.getResult(),e=t.coordinates,a=t.canvas;this.coordinates=e,this.row.bilde=a.toDataURL(),this.onChange()},ChangeAspect:function(){this.aH=this.aspectHeight,this.aW=this.aspectWidth,this.row.defaultAspectWidth=this.aspectWidth,this.row.defaultAspectHeight=this.aspectHeight}}},f=g,b=(a("7a45"),a("2877")),k=a("6544"),x=a.n(k),C=a("8336"),y=a("b0af"),w=a("99d9"),_=a("62ad"),$=a("a523"),S=a("169a"),V=a("0fd9"),j=a("71a3"),A=a("c671"),I=a("fe57"),T=a("8654"),L=Object(b["a"])(f,u,d,!1,null,"277eb8a8",null),P=L.exports;x()(L,{VBtn:C["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:_["a"],VContainer:$["a"],VDialog:S["a"],VRow:V["a"],VTab:j["a"],VTabItem:A["a"],VTabs:I["a"],VTextField:T["a"]});var M={props:{arrangementPre:Object},data:function(){return{currentComponent:"",dialog:!0,img:"",arrangement:{tekst:"",tittel:"",tidspunkt:"",bilde:"",vert:"",maned:"",dato:"",id:"",skaper:""}}},components:{AppImageUpload:P,PictureInput:m["a"]},computed:{app:function(){return this.$store.state.app}},methods:{cleanCurrentComponent:function(){this.$emit("cleanCurrentComponent","")},nyttArrangement:function(){for(var t=this,e="",a="abcdefghijklmnopqrstuvwxyz0123456789",n=0;n<4;n++)e+=a.charAt(Math.floor(Math.random()*a.length));this.arrangement.id=e,this.arrangement.skaper=this.$store.state.userData.id,this.$http.put("https://hackathon-daniel.firebaseio.com/arrangementer/"+this.$store.state.userData.id+this.arrangement.id+".json",this.arrangement).then((function(e){console.log(e),t.hentArrangement()}),(function(t){console.log(t)}))},hentArrangement:function(){var t=this;this.$http.get("https://hackathon-daniel.firebaseio.com/arrangementer.json").then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)a.push(e[n]);t.app.arrangementListe=a}))}}},D=M,O=a("adda"),z=a("2fa4"),H=a("a844"),E=Object(b["a"])(D,l,c,!1,null,null,null),B=E.exports;x()(E,{VBtn:C["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:_["a"],VContainer:$["a"],VDialog:S["a"],VImg:O["a"],VRow:V["a"],VSpacer:z["a"],VTextField:T["a"],VTextarea:H["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"1900px"},on:{"click:outside":t.cleanCurrentComponent},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.arrangement.tittel))]),a("v-card-text",[a("v-container",[a("v-row",{staticClass:"py-0"},[a("v-col",{staticClass:"arrangement",attrs:{cols:"3"}},[a("v-img",{staticStyle:{width:"100%"},attrs:{src:t.arrangement.bilde}}),a("div",{staticStyle:{"text-align":"center"}},[a("h3",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.$sanitize(t.arrangement.tittel))}}),a("br"),a("h6",{staticClass:"mt-n4",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.$sanitize(t.arrangement.vert+"<br>"+t.arrangement.sted+" "+t.arrangement.tidspunkt+" "+t.arrangement.dato+"/"+t.arrangement.maned))}}),a("p",{staticStyle:{"text-align":"justify"},domProps:{innerHTML:t._s(t.$sanitize(t.arrangement.tekst))}})])],1),a("v-col",{staticClass:"arrangement",attrs:{cols:"6"}},[a("v-row",[a("v-col",{staticClass:"py-0 pr-0",attrs:{cols:"10"}},[a("v-textarea",{attrs:{"hide-details":"",filled:"",height:"60px",label:"Skriv Kommentar Her"},model:{value:t.kommentar.tekst,callback:function(e){t.$set(t.kommentar,"tekst",e)},expression:"kommentar.tekst"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"2"}},[a("v-btn",{staticStyle:{color:"black",height:"60px"},on:{click:function(e){return t.nyKommentar()}}},[t._v("Post")])],1)],1),a("v-row",t._l(t.kommentarer,(function(e){return a("v-col",{key:e.index,attrs:{cols:"4"}},[a("v-card",{staticClass:"mx-auto"},[a("v-card-text",[a("div",{domProps:{textContent:t._s(e.skaper)}}),a("div",{staticClass:"text--primary",domProps:{textContent:t._s(e.tekst)}})])],1)],1)})),1)],1),a("v-col",{staticClass:"arrangement",attrs:{cols:"3"}},[a("v-btn",{staticStyle:{color:"black",height:"60px"},on:{click:function(e){return t.nySkal()}}},[t._v("Skal")]),a("v-row",t._l(t.alleSkal,(function(e){return a("v-chip",{key:e.index,staticClass:"ma-2",domProps:{textContent:t._s(e.skaper)}},[t._v("Default")])})),1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.cleanCurrentComponent}},[t._v("Close")])],1)],1)],1),a(t.currentComponent,{tag:"component",attrs:{currentComponent:t.currentComponent,row:t.arrangement},on:{cleanCurrentComponent:function(e){t.currentComponent=e}}})],1)},W=[],U={props:{arrangement:Object},data:function(){return{currentComponent:"",dialog:!0,img:"",brukerSkal:!1,kommentar:{tekst:"",skaper:"",arrangement:this.arrangement.id},skal:{skaper:"",arrangement:this.arrangement.id},kommentarer:[],alleSkal:[]}},components:{AppImageUpload:P,PictureInput:m["a"]},computed:{app:function(){return this.$store.state.app}},created:function(){this.kommentar.skaper,this.$store.state.userData.id,this.hentKommentarer(),this.hentSkal()},methods:{cleanCurrentComponent:function(){this.$emit("cleanCurrentComponent","")},nyKommentar:function(){for(var t=this,e="",a="abcdefghijklmnopqrstuvwxyz0123456789",n=0;n<6;n++)e+=a.charAt(Math.floor(Math.random()*a.length));this.kommentar.id=e,this.kommentar.skaper=this.$store.state.userData.id,this.$http.post("https://hackathon-daniel.firebaseio.com/kommentarer.json",this.kommentar).then((function(e){console.log(e),t.hentKommentarer()}),(function(t){console.log(t)}))},nySkal:function(){var t=this;this.skal.skaper=this.$store.state.userData.id;for(var e=0,a=0;a<this.alleSkal.length;a++)this.alleSkal[a].skaper==this.$store.state.userData.id&&e++;e>0?this.$http.delete("https://hackathon-daniel.firebaseio.com/skal/"+this.$store.state.userData.id+this.arrangement.id+".json",this.skal).then((function(e){console.log(e),t.hentSkal()}),(function(t){console.log(t)})):this.$http.put("https://hackathon-daniel.firebaseio.com/skal/"+this.$store.state.userData.id+this.arrangement.id+".json",this.skal).then((function(e){console.log(e),t.hentSkal()}),(function(t){console.log(t)}))},hentSkal:function(){var t=this;this.$http.get("https://hackathon-daniel.firebaseio.com/skal.json").then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)a.push(e[n]);t.alleSkal=[];for(var r=0;r<a.length;r++)t.arrangement.id==a[r].arrangement&&t.alleSkal.push(a[r]),t.$store.state.userData.id==a[r].skaper&&(t.brukerSkal=!t.brukerSkal)}))},hentKommentarer:function(){var t=this;this.$http.get("https://hackathon-daniel.firebaseio.com/kommentarer.json").then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)a.push(e[n]);t.kommentarer=[];for(var r=0;r<a.length;r++)t.arrangement.id==a[r].arrangement&&t.kommentarer.push(a[r])}))}}},F=U,q=a("cc20"),K=Object(b["a"])(F,R,W,!1,null,null,null),J=K.exports;x()(K,{VBtn:C["a"],VCard:y["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VChip:q["a"],VCol:_["a"],VContainer:$["a"],VDialog:S["a"],VImg:O["a"],VRow:V["a"],VSpacer:z["a"],VTextarea:H["a"]});var N={data:function(){return{editorModeIsOn:!1,arrangement:{},currentComponent:"",maned:"",dato:"",soketekst:"",vert:"",currentItem:0,skal:!1,maneder:[{text:"Alle",value:""},{text:"Januar",value:"1"},{text:"Februar",value:"2"},{text:"Mars",value:"3"},{text:"April",value:"4"},{text:"Mai",value:"5"},{text:"Juni",value:"6"},{text:"Juli",value:"7"},{text:"August",value:"8"},{text:"September",value:"9"},{text:"Oktober",value:"10"},{text:"November",value:"11"},{text:"Desember",value:"12"}],datoer:[{text:"Alle"},{text:"1"},{text:"2"},{text:"3"},{text:"4"},{text:"5"},{text:"6"},{text:"7"},{text:"8"},{text:"9"},{text:"10"},{text:"11"},{text:"12"},{text:"13"},{text:"14"},{text:"15"},{text:"16"},{text:"17"},{text:"18"},{text:"19"},{text:"20"},{text:"21"},{text:"22"},{text:"23"},{text:"24"},{text:"25"},{text:"26"},{text:"27"},{text:"28"},{text:"29"},{text:"30"}],alleSkal:[]}},components:{appNyttArrangement:B,appArrangementDetaljer:J,PictureInput:m["a"],AppImageUpload:P},computed:{app:function(){return this.$store.state.app},arrangementListe:function(){for(var t=[],e=0;e<this.app.arrangementListe.length;e++)if((this.app.arrangementListe[e].maned==this.maned||""==this.maned)&&(this.app.arrangementListe[e].dato==this.dato||""==this.dato||"Alle"==this.dato)&&(""==this.soketekst||this.app.arrangementListe[e].tittel.includes(this.soketekst))&&(this.app.arrangementListe[e].vert.includes(this.vert)||"2"==this.vert))if(0==this.currentItem)t.push(this.app.arrangementListe[e]);else if(1==this.currentItem)for(var a=0;a<this.alleSkal.length;a++)this.alleSkal[a].arrangement==this.app.arrangementListe[e].id&&t.push(this.app.arrangementListe[e]);else this.app.arrangementListe[e].skaper==this.$store.state.userData.id&&t.push(this.app.arrangementListe[e]);return t}},methods:{cleanCurrentComponent:function(){this.$emit("cleanCurrentComponent","")},detaljer:function(t){this.arrangement=t,this.currentComponent="appArrangementDetaljer"},slettArrangement:function(t){var e=this;this.$http.delete("https://hackathon-daniel.firebaseio.com/arrangementer/"+this.$store.state.userData.id+t+".json").then((function(t){console.log(t),e.hentArrangement()}),(function(t){console.log(t)}))},hentArrangement:function(){var t=this;this.$http.get("https://hackathon-daniel.firebaseio.com/arrangementer.json").then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)a.push(e[n]);t.app.arrangementListe=a}))},oppdaterArrangement:function(t){var e=this;this.$http.put("https://hackathon-daniel.firebaseio.com/arrangementer/"+this.$store.state.userData.id+t.id+".json",t).then((function(t){console.log(t),e.hentArrangement()}),(function(t){console.log(t)}))},sorter:function(){"1"==this.sortType?this.app.arrangementListe.sort((function(t,e){var a=t.maned,n=e.maned;return a>n?-1:a<n?1:0})):"2"==this.sortType?this.row.objects.sort((function(t,e){var a=t.dato,n=e.dato;return a<n?-1:a>n?1:0})):"3"==this.sortType&&this.row.objects.sort((function(t,e){var a=t.vert,n=e.vert;return a<n?-1:a>n?1:0}))},hentSkal:function(){var t=this;this.$http.get("https://hackathon-daniel.firebaseio.com/skal.json").then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)a.push(e[n]);t.alleSkal=[];for(var r=0;r<a.length;r++)t.$store.state.userData.id==a[r].skaper&&t.alleSkal.push(a[r])}))}},created:function(){this.hentSkal()}},Q=N,G=(a("c816"),a("132d")),X=a("b974"),Y=Object(b["a"])(Q,i,o,!1,null,null,null),Z=Y.exports;x()(Y,{VBtn:C["a"],VCol:_["a"],VIcon:G["a"],VImg:O["a"],VRow:V["a"],VSelect:X["a"],VTab:j["a"],VTabItem:A["a"],VTabs:I["a"],VTextField:T["a"],VTextarea:H["a"]});var tt={data:function(){return{currentComponent:"",dialog:!0,user:{userEmail:"",userPassword:"",id:"",skal:[]}}},computed:{userData:function(){return this.$store.state.userData},app:function(){return this.$store.state.app}},components:{appArrangementer:Z},methods:{checkLogin:function(){console.log("Login"),this.fetchData(),this.fetchArrangement()},lagBruker:function(){for(var t="",e="abcdefghijklmnopqrstuvwxyz0123456789",a=0;a<6;a++)t+=e.charAt(Math.floor(Math.random()*e.length));this.user.id=t,this.$store.state.userData=this.user,this.$http.post("https://hackathon-daniel.firebaseio.com/users.json",this.user).then((function(t){console.log(t)}),(function(t){console.log(t)}))},fetchData:function(){var t=this;this.$http.get("https://cors-anywhere.herokuapp.com/https://hackathon-daniel.firebaseio.com/users.json").then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)a.push(e[n]);for(var r=0;r<a.length;r++)a[r].userEmail==t.user.userEmail&&a[r].userPassword==t.user.userPassword&&(t.$store.state.userData=a[r],t.fetchArrangement(),t.currentComponent="appArrangementer")}))},fetchArrangement:function(){var t=this;this.$http.get("https://hackathon-daniel.firebaseio.com/arrangementer.json").then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)a.push(e[n]);t.app.arrangementListe=a}))}}},et=tt,at=(a("034f"),a("7496")),nt=Object(b["a"])(et,r,s,!1,null,null,null),rt=nt.exports;x()(nt,{VApp:at["a"],VBtn:C["a"],VCard:y["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:_["a"],VContainer:$["a"],VDialog:S["a"],VRow:V["a"],VTab:j["a"],VTabItem:A["a"],VTabs:I["a"],VTextField:T["a"]});var st=a("2f62");n["a"].use(st["a"]);var it=new st["a"].Store({state:{userData:{userEmail:"",userPassword:"",id:"",skal:[]},app:{arrangementListe:[]}}}),ot=a("f309");n["a"].use(ot["a"]);var lt=new ot["a"]({}),ct=a("28dd"),ut=a("04ef"),dt=a.n(ut);n["a"].config.productionTip=!1,n["a"].prototype.$sanitize=dt.a,n["a"].use(ct["a"]),new n["a"]({store:it,vuetify:lt,render:function(t){return t(rt)}}).$mount("#app")},"735f":function(t,e,a){},"7a45":function(t,e,a){"use strict";var n=a("a465"),r=a.n(n);r.a},"8a23":function(t,e,a){},a465:function(t,e,a){},c816:function(t,e,a){"use strict";var n=a("735f"),r=a.n(n);r.a}});
//# sourceMappingURL=app.08225693.js.map