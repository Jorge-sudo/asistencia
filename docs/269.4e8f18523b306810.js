"use strict";(self.webpackChunkFrontend_Asistencia=self.webpackChunkFrontend_Asistencia||[]).push([[269],{5269:(z,h,s)=>{s.r(h),s.d(h,{LoginModule:()=>D});var u=s(6814),f=s(8075),l=s(6223),v=s(9397),_=s(6306),d=s(5219),e=s(5879),I=s(8983),g=s(707),b=s(3714),x=s(7853),m=s(4104),k=s(7161);function T(n,a){1&n&&e._UZ(0,"p-message",18)}function F(n,a){1&n&&e._UZ(0,"p-message",19)}let w=(()=>{class n{constructor(t,o){this.authService=t,this.messageService=o,this.userForm=new l.cw({})}ngOnInit(){this.initForm()}initForm(){this.userForm=new l.cw({email:new l.NI("",[l.kI.required,l.kI.email]),contrasenia:new l.NI("",[l.kI.required,l.kI.minLength(6)])})}submitForm(){this.userForm.valid&&this.authService.login(this.userForm.value).pipe((0,v.b)(t=>{this.messageService.add({severity:"success",summary:"Exito",detail:"Inicio de sesi\xf3n correcto"}),this.userForm.reset()}),(0,_.K)(t=>(this.messageService.add({severity:"error",summary:"Error",detail:"Usuario o contrase\xf1a incorrectos"}),t))).subscribe()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(I.e),e.Y36(d.ez))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],features:[e._Bn([d.ez])],decls:22,vars:6,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(0, 0, 0, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],[1,"text-center","mb-5"],["src","assets/layout/images/logoSalesiana.png","alt","Image","height","50",1,"mb-3"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium"],[3,"formGroup","ngSubmit"],["class","block text-900 text-xl font-medium mb-2","severity","warn","text","El email es requerido",4,"ngIf"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email","type","text","placeholder","Email address","pInputText","","formControlName","email","required","",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem"],["class","block text-900 text-xl font-medium mb-2","severity","warn","text","La contrase\xf1a es requerida",4,"ngIf"],["for","password",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","placeholder","Password","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem","formControlName","contrasenia","required","",3,"toggleMask"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],["pButton","","pRipple","","label","Iniciar Sessi\xf3n","type","submit",1,"w-full","p-3","text-xl",3,"disabled"],[3,"life"],["severity","warn","text","El email es requerido",1,"block","text-900","text-xl","font-medium","mb-2"],["severity","warn","text","La contrase\xf1a es requerida",1,"block","text-900","text-xl","font-medium","mb-2"]],template:function(o,i){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5)(6,"div",6),e.TgZ(7,"span",7),e._uU(8,"SISTEMA CONTROL DE ASISTENCIA"),e.qZA()(),e.TgZ(9,"div")(10,"form",8),e.NdJ("ngSubmit",function(){return i.submitForm()}),e.YNc(11,T,1,0,"p-message",9),e.TgZ(12,"label",10),e._uU(13,"Email"),e.qZA(),e._UZ(14,"input",11),e.YNc(15,F,1,0,"p-message",12),e.TgZ(16,"label",13),e._uU(17,"Password"),e.qZA(),e._UZ(18,"p-password",14)(19,"div",15)(20,"button",16),e.qZA()()()()()(),e._UZ(21,"p-toast",17)),2&o){let c,r;e.xp6(10),e.Q6J("formGroup",i.userForm),e.xp6(1),e.Q6J("ngIf",(null==(c=i.userForm.get("email"))?null:c.invalid)&&(null==(c=i.userForm.get("email"))?null:c.touched)),e.xp6(4),e.Q6J("ngIf",(null==(r=i.userForm.get("contrasenia"))?null:r.invalid)&&(null==(r=i.userForm.get("contrasenia"))?null:r.touched)),e.xp6(3),e.Q6J("toggleMask",!0),e.xp6(2),e.Q6J("disabled",i.userForm.invalid),e.xp6(1),e.Q6J("life",1e4)}},dependencies:[u.O5,g.Hq,b.o,x.ro,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,m.FN,k.q],encapsulation:2})}return n})(),J=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[f.Bz.forChild([{path:"",component:w}]),f.Bz]})}return n})();var C=s(2332),y=s(2591);const M=["cb"];function S(n,a){if(1&n&&e._UZ(0,"span",10),2&n){const t=e.oxw(3);e.Q6J("ngClass",t.checkboxIcon)}}function Z(n,a){1&n&&e._UZ(0,"CheckIcon",11),2&n&&e.Q6J("styleClass","p-checkbox-icon")}function Q(n,a){if(1&n&&(e.ynx(0),e.YNc(1,S,1,1,"span",8),e.YNc(2,Z,1,1,"CheckIcon",9),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.checkboxIcon),e.xp6(1),e.Q6J("ngIf",!t.checkboxIcon)}}function E(n,a){}function A(n,a){1&n&&e.YNc(0,E,0,0,"ng-template")}function L(n,a){if(1&n&&(e.TgZ(0,"span",12),e.YNc(1,A,1,0,null,13),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",t.checkboxIconTemplate)}}function N(n,a){if(1&n&&(e.ynx(0),e.YNc(1,Q,3,2,"ng-container",5),e.YNc(2,L,2,1,"span",7),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.checkboxIconTemplate),e.xp6(1),e.Q6J("ngIf",t.checkboxIconTemplate)}}const B=function(n,a,t){return{"p-checkbox-label":!0,"p-checkbox-label-active":n,"p-disabled":a,"p-checkbox-label-focus":t}};function V(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"label",14),e.NdJ("click",function(i){e.CHM(t);const c=e.oxw(),r=e.MAs(3);return e.KtG(c.onClick(i,r,!0))}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Tol(t.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,B,t.checked(),t.disabled,t.focused)),e.uIk("for",t.inputId),e.xp6(1),e.Oqu(t.label)}}const U=function(n,a,t){return{"p-checkbox p-component":!0,"p-checkbox-checked":n,"p-checkbox-disabled":a,"p-checkbox-focused":t}},O=function(n,a,t){return{"p-highlight":n,"p-disabled":a,"p-focus":t}},Y={provide:l.JU,useExisting:(0,e.Gpc)(()=>j),multi:!0};let j=(()=>{class n{cd;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;trueValue=!0;falseValue=!1;onChange=new e.vpe;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(t){this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{"icon"===t.getType()&&(this.checkboxIconTemplate=t.template)})}onClick(t,o,i){t.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(t),i&&o.focus())}updateModel(t){let o;this.binary?(o=this.checked()?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(o=this.checked()?this.model.filter(i=>!C.gb.equals(i,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this.onChange.emit({checked:o,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:C.gb.contains(this.value,this.model)}static \u0275fac=function(o){return new(o||n)(e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["p-checkbox"]],contentQueries:function(o,i,c){if(1&o&&e.Suo(c,d.jx,4),2&o){let r;e.iGM(r=e.CRH())&&(i.templates=r)}},viewQuery:function(o,i){if(1&o&&e.Gf(M,5),2&o){let c;e.iGM(c=e.CRH())&&(i.inputViewChild=c.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([Y])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(o,i){if(1&o){const c=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(){return i.onFocus()})("blur",function(){return i.onBlur()})("change",function(p){return i.handleChange(p)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(p){e.CHM(c);const G=e.MAs(3);return e.KtG(i.onClick(p,G,!0))}),e.YNc(5,N,3,2,"ng-container",5),e.qZA()(),e.YNc(6,V,2,9,"label",6)}2&o&&(e.Tol(i.styleClass),e.Q6J("ngStyle",i.style)("ngClass",e.kEZ(18,U,i.checked(),i.disabled,i.focused)),e.xp6(2),e.Q6J("readonly",i.readonly)("value",i.value)("checked",i.checked())("disabled",i.disabled),e.uIk("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-checked",i.checked())("required",i.required),e.xp6(2),e.Q6J("ngClass",e.kEZ(22,O,i.checked(),i.disabled,i.focused)),e.xp6(1),e.Q6J("ngIf",i.checked()),e.xp6(1),e.Q6J("ngIf",i.label))},dependencies:function(){return[u.mk,u.O5,u.tP,u.PC,y.n]},styles:["@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}\n"],encapsulation:2,changeDetection:0})}return n})(),q=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[u.ez,y.n,d.m8]})}return n})(),D=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.ez,J,g.hJ,q,b.j,x.gz,l.UX,m.EV,k.O,m.EV]})}return n})()}}]);