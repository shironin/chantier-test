import{b as H}from"./chunk-T3VIHPXC.js";import{V as O,X as $,Z as V,fa as X,g as N,ga as U,h as z,l as A}from"./chunk-I4KBGCLF.js";import{a as q}from"./chunk-VWBOCZWV.js";import"./chunk-7DRQIXYS.js";import{$a as D,Ab as R,Bb as T,Cb as l,Db as c,Fb as E,Ja as f,Kb as b,Lb as j,Na as C,P as u,U as p,Ya as S,Z as x,Za as M,_ as k,_a as I,a as m,ab as w,b as y,bb as g,cb as r,db as a,eb as d,ga as v,la as P,lb as _,pb as B,qb as F,xb as L,ya as o}from"./chunk-LGLN3E3P.js";var h=class e{http=p(A);apiUrl=p(U);getProjectTypes(){return this.http.get(this.apiUrl+"/operation-types")}getProjects(n){return n.page===void 0&&(n.page=1),n.itemsPerPage===void 0&&(n.itemsPerPage=10),n.orderBy===void 0&&(n.orderBy="id"),n.orderDirection===void 0&&(n.orderDirection="desc"),this.http.get(this.apiUrl+"/projects",{params:m({page:n.page,itemsPerPage:n.itemsPerPage,[`order[${n.orderBy}]`]:n.orderDirection},n.status!==void 0&&{"status.statusSubCategory.statusCategory.id":n.status})})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})};var J=e=>e&&(e.address?.otherAddress?[e.address?.otherCity,e.address?.otherAddress,e.address?.otherAddressComplement,e.address?.otherPostalCode]:[e.address?.city,e.address?.address,e.address?.addressComplement,e.address?.postalCode]).filter(i=>typeof i=="string").map(i=>i.trim()).filter(i=>!!i.length).join(", ")||"--";var K=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var ee={root:{position:"relative"}},te={root:({instance:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},Q=(()=>{class e extends ${name="skeleton";theme=K;classes=te;inlineStyles=ee;static \u0275fac=(()=>{let t;return function(s){return(t||(t=P(e)))(s||e)}})();static \u0275prov=u({token:e,factory:e.\u0275fac})}return e})();var W=(()=>{class e extends V{styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=p(Q);get containerStyle(){let t=this._componentStyle?.inlineStyles.root,i;return this.size?i=y(m({},t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):i=y(m({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius}),i}static \u0275fac=(()=>{let t;return function(s){return(t||(t=P(e)))(s||e)}})();static \u0275cmp=f({type:e,selectors:[["p-skeleton"]],hostVars:7,hostBindings:function(i,s){i&2&&(S("aria-hidden",!0)("data-pc-name","skeleton")("data-pc-section","root"),R(s.containerStyle),T(s.cn(s.cx("root"),s.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[E([Q]),C],decls:0,vars:0,template:function(i,s){},dependencies:[z,O],encapsulation:2,changeDetection:0})}return e})();var ne=(e,n)=>n.id;function ie(e,n){e&1&&d(0,"p-skeleton",5)(1,"p-skeleton",5)(2,"p-skeleton",5)(3,"p-skeleton",5)(4,"p-skeleton",5)(5,"p-skeleton",5)}function re(e,n){if(e&1){let t=_();r(0,"div",4)(1,"div",6)(2,"h3",7),l(3),a(),r(4,"p-button",8),B("onClick",function(s){x(t);let Z=L(6);return k(Z.toggle(s))}),a()(),d(5,"p-menu",9,0),r(7,"div",10),d(8,"span",11),r(9,"span",12),l(10),a()(),r(11,"div",13),l(12),a(),r(13,"div",14)(14,"div",15),d(15,"span",16),r(16,"span",17),l(17),a()(),r(18,"div",15),d(19,"span",18),r(20,"span",17),l(21),a()(),r(22,"div",15),d(23,"span",19),r(24,"span",17),l(25),a()()(),r(26,"div",10),d(27,"span",20),r(28,"span",12),l(29),b(30,"date"),b(31,"date"),a()(),r(32,"div",21),d(33,"p-button",22),a()()}if(e&2){let t=n.$implicit,i=F();o(3),c(t.title||"--"),o(),g("text",!0),o(),g("model",i.getProjectMenu(t))("popup",!0),o(5),c(i.getProjectAddress(t)),o(2),c(t.description),o(5),c(t.usersInProjectCount),o(4),c(t.reportsCount),o(4),c(t.filesCount),o(4),c((t.startDate?j(30,10,t.startDate,"dd.MM.yyyy"):"--")+" - "+(t.endDate?j(31,13,t.endDate,"dd.MM.yyyy"):"--"))}}var Y=class e{projects=v([]);projectsLoading=v(!1);addressCache=new Map;clientNameCache=new Map;projectService=p(h);ngOnInit(){this.loadProjects()}loadProjects(){this.projects.set([]),this.projectsLoading.set(!0),this.projectService.getProjects({itemsPerPage:20}).subscribe({next:n=>{this.projectsLoading.set(!1),this.projects.set(n.items)},error:()=>{this.projectsLoading.set(!1)}})}getProjectMenu(n){return[{label:"view",icon:"pi pi-eye"},{label:"edit",icon:"pi pi-pencil"},{label:"delete",icon:"pi pi-trash",styleClass:"some-here",command:()=>{console.log(`Delete project: ${n.title}`)}}]}getProjectAddress(n){if(this.addressCache.has(n.id))return this.addressCache.get(n.id)||"--";let t=J(n);return this.addressCache.set(n.id,t),t}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-project-list-page"]],decls:6,vars:2,consts:[["projectMenu",""],[1,"pb-10"],[3,"title"],[1,"grid","sm:grid-cols-2","lg:grid-cols-3","gap-6"],[1,"shadow-sm","rounded-lg","p-6","flex","flex-col","gap-2","bg-white"],["height","6rem"],[1,"grid","[grid-template-columns:auto_30px]"],[1,"font-bold","text-xl"],["icon","pi pi-ellipsis-v","size","small",3,"onClick","text"],[3,"model","popup"],[1,"flex","items-center","gap-2"],[1,"pi","pi-map-marker","text-gray-400"],[1,"text-sm"],[1,"text-sm","truncate-2"],[1,"grid","grid-cols-3"],[1,"flex","items-center","gap-2","justify-center"],[1,"pi","pi-users","text-gray-400"],[1,""],[1,"pi","pi-image","text-gray-400"],[1,"pi","pi-file","text-gray-400"],[1,"pi","pi-calendar","text-gray-400"],[1,"w-full","flex-1","content-end","mt-4"],["label","view","icon","pi pi-eye",1,"grid"]],template:function(t,i){t&1&&(r(0,"div",1),d(1,"app-title-text",2),r(2,"div",3),M(3,ie,6,0),D(4,re,34,16,"div",4,ne),a()()),t&2&&(o(),g("title","Projects"),o(2),I(i.projectsLoading()?3:-1),o(),w(i.projects()))},dependencies:[X,H,W,q,N],encapsulation:2})};export{Y as ProjectListPage};
