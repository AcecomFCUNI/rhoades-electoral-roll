(()=>{"use strict";var e={78:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.documentType=void 0,t.documentType={1:"DNI",2:"CE",3:"Other"}},28:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0;var i=n(78),a=function(){function e(){}return e.process=function(e,t){switch(e){case"save":return this._saveUser(t);default:return}},e._saveUser=function(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this._collectionRef.add({condition:"Docente"===e.type?"teacher":"student",documentNumber:e.documentNumber,documentType:i.documentType[e.documentType],faculty:e.faculty,lastName:e.lastName,mail:e.mail,names:e.names,optionalMail:e.optionalMail,secondLastName:e.secondLastName,specialty:e.specialty,UNICode:e.UNICode})];case 1:return[2,n.sent()];case 2:throw t=n.sent(),console.error(t),new Error("Something happen");case 3:return[2]}}))}))},e._collectionRef=global.firestoreDB.collection("users"),e}();t.User=a},280:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.firebaseConnection=void 0;var a=i(n(54)),u=n(96),s={auth_provider_x509_cert_url:process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,auth_uri:process.env.FIREBASE_AUTH_URI,client_email:process.env.FIREBASE_CLIENT_EMAIL,client_id:process.env.FIREBASE_CLIENT_ID,client_x509_cert_url:process.env.FIREBASE_X509_CERT,private_key:process.env.FIREBASE_PRIVATE_KEY,private_key_id:process.env.FIREBASE_PRIVATE_KEY_ID,project_id:process.env.FIREBASE_PROJECT_ID,token_uri:process.env.FIREBASE_TOKEN_URI,type:process.env.FIREBASE_TYPE};t.firebaseConnection=function(){return r(void 0,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,u.writeJson(process.env.GOOGLE_APPLICATION_CREDENTIALS,JSON.stringify(s).replace(/\\\\/g,"\\"),"utf8")];case 1:return t.sent(),e=a.default.initializeApp({credential:a.default.credential.applicationDefault(),databaseURL:process.env.FIREBASE_URL}),[4,u.deleteFile(process.env.GOOGLE_APPLICATION_CREDENTIALS)];case 2:return t.sent(),global.firestoreDB=a.default.firestore(e),console.log("Firebase connection established."),[2]}}))}))}},607:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(563)),u=i(n(540)),s=n(280),c=n(928),l=n(28),f=new c.CliOptions(a.default.bold("Upload electoral roll process")+" "+a.default.cyan("[{bar}]")+" "+a.default.blue("{percentage}%")+" | "+a.default.bold("Current exchange:")+" "+a.default.yellow("{value}")+" | "+a.default.bold("Duration:")+" "+a.default.green("{duration_formatted}"),!0,!0);s.firebaseConnection(),r(void 0,void 0,void 0,(function(){var e,t,n,r,i;return o(this,(function(o){switch(o.label){case 0:e=new u.default.SingleBar(f,u.default.Presets.shades_classic),o.label=1;case 1:return o.trys.push([1,9,,10]),[4,c.csvReader("pattern_2020-1-v1.csv")];case 2:t=o.sent(),e.start(t.length,0),n=0,o.label=3;case 3:if(!(n<t.length))return[3,8];o.label=4;case 4:return o.trys.push([4,6,,7]),[4,l.User.process("save",t[n])];case 5:return o.sent(),e.update(n+1),[3,7];case 6:return r=o.sent(),console.error(r),console.log("At row: "+(n+2)),[3,7];case 7:return n++,[3,3];case 8:return e.stop(),[3,10];case 9:return i=o.sent(),console.error(i),[3,10];case 10:return[2]}}))}))},550:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CliOptions=void 0;t.CliOptions=function(e,t,n){this.format=e,this.hideCursor=t,this.synchronousUpdate=n}},96:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.writeJson=t.deleteFile=t.csvReader=void 0;var o=r(n(627)),i=r(n(747));t.writeJson=function(e,t,n){return new Promise((function(r,o){i.default.writeFile(e,t,n,(function(e){e?o(e):r("Success")}))}))},t.deleteFile=function(e){return new Promise((function(t,n){i.default.unlink(e,(function(e){e?n(e):t("Success")}))}))},t.csvReader=function(e){return new Promise((function(t){var n=[];i.default.createReadStream(__dirname+"/../patterns/"+e).pipe(o.default()).on("data",(function(e){return n.push(e)})).on("end",(function(){return t(n)}))}))}},928:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.writeJson=t.deleteFile=t.csvReader=t.CliOptions=void 0;var r=n(550);Object.defineProperty(t,"CliOptions",{enumerable:!0,get:function(){return r.CliOptions}});var o=n(96);Object.defineProperty(t,"csvReader",{enumerable:!0,get:function(){return o.csvReader}}),Object.defineProperty(t,"deleteFile",{enumerable:!0,get:function(){return o.deleteFile}}),Object.defineProperty(t,"writeJson",{enumerable:!0,get:function(){return o.writeJson}})},540:e=>{e.exports=require("cli-progress")},563:e=>{e.exports=require("colors")},627:e=>{e.exports=require("csv-parser")},54:e=>{e.exports=require("firebase-admin")},747:e=>{e.exports=require("fs")}},t={};!function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(607)})();