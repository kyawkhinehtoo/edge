import{A as g}from"./AppLayout-CVsqxKki.js";import{i as v,T as y,q as f,c as w,w as l,o as r,a as t,h as _,s as d,v as c,d as i,t as n,e as a,A as k,g as h,F as C,B as V,b as A,f as B}from"./app-DS796D4M.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-B2umx8wO.js";const N={components:{AppLayout:g,Link:v},props:{townships:Array},setup(){return{form:y({name:"",description:"",is_active:!0,township_ids:[]})}},methods:{submit(){this.form.post(route("zone.store"))}}},M={class:"py-12"},S={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},T={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-6"},U={class:"grid grid-cols-1 gap-6"},D={key:0,class:"text-red-500 text-xs mt-1"},z={key:0,class:"text-red-500 text-xs mt-1"},F={class:"mt-1"},Z=["value"],j={key:0,class:"text-red-500 text-xs mt-1"},q={class:"mt-2"},E={class:"inline-flex items-center"},G={class:"mt-6 flex items-center justify-end"};function H(m,o,x,e,I,u){const p=f("Link"),b=f("app-layout");return r(),w(b,null,{header:l(()=>o[5]||(o[5]=[t("h2",{class:"font-semibold text-xl text-white leading-tight"},"Create Zone",-1)])),default:l(()=>[t("div",M,[t("div",S,[t("div",T,[t("form",{onSubmit:o[4]||(o[4]=_((...s)=>u.submit&&u.submit(...s),["prevent"]))},[t("div",U,[t("div",null,[o[6]||(o[6]=t("label",{class:"block text-sm font-medium text-gray-700"},"Name",-1)),d(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[c,e.form.name]]),e.form.errors.name?(r(),i("div",D,n(e.form.errors.name),1)):a("",!0)]),t("div",null,[o[7]||(o[7]=t("label",{class:"block text-sm font-medium text-gray-700"},"Description",-1)),d(t("textarea",{"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.description=s),rows:"3",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[c,e.form.description]]),e.form.errors.description?(r(),i("div",z,n(e.form.errors.description),1)):a("",!0)]),t("div",null,[o[8]||(o[8]=t("label",{class:"block text-sm font-medium text-gray-700"},"Townships",-1)),t("div",F,[d(t("select",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.township_ids=s),multiple:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[(r(!0),i(C,null,h(x.townships,s=>(r(),i("option",{key:s.id,value:s.id},n(s.name),9,Z))),128))],512),[[k,e.form.township_ids]])]),e.form.errors.township_ids?(r(),i("div",j,n(e.form.errors.township_ids),1)):a("",!0)]),t("div",null,[o[10]||(o[10]=t("label",{class:"block text-sm font-medium text-gray-700"},"Status",-1)),t("div",q,[t("label",E,[d(t("input",{type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=s=>e.form.is_active=s),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[V,e.form.is_active]]),o[9]||(o[9]=t("span",{class:"ml-2"},"Active",-1))])])])]),t("div",G,[A(p,{href:m.route("zone.index"),class:"bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"},{default:l(()=>o[11]||(o[11]=[B(" Cancel ")])),_:1},8,["href"]),o[12]||(o[12]=t("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Create Zone ",-1))])],32)])])])]),_:1})}const Q=L(N,[["render",H]]);export{Q as default};
