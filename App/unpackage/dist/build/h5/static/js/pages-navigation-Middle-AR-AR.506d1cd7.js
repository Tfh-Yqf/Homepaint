(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-navigation-Middle-AR-AR"],{"02ec":function(e,t,r){var i=r("23e7"),n=r("67b6");i({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==n},{trimLeft:n})},"181d":function(e,t,r){"use strict";r.r(t);var i=r("8f4c"),n=r("bd93");for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);var s=r("cdc8");for(var a in s)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(a);r("558f");var o=r("f0c5");n["default"].__module="three";var l=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"f7af6170",null,!1,i["a"],n["default"]);t["default"]=l.exports},"2e7b":function(e,t,r){"use strict";r("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n,a,s=r("43d9"),o=r("8b9d"),l=r("fd6c"),c=(r("1bc9")(l),{data:function(){return{result_file:null}},mounted:function(){this.initThree(),this.createControls()},methods:{change_data:function(e){console.log("----------"),this.result_file=e,console.log(e),this.loadOBJ()},init_data:function(e){this.result_file=e},loadOBJ:function(){var e=this,t=new o.OBJLoader;t.load("static/Scene/Apartment.unity_278.obj",(function(t){e.msg=null;for(var r=(new l.TextureLoader).load("static/Scene/apartment_floor01_1.png",(function(){e.render()})),i=0;i<t.children.length;i++)t.children[i].material=new l.MeshBasicMaterial({map:r});n.add(t);for(i=0;i<t.children.length;i++)t.children[i].scale.set(100,100,100)}))},createControls:function(){new s.OrbitControls(a,i.domElement)},initThree:function(){console.log("打印场景API",l.Scene),n=new l.Scene;var e=new l.AmbientLight(16777215);n.add(e);var t=window.innerWidth,r=window.innerHeight,s=t/r;a=new l.PerspectiveCamera(45,s,1,1e4),a.position.set(0,3500,0),a.lookAt(n.position),i=new l.WebGLRenderer({antialias:!0}),i.setSize(t,r),i.setClearColor(6460651,1);var o=document.getElementById("threeView");o.appendChild(i.domElement),i.render(n,a),this.render()},render:function(){var e=this;requestAnimationFrame((function(){e.render()})),i.render(n,a)}}});t.default=c},"35f6":function(e,t,r){"use strict";r("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r("e143");var i={data:function(){return{data:null}},mounted:function(){this.data=uni.getStorageSync("result_file"),uni.showLoading({title:"加载中..."}),setTimeout((function(){uni.hideLoading()}),4e3),console.log(this.data)},methods:{}};t.default=i},"3d15":function(e,t,r){var i=r("8fa4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("72c87e04",i,!0,{sourceMap:!1,shadowMode:!1})},"558f":function(e,t,r){"use strict";var i=r("3d15"),n=r.n(i);n.a},"67b6":function(e,t,r){"use strict";var i=r("58a8").start,n=r("c8d2");e.exports=n("trimStart")?function(){return i(this)}:"".trimStart},"8b9d":function(e,t,r){"use strict";r("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.OBJLoader=void 0,r("a434"),r("14d9"),r("e25e"),r("c975"),r("ac1f"),r("5319"),r("eee7"),r("498a"),r("1276"),r("acd8"),r("00b4"),r("99af"),r("d81d");var i=r("7777"),n=function(){var e=/^[og]\s*(.+)?/,t=/^mtllib /,r=/^usemtl /,n=/^usemap /,a=new i.Vector3,s=new i.Vector3,o=new i.Vector3,l=new i.Vector3,c=new i.Vector3;function u(){var e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);var r=this.object&&"function"===typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"===typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){var r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);var i={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==r?r.smooth:this.smooth,groupStart:void 0!==r?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){var t={index:"number"===typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(i),i},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){var t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(var r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},r&&r.name&&"function"===typeof r.clone){var i=r.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&"function"===typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},parseNormalIndex:function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},parseUVIndex:function(e,t){var r=parseInt(e,10);return 2*(r>=0?r-1:r+t/2)},addVertex:function(e,t,r){var i=this.vertices,n=this.object.geometry.vertices;n.push(i[e+0],i[e+1],i[e+2]),n.push(i[t+0],i[t+1],i[t+2]),n.push(i[r+0],i[r+1],i[r+2])},addVertexPoint:function(e){var t=this.vertices,r=this.object.geometry.vertices;r.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){var t=this.vertices,r=this.object.geometry.vertices;r.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){var i=this.normals,n=this.object.geometry.normals;n.push(i[e+0],i[e+1],i[e+2]),n.push(i[t+0],i[t+1],i[t+2]),n.push(i[r+0],i[r+1],i[r+2])},addFaceNormal:function(e,t,r){var i=this.vertices,n=this.object.geometry.normals;a.fromArray(i,e),s.fromArray(i,t),o.fromArray(i,r),c.subVectors(o,s),l.subVectors(a,s),c.cross(l),c.normalize(),n.push(c.x,c.y,c.z),n.push(c.x,c.y,c.z),n.push(c.x,c.y,c.z)},addColor:function(e,t,r){var i=this.colors,n=this.object.geometry.colors;void 0!==i[e]&&n.push(i[e+0],i[e+1],i[e+2]),void 0!==i[t]&&n.push(i[t+0],i[t+1],i[t+2]),void 0!==i[r]&&n.push(i[r+0],i[r+1],i[r+2])},addUV:function(e,t,r){var i=this.uvs,n=this.object.geometry.uvs;n.push(i[e+0],i[e+1]),n.push(i[t+0],i[t+1]),n.push(i[r+0],i[r+1])},addDefaultUV:function(){var e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){var t=this.uvs,r=this.object.geometry.uvs;r.push(t[e+0],t[e+1])},addFace:function(e,t,r,i,n,a,s,o,l){var c=this.vertices.length,u=this.parseVertexIndex(e,c),h=this.parseVertexIndex(t,c),d=this.parseVertexIndex(r,c);if(this.addVertex(u,h,d),this.addColor(u,h,d),void 0!==s&&""!==s){var f=this.normals.length;u=this.parseNormalIndex(s,f),h=this.parseNormalIndex(o,f),d=this.parseNormalIndex(l,f),this.addNormal(u,h,d)}else this.addFaceNormal(u,h,d);if(void 0!==i&&""!==i){var p=this.uvs.length;u=this.parseUVIndex(i,p),h=this.parseUVIndex(n,p),d=this.parseUVIndex(a,p),this.addUV(u,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";for(var t=this.vertices.length,r=0,i=e.length;r<i;r++)this.addVertexPoint(this.parseVertexIndex(e[r],t))},addLineGeometry:function(e,t){this.object.geometry.type="Line";for(var r=this.vertices.length,i=this.uvs.length,n=0,a=e.length;n<a;n++)this.addVertexLine(this.parseVertexIndex(e[n],r));var s=0;for(a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return e.startObject("",!1),e}function h(e){i.Loader.call(this,e),this.materials=null}return h.prototype=Object.assign(Object.create(i.Loader.prototype),{constructor:h,load:function(e,t,r,n){var a=this,s=new i.FileLoader(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,(function(r){try{t(a.parse(r))}catch(i){n?n(i):console.error(i),a.manager.itemError(e)}}),r,n)},setMaterials:function(e){return this.materials=e,this},parse:function(a){var s=new u;-1!==a.indexOf("\r\n")&&(a=a.replace(/\r\n/g,"\n")),-1!==a.indexOf("\\\n")&&(a=a.replace(/\\\n/g,""));for(var o=a.split("\n"),l="",c="",h=0,d=[],f="function"===typeof"".trimLeft,p=0,m=o.length;p<m;p++)if(l=o[p],l=f?l.trimLeft():l.trim(),h=l.length,0!==h&&(c=l.charAt(0),"#"!==c))if("v"===c){var v=l.split(/\s+/);switch(v[0]){case"v":s.vertices.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3])),v.length>=7?s.colors.push(parseFloat(v[4]),parseFloat(v[5]),parseFloat(v[6])):s.colors.push(void 0,void 0,void 0);break;case"vn":s.normals.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3]));break;case"vt":s.uvs.push(parseFloat(v[1]),parseFloat(v[2]));break}}else if("f"===c){for(var g=l.substr(1).trim(),b=g.split(/\s+/),w=[],y=0,x=b.length;y<x;y++){var j=b[y];if(j.length>0){var L=j.split("/");w.push(L)}}var V=w[0];for(y=1,x=w.length-1;y<x;y++){var M=w[y],_=w[y+1];s.addFace(V[0],M[0],_[0],V[1],M[1],_[1],V[2],M[2],_[2])}}else if("l"===c){var O=l.substring(1).trim().split(" "),A=[],C=[];if(-1===l.indexOf("/"))A=O;else for(var I=0,S=O.length;I<S;I++){var F=O[I].split("/");""!==F[0]&&A.push(F[0]),""!==F[1]&&C.push(F[1])}s.addLineGeometry(A,C)}else if("p"===c){g=l.substr(1).trim();var P=g.split(" ");s.addPointGeometry(P)}else if(null!==(d=e.exec(l))){var z=(" "+d[0].substr(1).trim()).substr(1);s.startObject(z)}else if(r.test(l))s.object.startMaterial(l.substring(7).trim(),s.materialLibraries);else if(t.test(l))s.materialLibraries.push(l.substring(7).trim());else if(n.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===c){if(d=l.split(" "),d.length>1){var B=d[1].trim().toLowerCase();s.object.smooth="0"!==B&&"off"!==B}else s.object.smooth=!0;var E=s.object.currentMaterial();E&&(E.smooth=s.object.smooth)}else{if("\0"===l)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}s.finalize();var U=new i.Group;U.materialLibraries=[].concat(s.materialLibraries);for(p=0,m=s.objects.length;p<m;p++){var J=s.objects[p],k=J.geometry,G=J.materials,N="Line"===k.type,T="Points"===k.type,R=!1;if(0!==k.vertices.length){var D=new i.BufferGeometry;D.setAttribute("position",new i.Float32BufferAttribute(k.vertices,3)),D.setAttribute("normal",new i.Float32BufferAttribute(k.normals,3)),k.colors.length>0&&(R=!0,D.setAttribute("color",new i.Float32BufferAttribute(k.colors,3))),!0===k.hasUVIndices&&D.setAttribute("uv",new i.Float32BufferAttribute(k.uvs,2));for(var H,W=[],q=0,$=G.length;q<$;q++){var K=G[q],Q=K.name+"_"+K.smooth+"_"+R;E=s.materials[Q];if(null!==this.materials)if(E=this.materials.create(K.name),!N||!E||E instanceof i.LineBasicMaterial){if(T&&E&&!(E instanceof i.PointsMaterial)){var X=new i.PointsMaterial({size:10,sizeAttenuation:!1});i.Material.prototype.copy.call(X,E),X.color.copy(E.color),X.map=E.map,E=X}}else{var Y=new i.LineBasicMaterial;i.Material.prototype.copy.call(Y,E),Y.color.copy(E.color),E=Y}void 0===E&&(E=N?new i.LineBasicMaterial:T?new i.PointsMaterial({size:1,sizeAttenuation:!1}):new i.MeshPhongMaterial,E.name=K.name,E.flatShading=!K.smooth,E.vertexColors=R,s.materials[Q]=E),W.push(E)}if(W.length>1){for(q=0,$=G.length;q<$;q++){K=G[q];D.addGroup(K.groupStart,K.groupCount,q)}H=N?new i.LineSegments(D,W):T?new i.Points(D,W):new i.Mesh(D,W)}else H=N?new i.LineSegments(D,W[0]):T?new i.Points(D,W[0]):new i.Mesh(D,W[0]);H.name=J.name,U.add(H)}}return U}}),h}();t.OBJLoader=n},"8f4c":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{wxsProps:{"change:data":"data"},staticClass:"content",attrs:{data:e.data,"change:data":e.three.change_data}},[r("v-uni-view",{attrs:{id:"threeView"}}),r("v-uni-view",{staticClass:"three",attrs:{id:"three"},on:{click:function(t){t=e.$handleWxsEvent(t),e.three.onClick(t,e.$getComponentDescriptor())}}})],1)},n=[]},"8fa4":function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,".content[data-v-f7af6170]{margin:0;overflow:hidden}.three[data-v-f7af6170]{width:100%;height:50px}",""]),e.exports=t},bd93:function(e,t,r){"use strict";r.r(t);var i=r("2e7b"),n=r.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},cdc8:function(e,t,r){"use strict";r.r(t);var i=r("35f6"),n=r.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},eee7:function(e,t,r){r("02ec");var i=r("23e7"),n=r("67b6");i({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==n},{trimStart:n})}}]);