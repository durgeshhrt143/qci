(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/qci-logo.8849a3cd.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e){e.exports={a:"http://13.233.125.160:8000/"}},53:function(e,t,a){e.exports=a.p+"static/media/verify.42fe219d.gif"},55:function(e,t,a){e.exports=a.p+"static/media/o.f8e9b176.png"},56:function(e,t,a){e.exports=a.p+"static/media/404.df29add3.svg"},58:function(e,t,a){e.exports=a(92)},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),i=a(19),o=a(12),s=function(e,t){return Object(o.a)({},e,t)},m={data:null,loading:!1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":var a=Object(o.a)({},t.ulr);return s(Object(o.a)({},e),{data:a,loading:!1});case"LOADING":return s(Object(o.a)({},e),{loading:!0});default:return e}},d={auth:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":var a=t.auth;return s(Object(o.a)({},e),{auth:a});default:return Object(o.a)({},e)}},p=a(20),b=a(48),v=a(2),h=a(3),g=a(5),f=a(4),O=a(6),j=a(33),y=a.n(j),N=a(98),k=a(94),w=a(18),_=a.n(w),A=a(22),S=a(25),C=function(e){var t=e.name,a=(e.label,e.error),n=Object(S.a)(e,["name","label","error"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",Object.assign({id:t,name:t},n)),l.a.createElement("label",{htmlFor:t},"Enter ULR number *"),a&&l.a.createElement("span",{className:"helper-text"},a))},I=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=(e.label,e.options),n=(e.error,Object(S.a)(e,["name","label","options","error"]));return l.a.createElement("div",{className:"input-field"},l.a.createElement("select",Object.assign({name:t,id:t},n),a.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)})))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={data:{},error:{}},a.validate=function(){var e=_.a.validate(a.state.data,a.schema,{abortEarly:!1}).error;if(!e)return null;var t={},n=!0,l=!1,r=void 0;try{for(var c,i=e.details[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var o=c.value;t[o.path[0]]=o.message}}catch(s){l=!0,r=s}finally{try{n||null==i.return||i.return()}finally{if(l)throw r}}return t},a.validateProperty=function(e){var t=e.name,n=e.value,l=Object(A.a)({},t,n),r=Object(A.a)({},t,a.schema[t]),c=_.a.validate(l,r).error;return c?c.details[0].message:null},a.handleChange=function(e){var t=e.currentTarget,n=Object(o.a)({},a.state.errors),l=a.validateProperty(t);l?n[t.name]=l:delete n[t.name];var r=Object(o.a)({},a.state.data);r[t.name]=t.value,a.setState({data:r,errors:n})},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();a.setState({errors:t||{}}),t||a.doSubmit()},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,r=n.data,c=n.errors;return l.a.createElement(C,{name:e,type:a,value:r[e],label:t,error:c[e],onChange:this.handleChange})}},{key:"renderSelect",value:function(e,t,a){var n=this.state,r=n.data,c=n.errors;return l.a.createElement(I,{name:e,value:r[e],label:t,options:a,onChange:this.handleChange,error:c[e]})}},{key:"renderButton",value:function(e){return l.a.createElement("button",{disabled:this.validate(),className:"waves-effect waves-light btn-small"},e)}}]),t}(n.Component),U=a(34),x=a.n(U),L=a(49),D=a(21),T=a.n(D),P=a(29);T.a.interceptors.response.use(null,function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log("logging the error",e),Object(P.b)("An unexpected error occurred.")),Promise.reject(e)});var B={get:T.a.get,post:T.a.post,put:T.a.put,delete:T.a.delete},V=a(52);function F(e){return B.get("".concat(V.a,"assets/public_trail/public_trail?ulr=")+e)}var J=function(e){return{type:"GET_DATA",ulr:e}},q=a(35),G=a.n(q),H=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={data:{ulr:""},errors:{}},a.schema={ulr:_.a.string().required().min(18).label("Enter ULR numbers*")},a.doSubmit=function(){a.props.onGetData(a.state.data.ulr),setTimeout(function(){try{a.props.api.data.ULR&&a.props.history.push("/dashboard"),a.props.history.push("/dashboard")}catch(t){var e=Object(o.a)({},a.state.errors);e.ulr="Please fill the correct ULR numbers above to proceed.",a.setState({errors:e})}},500)},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:this.handleSubmit},this.props.loading&&l.a.createElement("div",{className:"overflow"},l.a.createElement("img",{src:G.a,className:"loading",alt:G.a})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col l10"},this.renderInput("ulr","Enter ULR numbers*")),this.renderButton("submit"))))}}]),t}(R),M=Object(p.b)(function(e){return{api:e.apiDataResponse.data,loading:e.apiDataResponse.loading,auth:e.auth.auth}},function(e){return{onGetData:function(t){return e((a=t,function(){var e=Object(L.a)(x.a.mark(function e(t){var n,l;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING"}),e.next=3,F(a);case 3:n=e.sent,l=n.data,t(J(l));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));var a},onAuth:function(t){return e(function(e){return{type:"AUTH",auth:e}}(t))}}})(H),z=a(53),W=a.n(z),X=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).isUrlExists=function(){var e="header z-depth-4";return e+="/dashboard"===a.props.location.pathname?" active":""},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.getData;return l.a.createElement("header",{className:this.isUrlExists()},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6"},l.a.createElement(k.a,{to:"/",className:"logo"},l.a.createElement("img",{src:y.a,alt:y.a,style:{width:"280px"}}))),l.a.createElement("div",{className:"col l6 right-align"},l.a.createElement(M,Object.assign({},this.props,{getData:e})),l.a.createElement("figure",{className:"m-zero"},l.a.createElement("strong",null,"ULR Verified"),l.a.createElement("img",{src:W.a,alt:"verified"}))))),l.a.createElement("h6",{className:"urlMsg center-align"},"Please fill 18 alphanumeric ULR numbers above to proceed."))}}]),t}(n.PureComponent),Z=Object(N.a)(X),$=function(e){return l.a.createElement("div",{className:"home center-align"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6"},l.a.createElement("span",null,"1"),l.a.createElement("h3",null,"ULR (Unique Lab Report) format #1"),l.a.createElement("p",null,"1",l.a.createElement("sup",null,"st")," 6 digits will be accreditation certificate no. Issued by NABL to the CAB (e.g. TC2345, CC1234, RC5678 etc.)."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6 offset-l6"},l.a.createElement("span",null,"2"),l.a.createElement("h3",null,"ULR (Unique Lab Report) format #2"),l.a.createElement("p",null,"Next 2 digits indicate calendar year Example (18) for 2018."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6"},l.a.createElement("span",null,"3"),l.a.createElement("h3",null,"ULR (Unique Lab Report) format #3"),l.a.createElement("p",null,"Next 1 digit indicate lab no if the CAB is multi location has more than one lab for the accredited scope."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6 col l6 offset-l6"},l.a.createElement("span",null,"4"),l.a.createElement("h3",null,"ULR (Unique Lab Report) format #4"),l.a.createElement("p",null,"Next 8 digits (10th till 17th) will be running No. Starting from 1 and continuing till year end. The number will restart from 0000001 every year on 1st of Jan."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6"},l.a.createElement("span",null,"5"),l.a.createElement("h3",null,"ULR (Unique Lab Report) format #5"),l.a.createElement("p",null,"Last digit (18th) will be indicating the scope of the Lab (partial or full).")))))},K=a(7),Q=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab.general_details;return l.a.createElement("table",{className:"responsive-table"},l.a.createElement("tbody",null,Object.entries(e).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1],r=a.split("_").join(" ");return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("strong",null,r)),l.a.createElement("td",null,n.toString()," "))})))}}]),t}(n.Component),Y=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab.contact_person;return l.a.createElement("table",{className:"responsive-table"},l.a.createElement("tbody",null,Object.entries(e).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1],r=a.split("_").join(" ");return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("strong",null,r)),l.a.createElement("td",null,n.toString()," "))})))}}]),t}(n.Component),ee=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={color:!1},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab.conduct_testing;return l.a.createElement("table",{className:"responsive-table"},l.a.createElement("tbody",null,Object.entries(e).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1],r=a.split("_").join(" ");return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("strong",null,r)),l.a.createElement("td",null,n.toString()," "))})))}}]),t}(n.Component),te=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab.parent_org_detail;return l.a.createElement("table",{className:"responsive-table"},l.a.createElement("tbody",null,Object.entries(e).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1],r=a.split("_").join(" ");return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("strong",null,r)),l.a.createElement("td",null,n.toString()," "))})))}}]),t}(n.Component),ae=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab.legal_identity_details;return console.log(e),l.a.createElement("table",{className:"responsive-table"},l.a.createElement("tbody",null,Object.entries(e).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1],r=a.split("_").join(" ");return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("strong",null,r)),l.a.createElement("td",null,n," "))})))}}]),t}(n.Component),ne=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab.lab_location_details;return console.log(e),l.a.createElement("div",{className:"row"},e.map(function(e,t){return l.a.createElement("div",{className:"col l4 m6",key:t},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content lld"},l.a.createElement("strong",null,"Address :"),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,e.address)),l.a.createElement("div",{className:"card-content lld"},l.a.createElement("strong",null,"Pincode No :"),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,e.pincode)),l.a.createElement("div",{className:"card-content lld"},l.a.createElement("strong",null,"District :"),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,e.district)),l.a.createElement("div",{className:"card-content lld"},l.a.createElement("strong",null,"City :"),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,e.city)),l.a.createElement("div",{className:"card-content lld"},l.a.createElement("strong",null,"Fax No :"),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,e.fax)),l.a.createElement("div",{className:"card-content lld"},l.a.createElement("strong",null,"Email :"),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,e.email))))}))}}]),t}(n.Component),le=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab.discipline,t=e.caliberation,a=e.testing,n=e.medical,r=e.pmp,c=e.rmp,i=JSON.parse(JSON.stringify(a).replace(/\s(?=\w+":)/g,""));return console.log(this.props.lab.discipline),console.log(t),console.log(i),l.a.createElement("table",{className:"responsive-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2",className:"card"},"Lab Discipline"))),l.a.createElement("tbody",{className:"card"},l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Calibration")),l.a.createElement("td",null,Object.entries(t).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Medical")),l.a.createElement("td",null,Object.entries(n).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Pmp")),l.a.createElement("td",null,Object.entries(r).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Rmp")),l.a.createElement("td",null,Object.entries(c).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Testing")),l.a.createElement("td",null,Object.entries(i).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))})))))}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab.internal_audit_management_review,t=JSON.parse(JSON.stringify(e).replace(/\s(?=\w+":)/g,""));return console.log(t),l.a.createElement("table",{className:"responsive-table"},l.a.createElement("tbody",null,Object.entries(t).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1],r=a.split("_").join(" ");return l.a.createElement("tr",{key:a},l.a.createElement("td",null,l.a.createElement("strong",null,r)),l.a.createElement("td",null,n.toString()," "))})))}}]),t}(n.Component),ce=a(15),ie=(a(88),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.lab,t=Object.keys(e);return console.log(t),l.a.createElement(ce.d,null,l.a.createElement(ce.b,null,t.map(function(e,t){var a=e.split("_").join(" ");return l.a.createElement(ce.a,{key:t},a)})),l.a.createElement(ce.c,null,l.a.createElement(Q,{lab:e})),l.a.createElement(ce.c,null,l.a.createElement(Y,{lab:e})),l.a.createElement(ce.c,null,l.a.createElement(ee,{lab:e})),l.a.createElement(ce.c,null,l.a.createElement(te,{lab:e})),l.a.createElement(ce.c,null,l.a.createElement(ae,{lab:e})),l.a.createElement(ce.c,null,l.a.createElement(re,{lab:e})),l.a.createElement(ce.c,null,l.a.createElement(ne,{lab:e})),l.a.createElement(ce.c,null,l.a.createElement(le,{lab:e})))}}]),t}(n.Component)),oe=a(57),se=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.trail,t=e.splice(1,1);return e.unshift.apply(e,Object(oe.a)(t)),console.log(e),l.a.createElement("div",{className:"row"},e.map(function(e,t){return l.a.createElement("div",{className:"col m3 s12",key:e.pancard+t},l.a.createElement("div",{className:"card trail"},l.a.createElement("div",{className:"card-action"},l.a.createElement("strong",null,"Organization :"),l.a.createElement("p",null,e.org_name)),l.a.createElement("div",{className:"card-action"},l.a.createElement("strong",null,"Email :"),l.a.createElement("p",null,e.email)),l.a.createElement("div",{className:"card-action"},l.a.createElement("strong",null,"Unique id :"),l.a.createElement("p",null,e.address)),l.a.createElement("div",{className:"card-action"},l.a.createElement("strong",null,"GST No :"),l.a.createElement("p",null,e.gst_number)),l.a.createElement("div",{className:"card-action"},l.a.createElement("strong",null,"TAN No :"),l.a.createElement("p",null,e.tan_number)),l.a.createElement("div",{className:"card-action"},l.a.createElement("strong",null,"Pancard No :"),l.a.createElement("p",null,e.pancard))))}))}}]),t}(n.Component),me=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.created_on,a=e.file_hash,n=e.file_name;e.issued_to_name;return this.props.data?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l12"},l.a.createElement("div",{className:"card "},l.a.createElement("table",{className:"responsive-table highlight"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Certificate Detail"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Created On :"),l.a.createElement("div",null,t))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Unique File Id :"),l.a.createElement("div",null,a))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"File Name :"),l.a.createElement("div",null,n)))))))):null}}]),t}(n.Component),ue=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.discipline,t=e.caliberation,a=e.testing,n=e.medical,r=e.pmp,c=e.rmp,i=JSON.parse(JSON.stringify(a).replace(/\s(?=\w+":)/g,""));return console.log(t),l.a.createElement("table",{className:"responsive-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2",className:"card"},"Test Report Discipline"))),l.a.createElement("tbody",{className:"card"},l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Calibration")),l.a.createElement("td",null,Object.entries(t).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Medical")),l.a.createElement("td",null,Object.entries(n).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Pmp")),l.a.createElement("td",null,Object.entries(r).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Rmp")),l.a.createElement("td",null,Object.entries(c).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))}))),l.a.createElement("tr",null,l.a.createElement("td",{className:"border"},l.a.createElement("strong",null,"Testing")),l.a.createElement("td",null,Object.entries(i).map(function(e){var t=Object(K.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("strong",null,a)),l.a.createElement("p",null,n.toString()," "))})))))}}]),t}(n.Component),de=function(e){var t=e.data,a=e.keyValue;return l.a.createElement("div",{className:"col l4 m6"},l.a.createElement("div",{className:"card trail",style:{height:165}},l.a.createElement("div",{className:"card-content"},l.a.createElement("strong",null,a),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,t))))},Ee=function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.created_on,a=e.file_hash,n=e.file_name,r=e.issued_to_name,c=e.asset_address,i=e.batch_id,o=e.issued_to_address,s=e.transaction_id,m=e.ULR;return l.a.createElement("div",{className:"row"},l.a.createElement(de,{data:c,keyValue:"Asset Address :"}),l.a.createElement(de,{data:i,keyValue:"Batch Id :"}),l.a.createElement(de,{data:t,keyValue:"Created On :"}),l.a.createElement(de,{data:a,keyValue:"File Hash :"}),l.a.createElement(de,{data:n,keyValue:"File Name :"}),l.a.createElement(de,{data:o,keyValue:"Issued To Address :"}),l.a.createElement(de,{data:r,keyValue:"Issued To Name :"}),l.a.createElement(de,{data:s,keyValue:"Transaction Id :"}),l.a.createElement(de,{data:m,keyValue:"ULR :"}))}}]),t}(n.Component),pe=a(10),be=(a(89),function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={count:20,apis:[{id:0,name:"All"},{id:1,name:"Month"}],data:{api:""},errors:{}},a.schema={api:_.a.string().required()},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.data.api!==this.state.data.api&&("0"===this.state.data.api?this.setState({count:20}):this.setState({count:50}))}},{key:"render",value:function(){if(null===this.props.data)return null;var e=this.props.data.data,t=this.props.data.data,a=t.org_trail,r=t.lab,c=t.discipline;return l.a.createElement(n.Fragment,null,l.a.createElement("section",{className:"dashboard-container",style:{marginTop:"100px"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l12"},l.a.createElement(pe.Accordion,{allowZeroExpanded:!0},l.a.createElement(pe.AccordionItem,null,l.a.createElement(pe.AccordionItemHeading,null,l.a.createElement(pe.AccordionItemButton,null,l.a.createElement("strong",null,"Organization trail"))),l.a.createElement(pe.AccordionItemPanel,null,l.a.createElement("section",null,l.a.createElement(se,{trail:a}),l.a.createElement(me,{data:e})))),l.a.createElement(pe.AccordionItem,null,l.a.createElement(pe.AccordionItemHeading,null,l.a.createElement(pe.AccordionItemButton,null,l.a.createElement("strong",null,"Laboratory"))),l.a.createElement(pe.AccordionItemPanel,null,l.a.createElement(ie,{lab:r}))),l.a.createElement(pe.AccordionItem,null,l.a.createElement(pe.AccordionItemHeading,null,l.a.createElement(pe.AccordionItemButton,null,l.a.createElement("strong",null,"Scope Comparison "))),l.a.createElement(pe.AccordionItemPanel,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6"},l.a.createElement(le,{lab:r})),l.a.createElement("div",{className:"col l6"},l.a.createElement(ue,{discipline:c}))))),l.a.createElement(pe.AccordionItem,null,l.a.createElement(pe.AccordionItemHeading,null,l.a.createElement(pe.AccordionItemButton,null,l.a.createElement("strong",null," Details "))),l.a.createElement(pe.AccordionItemPanel,null,l.a.createElement(Ee,{data:e})))))))))}}]),t}(R)),ve=Object(p.b)(function(e){return{data:e.apiDataResponse.data}})(be),he=a(55),ge=a.n(he),fe=a(56),Oe=a.n(fe),je=function(e){return l.a.createElement("div",{className:"container center-align",style:{marginTop:"-30px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l12"},l.a.createElement("img",{src:ge.a,className:"_o",alt:"o"}),l.a.createElement("img",{src:Oe.a,className:"_notFound",alt:"not found"})),l.a.createElement("h4",{className:"_30N61"},"OOPS!"),l.a.createElement("p",null,"We couldn't find the page you were looking for. ",l.a.createElement("br",null),"Don't panic or you'll wake up the cat. Press the button below to go to homepage."),l.a.createElement(k.a,{to:"/",className:"btn",style:{marginBottom:40}},"Go to homepage")))},ye=a(99),Ne=a(95),ke=a(96),we=(a(90),a(91),function(e){function t(){return Object(v.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Z,{urlExits:!1}),l.a.createElement(P.a,null),l.a.createElement("main",{className:"content"},l.a.createElement(ye.a,null,l.a.createElement(Ne.a,{path:"/dashboard",render:function(e){return l.a.createElement(ve,null)}}),l.a.createElement(Ne.a,{path:"/page-no-found",exact:!0,component:je}),l.a.createElement(Ne.a,{path:"/",exact:!0,component:$}),l.a.createElement(ke.a,{to:"/page-no-found"}))))}}]),t}(n.Component)),_e=a(97);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=Object(i.c)({apiDataResponse:u,auth:E}),Se=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),Ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,Ie=Object(i.e)(Ae,Se,Ce(Object(i.a)(function(e){return function(t){return function(a){console.log("[middleware] Dispatching",a);var n=t(a);return console.log("[middleware] next state",e.getState()),n}}},b.a)));Ie.subscribe(function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(Ie.getState())}),console.log("SUPERMAN",Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_NAME),c.a.render(l.a.createElement(p.a,{store:Ie},l.a.createElement(_e.a,null,l.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.3268552e.chunk.js.map