webpackJsonp([0],{685:function(e,t,o){"use strict";var l=o(73),n=o(190),u=o(0),a=o(139),r=o(686);console.log("`Detail` bundle loaded asynchronously"),t.routes=[{path:"",component:r.Detail,pathMatch:"full"}];var i=function(){function AboutModule(){}return AboutModule.routes=t.routes,AboutModule=__decorate([u.NgModule({declarations:[r.Detail],imports:[l.CommonModule,n.FormsModule,a.RouterModule.forChild(t.routes)]}),__metadata("design:paramtypes",[])],AboutModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},686:function(e,t,o){"use strict";var l=o(0),n=function(){function Detail(){}return Detail.prototype.ngOnInit=function(){console.log("hello `Detail` component")},Detail=__decorate([l.Component({selector:"detail",template:"\n    <h1>Hello from Detail</h1>\n    <router-outlet></router-outlet>\n  "}),__metadata("design:paramtypes",[])],Detail)}();t.Detail=n}});