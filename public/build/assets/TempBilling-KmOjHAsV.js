import{A as X}from"./AppLayout-CVsqxKki.js";import{P as Z}from"./Pagination-B6mUT25k.js";import{r as f,D as T,T as P,p as $,q as k,c as ee,w as N,N as _,o as d,a as t,s as a,v as i,L as te,x as I,f as y,b as M,d as m,F as oe,g as se,e as b,t as u,h as le,B as re}from"./app-DS796D4M.js";import{B as ne}from"./BillingSearch-DDlH_Xpb.js";import{V as ae}from"./main-DqQXALsw.js";import{M as de}from"./vue3-multiselect.umd.min-C9_5uaur.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-B2umx8wO.js";const me={components:{AppLayout:X,Pagination:Z,BillingSearch:ne,VueDatePicker:ae,Multiselect:de},name:"TempBilling",props:{billings:Object,bill:Object,packages:Object,townships:Object,status:Object,errors:Object},setup(n){const e=f({date:"YYYY-MM-DD",month:"MMM"});f(null),f([]),f(!1),f(!1);let p=f(!1),s=f(!1),w=f(!1),C=f("");T("packages",n.packages),T("townships",n.townships),T("status",n.status);const v=f(""),U=f("");let c=f(!1);const E=()=>{_.get("/tempBilling",{keyword:v.value},{preserveState:!0})},o=l=>{C.value=l,_.get("/tempBilling",l,{preserveState:!0})},V=()=>{c.value=!c.value},x=P({bill_name:null,additonal:!1,bill_id:null}),r=P({id:null,customer_id:null,start_date:null,end_date:null,period_covered:null,bill_number:null,ftth_id:null,date_issued:null,bill_to:null,attn:null,previous_balance:null,current_charge:null,compensation:null,otc:null,sub_total:null,payment_duedate:null,service_description:null,qty:null,usage_day:null,usage_month:null,bonus_day:null,bonus_month:null,normal_cost:null,type:null,total_payable:null,discount:null,email:null,phone:null,tax:0,public_ip:0});function A(l){r.id=l.id,r.customer_id=l.customer_id,r.start_date=l.start_date,r.end_date=l.end_date,r.bill_number=l.bill_number,r.ftth_id=l.ftth_id,r.date_issued=l.date_issued,r.bill_to=l.bill_to,r.attn=l.attn,r.previous_balance=l.previous_balance,r.current_charge=l.current_charge,r.compensation=l.compensation??0,r.otc=l.otc,r.sub_total=l.sub_total,r.payment_duedate=l.payment_duedate,r.service_description=l.service_description,r.qty=l.qty,r.usage_day=l.usage_day,r.usage_month=l.usage_month,r.bonus_day=l.bonus_day,r.bonus_month=l.bonus_month,r.customer_status=l.customer_status,r.normal_cost=l.normal_cost,r.type=l.type,r.total_payable=l.total_payable,r.discount=l.discount??0,r.email=l.email,r.phone=l.phone,r.tax=l.tax??0,r.public_ip=l.public_ip??0,s.value=!0,Y()}function O(){x.post("/saveFinal",{onSuccess:l=>{Toast.fire({icon:"success",title:l.props.flash.message}),S()},onError:l=>{console.log(l)}})}function q(){w.value=!0}function S(){L(),w.value=!1}function j(){r.reset()}function L(){x.reset()}function Y(){p.value=!0}function F(){p.value=!1,j(),s.value=!1}function R(){r.post("/updateTemp",{onSuccess:l=>{Toast.fire({icon:"success",title:l.props.flash.message})},onError:l=>{console.log(l)}})}function z(){var l=confirm("Are you sure want to remove all imported Data ?");l&&_.post("/truncateBilling")}function K(l){confirm("Are you sure want to remove?")&&(l._method="DELETE",_.post("/billing/"+l.id,l),F(),j())}function Q(){axios.post("/exportTempBillingExcel",C.value).then(l=>{console.log(l);var g=document.createElement("a");document.body.appendChild(g),g.style="display: none";let B=new Blob([l.data],{type:"text/csv"}),h=window.URL.createObjectURL(B);g.href=h,g.download="temp_billings.csv",g.click(),window.URL.revokeObjectURL(h)})}function D(){let l=parseInt(r.current_charge)+parseInt(r.otc)+parseInt(r.public_ip)-parseInt(r.compensation);r.sub_total=l.toFixed(0);let g=parseInt(r.sub_total)-parseInt(r.discount);r.tax&&(g=parseInt(g)+parseInt(r.tax)),r.total_payable=g.toFixed(0)}function G(){let l=parseInt(r.current_charge)+parseInt(r.otc)+parseInt(r.public_ip)-parseInt(r.compensation);r.sub_total=l.toFixed(0),r.tax=parseInt(r.sub_total)/100*5,r.tax=r.tax.toFixed(0),D()}function H(){var l=new Date,g=l.getMonth(),B=l.getFullYear(),h=new Date(B,g,0).getDate();let J=r.usage_day?r.normal_cost/h*r.usage_day:0,W=r.usage_month?r.usage_month*r.normal_cost:0;r.current_charge=Math.round(J+W),D()}return $(()=>{n.packages.map(function(l){return l.item_data=`${l.speed}Mbps - ${l.name} - ${l.contract_period} Months`})}),{formatter:e,form:r,form_1:x,clearData:z,submit:R,deleteRow:K,isOpen:p,edit:A,closeModal:F,searchTsp:E,goSearch:o,toggleAdv:V,sort:U,search:v,show_search:c,calc:D,openBillName:w,saveFinal:O,goFinal:q,closeFinal:S,doExcel:Q,calTax:G,updateUsage:H}}},ue={class:"py-6"},be={class:"max-w-full mx-auto sm:px-6 lg:px-8"},pe={class:"flex justify-between space-x-2 items-end mb-2 px-1 md:px-0"},ge={class:"relative flex flex-wrap"},fe={class:"max-w-full mx-auto sm:px-6 lg:px-8 mt-4 flex justify-between"},ce={class:"flex"},xe={class:"fas fa-chevron-right text-gray-400"},ye={class:"fas fa-chevron-down text-gray-400"},we={class:"flex"},ve={class:"max-w-full mx-auto sm:px-6 lg:px-8 mt-4"},he={class:"max-w-full mx-auto sm:px-6 lg:px-8"},ke={class:"mt-4 p-3 inline-flex bg-white rounded-md mb-2 shadow-sm flex justify-between w-full"},_e={key:0,class:"bg-white overflow-auto shadow-xl sm:rounded-lg"},Ce={class:"min-w-full divide-y divide-gray-200"},Ue={class:"bg-white divide-y divide-gray-200"},Ee={class:"pl-4 px-2 py-3 text-xs whitespace-nowrap"},Ve={class:"px-2 py-3 text-xs whitespace-nowrap"},De={class:"px-2 py-3 text-xs whitespace-nowrap"},Be={class:"px-2 py-3 text-xs whitespace-nowrap"},Te={class:"px-2 py-3 text-xs whitespace-nowrap"},Ie={class:"px-2 py-3 text-xs whitespace-nowrap"},Me={class:"px-2 py-3 text-xs whitespace-nowrap"},Se={class:"px-2 py-3 text-xs whitespace-nowrap"},je=["href"],Fe={class:"px-2 py-3 text-xs whitespace-nowrap text-right font-medium"},Pe=["onClick"],Ne=["onClick"],Ae={key:1,class:"w-full block mt-4"},Oe={class:"text-xs text-gray-600"},qe={key:2},Le={key:3,"wire:loading":"",class:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"},Ye={key:4,ref:"isOpen",class:"fixed z-10 inset-0 overflow-y-auto ease-out duration-400"},Re={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},ze={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},Ke={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 shadow sm:rounded-lg"},Qe={class:"md:grid md:grid-cols-3 md:gap-6"},Ge={class:"mb-4 md:col-span-1"},He={key:0,class:"text-red-500"},Je={class:"mb-4 md:col-span-1"},We={key:0,class:"text-red-500"},Xe={class:"mb-4 md:col-span-1"},Ze={class:"flex justify-between"},$e={class:"md:grid md:grid-cols-3 md:gap-6"},et={class:"mb-4 md:col-span-1"},tt={key:0,class:"text-red-500"},ot={key:1,class:"text-red-500"},st={key:2,class:"text-red-500"},lt={key:3,class:"text-red-500"},rt={class:"flex justify-between"},nt={key:4,class:"text-red-500"},at={key:5,class:"text-red-500"},dt={class:"mb-4 md:col-span-2"},it={key:0,class:"text-red-500"},mt={key:1,class:"text-red-500"},ut={key:2,class:"text-red-500"},bt={key:3,class:"text-red-500"},pt={key:4,class:"text-red-500"},gt={for:"tax",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},ft={key:5,class:"text-red-500"},ct={key:6,class:"text-red-500"},xt={key:7,class:"text-red-500"},yt={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},wt={class:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},vt={key:5,ref:"openBillName",class:"fixed z-10 inset-0 overflow-y-auto ease-out duration-400"},ht={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},kt={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"},_t={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},Ct={class:""},Ut={key:0,class:"my-4"},Et={class:"flex rounded-md shadow-sm"},Vt={key:0,class:"mt-2 text-sm text-red-500"},Dt={key:1,class:"my-4"},Bt={key:0,class:"text-red-500"},Tt={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},It={class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},Mt={class:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"};function St(n,e,p,s,w,C){const v=k("billing-search"),U=k("pagination"),c=k("multiselect"),E=k("app-layout");return d(),ee(E,null,{header:N(()=>e[49]||(e[49]=[t("h2",{class:"font-semibold text-xl text-white leading-tight"},"Temporary Billing View",-1)])),default:N(()=>[t("div",ue,[t("div",be,[t("div",pe,[t("div",ge,[e[50]||(e[50]=t("span",{class:"z-10 h-full leading-snug font-normal text-center text-gray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"},[t("i",{class:"fas fa-search"})],-1)),a(t("input",{type:"text",placeholder:"Search here...",class:"border-0 px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10 py-2.5",id:"search","onUpdate:modelValue":e[0]||(e[0]=o=>s.search=o),onKeyup:e[1]||(e[1]=te((...o)=>s.searchTsp&&s.searchTsp(...o),["enter"]))},null,544),[[i,s.search]])])])]),t("div",fe,[t("div",ce,[t("a",{href:"#",class:"w-full text-right font-semibold text-xs underline mr-2",onClick:e[2]||(e[2]=(...o)=>s.toggleAdv&&s.toggleAdv(...o))},"Advance Search"),a(t("i",xe,null,512),[[I,!s.show_search]]),a(t("i",ye,null,512),[[I,s.show_search]])]),t("div",we,[t("a",{onClick:e[3]||(e[3]=(...o)=>s.doExcel&&s.doExcel(...o)),class:"cursor-pointer inline-flex items-center px-4 py-2 bg-green-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:ring focus:ring-green-300 disabled:opacity-25 transition"},e[51]||(e[51]=[y("Export Excel "),t("i",{class:"ml-1 fa fa-download text-white",tabindex:"12"},null,-1)]))])]),a(t("div",ve,[M(v,{onSearch_parameter:s.goSearch},null,8,["onSearch_parameter"])],512),[[I,s.show_search]]),t("div",he,[t("div",ke,[t("button",{type:"button",onClick:e[4]||(e[4]=(...o)=>s.clearData&&s.clearData(...o)),class:"h-10 text-md px-4 bg-yellow-600 rounded text-white hover:bg-yellow-700"},"Clear All Data"),t("button",{type:"button",onClick:e[5]||(e[5]=(...o)=>s.goFinal&&s.goFinal(...o)),class:"h-10 text-md px-4 bg-indigo-600 rounded text-white hover:bg-indigo-700"},"Save as Final")]),p.billings.data?(d(),m("div",_e,[t("table",Ce,[e[56]||(e[56]=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"pl-3 px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," No."),t("th",{scope:"col",class:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Bill No."),t("th",{scope:"col",class:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Customer ID"),t("th",{scope:"col",class:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Package"),t("th",{scope:"col",class:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Speed "),t("th",{scope:"col",class:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Usage "),t("th",{scope:"col",class:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Total Payable"),t("th",{scope:"col",class:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Preview"),t("th",{scope:"col",class:"relative px-2 py-3"},[t("span",{class:"sr-only"},"Action")])])],-1)),t("tbody",Ue,[(d(!0),m(oe,null,se(p.billings.data,(o,V)=>(d(),m("tr",{key:o.id},[t("td",Ee,u(V+=p.billings.from),1),t("td",Ve,u(o.bill_number),1),t("td",De,u(o.ftth_id),1),t("td",Be,u(o.service_description),1),t("td",Te,u(o.qty),1),t("td",Ie,u(o.usage_month?o.usage_month+" Month":"")+" "+u(o.usage_day?o.usage_day+" Day":""),1),t("td",Me,u(o.total_payable),1),t("td",Se,[t("a",{href:`/pdfpreview1/${o.id}`,target:"_blank"},e[52]||(e[52]=[t("i",{class:"fa fas fa-eye text-gray-400"},null,-1)]),8,je)]),t("td",Fe,[t("a",{href:"#",onClick:x=>s.edit(o),class:"text-yellow-600 hover:text-yellow-900"},e[53]||(e[53]=[t("i",{class:"fas fa-pen"},null,-1)]),8,Pe),e[55]||(e[55]=y(" | ")),t("a",{href:"#",onClick:x=>s.deleteRow(o),class:"text-red-600 hover:text-red-900"},e[54]||(e[54]=[t("i",{class:"fas fa-trash"},null,-1)]),8,Ne)])]))),128))])])])):b("",!0),p.billings.total?(d(),m("span",Ae,[t("label",Oe,u(p.billings.data.length)+" Invoices in Current Page. Total Number of Invoices : "+u(p.billings.total),1)])):b("",!0),p.billings.links?(d(),m("span",qe,[M(U,{class:"mt-6",links:p.billings.links},null,8,["links"])])):b("",!0),n.loading?(d(),m("div",Le,e[57]||(e[57]=[t("div",{class:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"},null,-1),t("h2",{class:"text-center text-white text-xl font-semibold"},"Loading...",-1),t("p",{class:"w-1/3 text-center text-white"},"This may take a few seconds, please don't close this page.",-1)]))):b("",!0),s.isOpen?(d(),m("div",Ye,[t("div",Re,[e[90]||(e[90]=t("div",{class:"fixed inset-0 transition-opacity"},[t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"})],-1)),e[91]||(e[91]=t("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},null,-1)),e[92]||(e[92]=y("​ ")),t("div",ze,[t("form",{onSubmit:e[43]||(e[43]=le((...o)=>s.submit&&s.submit(...o),["prevent"]))},[t("div",Ke,[e[86]||(e[86]=t("h6",{class:"md:min-w-full text-indigo-700 text-sm uppercase font-bold block pt-1 no-underline"},"Billing Detail Information",-1)),e[87]||(e[87]=t("div",{class:"hidden sm:block","aria-hidden":"true"},[t("div",{class:"py-5"},[t("div",{class:"border-t border-gray-200"})])],-1)),t("div",Qe,[t("div",Ge,[e[58]||(e[58]=t("label",{for:"ftth_id",class:"block text-gray-700 text-sm font-bold mb-2"},"Customer ID :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"ftth_id",placeholder:"Enter Customer ID","onUpdate:modelValue":e[6]||(e[6]=o=>s.form.ftth_id=o),disabled:""},null,512),[[i,s.form.ftth_id]]),e[59]||(e[59]=t("label",{for:"bill_to",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Customer Name :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"bill_to",placeholder:"Enter Bill To","onUpdate:modelValue":e[7]||(e[7]=o=>s.form.bill_to=o)},null,512),[[i,s.form.bill_to]]),e[60]||(e[60]=t("label",{for:"attn",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Customer Address :",-1)),a(t("textarea",{class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"attn",placeholder:"Enter Attention","onUpdate:modelValue":e[8]||(e[8]=o=>s.form.attn=o)},null,512),[[i,s.form.attn]]),n.$page.props.errors.attn?(d(),m("div",He,u(n.$page.props.errors.attn[0]),1)):b("",!0)]),t("div",Je,[e[61]||(e[61]=t("label",{for:"bill_number",class:"block text-gray-700 text-sm font-bold mb-2"},"Bill Number :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"bill_number",placeholder:"Enter Bill Number","onUpdate:modelValue":e[9]||(e[9]=o=>s.form.bill_number=o)},null,512),[[i,s.form.bill_number]]),e[62]||(e[62]=t("label",{for:"date_issued",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Bill Issue Date :",-1)),a(t("input",{type:"date",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"date_issued",placeholder:"Enter Issue Date","onUpdate:modelValue":e[10]||(e[10]=o=>s.form.date_issued=o)},null,512),[[i,s.form.date_issued]]),e[63]||(e[63]=t("label",{for:"payment_duedate",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Bill Due Date :",-1)),a(t("input",{type:"date",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"payment_duedate",placeholder:"Enter Payment Due Date","onUpdate:modelValue":e[11]||(e[11]=o=>s.form.payment_duedate=o)},null,512),[[i,s.form.payment_duedate]]),n.$page.props.errors.payment_duedate?(d(),m("div",We,u(n.$page.props.errors.payment_duedate[0]),1)):b("",!0)]),t("div",Xe,[e[66]||(e[66]=t("label",{for:"start_date",class:"block text-gray-700 text-sm font-bold mb-2"},"Bill Start Date :",-1)),a(t("input",{type:"date",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"start_date",placeholder:"Enter Bill Start Date","onUpdate:modelValue":e[12]||(e[12]=o=>s.form.start_date=o)},null,512),[[i,s.form.start_date]]),e[67]||(e[67]=t("label",{for:"end_date",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Bill End Date :",-1)),a(t("input",{type:"date",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"end_date",placeholder:"Enter Bill End Date","onUpdate:modelValue":e[13]||(e[13]=o=>s.form.end_date=o)},null,512),[[i,s.form.end_date]]),e[68]||(e[68]=t("label",{for:"bonus_day",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Bonus Day/Month (If Any) :",-1)),t("div",Ze,[a(t("input",{type:"number",class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300",id:"bonus_day","onUpdate:modelValue":e[14]||(e[14]=o=>s.form.bonus_day=o)},null,512),[[i,s.form.bonus_day]]),e[64]||(e[64]=t("span",{class:"inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," Days ",-1)),a(t("input",{type:"number",class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300",id:"bonus_month","onUpdate:modelValue":e[15]||(e[15]=o=>s.form.bonus_month=o)},null,512),[[i,s.form.bonus_month]]),e[65]||(e[65]=t("span",{class:"inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," Months ",-1))])])]),e[88]||(e[88]=t("div",{class:"hidden sm:block","aria-hidden":"true"},[t("div",{class:"py-5"},[t("div",{class:"border-t border-gray-200"})])],-1)),t("div",$e,[t("div",et,[e[71]||(e[71]=t("label",{for:"service_description",class:"block text-gray-700 text-sm font-bold mb-2"},"Service Description :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"service_description",placeholder:"Enter Service Description","onUpdate:modelValue":e[16]||(e[16]=o=>s.form.service_description=o)},null,512),[[i,s.form.service_description]]),n.$page.props.errors.service_description?(d(),m("div",tt,u(n.$page.props.errors.service_description[0]),1)):b("",!0),e[72]||(e[72]=t("label",{for:"qty",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"QTY :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"qty",placeholder:"Enter QTY","onUpdate:modelValue":e[17]||(e[17]=o=>s.form.qty=o)},null,512),[[i,s.form.qty]]),n.$page.props.errors.qty?(d(),m("div",ot,u(n.$page.props.errors.qty[0]),1)):b("",!0),e[73]||(e[73]=t("label",{for:"normal_cost",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Original Package Price :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"normal_cost","onUpdate:modelValue":e[18]||(e[18]=o=>s.form.normal_cost=o),disabled:""},null,512),[[i,s.form.normal_cost]]),n.$page.props.errors.normal_cost?(d(),m("div",st,u(n.$page.props.errors.normal_cost[0]),1)):b("",!0),e[74]||(e[74]=t("label",{for:"type",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Type :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"type",placeholder:"Enter Type","onUpdate:modelValue":e[19]||(e[19]=o=>s.form.type=o)},null,512),[[i,s.form.type]]),n.$page.props.errors.type?(d(),m("div",lt,u(n.$page.props.errors.type[0]),1)):b("",!0),e[75]||(e[75]=t("label",{for:"usage_day",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Actual Usage (Days/Month) :",-1)),t("div",rt,[a(t("input",{type:"number",class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300",id:"usage_day","onUpdate:modelValue":e[20]||(e[20]=o=>s.form.usage_day=o),onChange:e[21]||(e[21]=(...o)=>s.updateUsage&&s.updateUsage(...o))},null,544),[[i,s.form.usage_day]]),e[69]||(e[69]=t("span",{class:"inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," Days ",-1)),a(t("input",{type:"number",class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300",id:"usage_month","onUpdate:modelValue":e[22]||(e[22]=o=>s.form.usage_month=o),onChange:e[23]||(e[23]=(...o)=>s.updateUsage&&s.updateUsage(...o))},null,544),[[i,s.form.usage_month]]),e[70]||(e[70]=t("span",{class:"inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"}," Months ",-1))]),e[76]||(e[76]=t("label",{for:"email",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Email :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"email",placeholder:"Enter Email","onUpdate:modelValue":e[24]||(e[24]=o=>s.form.email=o)},null,512),[[i,s.form.email]]),n.$page.props.errors.email?(d(),m("div",nt,u(n.$page.props.errors.email[0]),1)):b("",!0),e[77]||(e[77]=t("label",{for:"phone",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Phone :",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"phone",placeholder:"Enter Phone Number","onUpdate:modelValue":e[25]||(e[25]=o=>s.form.phone=o)},null,512),[[i,s.form.phone]]),n.$page.props.errors.phone?(d(),m("div",at,u(n.$page.props.errors.phone[0]),1)):b("",!0)]),t("div",dt,[e[79]||(e[79]=t("label",{for:"current_charge",class:"block text-gray-700 text-sm font-bold mb-2"},"Current Charge :",-1)),a(t("input",{type:"number",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"current_charge",placeholder:"Enter Current Charge","onUpdate:modelValue":e[26]||(e[26]=o=>s.form.current_charge=o),onChange:e[27]||(e[27]=(...o)=>s.calc&&s.calc(...o))},null,544),[[i,s.form.current_charge]]),n.$page.props.errors.current_charge?(d(),m("div",it,u(n.$page.props.errors.current_charge[0]),1)):b("",!0),e[80]||(e[80]=t("label",{for:"otc",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"OTC :",-1)),a(t("input",{type:"number",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"otc",placeholder:"Enter OTC","onUpdate:modelValue":e[28]||(e[28]=o=>s.form.otc=o),onChange:e[29]||(e[29]=(...o)=>s.calc&&s.calc(...o))},null,544),[[i,s.form.otc]]),n.$page.props.errors.otc?(d(),m("div",mt,u(n.$page.props.errors.otc),1)):b("",!0),e[81]||(e[81]=t("label",{for:"public_ip",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Public IP :",-1)),a(t("input",{type:"number",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"otc",placeholder:"Enter Public IP Charges","onUpdate:modelValue":e[30]||(e[30]=o=>s.form.public_ip=o),onChange:e[31]||(e[31]=(...o)=>s.calc&&s.calc(...o))},null,544),[[i,s.form.public_ip]]),n.$page.props.errors.otc?(d(),m("div",ut,u(n.$page.props.errors.public_ip),1)):b("",!0),e[82]||(e[82]=t("label",{for:"compensation",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Compensation :",-1)),a(t("input",{type:"number",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"compensation",placeholder:"Enter Compensation","onUpdate:modelValue":e[32]||(e[32]=o=>s.form.compensation=o),onChange:e[33]||(e[33]=(...o)=>s.calc&&s.calc(...o))},null,544),[[i,s.form.compensation]]),n.$page.props.errors.compensation?(d(),m("div",bt,u(n.$page.props.errors.compensation),1)):b("",!0),e[83]||(e[83]=t("label",{for:"sub_total",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Sub Total :",-1)),a(t("input",{type:"number",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"total_mmk",placeholder:"Enter Sub Total","onUpdate:modelValue":e[34]||(e[34]=o=>s.form.sub_total=o),onChange:e[35]||(e[35]=(...o)=>s.calc&&s.calc(...o))},null,544),[[i,s.form.sub_total]]),n.$page.props.errors.sub_total?(d(),m("div",pt,u(n.$page.props.errors.sub_total[0]),1)):b("",!0),t("label",gt,[e[78]||(e[78]=y("Commercial Tax (5%) : ")),t("button",{type:"button",class:"inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5",onClick:e[36]||(e[36]=(...o)=>s.calTax&&s.calTax(...o))},"Calculate ")]),a(t("input",{type:"number",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"tax","onUpdate:modelValue":e[37]||(e[37]=o=>s.form.tax=o),onChange:e[38]||(e[38]=(...o)=>s.calc&&s.calc(...o))},null,544),[[i,s.form.tax]]),n.$page.props.errors.tax?(d(),m("div",ft,u(n.$page.props.errors.tax),1)):b("",!0),e[84]||(e[84]=t("label",{for:"discount",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Discount :",-1)),a(t("input",{type:"number",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"discount",placeholder:"Enter Discount","onUpdate:modelValue":e[39]||(e[39]=o=>s.form.discount=o),onChange:e[40]||(e[40]=(...o)=>s.calc&&s.calc(...o))},null,544),[[i,s.form.discount]]),n.$page.props.errors.discount?(d(),m("div",ct,u(n.$page.props.errors.discount),1)):b("",!0),e[85]||(e[85]=t("label",{for:"total_payable",class:"mt-4 block text-gray-700 text-sm font-bold mb-2"},"Total Payable :",-1)),a(t("input",{type:"number",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"total_payable",placeholder:"Enter Total Payable","onUpdate:modelValue":e[41]||(e[41]=o=>s.form.total_payable=o)},null,512),[[i,s.form.total_payable]]),n.$page.props.errors.total_payable?(d(),m("div",xt,u(n.$page.props.errors.total_payable),1)):b("",!0)])])]),t("div",yt,[e[89]||(e[89]=t("span",{class:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[t("button",{"wire:click.prevent":"submit",type:"submit",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},"Update")],-1)),t("span",wt,[t("button",{onClick:e[42]||(e[42]=(...o)=>s.closeModal&&s.closeModal(...o)),type:"button",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Close")])])],32)])])],512)):b("",!0),s.openBillName?(d(),m("div",vt,[t("div",ht,[e[96]||(e[96]=t("div",{class:"fixed inset-0 transition-opacity"},[t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"})],-1)),e[97]||(e[97]=t("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},null,-1)),e[98]||(e[98]=y("​ ")),t("div",kt,[t("div",_t,[t("div",Ct,[e[95]||(e[95]=t("label",{for:"additonal",class:"text-sm text-gray-700"},"Additional to Existing Bill ?",-1)),a(t("input",{type:"checkbox",class:"ml-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",name:"additonal","onUpdate:modelValue":e[44]||(e[44]=o=>s.form_1.additonal=o),value:"true"},null,512),[[re,s.form_1.additonal]]),s.form_1.additonal?(d(),m("div",Ut,[e[93]||(e[93]=t("label",{for:"bill",class:"block text-gray-700 text-sm font-bold mb-2"},"Please Select Bill ",-1)),t("div",Et,[M(c,{"deselect-label":"Selected already",options:p.bill,"track-by":"id",label:"name",modelValue:s.form_1.bill_id,"onUpdate:modelValue":e[45]||(e[45]=o=>s.form_1.bill_id=o),"allow-empty":!0},null,8,["options","modelValue"])]),n.$page.props.errors.bill_id?(d(),m("p",Vt,u(n.$page.props.errors.bill_id),1)):b("",!0)])):(d(),m("div",Dt,[e[94]||(e[94]=t("label",{for:"name",class:"block text-gray-700 text-sm font-bold mb-2"},"Enter Bill Name to Create:",-1)),a(t("input",{type:"text",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",id:"name",placeholder:"Enter Bill Name","onUpdate:modelValue":e[46]||(e[46]=o=>s.form_1.bill_name=o)},null,512),[[i,s.form_1.bill_name]]),n.$page.props.errors.bill_name?(d(),m("div",Bt,u(n.$page.props.errors.bill_name[0]),1)):b("",!0)]))])]),t("div",Tt,[t("span",It,[t("button",{onClick:e[47]||(e[47]=(...o)=>s.saveFinal&&s.saveFinal(...o)),type:"button",class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},"GO !")]),t("span",Mt,[t("button",{onClick:e[48]||(e[48]=(...o)=>s.closeFinal&&s.closeFinal(...o)),type:"button",class:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},"Cancel")])])])])],512)):b("",!0)])])]),_:1})}const Yt=ie(me,[["render",St],["__scopeId","data-v-0bcc4911"]]);export{Yt as default};
