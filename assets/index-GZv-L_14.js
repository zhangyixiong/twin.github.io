import{a as re,B as Je}from"./index-CRXmVjCW.js";import{_ as Fe,a as w,b as Q,d as Ie,r as _,o as $,e as O,f as U,g as e,w as l,F,h as I,i as d,t as b,p as He,j as Le,E as A,c as K}from"./index-w2vajOzX.js";const Me=H=>(He("data-v-4c329a52"),H=H(),Le(),H),Ae={class:"container"},Ke={class:"main"},Ge={class:"canvas-container"},qe={class:"scene-list"},Qe={text:"2xl",justify:"center"},Re={class:"config-main"},We=Me(()=>U("div",{class:"config-title"},"配置",-1)),Xe={style:{display:"flex","justify-content":"space-between",margin:"10px 0"}},Ye={style:{display:"flex","justify-content":"space-around",margin:"10px 0"}},Ze={style:{display:"flex","justify-content":"space-between",margin:"10px 0"}},el={style:{display:"flex","justify-content":"space-between",margin:"10px 0"}},ll={style:{width:"100%",height:"100%",display:"flex","flex-wrap":"wrap","justify-content":"space-between"}},al={__name:"index",setup(H){const R=w(),N=w(),D=w(),W=w(),P=w(null),B=w(!1),z=w(!1),T=w(null),ue=w(null),J=w(!1),X=w([]);let G=null,Y=null,j=null;const s=Q({name:"",firstScene:"",scenes:[]}),ie=({createToSpirit:o,eventHandler:a,spriteContainer:f,orbitControls:h,camera:i})=>{G=o,Y=a,j=f,h.value,i.value},pe=o=>{let a="";const f=s.scenes.findIndex(h=>h.name===o.name.substring(0,o.name.indexOf("&")));a=o.name.substring(o.name.lastIndexOf("t")+1,o.name.length),f!==-1&&a&&(console.log(a),s.scenes[f].spirits[a].canvasStyle.position.x=o.position.x,s.scenes[f].spirits[a].canvasStyle.position.y=o.position.y)},Z=o=>{o+""&&s.scenes[o].name&&Y({type:"changeScene",value:s.scenes[o].name})},me=o=>{o&&(j.getObjectByName(o)||A({type:"error",message:"操作频繁"}))},c=Q({spiritName:"",name:"",cssProperties:[],handler:[{eventName:"",handlerType:"",handlerValue:""}],canvasStyle:{position:{x:0,y:0},scale:{x:1,y:1,z:1}}}),x=Q({name:"",cssProperties:[]}),ce=(o,a)=>{s.scenes[o].spirits[a].handler.push({eventName:"",handlerType:"",handlerValue:""})},fe=(o,a,f)=>{s.scenes[o].spirits[a].handler.length>1?s.scenes[o].spirits[a].handler.splice(f,1):A({center:!0,message:"最少保留一个精灵事件",type:"error"})},ve=()=>{s.scenes.push({name:"",show:!0,spirits:[]})},Ve=o=>{s.scenes.splice(o,1)},ye=(o,a)=>{z.value=!0},_e=()=>{B.value=!0},he=()=>{c.handler.push({eventName:"",handlerType:"",handlerValue:""})},ge=o=>{c.handler.length>1?c.handler.splice(o,1):A({center:!0,message:"最少保留一个精灵配置",type:"error"})},ee=o=>{var a,f;switch(o){case"spirit":const h=JSON.parse(JSON.stringify(c));s.scenes[N.value].spirits.push(h),(a=T==null?void 0:T.value)==null||a.resetFields(),c.handler=[{eventName:"",handlerType:"",handlerValue:""}],c.cssProperties=[],z.value=!1;break;case"intoSpirit":const i=JSON.parse(JSON.stringify(x));s.scenes[N.value].spirits[D.value].children?s.scenes[N.value].spirits[D.value].children.push(i):s.scenes[N.value].spirits[D.value].children=[i],(f=P==null?void 0:P.value)==null||f.resetFields(),x.cssProperties=[],B.value=!1,j.clear();const p=JSON.parse(JSON.stringify(s.scenes[N.value]));p.spirits.forEach((L,k)=>{L.handler=[{eventName:"mousemove",handlerType:"editMove",handlerValue:`${p.name}&spirit${k}`},{eventName:"mouseup",handlerType:"editUp",handlerValue:`${p.name}&spirit${k}`},{eventName:"mousedown",handlerType:"editDown",handlerValue:`${p.name}&spirit${k}`},{eventName:"mouseleave",handlerType:"editLeave",handlerValue:`${p.name}&spirit${k}`}]}),G(p);break}},Se=(o,a)=>{j.children.length>0?(s.scenes[o].spirits.splice(a,1),j.remove(j.children[a])):A({center:!0,type:"error",message:"操作频繁, 请稍后重试"})},we=(o,a)=>{s.scenes[o].spirits[a].cssProperties.push({name:"",value:""})},be=(o,a,f)=>{s.scenes[o].spirits[a].cssProperties.splice(f,1)},Ue=(o,a,f)=>{s.scenes[o].spirits[a].children[f].cssProperties.push({name:"",value:""})},ke=(o,a,f,h)=>{s.scenes[o].spirits[a].children[f].cssProperties.splice(h,1)},Ce=(o,a,f)=>{s.scenes[o].spirits[a].children[f].keyframes.push({name:"","0%":{top:"0px"},"100%":{top:"0px"}})},$e=(o,a,f,h)=>{s.scenes[o].spirits[a].children[f].keyframes.splice(h,1)},le=o=>{switch(o){case"addSpirit":c.cssProperties.push({name:"",value:""});break;case"addIntoSpirit":x.cssProperties.push({name:"",value:""});break}},ae=(o,a)=>{switch(a){case"addSpirit":c.cssProperties.splice(o,1);break;case"addIntoSpirit":x.cssProperties.splice(o,1);break}},Ne=(o,a,f)=>{s.scenes[o].spirits[a].children.splice(f,1)},te=o=>{T==null||T.value.resetFields(),c.cssProperties=[],typeof o=="function"?o():z.value=!1},oe=o=>{P==null||P.value.resetFields(),x.cssProperties=[],typeof o=="function"?o():B.value=!1},xe=o=>{J.value=!1},Pe=()=>{J.value=!0},Te=async()=>{re.get("/config.json").then(o=>{const a=o.data;s.name=a.name,s.firstScene=a.firstScene,s.scenes.push(...a.scenes)})},je=o=>{s.scenes[N.value].spirits.push(o),J.value=!1,j.clear();const a=JSON.parse(JSON.stringify(s.scenes[N.value]));a.spirits.forEach((f,h)=>{f.handler=[{eventName:"mousemove",handlerType:"editMove",handlerValue:`${a.name}&spirit${h}`},{eventName:"mouseup",handlerType:"editUp",handlerValue:`${a.name}&spirit${h}`},{eventName:"mousedown",handlerType:"editDown",handlerValue:`${a.name}&spirit${h}`},{eventName:"mouseleave",handlerType:"editLeave",handlerValue:`${a.name}&spirit${h}`}]}),G(a)},Ee=()=>{re.get("/builtInSprites.json").then(o=>{const a=o.data;X.value.push(...a.spirits)})},Oe=()=>{const o=new Blob([JSON.stringify(s)],{type:"application/json"}),a=document.createElement("a");a.download="config.json",a.href=URL.createObjectURL(o),a.click()};return Ie(async()=>{await Te(),Ee()}),(o,a)=>{const f=_("el-carousel-item"),h=_("el-carousel"),i=_("el-input"),p=_("el-form-item"),L=_("el-card"),k=_("el-collapse-item"),v=_("el-button"),De=_("el-switch"),u=_("el-table-column"),E=_("el-table"),ne=_("el-option"),de=_("el-select"),C=_("el-input-number"),M=_("el-collapse"),q=_("el-form"),se=_("el-dialog"),Be=_("el-image"),ze=_("el-drawer");return $(),O("div",Ae,[U("div",Ke,[U("div",Ge,[e(Je,{ref_key:"baseSceneRef",ref:ue,onGetSpiritData:ie,fn:pe,type:"edit"},null,512)]),U("div",qe,[e(h,{interval:0,type:"card"},{default:l(()=>[($(),O(F,null,I(6,t=>e(f,{key:t},{default:l(()=>[U("h3",Qe,b(t),1)]),_:2},1024)),64))]),_:1})])]),U("div",Re,[We,e(q,{"label-position":"left","label-width":"auto",model:s,style:{"max-width":"600px"}},{default:l(()=>[e(M,{accordion:"",modelValue:R.value,"onUpdate:modelValue":a[5]||(a[5]=t=>R.value=t)},{default:l(()=>[e(k,{title:"基础配置",name:"1"},{default:l(()=>[e(L,null,{default:l(()=>[e(p,{prop:"name",label:"标题"},{default:l(()=>[e(i,{modelValue:s.name,"onUpdate:modelValue":a[0]||(a[0]=t=>s.name=t)},null,8,["modelValue"])]),_:1}),e(p,{prop:"show",label:"首次场景"},{default:l(()=>[e(i,{modelValue:s.firstScene,"onUpdate:modelValue":a[1]||(a[1]=t=>s.firstScene=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(k,{title:"场景配置",name:"2"},{default:l(()=>[e(M,{accordion:"",modelValue:N.value,"onUpdate:modelValue":a[4]||(a[4]=t=>N.value=t),onChange:Z},{default:l(()=>[U("div",Xe,[e(v,{type:"primary",onClick:ve},{default:l(()=>[d("添加场景")]),_:1})]),($(!0),O(F,null,I(s.scenes,(t,r)=>($(),K(k,{key:r,name:r},{title:l(()=>[d(b(t.name)+" ",1),e(v,{style:{"margin-left":"10px"},type:"danger",onClick:V=>Ve(r)},{default:l(()=>[d(" 删除场景 ")]),_:2},1032,["onClick"])]),default:l(()=>[e(p,{label:"场景名字",prop:"name"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":V=>t.name=V,onFocus:V=>Z(r)},null,8,["modelValue","onUpdate:modelValue","onFocus"])]),_:2},1024),e(p,{label:"是否展示",prop:"show"},{default:l(()=>[e(De,{modelValue:t.show,"onUpdate:modelValue":V=>t.show=V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),U("div",Ye,[e(v,{type:"primary",onClick:ye},{default:l(()=>[d(" 添加精灵 ")]),_:1}),e(v,{type:"primary",onClick:Pe},{default:l(()=>[d("内置精灵")]),_:1})]),($(!0),O(F,null,I(t.spirits,(V,g)=>($(),K(M,{accordion:"",modelValue:D.value,"onUpdate:modelValue":a[3]||(a[3]=n=>D.value=n),key:g,onChange:me},{default:l(()=>[e(k,{name:t.name+"&spirit"+g},{title:l(()=>[d(b(V.spiritName)+" ",1),e(v,{style:{"margin-left":"10px"},type:"danger",onClick:n=>Se(r,g)},{default:l(()=>[d(" 删除精灵 ")]),_:2},1032,["onClick"])]),default:l(()=>[e(p,{label:"精灵名字",prop:"spiritName"},{default:l(()=>[e(i,{modelValue:V.spiritName,"onUpdate:modelValue":n=>V.spiritName=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(p,{label:"精灵类型",prop:"name"},{default:l(()=>[e(i,{modelValue:V.name,"onUpdate:modelValue":n=>V.name=n,placeholder:"例如: div"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(v,{onClick:n=>we(r,g),type:"primary"},{default:l(()=>[d(" 添加样式 ")]),_:2},1032,["onClick"]),e(E,{data:V.cssProperties,style:{width:"100%"}},{default:l(()=>[e(u,{align:"center"},{default:l(n=>[d(b("样式"+n.$index),1)]),_:1}),e(u,{prop:"name",label:"属性"},{default:l(n=>[e(i,{modelValue:n.row.name,"onUpdate:modelValue":y=>n.row.name=y,placeholder:"例如: width"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"value",align:"center",label:"值"},{default:l(n=>[e(i,{modelValue:n.row.value,"onUpdate:modelValue":y=>n.row.value=y,placeholder:"例如: 100px"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"操作",align:"center"},{default:l(n=>[e(v,{onClick:y=>be(r,g,n.$index),type:"danger"},{default:l(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["data"]),e(v,{onClick:n=>ce(r,g),type:"primary"},{default:l(()=>[d(" 添加精灵事件 ")]),_:2},1032,["onClick"]),e(E,{data:V.handler,style:{width:"100%"}},{default:l(()=>[e(u,{label:"名字",align:"center"},{default:l(n=>[d(b("精灵事件"+n.$index),1)]),_:1}),e(u,{prop:"eventName",label:"函数"},{default:l(n=>[e(i,{modelValue:n.row.eventName,"onUpdate:modelValue":y=>n.row.eventName=y,placeholder:"例如: click"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"handlerType",align:"center",label:"类型"},{default:l(n=>[e(de,{modelValue:n.row.handlerType,"onUpdate:modelValue":y=>n.row.handlerType=y,placeholder:"请选择"},{default:l(()=>[e(ne,{label:"切换场景",value:"changeScene"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"handlerValue",align:"center",label:"参数"},{default:l(n=>[e(i,{modelValue:n.row.handlerValue,"onUpdate:modelValue":y=>n.row.handlerValue=y,placeholder:"例如: scene_002"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"操作",align:"center"},{default:l(n=>[e(v,{onClick:y=>fe(r,g,n.$index),type:"danger"},{default:l(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["data"]),e(p,{style:{"margin-top":"20px"},label:"精灵位置-x",prop:"canvasStyle.position.x"},{default:l(()=>[e(C,{controls:!1,modelValue:V.canvasStyle.position.x,"onUpdate:modelValue":n=>V.canvasStyle.position.x=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(p,{label:"精灵位置-y",prop:"canvasStyle.position.y"},{default:l(()=>[e(C,{controls:!1,modelValue:V.canvasStyle.position.y,"onUpdate:modelValue":n=>V.canvasStyle.position.y=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(p,{label:"精灵大小-x",prop:"canvasStyle.scale.x"},{default:l(()=>[e(C,{controls:!1,modelValue:V.canvasStyle.scale.x,"onUpdate:modelValue":n=>V.canvasStyle.scale.x=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(p,{label:"精灵大小-y",prop:"canvasStyle.scale.y"},{default:l(()=>[e(C,{controls:!1,modelValue:V.canvasStyle.scale.y,"onUpdate:modelValue":n=>V.canvasStyle.scale.y=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(p,{label:"精灵大小-z",prop:"canvasStyle.scale.z"},{default:l(()=>[e(C,{controls:!1,modelValue:V.canvasStyle.scale.z,"onUpdate:modelValue":n=>V.canvasStyle.scale.z=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),U("div",Ze,[e(v,{type:"primary",onClick:_e},{default:l(()=>[d(" 添加内部精灵 ")]),_:1})]),($(!0),O(F,null,I(V.children,(n,y)=>($(),K(M,{accordion:"",modelValue:W.value,"onUpdate:modelValue":a[2]||(a[2]=m=>W.value=m),key:y},{default:l(()=>[e(k,{name:y},{title:l(()=>[d(b(n.name)+" ",1),e(v,{style:{"margin-left":"10px"},type:"danger",onClick:m=>Ne(r,g,y)},{default:l(()=>[d(" 删除内部精灵 ")]),_:2},1032,["onClick"])]),default:l(()=>[e(p,{label:"精灵类型",prop:"name"},{default:l(()=>[e(i,{modelValue:n.name,"onUpdate:modelValue":m=>n.name=m,placeholder:"例如: div"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(v,{onClick:m=>Ue(r,g,y),type:"primary"},{default:l(()=>[d(" 添加样式 ")]),_:2},1032,["onClick"]),e(E,{data:n.cssProperties,style:{width:"100%"}},{default:l(()=>[e(u,{align:"center"},{default:l(m=>[d(b("样式"+m.$index),1)]),_:1}),e(u,{prop:"name",label:"属性"},{default:l(m=>[e(i,{modelValue:m.row.name,"onUpdate:modelValue":S=>m.row.name=S,placeholder:"例如: width"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"value",align:"center",label:"值"},{default:l(m=>[e(i,{modelValue:m.row.value,"onUpdate:modelValue":S=>m.row.value=S,placeholder:"例如: 100px"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"操作",align:"center"},{default:l(m=>[e(v,{onClick:S=>ke(r,g,y,m.$index),type:"danger"},{default:l(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["data"]),U("div",el,[e(v,{type:"primary",onClick:m=>Ce(r,g,y)},{default:l(()=>[d(" 添加动画 ")]),_:2},1032,["onClick"])]),e(E,{data:n.keyframes,style:{width:"100%"}},{default:l(()=>[e(u,{prop:"name",label:"名字"},{default:l(m=>[e(i,{modelValue:m.row.name,"onUpdate:modelValue":S=>m.row.name=S},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"0%",label:"0%"},{default:l(m=>[e(i,{modelValue:m.row["0%"].top,"onUpdate:modelValue":S=>m.row["0%"].top=S},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"100%",label:"100%"},{default:l(m=>[e(i,{modelValue:m.row["100%"].top,"onUpdate:modelValue":S=>m.row["100%"].top=S},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"操作",align:"center"},{default:l(m=>[e(v,{onClick:S=>$e(r,g,y,m.$index),type:"danger"},{default:l(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["data"])]),_:2},1032,["name"])]),_:2},1032,["modelValue"]))),128))]),_:2},1032,["name"])]),_:2},1032,["modelValue"]))),128))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),e(p,{style:{"margin-top":"20px"}},{default:l(()=>[e(v,{onClick:Oe,type:"primary"},{default:l(()=>[d("提交")]),_:1})]),_:1})]),_:1},8,["model"])]),e(se,{title:"添加精灵",width:"500",modelValue:z.value,"onUpdate:modelValue":a[15]||(a[15]=t=>z.value=t),"before-close":te,draggable:""},{footer:l(()=>[e(v,{onClick:te},{default:l(()=>[d("取 消")]),_:1}),e(v,{type:"primary",onClick:a[14]||(a[14]=t=>ee("spirit"))},{default:l(()=>[d("确 定")]),_:1})]),default:l(()=>[e(q,{ref_key:"addSpiritFormRef",ref:T,model:c,"label-width":"auto"},{default:l(()=>[e(p,{label:"精灵名字",prop:"spiritName"},{default:l(()=>[e(i,{modelValue:c.spiritName,"onUpdate:modelValue":a[6]||(a[6]=t=>c.spiritName=t)},null,8,["modelValue"])]),_:1}),e(p,{label:"精灵类型",prop:"name"},{default:l(()=>[e(i,{modelValue:c.name,"onUpdate:modelValue":a[7]||(a[7]=t=>c.name=t),placeholder:"例如: div"},null,8,["modelValue"])]),_:1}),e(v,{onClick:a[8]||(a[8]=t=>le("addSpirit")),type:"primary"},{default:l(()=>[d(" 添加样式 ")]),_:1}),e(E,{data:c.cssProperties,style:{width:"100%"}},{default:l(()=>[e(u,{align:"center"},{default:l(t=>[d(b("样式"+t.$index),1)]),_:1}),e(u,{prop:"name",label:"属性"},{default:l(t=>[e(i,{modelValue:t.row.name,"onUpdate:modelValue":r=>t.row.name=r,placeholder:"例如: width"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"value",align:"center",label:"值"},{default:l(t=>[e(i,{modelValue:t.row.value,"onUpdate:modelValue":r=>t.row.value=r,placeholder:"例如: 100px"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"操作",align:"center"},{default:l(t=>[e(v,{onClick:r=>ae(t.$index,"addSpirit"),type:"danger"},{default:l(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(v,{onClick:he,type:"primary"},{default:l(()=>[d(" 添加精灵事件 ")]),_:1}),e(E,{data:c.handler,style:{width:"100%"}},{default:l(()=>[e(u,{label:"名字",align:"center"},{default:l(t=>[d(b("精灵事件"+t.$index),1)]),_:1}),e(u,{prop:"eventName",label:"函数"},{default:l(t=>[e(i,{modelValue:t.row.eventName,"onUpdate:modelValue":r=>t.row.eventName=r,placeholder:"例如: click"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"handlerType",align:"center",label:"类型"},{default:l(t=>[e(de,{modelValue:t.row.handlerType,"onUpdate:modelValue":r=>t.row.handlerType=r,placeholder:"请选择"},{default:l(()=>[e(ne,{label:"切换场景",value:"changeScene"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"handlerValue",align:"center",label:"参数"},{default:l(t=>[e(i,{modelValue:t.row.handlerValue,"onUpdate:modelValue":r=>t.row.handlerValue=r,placeholder:"例如: scene_002"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"操作",align:"center"},{default:l(t=>[e(v,{onClick:r=>ge(t.$index),type:"danger"},{default:l(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(p,{style:{"margin-top":"20px"},label:"精灵位置-x",prop:"canvasStyle.position.x"},{default:l(()=>[e(C,{controls:!1,modelValue:c.canvasStyle.position.x,"onUpdate:modelValue":a[9]||(a[9]=t=>c.canvasStyle.position.x=t)},null,8,["modelValue"])]),_:1}),e(p,{label:"精灵位置-y",prop:"canvasStyle.position.y"},{default:l(()=>[e(C,{controls:!1,modelValue:c.canvasStyle.position.y,"onUpdate:modelValue":a[10]||(a[10]=t=>c.canvasStyle.position.y=t)},null,8,["modelValue"])]),_:1}),e(p,{label:"精灵大小-x",prop:"canvasStyle.scale.x"},{default:l(()=>[e(C,{controls:!1,modelValue:c.canvasStyle.scale.x,"onUpdate:modelValue":a[11]||(a[11]=t=>c.canvasStyle.scale.x=t)},null,8,["modelValue"])]),_:1}),e(p,{label:"精灵大小-y",prop:"canvasStyle.scale.y"},{default:l(()=>[e(C,{controls:!1,modelValue:c.canvasStyle.scale.y,"onUpdate:modelValue":a[12]||(a[12]=t=>c.canvasStyle.scale.y=t)},null,8,["modelValue"])]),_:1}),e(p,{label:"精灵大小-z",prop:"canvasStyle.scale.z"},{default:l(()=>[e(C,{controls:!1,modelValue:c.canvasStyle.scale.z,"onUpdate:modelValue":a[13]||(a[13]=t=>c.canvasStyle.scale.z=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(se,{title:"添加内部精灵",width:"500",modelValue:B.value,"onUpdate:modelValue":a[19]||(a[19]=t=>B.value=t),"before-close":oe,draggable:""},{footer:l(()=>[e(v,{onClick:oe},{default:l(()=>[d("取 消")]),_:1}),e(v,{type:"primary",onClick:a[18]||(a[18]=t=>ee("intoSpirit"))},{default:l(()=>[d("确 定")]),_:1})]),default:l(()=>[e(q,{ref_key:"addIntoSpiritFormRef",ref:P,model:x,"label-width":"auto"},{default:l(()=>[e(p,{label:"精灵类型",prop:"name"},{default:l(()=>[e(i,{modelValue:x.name,"onUpdate:modelValue":a[16]||(a[16]=t=>x.name=t),placeholder:"例如: div"},null,8,["modelValue"])]),_:1}),e(v,{onClick:a[17]||(a[17]=t=>le("addIntoSpirit")),type:"primary"},{default:l(()=>[d(" 添加样式 ")]),_:1}),e(E,{data:x.cssProperties,style:{width:"100%"}},{default:l(()=>[e(u,{align:"center"},{default:l(t=>[d(b("样式"+t.$index),1)]),_:1}),e(u,{prop:"name",label:"属性"},{default:l(t=>[e(i,{modelValue:t.row.name,"onUpdate:modelValue":r=>t.row.name=r,placeholder:"例如: width"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{prop:"value",align:"center",label:"值"},{default:l(t=>[e(i,{modelValue:t.row.value,"onUpdate:modelValue":r=>t.row.value=r,placeholder:"例如: 100px"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(u,{label:"操作",align:"center"},{default:l(t=>[e(v,{onClick:r=>ae(t.$index,"addIntoSpirit"),type:"danger"},{default:l(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(ze,{title:"内置精灵",modelValue:J.value,"onUpdate:modelValue":a[20]||(a[20]=t=>J.value=t),direction:"rtl","z-index":2010,style:{"background-color":"#f0f2f5"},"before-close":xe},{default:l(()=>[U("div",ll,[($(!0),O(F,null,I(X.value,(t,r)=>($(),K(L,{class:"card-item",key:r,style:{width:"48%",height:"260px",overflow:"hidden"}},{header:l(()=>[d(b(t.spiritName),1)]),default:l(()=>[e(Be,{onClick:V=>je(t),style:{width:"100%",height:"100%",cursor:"pointer"},src:t.children[0].cssProperties[0].value,fit:"none"},null,8,["onClick","src"])]),_:2},1024))),128))])]),_:1},8,["modelValue"])])}}},nl=Fe(al,[["__scopeId","data-v-4c329a52"]]);export{nl as default};
