import{T as g,c as b,w as i,o as n,a as e,h as p,s as a,v as d,u as o,d as l,t as m,e as u,b as x,f as y,i as h}from"./app-DS796D4M.js";import{A as w}from"./AppLayout-CVsqxKki.js";import"./DropdownLink-B2umx8wO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"py-12"},_={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},C={class:"p-6 sm:px-20 bg-white border-b border-gray-200"},V={class:"mb-4"},N={key:0,class:"text-red-500 text-sm mt-1"},T={class:"mb-4"},B={key:0,class:"text-red-500 text-sm mt-1"},D={class:"flex items-center justify-end mt-4"},S=["disabled"],E={__name:"Create",setup(q){const s=g({name:"",domain:""}),c=()=>{s.post(route("tenant.store"),{onSuccess:()=>s.reset()})};return(f,t)=>(n(),b(w,{title:"Create Tenant"},{header:i(()=>t[2]||(t[2]=[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Create Tenant ",-1)])),default:i(()=>[e("div",v,[e("div",_,[e("div",k,[e("div",C,[e("form",{onSubmit:p(c,["prevent"])},[e("div",V,[t[3]||(t[3]=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Name",-1)),a(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=r=>o(s).name=r),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",required:""},null,512),[[d,o(s).name]]),o(s).errors.name?(n(),l("div",N,m(o(s).errors.name),1)):u("",!0)]),e("div",T,[t[4]||(t[4]=e("label",{for:"domain",class:"block text-sm font-medium text-gray-700"},"Domain",-1)),a(e("input",{type:"text",id:"domain","onUpdate:modelValue":t[1]||(t[1]=r=>o(s).domain=r),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",required:""},null,512),[[d,o(s).domain]]),o(s).errors.domain?(n(),l("div",B,m(o(s).errors.domain),1)):u("",!0)]),e("div",D,[x(o(h),{href:f.route("tenant.index"),class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},{default:i(()=>t[5]||(t[5]=[y(" Cancel ")])),_:1},8,["href"]),e("button",{type:"submit",class:"ml-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",disabled:o(s).processing}," Create ",8,S)])],32)])])])])]),_:1}))}};export{E as default};
