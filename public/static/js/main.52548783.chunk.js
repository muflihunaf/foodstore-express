(this.webpackJsonpfoodstore=this.webpackJsonpfoodstore||[]).push([[0],{155:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(24),c=t.n(r),s=t(5),i=t(8),o=(t(85),t(1));var u=[{icon:"/images/menus/semua.png",label:"semua",id:""},{icon:"/images/menus/utama.png",label:"utama",id:"utama"},{icon:"/images/menus/minuman.png",label:"minuman",id:"minuman"},{icon:"/images/menus/snack.png",label:"snack",id:"snack"},{icon:"/images/menus/pastry.png",label:"pastry",id:"pastry"}],m=t(66);t.n(m).a.config();const d="http://localhost:3000",g="FOODSTORE",E="20000",p="Muflihun Abdul Firmansyah",v="firmanedam19@gmail.com",b={account_no:"xxxxx-xxxxxx-333-34",bank_name:"BRI"};function h(){return l.createElement(s.b,{to:"/"},l.createElement("div",{className:"text-red-600 font-bold text-4xl"},g))}var f=t(11),k=t(68),y=t.n(k);function S(){var e;let a=Object(f.c)(e=>e.auth);return l.createElement(o.n,{desktop:2,justify:"between",items:"center"},l.createElement("div",null,l.createElement(h,null)),l.createElement("div",{className:"mr-5 text-right"},l.createElement(s.b,{to:(null===a||void 0===a?void 0:a.user)?"/account":"/login"},l.createElement("div",{className:"mr-2 inline-block text-red-600 font-bold"},null===a||void 0===a||null===(e=a.user)||void 0===e?void 0:e.full_name),l.createElement(o.c,{icon:l.createElement(y.a,null)}))))}var w=t(29),_=t.n(w),P=t(43),N=t.n(P);function x(e){return e.reduce((e,a)=>e+a.price*a.qty,0)}function C(e){return isNaN(parseInt(e))?"":new Intl.NumberFormat("id-ID",{maximumSignificantDigits:2,style:"currency",currency:"IDR"}).format(e)}function I(e){let{items:a,onItemInc:t,onItemDec:n,onCheckout:r}=e,c=x(a);return l.createElement("div",null,l.createElement("div",{className:"px-2 border-b mt-5 pb-5"},l.createElement("div",{className:"text-3xl flex items-center text-red-700"},l.createElement(N.a,null),l.createElement("div",{className:"ml-2"},"Keranjang")),l.createElement(o.s,{as:"h5"}," Total: ",C(c)," "),l.createElement(o.b,{text:"Checkout",fitContainer:!0,iconAfter:l.createElement(_.a,null),disabled:!a.length,onClick:r})),a.length?null:l.createElement("div",{className:"text-center text-sm text-red-900"},"belum ada items di keranjang "),l.createElement("div",{className:"p-2"},a.map((e,a)=>l.createElement("div",{key:a,className:"mb-2"},l.createElement(o.e,{imgUrl:"".concat(d,"/upload/").concat(e.image_url),name:e.name,qty:e.qty,color:"orange",onInc:a=>t(e),onDec:a=>n(e)})))))}const O="features/Cart/ADD_ITEM",j="features/Cart/REMOVE_ITEM",T="features/Cart/CLEAR_ITEMS",R="features/Cart/SET_ITEMS";function D(e){return{type:O,item:{...e,product:e.product||e}}}var q=t(69),H=t.n(q);const M="features/PRODUCT/SET_PAGE",A="features/PRODUCT/SET_KEYWORD",L="features/Products/SET_CATEGORY",B="features/Products/SET_TAGS",z="features/Products/NEXT_PAGE",K="features/Products/PREV_PAGE",U="features/Products/TOGGLE_TAG";var G=t(9),J=t.n(G);let F=H()((async function(e){return await J.a.get("".concat(d,"/api/products"),{params:e})}),1e3);const V=()=>({type:"features/Products/START_FETCHING_PRODUCT"}),X=e=>({type:"features/Products/SUCCESS_FETCHING_PRODUCT",...e}),Y=()=>({type:"features/Products/ERROR_FETCHING_PRODUCT"});var W=t(70);const $={"":[],utama:["burger","pizza","bread"],pastry:["cheese","strawberry","muffin"],snack:["fried","bread","cheese","coffee"],minuman:["coffee","tea","hot","cold"]};function Q(){let e=Object(f.b)(),a=Object(f.c)(e=>e.products),t=Object(f.c)(e=>e.cart),n=Object(i.useHistory)();return l.useEffect(()=>{e(async(e,a)=>{e(V());let t=a().products.perPage||9,l=a().products.currentPage||1,n=a().products.tags||[];const r={limit:t,skip:l*t-t,q:a().products.keyword||"",tags:n,category:a().products.category||""};try{let{data:{data:a,count:t}}=await F(r);e(X({data:a,count:t}))}catch(c){e(Y())}})},[e,a.currentPage,a.keyword,a.category,a.tags]),l.createElement("div",null,l.createElement(o.k,{sidebar:l.createElement(o.p,{items:u,verticalAlign:"top",active:a.category,onChange:a=>e((e=>({type:L,category:e}))(a))}),content:l.createElement("div",{className:"md:flex md:flex-row-reverse w-full mr-5 h-full min-h-screen"},l.createElement("div",{className:"w-full md:w-3/4 pl-5 pb-10"},l.createElement(S,null),l.createElement("div",{className:"w-full text-center mb-10 mt-5"},l.createElement(o.i,{fullRound:!0,value:a.keyword,placeholder:"cari makanan favoritmu...",fitContainer:!0,onChange:a=>{var t;e((t=a.target.value,{type:A,keyword:t}))}})),"process"!==a.status||a.data.length?null:l.createElement("div",{className:"flex justify-center"},l.createElement(W.BounceLoader,{color:"red"})),l.createElement(o.n,{desktop:3,items:"stretch"},a.data.map((a,t)=>l.createElement("div",{key:t,className:"p-2"},l.createElement(o.f,{title:a.name,imgUrl:"".concat(d,"/upload/").concat(a.image_url),price:a.price,onAddToCart:t=>e(D(a))})))),l.createElement("div",{className:"mb-5 pl-2 flex w-3/3 overflow-auto pb-5"},$[a.category].map((t,n)=>l.createElement("div",{key:n},l.createElement(o.m,{text:t,icon:t.slice(0,1).toUpperCase(),isActive:a.tags.includes(t),onClick:a=>e((e=>({type:U,tag:e}))(t))})))),l.createElement("div",{className:"text-center my-10"},l.createElement(o.l,{totalItems:a.totalItems,page:a.currentPage,perPage:a.perPage,onChange:a=>e(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:M,currentPage:e}}(a)),onNext:a=>e({type:z}),onPrev:a=>e({type:K})}))),l.createElement("div",{className:"w-full md:w-1/4 h-full shadow-lg border-r border-white bg-gray-100"},l.createElement(I,{items:t,onItemInc:a=>e(D(a)),onItemDec:a=>e(function(e){return{type:j,item:e}}(a)),onCheckout:e=>n.push("/checkout")}))),sidebarSize:80}))}var Z=t(36);const ee="features/Auth/USER_LOGIN",ae="features/Auth/USER_LOGOUT";let te=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{user:null,token:null};const le="process",ne="success",re="error",ce={data:[],currentPage:1,totalItems:-1,perPage:6,keyword:"",category:"",tags:[],status:"idle"};const se=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];var ie=t(71);const oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.c,ue=Object(Z.b)({auth:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ee:return{user:a.user,token:a.token};case ae:return{user:null,token:null};default:return e}},products:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"features/Products/START_FETCHING_PRODUCT":return{...e,status:le};case"features/Products/ERROR_FETCHING_PRODUCT":return{...e,status:re};case"features/Products/SUCCESS_FETCHING_PRODUCT":return{...e,status:ne,data:a.data,totalItems:a.count};case M:return{...e,currentPage:a.currentPage};case L:return{...e,currentPage:1,tags:[],category:a.category,keyword:""};case A:return{...e,keyword:a.keyword,category:"",tags:[]};case B:return{...e,tags:a.tags};case U:return e.tags.includes(a.tag)?{...e,currentPage:1,tags:e.tags.filter(e=>e!==a.tag)}:{...e,currentPage:1,tags:[...e.tags,a.tag]};case z:return{...e,currentPage:e.currentPage+1};case K:return{...e,currentPage:e.currentPage-1};default:return e}},cart:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return e.find(e=>e._id===a.item._id)?e.map(e=>({...e,qty:e._id===a.item._id?e.qty+1:e.qty})):[...e,{...a.item,qty:1}];case j:return e.map(e=>({...e,qty:e._id===a.item._id?e.qty-1:e.qty})).filter(e=>e.qty>0);case T:return[];case R:return a.items;default:return e}}});var me=Object(Z.d)(ue,oe(Object(Z.a)(ie.a)));async function de(e,a){return await J.a.put("".concat(d,"/api/carts"),{items:a},{headers:{authorization:"Bearer ".concat(e)}})}async function ge(){let{token:e}=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{};if(!e)return;let{data:a}=await J.a.get("".concat(d,"/api/carts"),{headers:{authorization:"Bearer ".concat(e)}});a.error||me.dispatch({type:R,items:a})}let Ee,pe;function ve(){let e=Ee,a=pe;Ee=me.getState().auth,pe=me.getState().cart;let{token:t}=Ee;Ee!==e&&(localStorage.setItem("auth",JSON.stringify(Ee)),de(t,pe)),pe!==a&&(localStorage.setItem("cart",JSON.stringify(pe)),de(t,pe))}function be(e){let{children:a,...t}=e,{user:n}=Object(f.c)(e=>e.auth);return l.createElement(i.Route,t,n?l.createElement(i.Redirect,{to:"/"}):a)}var he=e=>{let{children:a,...t}=e,{user:n}=Object(f.c)(e=>e.auth);return l.createElement(i.Route,t,n?a:l.createElement(i.Redirect,{to:"/login"}))},fe=t(32),ke=t.n(fe);function ye(){let e=Object(i.useHistory)(),a=Object(f.b)();return l.useEffect(()=>{(async function(){let{token:e}=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{};return await J.a.post("".concat(d,"/auth/logout"),null,{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>(localStorage.removeItem("auth"),e))})().then(()=>a({type:ae})).then(()=>e.push("/"))},[e,a]),l.createElement(o.j,{size:"small"},l.createElement("div",{className:"text-center flex flex-col justify-center items-center"},l.createElement(ke.a,{color:"red"}),l.createElement("br",null),"Logging out ..."))}function Se(e){let{status:a}=e;switch(a){case"waiting_payment":return l.createElement(o.a,{color:"orange"},"Menunggu pembayaran");case"paid":return l.createElement(o.a,{color:"green"},"Sudah dibayar");case"processing":return l.createElement(o.a,{color:"yellow"},"Sedang diproses");case"in_delivery":return l.createElement(o.a,{color:"blue"},"Dalam pengiriman");case"delivered":return l.createElement(o.a,{color:"green"},"Pesanan diterima");default:return l.createElement("div",null)}}Se.defaultProps={};var we=t(72),_e=t.n(we);const Pe=[{Header:"",id:"Status",accessor:e=>l.createElement("div",null,"#",e.order_number," ",l.createElement("br",null),l.createElement(Se,{status:e.status}))},{Header:"Items",accessor:e=>l.createElement("div",null,e.order_items.map(e=>l.createElement("div",{key:e._id},e.name," ",e.qty)))},{Header:"Total",accessor:e=>l.createElement("div",null,C(x(e.order_items)+e.delivery_fee))},{Header:"Invoice",accessor:e=>l.createElement("div",null,l.createElement(s.b,{to:"/invoice/".concat(e._id)},l.createElement(o.b,{color:"gray",iconBefore:l.createElement(_e.a,null)},"Invoice")))}];function Ne(){let[e,a]=l.useState([]),[t,n]=l.useState(0),[r,c]=l.useState("idle"),[s,i]=l.useState(1),[u,m]=l.useState(10);const g=l.useCallback(async()=>{c("process");let{data:e}=await async function(e){let{token:a}=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},{limit:t,page:l}=e,n=l*t-t;return await G.get("".concat(d,"/api/orders"),{params:{skip:n,limit:t},headers:{authorization:"Bearer ".concat(a)}})}({limit:u,page:s});e.error?c("error"):(c("success"),a(e.data),n(e.count))},[s,u]);return l.useEffect(()=>{g()},[g]),l.createElement(o.j,null,l.createElement(S,null),l.createElement(o.s,{as:"h3"}," Pesanan Anda "),l.createElement("br",null),l.createElement(o.r,{items:e,totalItems:t,columns:Pe,onPageChange:e=>i(e),page:s,isLoading:"process"===r}))}var xe=t(73),Ce=t.n(xe),Ie=t(74),Oe=t.n(Ie),je=t(75),Te=t.n(je);const Re=e=>{let{children:a}=e;return l.createElement("div",{className:"text-white text-5xl flex justify-center mb-5"},a)},De=[{label:"Beranda",icon:l.createElement(Re,null,l.createElement(Ce.a,null)),url:"/"},{label:"Alamat",icon:l.createElement(Re,null,l.createElement(Oe.a,null)),url:"/alamat-pengiriman"},{label:"Pesanan",icon:l.createElement(Re,null,l.createElement(Te.a,null)),url:"/pesanan"},{label:"Logout",icon:l.createElement(Re,null,l.createElement(_.a,null)),url:"/logout"}];function qe(){return l.createElement(o.j,null,l.createElement(S,null),l.createElement(o.s,{as:"h3"}," Akun Anda "),l.createElement("br",null),l.createElement(o.n,{desktop:4,tablet:4,mobile:2},De.map((e,a)=>l.createElement("div",{key:a,className:"px-2 pb-2"},l.createElement(s.b,{to:e.url},l.createElement(o.d,{header:e.icon,body:l.createElement("div",{className:"text-center font-bold text-white"},e.label)}))))))}function He(){var e,a,t,n,r,c,s,u;let[m,g]=l.useState(null),[E,h]=l.useState(""),[f,k]=l.useState("process"),{params:y}=Object(i.useRouteMatch)();l.useEffect(()=>{(async function(e){let{token:a}=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{};return await J.a.get("".concat(d,"/api/invoices/").concat(e),{headers:{authorization:"Bearer ".concat(a)}})})(null===y||void 0===y?void 0:y.order_id).then(e=>{let{data:a}=e;(null===a||void 0===a?void 0:a.error)&&h(a.message||"Terjadi keslahan yang tidak diketahui"),g(a)}).finally(()=>k("idle"))},[y]);let[w,_]=l.useState(!1),[P,N]=l.useState(!1);if(E.length)return l.createElement(o.j,null,l.createElement(S,null),l.createElement(o.s,{as:"h3"}," Terjadi Kesalahan "),E);if("process"===f)return l.createElement(o.j,null,l.createElement("div",{className:"text-center py-10"},l.createElement("div",{className:"inline-block"},l.createElement(ke.a,{color:"red"}))));return l.createElement(o.j,null,l.createElement(S,null),l.createElement(o.s,{as:"h3"}," Invoice "),l.createElement("br",null),l.createElement(o.r,{showPagination:!1,items:[{label:"Status",value:l.createElement(Se,{status:null===m||void 0===m?void 0:m.payment_status})},{label:"Order ID",value:"#"+(null===m||void 0===m||null===(e=m.order)||void 0===e?void 0:e.order_number)},{label:"Total amount",value:C(null===m||void 0===m?void 0:m.total)},{label:"Billed to",value:l.createElement("div",null,l.createElement("b",null,null===m||void 0===m||null===(a=m.user)||void 0===a?void 0:a.full_name," ")," ",l.createElement("br",null),null===m||void 0===m||null===(t=m.user)||void 0===t?void 0:t.email," ",l.createElement("br",null)," ",l.createElement("br",null),null===m||void 0===m||null===(n=m.delivery_address)||void 0===n?void 0:n.detail," ",l.createElement("br",null),null===m||void 0===m||null===(r=m.delivery_address)||void 0===r?void 0:r.kelurahan,",",null===m||void 0===m||null===(c=m.delivery_address)||void 0===c?void 0:c.kecamatan," ",l.createElement("br",null),null===m||void 0===m||null===(s=m.delivery_address)||void 0===s?void 0:s.kabupaten," ",l.createElement("br",null),null===m||void 0===m||null===(u=m.delivery_address)||void 0===u?void 0:u.provinsi)},{label:"Payment to",value:l.createElement("div",null,p," ",l.createElement("br",null),v," ",l.createElement("br",null),b.account_no," ",l.createElement("br",null),b.bank_name," ",l.createElement("br",null),"paid"!==m.payment_status?l.createElement(l.Fragment,null,l.createElement(o.b,{onClick:async function(){_(!0);let{data:{token:e}}=await J.a.get("".concat(d,"/api/invoices/").concat(null===y||void 0===y?void 0:y.order_id,"/initiate-payment"));e?(_(!1),window.snap.pay(e)):N(!0)},disabled:w}," ",w?"Loading ... ":"Bayar dengan Midtrans"," ")):null,P?l.createElement(l.Fragment,null,l.createElement("div",{className:"text-red-400"},"Terjadi kesalahan saat meminta token untuk pembayaran.")):null)}],columns:[{Header:"Invoice",accessor:"label"},{Header:"",accessor:"value"}]}))}var Me=t(76),Ae=t.n(Me),Le=t(77),Be=t.n(Le),ze=t(47),Ke=t.n(ze),Ue=t(78),Ge=t.n(Ue);const Je="idle",Fe="process",Ve="success",Xe="error";function Ye(){let[e,a]=l.useState([]),[t,n]=l.useState(0),[r,c]=l.useState(Je),[s,i]=l.useState(1),[o,u]=l.useState(10),m=l.useCallback((async function(){c(Fe);let{data:{data:e,count:t,error:l}}=await async function(e){let{token:a}=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{};return await J.a.get("".concat(d,"/api/delivery-addresses"),{params:{limit:e.limit,skip:e.page*e.limit-e.limit},headers:{authorization:"Bearer ".concat(a)}})}({page:s,limit:o});l?c(Xe):(c(Ve),a(e),n(t))}),[s,o]);return l.useEffect(()=>{m()},[m]),{data:e,count:t,status:r,page:s,limit:o,setPage:i,setLimit:u}}const We=e=>{let{children:a}=e;return l.createElement("div",{className:"text-3xl flex justify-center"},a)},$e=[{label:"Item",icon:l.createElement(We,null,l.createElement(N.a,null))},{label:"Alamat",icon:l.createElement(We,null,l.createElement(Ae.a,null))},{label:"Konfirmasi",icon:l.createElement(We,null,l.createElement(Be.a,null))}],Qe=[{Header:"Nama produk",accessor:e=>l.createElement("div",{className:"flex items-center"},l.createElement("img",{src:"".concat(d,"/upload/").concat(e.image_url),width:48,alt:e.name}),e.name)},{Header:"Jumlah",accessor:"qty"},{Header:"Harga satuan",id:"price",accessor:e=>l.createElement("span",null," @ ",C(e.price)," ")},{Header:"Harga total",id:"subtotal",accessor:e=>l.createElement("div",null,C(e.price*e.qty))}],Ze=[{Header:"Nama alamat",accessor:e=>l.createElement("div",null,e.nama," ",l.createElement("br",null),l.createElement("small",null,e.provinsi,", ",e.kabupaten,", ",e.kecamatan,", ",e.kelurahan," ",l.createElement("br",null),e.detail))}];function ea(){let[e,a]=l.useState(0),t=Object(f.c)(e=>e.cart),[n,r]=l.useState(null),{data:c,status:u,limit:m,page:g,count:p,setPage:v}=Ye(),b=Object(i.useHistory)(),h=Object(f.b)();return t.length?l.createElement(o.j,null,l.createElement(S,null),l.createElement(o.s,{as:"h3"}," Checkout "),l.createElement(o.q,{steps:$e,active:e}),0===e?l.createElement("div",null,l.createElement("br",null)," ",l.createElement("br",null),l.createElement(o.r,{items:t,columns:Qe,perPage:t.length,showPagination:!1}),l.createElement("br",null),l.createElement("div",{className:"text-right"},l.createElement(o.s,{as:"h4"},"Subtotal: ",C(x(t))),l.createElement("br",null),l.createElement(o.b,{onClick:t=>a(e+1),color:"red",iconAfter:l.createElement(_.a,null)}," Selanjutnya "))):null,1===e?l.createElement("div",null,l.createElement("br",null),l.createElement("br",null),l.createElement(o.r,{items:c,columns:Ze,perPage:m,page:g,onPageChange:e=>v(e),totalItems:p,isLoading:"process"===u,selectable:!0,primaryKey:"_id",selectedRow:n,onSelectRow:e=>r(e)}),c.length||"success"!==u?null:l.createElement("div",{className:"text-center my-10"},l.createElement(s.b,{to:"/alamat-pengiriman/tambah"},"Kamu belum memiliki alamat pengiriman ",l.createElement("br",null)," ",l.createElement("br",null),l.createElement(o.b,null," Tambah alamat "))),l.createElement("br",null)," ",l.createElement("br",null),l.createElement(o.n,{desktop:2,tablet:2,mobile:2},l.createElement("div",null,l.createElement(o.b,{onClick:t=>a(e-1),color:"gray",iconBefore:l.createElement(Ke.a,null)},"Sebelumnya")),l.createElement("div",{className:"text-right"},l.createElement(o.b,{onClick:t=>a(e+1),disabled:!n,color:"red",iconAfter:l.createElement(_.a,null)},"Selanjutnya")))):null,2===e?l.createElement("div",null,l.createElement(o.r,{columns:[{Header:"",accessor:"label"},{Header:"",accessor:"value"}],items:[{label:"Alamat",value:l.createElement("div",null,n.nama," ",l.createElement("br",null),n.provinsi,", ",n.kabupaten,", ",n.kecamatan,", ",n.kelurahan," ",l.createElement("br",null),n.detail)},{label:"Subtotal",value:C(x(t))},{label:"Ongkir",value:C(E)},{label:"Total",value:l.createElement("b",null,C(x(t)+parseInt(E)))}],showPagination:!1}),l.createElement("br",null),l.createElement(o.n,{desktop:2,tablet:2,mobile:2},l.createElement("div",null,l.createElement(o.b,{onClick:t=>a(e-1),color:"gray",iconBefore:l.createElement(Ke.a,null)},"Sebelumnya")),l.createElement("div",{className:"text-right"},l.createElement(o.b,{onClick:async function(){let e={delivery_fee:E,delivery_address:n._id},{data:a}=await async function(e){let{token:a}=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{};return await G.post("".concat(d,"/api/orders"),e,{headers:{authorization:"Bearer ".concat(a)}})}(e);(null===a||void 0===a?void 0:a.error)||(b.push("/invoice/".concat(a._id)),h({type:T}))},color:"red",size:"large",iconBefore:l.createElement(Ge.a,null)},"Bayar")))):null):l.createElement(i.Redirect,{to:"/"})}const aa=[{Header:"Nama",accessor:"nama"},{Header:"Detail",accessor:e=>l.createElement("div",null,e.provinsi,", ",e.kabupaten,", ",e.kecamatan,", ",e.kelurahan," ",l.createElement("br",null),e.detail)}];function ta(){let{data:e,limit:a,page:t,status:n,count:r,setPage:c}=Ye();return l.createElement(o.j,{size:"large"},l.createElement("div",null,l.createElement(S,null),l.createElement(o.s,{as:"h3"}," Alamat pengiriman "),l.createElement("br",null),l.createElement("div",null,l.createElement(s.b,{to:"/alamat-pengiriman/tambah"},l.createElement(o.b,null,"Tambah baru")),l.createElement("br",null),l.createElement("br",null),l.createElement(o.r,{items:e,columns:aa,totalItems:r,page:t,perPage:a,isLoading:"process"===n,onPageChange:e=>c(e)})),"success"!==n||e.length?null:l.createElement("div",{className:"text-center p-10"},"Kamu belum menambahkan alamat pengiriman. ",l.createElement("br",null),l.createElement(s.b,{to:"/alamat-pengiriman/tambah"},l.createElement(o.b,null," Tambah Baru ")))))}var la=t(31);function na(e){let{tingkat:a,kodeInduk:t,onChange:n,value:r}=e,[c,s]=l.useState([]),[i,u]=l.useState(!1);return l.useEffect(()=>{u(!0),J.a.get("".concat(d,"/api/wilayah/").concat(a,"?\nkode_induk=").concat(t)).then(e=>{let{data:a}=e;return s(a)}).finally(e=>u(!1))},[t,a]),l.createElement(o.o,{options:c.map(e=>({label:e.nama,value:e.kode})),onChange:n,value:r,isLoading:i,isDisabled:i||!c.length})}na.defaultProps={tingkat:"provinsi"};const ra={required:{value:!0,message:"Nama alamat tidak boleh kosong."},maxLength:{value:500,message:"Panjang nama alamat maksimal 500 karakter"},minLength:{value:5,message:"Panjang nama alamat minimal 5 karakter"}},ca={required:{value:!0,message:"Provinsi harus dipilih."}},sa={required:{value:!0,message:"Kabupaten harus dipilih."}},ia={required:{value:!0,message:"Kecamatan harus dipilih."}},oa={required:{value:!0,message:"Kelurahan harus dipilih."}},ua={required:{value:!0,message:"Detail alamat harus diisi"},maxLength:{value:1e3,message:"Panjang detail alamat maksimal 1000 karakter"}};function ma(){var e,a,t,n,r,c,s,u,m;let g=Object(i.useHistory)(),{handleSubmit:E,register:p,errors:v,setValue:b,watch:h,getValues:f}=Object(la.a)(),k=h();l.useEffect(()=>{p({name:"provinsi"},ca),p({name:"kabupaten"},sa),p({name:"kecamatan"},ia),p({name:"kelurahan"},oa)},[p]),l.useEffect(()=>{b("kabupaten",null),b("kecamatan",null),b("kelurahan",null)},[k.provinsi,b]),l.useEffect(()=>{b("kecamatan",null),b("kelurahan",null)},[k.kabupaten,b]),l.useEffect(()=>{b("kelurahan",null)},[k.kecamatan,b]);const y=(e,a)=>b(e,a,{shouldValidate:!0,shouldDirty:!0});return l.createElement(o.j,null,l.createElement(S,null),l.createElement("br",null),l.createElement("div",null,l.createElement("form",{onSubmit:E(async e=>{let a={nama:e.nama_alamat,detail:e.detail_alamat,provinsi:e.provinsi.label,kabupaten:e.kabupaten.label,kecamatan:e.kecamatan.label,kelurahan:e.kelurahan.label},{data:t}=await async function(e){let{token:a}=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{};return await J.a.post(d+"/api/delivery-addresses",e,{headers:{authorization:"Bearer ".concat(a)}})}(a);t.error||g.push("/alamat-pengiriman")})},l.createElement(o.g,{label:"Nama alamat",errorMessage:null===(e=v.nama_alamat)||void 0===e?void 0:e.message,color:"black"},l.createElement(o.i,{placeholder:"Nama alamat",fitContainer:!0,name:"nama_alamat",ref:p(ra)})),l.createElement(o.g,{label:"Provinsi",errorMessage:null===(a=v.provinsi)||void 0===a?void 0:a.message,color:"black"},l.createElement(na,{onChange:e=>y("provinsi",e),name:"provinsi",value:f().provinsi})),l.createElement(o.g,{label:"Kabupaten/kota",errorMessage:null===(t=v.kabupaten)||void 0===t?void 0:t.message,color:"black"},l.createElement(na,{tingkat:"kabupaten",kodeInduk:null===(n=f().provinsi)||void 0===n?void 0:n.value,onChange:e=>y("kabupaten",e),value:f().kabupaten})),l.createElement(o.g,{label:"Kecamatan",errorMessage:null===(r=v.kecamatan)||void 0===r?void 0:r.message,color:"black"},l.createElement(na,{tingkat:"kecamatan",kodeInduk:null===(c=f().kabupaten)||void 0===c?void 0:c.value,onChange:e=>y("kecamatan",e),value:f().kecamatan})),l.createElement(o.g,{label:"Kelurahan",errorMessage:null===(s=v.kelurahan)||void 0===s?void 0:s.message,color:"black"},l.createElement(na,{tingkat:"desa",kodeInduk:null===(u=f().kecamatan)||void 0===u?void 0:u.value,onChange:e=>y("kelurahan",e),value:f().kelurahan})),l.createElement(o.g,{label:"Detail alamat",errorMessage:null===(m=v.detail_alamat)||void 0===m?void 0:m.message,color:"black"},l.createElement(o.t,{placeholder:"Detail alamat",fitContainer:!0,name:"detail_alamat",ref:p(ua)})),l.createElement(o.b,{fitContainer:!0},"Simpan"))))}const da={required:{value:!0,message:"Nama lengkap harus diisi."},maxLength:{value:500,message:"Panjang nama lengkap maksimal 500 karakter."},minLength:{value:5,message:"Minimal 5 karakter"}},ga={required:{value:!0,message:"Email harus diisi."},maxLength:{value:255,message:"Panjang email maksimal 255 karakter."},pattern:{value:/^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/,message:"Email tidak valid"}},Ea={required:{value:!0,message:"Password harus diisi."},maxLength:{value:255,message:"Panjang password maksimal 255 karakter."}},pa={required:{value:!0,message:"Konfirmasi password harus diisi."}},va="idle",ba="process",ha="success",fa="error";function ka(){var e,a,t,n;let{register:r,handleSubmit:c,errors:u,setError:m}=Object(la.a)(),[g,E]=l.useState(va),p=Object(i.useHistory)();return l.createElement(o.j,{size:"small"},l.createElement(o.d,{color:"white"},l.createElement("div",{className:"text-center mb-5"},l.createElement(h,null)),l.createElement("form",{onSubmit:c(async e=>{let{password:a,password_confirmation:t}=e;if(a!==t)return m("password_confirmation",{type:"equality",message:"Konfirmasi password harus dama dengan password"});E(ba);let{data:l}=await async function(e){return await J.a.post("".concat(d,"/auth/register"),e)}(e);if(l.error){return Object.keys(l.fields).forEach(e=>{var a,t;m(e,{type:"server",message:null===(a=l.fields[e])||void 0===a||null===(t=a.properties)||void 0===t?void 0:t.message})}),void E(fa)}E(ha),p.push("/register/berhasil")})},l.createElement(o.g,{errorMessage:null===(e=u.full_name)||void 0===e?void 0:e.message},l.createElement(o.i,{name:"full_name",placeholder:"Nama Lengkap",fitContainer:!0,ref:r(da)})),l.createElement(o.g,{errorMessage:null===(a=u.email)||void 0===a?void 0:a.message},l.createElement(o.i,{name:"email",placeholder:"Email",fitContainer:!0,ref:r(ga)})),l.createElement(o.g,{errorMessage:null===(t=u.password)||void 0===t?void 0:t.message},l.createElement(o.h,{name:"password",placeholder:"Password",fitContainer:!0,ref:r(Ea)})),l.createElement(o.g,{errorMessage:null===(n=u.password_confirmation)||void 0===n?void 0:n.message},l.createElement(o.h,{name:"password_confirmation",placeholder:"Konfirmasi Password",fitContainer:!0,ref:r(pa)})),l.createElement(o.b,{size:"large",fitContainer:!0,disabled:g===ba}," ",g===ba?"Sedang Mendaftar":"Daftar")),l.createElement("div",{className:"text-center mt-2"},"Sudah punya akun? ",l.createElement(s.b,{to:"/login"}," ",l.createElement("b",null," Masuk Sekarang. ")," "))))}var ya=t(79);function Sa(){return l.createElement(o.j,{size:"small"},l.createElement(o.d,{color:"white"},l.createElement("div",{className:"text-center"},l.createElement(o.s,{as:"h3"},"Pendaftaran berhasil"),l.createElement(o.s,null,"Silahkan Masuk Ke aplikasi"),l.createElement("br",null),l.createElement(ya.Link,{to:"/login"},l.createElement(o.b,{fitContainer:!0},"Masuk")))))}const wa={required:{value:!0,message:"Nama lengkap harus diisi."},maxLength:{value:500,message:"Panjang nama lengkap maksimal 500 karakter."}},_a={required:{value:!0,message:"Password tidak boleh kosong."},maxLength:{value:255,message:"Panjang password maksimal 255 karakter."}},Pa="idle",Na="process",xa="success",Ca="error";function Ia(){var e,a;const{register:t,handleSubmit:n,errors:r,setError:c}=Object(la.a)(),[u,m]=l.useState(Pa),g=Object(f.b)(),E=Object(i.useHistory)();return l.createElement(o.j,{size:"small"},l.createElement("br",null),l.createElement(o.d,{color:"white"},l.createElement("div",{className:"text-center mb-5"},l.createElement(h,null)),l.createElement("form",{onSubmit:n(async e=>{let{email:a,password:t}=e;m(Na);let{data:l}=await async function(e,a){return await J.a.post("".concat(d,"/auth/login"),{email:e,password:a})}(a,t);if(l.error)c("password",{type:"invalidCredential",message:l.message}),m(Ca);else{let{user:e,token:a}=l;g(function(e,a){return{type:ee,user:e,token:a}}(e,a)),E.push("/")}m(xa)})},l.createElement(o.g,{errorMessage:null===(e=r.email)||void 0===e?void 0:e.message},l.createElement(o.i,{placeholder:"email",fitContainer:!0,name:"email",ref:t(wa)})),l.createElement(o.g,{errorMessage:null===(a=r.password)||void 0===a?void 0:a.message},l.createElement(o.h,{placeholder:"password",name:"password",fitContainer:!0,ref:t(_a)})),l.createElement(o.b,{color:"blue",fitContainer:!0,size:"large",disabled:"process"===u},"Login")),l.createElement("div",{className:"text-center mt-2"},"Belum punya akun? ",l.createElement(s.b,{to:"/register"},l.createElement("b",null,"Daftar sekarang. ")))))}var Oa=function(){return n.a.useEffect(()=>{me.subscribe(ve),ge()},[]),n.a.createElement(f.a,{store:me},n.a.createElement(s.a,null,n.a.createElement(i.Switch,null,n.a.createElement(he,{path:"/logout"},n.a.createElement(ye,null)),n.a.createElement(he,{path:"/pesanan"},n.a.createElement(Ne,null)),n.a.createElement(he,{path:"/account"},n.a.createElement(qe,null)),n.a.createElement(he,{path:"/invoice/:order_id"},n.a.createElement(He,null)),n.a.createElement(he,{path:"/checkout"},n.a.createElement(ea,null)),n.a.createElement(he,{path:"/alamat-pengiriman/tambah"},n.a.createElement(ma,null)),n.a.createElement(he,{path:"/alamat-pengiriman"},n.a.createElement(ta,null)),n.a.createElement(be,{path:"/register/berhasil"},n.a.createElement(Sa,null)),n.a.createElement(be,{path:"/register"},n.a.createElement(ka,null)),n.a.createElement(be,{path:"/login"},n.a.createElement(Ia,null)),n.a.createElement(i.Route,{path:"/"},n.a.createElement(Q,null)))))};t(155);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Oa,null)),document.getElementById("root"))},80:function(e,a,t){e.exports=t(156)}},[[80,1,2]]]);
//# sourceMappingURL=main.52548783.chunk.js.map