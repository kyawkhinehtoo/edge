import{A as x}from"./AppLayout-CVsqxKki.js";import{P as w}from"./Pagination-B6mUT25k.js";import{K as k,r as _,p as v,z as h,q as S,c as U,w as b,N as g,o as d,a as e,h as E,s as n,B as M,v as i,d as a,t as m,e as u,x as c}from"./app-DS796D4M.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-B2umx8wO.js";const L={name:"SmsGateway",components:{AppLayout:x,Pagination:w},props:{gateway:Object,errors:Object},setup(t){const s=k({id:null,status:null,sender_id:null,api_url:null,sid:null,token:null,single_sms:null,info:null,bulk_sms:null});let p=_(!1);function o(){p.value?(s._method="PUT",g.post("/smsgateway/"+s.id,s,{onSuccess:l=>{Toast.fire({icon:"success",title:l.props.flash.message})},onError:l=>{console.log("error ..".errors)}})):(s._method="POST",g.post("/smsgateway",s,{preserveState:!0,onSuccess:l=>{Toast.fire({icon:"success",title:l.props.flash.message})},onError:l=>{console.log("error ..".errors)}}))}function f(l){p.value=!0,s.id=l.id,s.sender_id=l.sender_id,s.status=l.status==1,s.api_url=l.api_url,s.sid=l.sid,s.token=l.token,s.single_sms=l.single_sms,s.info=l.info,s.bulk_sms=l.bulk_sms}return v(()=>{t.gateway&&f(t.gateway)}),h(()=>{f(t.gateway)}),{form:s,submit:o,editMode:p}}},P={class:"py-2"},V={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},A={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},B={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},R={class:""},N={class:"mb-4"},T={class:"inline-flex"},C={class:"mb-4"},D={key:0,class:"text-red-500"},O={class:"mb-4"},j={key:0,class:"text-red-500"},G={class:"mb-4"},K={key:0,class:"text-red-500"},q={class:"mb-4"},z={key:0,class:"text-red-500"},F={class:"mb-4"},H={key:0,class:"text-red-500"},J={class:"mb-4"},Q={key:0,class:"text-red-500"},W={class:"mb-4"},X={key:0,class:"text-red-500"},Y={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},Z={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},$={"wire:click.prevent":"submit",type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},ss={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},es={"wire:click.prevent":"submit",type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},os={class:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"};function ts(t,s,p,o,f,l){const y=S("app-layout");return d(),U(y,null,{header:b(()=>s[10]||(s[10]=[e("h2",{class:"font-semibold text-xl text-white leading-tight"},"SMS Gatweay",-1)])),default:b(()=>[e("div",P,[e("div",V,[e("div",A,[e("form",{onSubmit:s[9]||(s[9]=E((...r)=>o.submit&&o.submit(...r),["prevent"]))},[e("div",B,[e("div",R,[e("div",N,[e("label",T,[s[11]||(s[11]=e("label",{for:"status",class:"text-gray-700 text-sm font-bold mt-1"},"ENABLE:",-1)),n(e("input",{id:"status",class:"text-green-500 w-6 h-6 ml-2 focus:ring-green-400 focus:ring-opacity-25 border border-gray-300 rounded",type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=r=>o.form.status=r)},null,512),[[M,o.form.status]])])]),e("div",C,[s[12]||(s[12]=e("label",{for:"sender_id",class:"block text-gray-700 text-sm font-bold mb-2"},"Sender ID:",-1)),n(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"sender_id",placeholder:"Enter Sender ID","onUpdate:modelValue":s[1]||(s[1]=r=>o.form.sender_id=r)},null,512),[[i,o.form.sender_id]]),t.$page.props.errors.sender_id?(d(),a("div",D,m(t.$page.props.errors.sender_id),1)):u("",!0)]),e("div",O,[s[13]||(s[13]=e("label",{for:"url",class:"block text-gray-700 text-sm font-bold mb-2"},"API URL:",-1)),n(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"url",placeholder:"Enter API URL","onUpdate:modelValue":s[2]||(s[2]=r=>o.form.api_url=r)},null,512),[[i,o.form.api_url]]),t.$page.props.errors.api_url?(d(),a("div",j,m(t.$page.props.errors.api_url),1)):u("",!0)]),e("div",G,[s[14]||(s[14]=e("label",{for:"sid",class:"block text-gray-700 text-sm font-bold mb-2"},"API SID:",-1)),n(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"sid",placeholder:"Enter API SID","onUpdate:modelValue":s[3]||(s[3]=r=>o.form.sid=r)},null,512),[[i,o.form.sid]]),t.$page.props.errors.sid?(d(),a("div",K,m(t.$page.props.errors.sid),1)):u("",!0)]),e("div",q,[s[15]||(s[15]=e("label",{for:"token",class:"block text-gray-700 text-sm font-bold mb-2"},"API TOKEN:",-1)),n(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"token",placeholder:"Enter API TOKEN","onUpdate:modelValue":s[4]||(s[4]=r=>o.form.token=r)},null,512),[[i,o.form.token]]),t.$page.props.errors.token?(d(),a("div",z,m(t.$page.props.errors.token),1)):u("",!0)]),e("div",F,[s[16]||(s[16]=e("label",{for:"single_sms",class:"block text-gray-700 text-sm font-bold mb-2"},"Single SMS URL:",-1)),n(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"single_sms",placeholder:"Enter Single SMS URL","onUpdate:modelValue":s[5]||(s[5]=r=>o.form.single_sms=r)},null,512),[[i,o.form.single_sms]]),t.$page.props.errors.single_sms?(d(),a("div",H,m(t.$page.props.errors.single_sms),1)):u("",!0)]),e("div",J,[s[17]||(s[17]=e("label",{for:"info",class:"block text-gray-700 text-sm font-bold mb-2"},"Info URL:",-1)),n(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"info",placeholder:"Enter Info URL","onUpdate:modelValue":s[6]||(s[6]=r=>o.form.info=r)},null,512),[[i,o.form.info]]),t.$page.props.errors.info?(d(),a("div",Q,m(t.$page.props.errors.info),1)):u("",!0)]),e("div",W,[s[18]||(s[18]=e("label",{for:"bulk_sms",class:"block text-gray-700 text-sm font-bold mb-2"},"Bulk SMS URL:",-1)),n(e("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"bulk_sms",placeholder:"Enter Bulk SMS URL","onUpdate:modelValue":s[7]||(s[7]=r=>o.form.bulk_sms=r)},null,512),[[i,o.form.bulk_sms]]),t.$page.props.errors.bulk_sms?(d(),a("div",X,m(t.$page.props.errors.bulk_sms),1)):u("",!0)])])]),e("div",Y,[e("span",Z,[n(e("button",$,"Save",512),[[c,!o.editMode]])]),e("span",ss,[n(e("button",es,"Update",512),[[c,o.editMode]])]),e("span",os,[e("button",{onClick:s[8]||(s[8]=(...r)=>t.closeModal&&t.closeModal(...r)),type:"button",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Cancel")])])],32)])])])]),_:1})}const as=I(L,[["render",ts]]);export{as as default};
