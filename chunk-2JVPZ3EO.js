import{a as Ge}from"./chunk-GGBODN2V.js";import{N as Ne,O as Te,Q as Oe,S as ke,T as Pe,U as Re,V as ne,X as I,Z as S,a as ge,ca as je,d as xe,f as Ie,fa as Be,h as U,r as Se}from"./chunk-I4KBGCLF.js";import{Ab as ee,Bb as f,Ca as ce,Cb as P,Da as m,Db as fe,Fb as _,Ja as E,Ka as T,La as b,Na as c,O as de,Oa as D,P as V,Q as N,Qa as K,Qb as R,Rb as C,S as B,U as u,Ua as Fe,Ub as te,Wb as Ee,Ya as O,_b as z,a as v,b as y,bb as l,cb as p,db as h,ga as g,i as Ve,ib as pe,jb as he,ka as we,kb as G,l as De,la as d,na as ue,pb as M,q as Me,qb as k,rb as H,sb as x,tb as A,vb as w,w as Ae,wb as F,ya as a,zb as J}from"./chunk-LGLN3E3P.js";var He=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Ct=["header"],Vt=["title"],Dt=["subtitle"],Mt=["content"],At=["footer"],wt=["*",[["p-header"]],[["p-footer"]]],Ft=["*","p-header","p-footer"];function Et(t,e){t&1&&G(0)}function xt(t,e){if(t&1&&(p(0,"div"),x(1,1),D(2,Et,1,0,"ng-container",1),h()),t&2){let n=k();f(n.cx("header")),a(2),l("ngTemplateOutlet",n.headerTemplate||n._headerTemplate)}}function It(t,e){if(t&1&&(pe(0),P(1),he()),t&2){let n=k(2);a(),fe(n.header)}}function St(t,e){t&1&&G(0)}function Nt(t,e){if(t&1&&(p(0,"div"),D(1,It,2,1,"ng-container",2)(2,St,1,0,"ng-container",1),h()),t&2){let n=k();f(n.cx("title")),a(),l("ngIf",n.header&&!n._titleTemplate&&!n.titleTemplate),a(),l("ngTemplateOutlet",n.titleTemplate||n._titleTemplate)}}function Tt(t,e){if(t&1&&(pe(0),P(1),he()),t&2){let n=k(2);a(),fe(n.subheader)}}function Ot(t,e){t&1&&G(0)}function kt(t,e){if(t&1&&(p(0,"div"),D(1,Tt,2,1,"ng-container",2)(2,Ot,1,0,"ng-container",1),h()),t&2){let n=k();f(n.cx("subtitle")),a(),l("ngIf",n.subheader&&!n._subtitleTemplate&&!n.subtitleTemplate),a(),l("ngTemplateOutlet",n.subtitleTemplate||n._subtitleTemplate)}}function Pt(t,e){t&1&&G(0)}function Rt(t,e){t&1&&G(0)}function jt(t,e){if(t&1&&(p(0,"div"),x(1,2),D(2,Rt,1,0,"ng-container",1),h()),t&2){let n=k();f(n.cx("footer")),a(2),l("ngTemplateOutlet",n.footerTemplate||n._footerTemplate)}}var Bt=`
    ${He}

    .p-card {
        display: block;
    }
`,Gt={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ue=(()=>{class t extends I{name="card";theme=Bt;classes=Gt;static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Le=(()=>{class t extends S{header;subheader;set style(n){Te(this._style(),n)||this._style.set(n)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=g(null);_componentStyle=u(Ue);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this._headerTemplate=n.template;break;case"title":this._titleTemplate=n.template;break;case"subtitle":this._subtitleTemplate=n.template;break;case"content":this._contentTemplate=n.template;break;case"footer":this._footerTemplate=n.template;break;default:this._contentTemplate=n.template;break}})}static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["p-card"]],contentQueries:function(i,r,o){if(i&1&&(A(o,ke,5),A(o,Pe,5),A(o,Ct,4),A(o,Vt,4),A(o,Dt,4),A(o,Mt,4),A(o,At,4),A(o,Re,4)),i&2){let s;w(s=F())&&(r.headerFacet=s.first),w(s=F())&&(r.footerFacet=s.first),w(s=F())&&(r.headerTemplate=s.first),w(s=F())&&(r.titleTemplate=s.first),w(s=F())&&(r.subtitleTemplate=s.first),w(s=F())&&(r.contentTemplate=s.first),w(s=F())&&(r.footerTemplate=s.first),w(s=F())&&(r.templates=s)}},hostVars:5,hostBindings:function(i,r){i&2&&(O("data-pc-name","card"),ee(r._style()),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[_([Ue]),c],ngContentSelectors:Ft,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,r){i&1&&(H(wt),D(0,xt,3,3,"div",0),p(1,"div"),D(2,Nt,3,4,"div",0)(3,kt,3,4,"div",0),p(4,"div"),x(5),D(6,Pt,1,0,"ng-container",1),h(),D(7,jt,3,3,"div",0),h()),i&2&&(l("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),a(),f(r.cx("body")),a(),l("ngIf",r.header||r.titleTemplate||r._titleTemplate),a(),l("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),a(),f(r.cx("content")),a(2),l("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),a(),l("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[U,xe,Ie,ne],encapsulation:2,changeDetection:0})}return t})();var Ye=(()=>{class t{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,i){this._renderer=n,this._elementRef=i}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(i){return new(i||t)(m(ce),m(ue))};static \u0275dir=b({type:t})}return t})(),Ht=(()=>{class t extends Ye{static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275dir=b({type:t,features:[c]})}return t})(),Ke=new B("");var Ut={provide:Ke,useExisting:de(()=>ae),multi:!0};function Lt(){let t=ge()?ge().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var $t=new B(""),ae=(()=>{class t extends Ye{_compositionMode;_composing=!1;constructor(n,i,r){super(n,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Lt())}writeValue(n){let i=n??"";this.setProperty("value",i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(i){return new(i||t)(m(ce),m(ue),m($t,8))};static \u0275dir=b({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&M("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[_([Ut]),c]})}return t})();var Wt=new B(""),qt=new B("");function Je(t){return t!=null}function et(t){return Fe(t)?De(t):t}function tt(t){let e={};return t.forEach(n=>{e=n!=null?v(v({},e),n):e}),Object.keys(e).length===0?null:e}function nt(t,e){return e.map(n=>n(t))}function zt(t){return!t.validate}function it(t){return t.map(e=>zt(e)?e:n=>e.validate(n))}function Qt(t){if(!t)return null;let e=t.filter(Je);return e.length==0?null:function(n){return tt(nt(n,e))}}function rt(t){return t!=null?Qt(it(t)):null}function Zt(t){if(!t)return null;let e=t.filter(Je);return e.length==0?null:function(n){let i=nt(n,e).map(et);return Ae(i).pipe(Me(tt))}}function ot(t){return t!=null?Zt(it(t)):null}function $e(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Xt(t){return t._rawValidators}function Yt(t){return t._rawAsyncValidators}function me(t){return t?Array.isArray(t)?t:[t]:[]}function re(t,e){return Array.isArray(t)?t.includes(e):t===e}function We(t,e){let n=me(e);return me(t).forEach(r=>{re(n,r)||n.push(r)}),n}function qe(t,e){return me(e).filter(n=>!re(t,n))}var oe=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=rt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ot(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},ve=class extends oe{name;get formDirective(){return null}get path(){return null}},j=class extends oe{_parent=null;name=null;valueAccessor=null},_e=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Kt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ui=y(v({},Kt),{"[class.ng-submitted]":"isSubmitted"}),st=(()=>{class t extends _e{constructor(n){super(n)}static \u0275fac=function(i){return new(i||t)(m(j,2))};static \u0275dir=b({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&J("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[c]})}return t})();var Q="VALID",ie="INVALID",$="PENDING",Z="DISABLED",q=class{},se=class extends q{value;source;constructor(e,n){super(),this.value=e,this.source=n}},X=class extends q{pristine;source;constructor(e,n){super(),this.pristine=e,this.source=n}},Y=class extends q{touched;source;constructor(e,n){super(),this.touched=e,this.source=n}},W=class extends q{status;source;constructor(e,n){super(),this.status=e,this.source=n}};function Jt(t){return(le(t)?t.validators:t)||null}function en(t){return Array.isArray(t)?rt(t):t||null}function tn(t,e){return(le(e)?e.asyncValidators:t)||null}function nn(t){return Array.isArray(t)?ot(t):t||null}function le(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ye=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,n){this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return R(this.statusReactive)}set status(e){R(()=>this.statusReactive.set(e))}_status=C(()=>this.statusReactive());statusReactive=g(void 0);get valid(){return this.status===Q}get invalid(){return this.status===ie}get pending(){return this.status==$}get disabled(){return this.status===Z}get enabled(){return this.status!==Z}errors;get pristine(){return R(this.pristineReactive)}set pristine(e){R(()=>this.pristineReactive.set(e))}_pristine=C(()=>this.pristineReactive());pristineReactive=g(!0);get dirty(){return!this.pristine}get touched(){return R(this.touchedReactive)}set touched(e){R(()=>this.touchedReactive.set(e))}_touched=C(()=>this.touchedReactive());touchedReactive=g(!1);get untouched(){return!this.touched}_events=new Ve;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(We(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(We(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(qe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(qe(e,this._rawAsyncValidators))}hasValidator(e){return re(this._rawValidators,e)}hasAsyncValidator(e){return re(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(y(v({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new Y(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new Y(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(y(v({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new X(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new X(!0,i))}markAsPending(e={}){this.status=$;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(y(v({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=Z,this.errors=null,this._forEachChild(r=>{r.disable(y(v({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new se(this.value,i)),this._events.next(new W(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(v({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=Q,this._forEachChild(i=>{i.enable(y(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(y(v({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Q||this.status===$)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new se(this.value,n)),this._events.next(new W(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(y(v({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Z:Q}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=$,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:e!==!1};let i=et(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new W(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new K,this.statusChanges=new K}_calculateStatus(){return this._allControlsDisabled()?Z:this.errors?ie:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus($)?$:this._anyControlsHaveStatus(ie)?ie:Q}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new X(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new Y(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){le(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=en(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=nn(this._rawAsyncValidators)}};var at=new B("",{providedIn:"root",factory:()=>be}),be="always";function rn(t,e){return[...e.path,t]}function on(t,e,n=be){an(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ln(t,e),un(t,e),dn(t,e),sn(t,e)}function ze(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function sn(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function an(t,e){let n=Xt(t);e.validator!==null?t.setValidators($e(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Yt(t);e.asyncValidator!==null?t.setAsyncValidators($e(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();ze(e._rawValidators,r),ze(e._rawAsyncValidators,r)}function ln(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&lt(t,e)})}function dn(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&lt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function lt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function un(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function cn(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function pn(t){return Object.getPrototypeOf(t.constructor)===Ht}function hn(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===ae?n=o:pn(o)?i=o:r=o}),r||i||n||null}function Qe(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ze(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var fn=class extends ye{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,n,i){super(Jt(n),tn(i,n)),this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),le(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ze(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Qe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Qe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ze(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var gn={provide:j,useExisting:de(()=>Ce)},Xe=Promise.resolve(),Ce=(()=>{class t extends j{_changeDetectorRef;callSetDisabledState;control=new fn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new K;constructor(n,i,r,o,s,bt){super(),this._changeDetectorRef=s,this.callSetDisabledState=bt,this._parent=n,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=hn(this,o)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let i=n.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),cn(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){on(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Xe.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let i=n.isDisabled.currentValue,r=i!==0&&z(i);Xe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?rn(n,this._parent):[n]}static \u0275fac=function(i){return new(i||t)(m(ve,9),m(Wt,10),m(qt,10),m(Ke,10),m(Ee,8),m(at,8))};static \u0275dir=b({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[_([gn]),c,we]})}return t})();var mn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=T({type:t});static \u0275inj=N({})}return t})();var dt=(()=>{class t{static withConfig(n){return{ngModule:t,providers:[{provide:at,useValue:n.callSetDisabledState??be}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=T({type:t});static \u0275inj=N({imports:[mn]})}return t})();var ut=(()=>{class t extends S{modelValue=g(void 0);$filled=C(()=>Ne(this.modelValue()));writeModelValue(n){this.modelValue.set(n)}static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275dir=b({type:t,features:[c]})}return t})();var ct=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var _n=`
    ${ct}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,yn={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},pt=(()=>{class t extends I{name="inputtext";theme=_n;classes=yn;static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var ht=(()=>{class t extends ut{ngControl=u(j,{optional:!0,self:!0});pcFluid=u(je,{optional:!0,host:!0,skipSelf:!0});pSize;variant=te();fluid=te(void 0,{transform:z});invalid=te(void 0,{transform:z});$variant=C(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=u(pt);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275dir=b({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(i,r){i&1&&M("input",function(s){return r.onInput(s)}),i&2&&f(r.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[_([pt]),c]})}return t})();var ft=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var bn=["*"],Cn=`
    ${ft}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }
`,Vn={root:({instance:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},gt=(()=>{class t extends I{name="inputgroup";theme=Cn;classes=Vn;static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var mt=(()=>{class t extends S{styleClass;_componentStyle=u(gt);static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:3,hostBindings:function(i,r){i&2&&(O("data-pc-name","inputgroup"),f(r.cn(r.cx("root"),r.styleClass)))},inputs:{styleClass:"styleClass"},features:[_([gt]),c],ngContentSelectors:bn,decls:1,vars:0,template:function(i,r){i&1&&(H(),x(0))},dependencies:[U,ne],encapsulation:2})}return t})();var Dn=["*"],Mn={root:"p-inputgroupaddon"},vt=(()=>{class t extends I{name="inputgroupaddon";classes=Mn;static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),_t=(()=>{class t extends S{style;styleClass;_componentStyle=u(vt);get hostStyle(){return this.style}static \u0275fac=(()=>{let n;return function(r){return(n||(n=d(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(i,r){i&2&&(O("data-pc-name","inputgroupaddon"),ee(r.hostStyle),f(r.styleClass),J("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[_([vt]),c],ngContentSelectors:Dn,decls:1,vars:0,template:function(i,r){i&1&&(H(),x(0))},dependencies:[U],encapsulation:2})}return t})();var yt=class t{email=g("marco@marco.com");password=g("1234");credentialsValid=C(()=>this.email()!==""&&this.password()!=="");passwordType=g("password");isLoading=g(!1);authService=u(Ge);router=u(Se);messageService=u(Oe);togglePasswordVisibility(){this.passwordType.update(e=>e==="password"?"text":"password")}login(){this.credentialsValid()&&(this.isLoading.set(!0),this.authService.login(this.email(),this.password()).subscribe({next:()=>{this.isLoading.set(!1),this.router.navigate(["/workspace"])},error:()=>{this.isLoading.set(!1),this.messageService.add({severity:"error",summary:"Login failed",detail:"Invalid credentials",life:3e3})}}))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["app-login-page"]],decls:19,vars:8,consts:[[1,"h-full","flex","items-center","justify-center"],[1,"w-80"],[1,"text-2xl","mb-4"],[1,"flex","flex-col","gap-2"],[1,"flex","flex-col"],["pInputText","","placeholder","Email","autocomplete","off","type","email",3,"ngModelChange","ngModel","disabled"],["pInputText","","autocomplete","off","placeholder","Password",3,"ngModelChange","ngModel","type","disabled"],["severity","secondary",3,"onClick","icon"],[1,"flex","justify-center","mt-6"],["label","Login",3,"onClick","disabled","icon"]],template:function(n,i){n&1&&(p(0,"div",0)(1,"div",1)(2,"p-card")(3,"div",2),P(4,"login"),h(),p(5,"div",3)(6,"div",4)(7,"label"),P(8,"Email"),h(),p(9,"input",5),M("ngModelChange",function(o){return i.email.set(o)}),h()(),p(10,"div",4)(11,"label"),P(12,"Pass"),h(),p(13,"p-input-group")(14,"input",6),M("ngModelChange",function(o){return i.password.set(o)}),h(),p(15,"p-inputgroup-addon")(16,"p-button",7),M("onClick",function(){return i.togglePasswordVisibility()}),h()()()(),p(17,"div",8)(18,"p-button",9),M("onClick",function(){return i.login()}),h()()()()()()),n&2&&(a(9),l("ngModel",i.email())("disabled",i.isLoading()),a(5),l("ngModel",i.password())("type",i.passwordType())("disabled",i.isLoading()),a(2),l("icon",i.passwordType()==="password"?"pi pi-eye":"pi pi-eye-slash"),a(2),l("disabled",!i.credentialsValid()||i.isLoading())("icon",i.isLoading()?"pi pi-spin pi-spinner":""))},dependencies:[Le,ht,dt,ae,st,Ce,mt,_t,Be],encapsulation:2})};export{yt as LoginPage};
