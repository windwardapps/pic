(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),o=a(3),l=a.n(o),i=a(2),u=a.n(i),m=a(9),p=a(4),d=a(5),h=a(7),f=a(6),v=a(8),E=(a(69),a(128)),b=(a(71),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Home"),r.a.createElement("div",null,"..."))}}]),t}(n.Component)),g=(a(73),a(126)),N=a(129),w=a(125),S=(a(75),a(92)),y=a(16),O=a.n(y),j=(a(78),a(127)),k=a(41);a(80);function x(e){var t=Object(k.a)(e.children,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"Screen"},r.a.createElement("div",{className:"nav"},a),r.a.createElement("div",{className:"body"},n))}a(82);var I=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).div=document.createElement("div"),a.div.className="Portal",e.plain&&(a.div.className="Portal plain"),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.root.appendChild(this.div)}},{key:"componentWillUnmount",value:function(){window.root.removeChild(this.div)}},{key:"render",value:function(){return s.a.createPortal(this.props.children,this.div)}}]),t}(n.Component),C=(a(84),a(86),{INITIAL:"INITIAL",SAVING:"SAVING",SAVED:"SAVED",ERROR:"ERROR"}),A={INITIAL:"Save",SAVING:"Saving...",SAVED:"Saved",ERROR:"Error"};function D(){return l.a.defaults.baseURL.replace("/api","")}function F(e){if(!e.file)return"";var t=e.file.split("/");return t[t.length-1]}function R(e){if(!e)return"";var t=e.split("/uploads/"),a=D(),n=t[1];return"".concat(a,"/uploads/").concat(n)}var L=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",phone:"",saveState:C.INITIAL},a.fetchInfo=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(a.getUrl());case 2:t=e.sent,a.setState(t.data);case 4:case"end":return e.stop()}},e,this)})),a.getUrl=function(){var e=a.props,t=e.shoot,n=e.student;return"/shoots/".concat(t.id,"/students/").concat(n.id,"/")},a.submit=function(){var e=a.state.firstName.trim(),t=a.state.lastName.trim(),n=a.state.email.trim(),r=a.state.phone.trim();a.setState({saveState:C.SAVING},Object(m.a)(u.a.mark(function c(){return u.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,l.a.post(a.getUrl(),{firstName:e,lastName:t,email:n,phone:r});case 3:a.setState({saveState:C.SAVED}),setTimeout(function(){return window.location.reload()},500),c.next=11;break;case 7:c.prev=7,c.t0=c.catch(0),a.setState({saveState:C.ERROR}),setTimeout(function(){a.setState({saveState:C.INITIAL})},2e3);case 11:case"end":return c.stop()}},c,this,[[0,7]])})))},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.shoot&&this.props.student&&this.fetchInfo();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){e.shoot&&e.student||!this.props.shoot||!this.props.student||this.fetchInfo()}},{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,n=t.lastName,c=t.email,s=t.phone,o=t.saveState;return r.a.createElement("div",{className:"ContactInfo content-wrapper"},r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{type:"text",value:a,onChange:function(t){return e.setState({firstName:t.target.value})}})),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{type:"text",value:n,onChange:function(t){return e.setState({lastName:t.target.value})}})),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",value:c,onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Phone number:"),r.a.createElement("input",{type:"text",value:s,onChange:function(t){return e.setState({phone:t.target.value})}})),r.a.createElement("div",null,r.a.createElement("button",{disabled:o===C.SAVING||!a.trim(),onClick:this.submit},A[o])))))}}]),t}(n.Component),T=a(40),U=(a(88),a(90),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onKeyDown=function(e){a.props.onKeyDown(e,a.props.image)},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.shoot,a=e.student,c=e.image,s=e.match.params,o=s.shootId,l=s.studentId;return t&&a&&c?r.a.createElement(I,null,r.a.createElement(x,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"flex-row align-center"},r.a.createElement("h3",null,r.a.createElement(S.a,{className:"muted",to:"/"},"Home"),r.a.createElement("span",null,"/"),r.a.createElement(S.a,{className:"muted",to:"/shoots/".concat(o,"/students")},t.name),r.a.createElement("span",null,"/"),r.a.createElement(S.a,{className:"muted",to:"/shoots/".concat(o,"/students/").concat(l,"/images")},a.firstName," ",a.lastName),r.a.createElement("span",null,"/"),F(c)))),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"ImageDetail content"},r.a.createElement("img",{src:R(c.file)}))))):"Loading..."}}]),t}(n.Component)),V=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={files:[]},a.submit=function(){var e=a.props,t=(e.shoot,e.student,a.state.files);a.setState({saveState:C.SAVING},Object(m.a)(u.a.mark(function e(){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=0,r=function(){var e=Object(m.a)(u.a.mark(function e(){var c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=t[n])){e.next=7;break}return e.next=4,a.saveFile(c);case 4:return n++,e.next=7,r();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),e.next=5,r();case 5:a.setState({saveState:C.SAVED}),a.props.history.go(-1),setTimeout(function(){window.location.reload()},500),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),a.setState({saveState:C.ERROR}),setTimeout(function(){a.setState({saveState:C.INITIAL})},2e3);case 14:case"end":return e.stop()}},e,this,[[0,10]])})))},a.saveFile=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,r,c,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props,r=n.shoot,c=n.student,(s=new FormData).append("file",t),e.next=5,l.a.post("/shoots/".concat(r.id,"/students/").concat(c.id,"/images/"),s);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onKeyDown=function(e,t){var n=a.props,r=n.images,c=n.history,s=n.match,o=r.indexOf(t);if("ArrowLeft"===e.code)--o<0&&(o=r.length-1);else{if("ArrowRight"!==e.code)return;++o>r.length-1&&(o=0)}var l=r[o];c.push("".concat(s.url,"/").concat(l.id))},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.shoot,c=t.student,s=t.images,o=t.match,l=this.state.files;return r.a.createElement("div",{className:"Images content-wrapper"},r.a.createElement(N.a,null,r.a.createElement(w.a,{exact:!0,path:o.path,render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(S.a,{to:"".concat(o.url,"/new"),className:"btn"},"New")),r.a.createElement("div",{className:"content images"},s.map(function(e){return r.a.createElement(S.a,{key:e.id,className:"image",to:"".concat(o.url,"/").concat(e.id)},r.a.createElement("img",{src:R(e.file)}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"name"},F(e)),r.a.createElement("div",{className:"date"},O()(e.updatedAt).fromNow())))})))}}),r.a.createElement(w.a,{exact:!0,path:"".concat(o.path,"/new"),render:function(){return r.a.createElement(n.Fragment,{key:"new"},r.a.createElement("div",{className:"header"},r.a.createElement(S.a,{className:"muted",to:o.url},"\u2039 Back")),r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"File:"),r.a.createElement("input",{type:"file",onChange:function(t){return e.setState({files:Object(T.a)(t.target.files)})},multiple:!0})),r.a.createElement("div",null,r.a.createElement("button",{disabled:!l.length,onClick:e.submit},"Save")))))}}),r.a.createElement(w.a,{path:"".concat(o.path,"/:imageId"),render:function(t){return r.a.createElement(U,Object.assign({},t,{shoot:a,student:c,image:s.find(function(e){return e.id===Number(t.match.params.imageId)}),onKeyDown:e.onKeyDown}))}})))}}]),t}(n.Component),G=(a(96),a(39)),M=a.n(G),B=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={url:"",expiresAt:"",saveState:C.INITIAL,showCalendar:!1,style:{}},a.getUrl=function(){var e=a.props,t=e.shoot,n=e.student;return"/shoots/".concat(t.id,"/students/").concat(n.id,"/share/")},a.fetchShareInfo=Object(m.a)(u.a.mark(function e(){var t,n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(a.getUrl());case 2:t=e.sent,n=t.data,r=n.url,c=n.expiresAt,a.setState({url:r,expiresAt:new Date(c)});case 5:case"end":return e.stop()}},e,this)})),a.submit=function(){var e=a.state.expiresAt;a.setState({saveState:C.SAVING},Object(m.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post(a.getUrl(),{expiresAt:e});case 3:a.setState({saveState:C.SAVED}),setTimeout(function(){return window.location.reload()},500),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a.setState({saveState:C.ERROR}),setTimeout(function(){a.setState({saveState:C.INITIAL})},2e3);case 11:case"end":return t.stop()}},t,this,[[0,7]])})))},a.toggleCalendar=function(){var e=a._expiresAtNode.getBoundingClientRect();a.setState({showCalendar:!a.state.showCalendar,style:{position:"absolute",top:e.bottom,left:e.left}})},a.onBackdropClick=function(e){e.target===e.currentTarget&&a.setState({showCalendar:!1})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.student;e.shoot&&t&&this.fetchShareInfo()}},{key:"componentDidUpdate",value:function(e){e.shoot&&e.student||!this.props.shoot||!this.props.student||this.fetchShareInfo()}},{key:"render",value:function(){var e=this,t=this.state,a=t.url,n=t.expiresAt,c=t.saveState,s=t.showCalendar,o=t.style;return a?r.a.createElement("div",{className:"Share content-wrapper"},r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Share URL:"),r.a.createElement("input",{type:"text",value:a,readOnly:!0})),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Expires At:"),r.a.createElement("input",{ref:function(t){return e._expiresAtNode=t},type:"text",value:O()(n).format("M/D/Y"),readOnly:!0,onClick:this.toggleCalendar}),s?r.a.createElement(I,{plain:!0},r.a.createElement("div",{className:"backdrop",onClick:this.onBackdropClick},r.a.createElement("div",{style:o},r.a.createElement(M.a,{value:n,onChange:function(t){return e.setState({expiresAt:t,showCalendar:!1})}})))):null),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{disabled:c===C.SAVING||!n,onClick:this.submit},A[c]),r.a.createElement("button",{onClick:this.sendShareNotification},"Send Invitation Email"))))):"Loading..."}}]),t}(n.Component),K=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.fetchImages=Object(m.a)(u.a.mark(function e(){var t,n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.shoot,r=t.student,e.next=3,l.a.get("/shoots/".concat(n.id,"/students/").concat(r.id,"/images/"));case 3:c=e.sent,a.setState({images:c.data.results});case 5:case"end":return e.stop()}},e,this)})),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.student;e.shoot&&t&&this.fetchImages()}},{key:"componentDidUpdate",value:function(e){e.shoot&&e.student||!this.props.shoot||!this.props.student||this.fetchImages()}},{key:"render",value:function(){var e=this.props,t=e.shoot,a=e.student,c=e.match,s=this.state.images;return t&&a?r.a.createElement(I,null,r.a.createElement(x,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"flex-row align-center"},r.a.createElement("h3",null,r.a.createElement(S.a,{className:"muted",to:"/"},"Home"),r.a.createElement("span",null,"/"),r.a.createElement(S.a,{className:"muted",to:"/shoots/".concat(t.id,"/students")},t.name),r.a.createElement("span",null,"/"),a.firstName," ",a.lastName))),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sidebar students"},r.a.createElement(g.a,{to:"".concat(c.url,"/info")},"Info"),r.a.createElement(g.a,{to:"".concat(c.url,"/images")},"Images"),r.a.createElement(g.a,{to:"".concat(c.url,"/share")},"Share")),r.a.createElement("div",{className:"content"},r.a.createElement(N.a,null,r.a.createElement(w.a,{path:"".concat(c.path,"/info"),render:function(e){return r.a.createElement(L,Object.assign({},e,{shoot:t,student:a}))}}),r.a.createElement(w.a,{path:"".concat(c.path,"/images"),render:function(e){return r.a.createElement(V,Object.assign({},e,{shoot:t,student:a,images:s}))}}),r.a.createElement(w.a,{path:"".concat(c.path,"/share"),render:function(e){return r.a.createElement(B,Object.assign({},e,{shoot:t,student:a}))}}),r.a.createElement(w.a,{exact:!0,path:c.path,render:function(){return r.a.createElement(j.a,{to:"".concat(c.url,"/info")})}})))))):"Loading..."}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",phone:""},a.submit=Object(m.a)(u.a.mark(function e(){var t,n,r,c,s,o,i,m;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.shoot,r=t.match,c=a.state.firstName.trim(),s=a.state.lastName.trim(),o=a.state.email.trim(),i=a.state.phone.trim(),e.next=7,l.a.post("/shoots/".concat(n.id,"/students/"),{firstName:c,lastName:s,email:o,phone:i});case 7:m=e.sent,a.props.history.push("".concat(r.url,"/").concat(m.data.id)),setTimeout(function(){return window.location.reload()},100);case 10:case"end":return e.stop()}},e,this)})),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.shoot,c=t.students,s=t.match,o=this.state,l=o.firstName,i=o.lastName,u=o.email,m=o.phone;return r.a.createElement("div",{className:"Students content-wrapper"},r.a.createElement(N.a,null,r.a.createElement(w.a,{exact:!0,path:s.path,render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(S.a,{to:"".concat(s.url,"/new"),className:"btn"},"New")),r.a.createElement("div",{className:"content list"},c.map(function(e){return r.a.createElement(S.a,{key:e.id,className:"item",to:"".concat(s.url,"/").concat(e.id)},r.a.createElement("span",{className:"name"},"".concat(e.firstName," ").concat(e.lastName)),r.a.createElement("span",{className:"info"},O()(e.updatedAt).fromNow()))})))}}),r.a.createElement(w.a,{exact:!0,path:"".concat(s.path,"/new"),render:function(){return r.a.createElement(n.Fragment,{key:"new"},r.a.createElement("div",{className:"header"},r.a.createElement(S.a,{className:"muted",to:s.url},"\u2039 Back")),r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"First Name:"),r.a.createElement("input",{type:"text",value:l,onChange:function(t){return e.setState({firstName:t.target.value})},autoFocus:!0})),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Last Name:"),r.a.createElement("input",{type:"text",value:i,onChange:function(t){return e.setState({lastName:t.target.value})}})),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",value:u,onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Phone:"),r.a.createElement("input",{type:"text",value:m,onChange:function(t){return e.setState({phone:t.target.value})}})),r.a.createElement("div",null,r.a.createElement("button",{disabled:!l.trim()||!i.trim()||!(u.trim()||m.trim()),onClick:e.submit},"Save")))))}}),r.a.createElement(w.a,{path:"".concat(s.path,"/:studentId"),render:function(e){return r.a.createElement(K,Object.assign({},e,{shoot:a,student:c.find(function(t){return t.id===Number(e.match.params.studentId)})}))}})))}}]),t}(n.Component),H=(a(116),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Settings"},"Settings: ",JSON.stringify(this.props.shoot))}}]),t}(n.Component)),_=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={students:[]},a.fetchStudents=Object(m.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.shoot.id,e.next=3,l.a.get("/shoots/".concat(t,"/students/"));case 3:n=e.sent,a.setState({students:n.data.results});case 5:case"end":return e.stop()}},e,this)})),a.submit=Object(m.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.shoot,n=a.state.value.trim(),e.next=4,l.a.put("/shoots/".concat(t.id),{name:n});case 4:case"end":return e.stop()}},e,this)})),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.shoot&&this.fetchStudents()}},{key:"componentDidUpdate",value:function(e){!e.shoot&&this.props.shoot&&this.fetchStudents()}},{key:"render",value:function(){var e=this.props,t=e.shoot,a=e.match,c=this.state.students;return t?r.a.createElement(I,null,r.a.createElement(x,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"flex-row align-center"},r.a.createElement("h3",null,r.a.createElement(S.a,{className:"muted",to:"/shoots"},"Home"),r.a.createElement("span",null,"/"),t.name))),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sidebar students"},r.a.createElement(g.a,{to:"".concat(a.url,"/settings")},"Settings"),r.a.createElement(g.a,{to:"".concat(a.url,"/students")},"Students")),r.a.createElement("div",{className:"content"},r.a.createElement(N.a,null,r.a.createElement(w.a,{path:"".concat(a.path,"/settings"),render:function(e){return r.a.createElement(H,Object.assign({},e,{shoot:t}))}}),r.a.createElement(w.a,{path:"".concat(a.path,"/students"),render:function(e){return r.a.createElement(P,Object.assign({},e,{shoot:t,students:c}))}}),r.a.createElement(w.a,{exact:!0,path:a.path,render:function(){return r.a.createElement(j.a,{to:"".concat(a.url,"/settings")})}})))))):"Loading..."}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.submit=Object(m.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.value.trim(),e.next=3,l.a.post("/shoots/",{name:t});case 3:n=e.sent,a.props.history.push("/shoots/".concat(n.data.id)),setTimeout(function(){return window.location.reload()},100);case 6:case"end":return e.stop()}},e,this)})),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.shoots,c=t.match;return r.a.createElement("div",{className:"Shoots content-wrapper"},r.a.createElement(N.a,null,r.a.createElement(w.a,{exact:!0,path:"/shoots",render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(S.a,{to:"".concat(c.url,"/new"),className:"btn"},"New")),r.a.createElement("div",{className:"content list"},a.map(function(e){return r.a.createElement(S.a,{key:e.id,className:"item",to:"".concat(c.url,"/").concat(e.id)},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("span",{className:"info"},O()(e.updatedAt).fromNow()))})))}}),r.a.createElement(w.a,{exact:!0,path:"/shoots/new",render:function(){return r.a.createElement(n.Fragment,{key:"new"},r.a.createElement("div",{className:"header"},r.a.createElement(S.a,{className:"muted",to:c.url},"\u2039 Back")),r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",value:e.state.value,onChange:function(t){return e.setState({value:t.target.value})},autoFocus:!0}),r.a.createElement("button",{disabled:!e.state.value.trim(),onClick:e.submit},"Save")))))}}),r.a.createElement(w.a,{path:"".concat(c.path,"/:shootId"),render:function(e){return r.a.createElement(_,Object.assign({},e,{shoot:a.find(function(t){return t.id===Number(e.match.params.shootId)})}))}})))}}]),t}(n.Component),W=(a(118),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={companyName:"",logoFile:"",logoUrl:"",watermarkFile:"",watermarkUrl:"",saveState:C.INITIAL},a.submit=function(){var e=a.state.companyName.trim(),t=a.state,n=t.logoFile,r=t.watermarkFile;a.setState({saveState:C.SAVING},Object(m.a)(u.a.mark(function t(){var c;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=new FormData,e&&c.append("companyName",e),n&&c.append("logoFile",n),r&&c.append("watermarkFile",r),t.next=7,l.a.post("/user/branding/",c);case 7:a.setState({saveState:C.SAVED}),setTimeout(function(){return window.location.reload()},500),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),a.setState({saveState:C.ERROR}),setTimeout(function(){a.setState({saveState:C.INITIAL})},2e3);case 15:case"end":return t.stop()}},t,this,[[0,11]])})))},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t,a,n,r,c,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/user/branding/");case 2:t=e.sent,a=t.data,n=a.companyName,r=a.logoFile,c=a.watermarkFile,s={},n&&(s.companyName=n),r&&(s.logoUrl=r),c&&(s.watermarkUrl=c),this.setState(s);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.companyName,n=t.logoUrl,c=t.watermarkUrl,s=t.saveState,o=r.a.createElement("input",{type:"file",onChange:function(t){return e.setState({logoFile:t.target.files[0]})}}),l=r.a.createElement("input",{type:"file",onChange:function(t){return e.setState({watermarkFile:t.target.files[0]})}}),i=D();return r.a.createElement("div",{className:"Branding content-wrapper"},r.a.createElement("div",{className:"content"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Company Name:"),r.a.createElement("input",{type:"text",value:a,onChange:function(t){return e.setState({companyName:t.target.value})}})),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Logo:"),n?r.a.createElement("div",null,r.a.createElement("img",{src:"".concat(i,"/").concat(n)}),o):o),r.a.createElement("div",{className:"formfield"},r.a.createElement("label",null,"Watermark:"),c?r.a.createElement("div",null,r.a.createElement("img",{src:"".concat(i,"/").concat(c)}),l):l),r.a.createElement("div",null,r.a.createElement("button",{disabled:s===C.SAVING||!a.trim(),onClick:this.submit},A[s])))))}}]),t}(n.Component)),z=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={shoots:[]},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/shoots/");case 2:t=e.sent,this.setState({shoots:t.data.results});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.shoots;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sidebar"},r.a.createElement(g.a,{to:"/shoots"},"Shoots"),r.a.createElement(g.a,{to:"/branding"},"Branding")),r.a.createElement("div",{className:"content"},r.a.createElement(N.a,null,r.a.createElement(w.a,{path:"/shoots",render:function(t){return r.a.createElement(J,Object.assign({},t,{shoots:e}))}}),r.a.createElement(w.a,{path:"/branding",render:function(e){return r.a.createElement(W,e)}}))))}}]),t}(n.Component),X=(a(120),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",msg:null},a.submit=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({msg:null}),t.preventDefault(),t.stopPropagation(),n=a.state,r=n.email,c=n.password,e.next=7,l.a.post("/login/",{email:r,password:c});case 7:if(e.sent.data.success){e.next=10;break}throw new Error("Invalid");case 10:window.location.reload(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),a.setState({msg:"Invalid email/password."});case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,c=t.msg;return r.a.createElement("div",{className:"Login"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("h3",null,"Login"),c?r.a.createElement("p",null,c):null,r.a.createElement("div",{className:"formfield"},r.a.createElement("input",{type:"text",placeholder:"Email",value:a,onChange:function(t){return e.setState({email:t.target.value})},autoCapitalize:"off",autoFocus:!0})),r.a.createElement("div",{className:"formfield"},r.a.createElement("input",{type:"password",placeholder:"Password",value:n,onChange:function(t){return e.setState({password:t.target.value})},autoCapitalize:"off"})),r.a.createElement("button",{onClick:this.submit},"Submit"))))}}]),t}(n.Component)),Y=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,loggedIn:!1,user:null},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t,a,n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/session/");case 2:t=e.sent,a=t.data,n=a.success,r=a.user,c=a.token,n&&(window.__user=r,l.a.defaults.headers.common["X-CSRFToken"]=c),this.setState({loggedIn:n,user:r,loading:!1});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loggedIn,a=e.user,n=e.loading;return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},n?"Loading...":t?r.a.createElement(x,null,r.a.createElement(b,{user:a}),r.a.createElement(z,null)):r.a.createElement(X,null)))}}]),t}(n.Component);a(122);l.a.defaults.baseURL="/api",s.a.render(r.a.createElement(Y,null),document.getElementById("root"))},42:function(e,t,a){e.exports=a(124)},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},96:function(e,t,a){}},[[42,2,1]]]);
//# sourceMappingURL=main.ac744afc.chunk.js.map