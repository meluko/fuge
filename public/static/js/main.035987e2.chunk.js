(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(26)},2:function(e,t,n){"use strict";(function(e){n.d(t,"d",function(){return a}),n.d(t,"e",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return s});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";fetch("http://localhost:3000/api/commands/start?args[]=".concat(e),{method:"post"}).catch(function(e){return console.log("Fetch error")})},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";fetch("http://localhost:3000/api/commands/stop?args[]=".concat(e),{method:"post"}).catch(function(e){return console.log("Fetch error")})},o=function(){fetch("http://localhost:3000/api/commands/debug?args[]=".concat(e),{method:"post"}).catch(function(e){return console.log("Fetch error")})},r=function(){fetch("http://localhost:3000/api/commands/start?args[]=".concat(e),{method:"post"}).catch(function(e){return console.log("Fetch error")})},s=function(e){e=e.split(" ").map(function(e){return"args[]=".concat(e)}).join("&"),fetch("http://localhost:3000/api/commands/apply?".concat(e),{method:"post"}).catch(function(e){return console.log("Fetch error")})}}).call(this,n(14))},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n(5),o=n(6),r=n(8),s=n(7),l=n(9),i=n(0),u=n.n(i),m=n(15),p=n(3),d=n(4),h=n(2),f=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.process,t=e.name,n=e.flags.includes("RUNNING"),a=n?"running":"";return u.a.createElement("li",{className:a},u.a.createElement("div",{className:"processName"},t),u.a.createElement("div",{className:"processStatus"},n?"running":"stopped"),u.a.createElement(p.a,{className:"action debug",icon:d.a,onClick:function(){return Object(h.b)(t)}}),n?u.a.createElement(p.a,{className:"action kill",icon:d.d,onClick:function(){return Object(h.e)(t)}}):u.a.createElement(p.a,{className:"action play",icon:d.b,onClick:function(){return Object(h.d)(t)}}),n&&u.a.createElement(p.a,{className:"action restart",icon:d.c,onClick:function(){return Object(h.c)(t)}}))}}]),t}(i.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.zone,t=e.type,n=e.domain,a=e.target,c=e.port;return u.a.createElement("li",{className:"dnsRecord"},u.a.createElement("div",{className:"recordType"},t),u.a.createElement("div",{className:"domain"},n),u.a.createElement("div",{className:"target"},a),u.a.createElement("div",{className:"port"},c))}}]),t}(i.Component),v=(n(25),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(s.a)(t).call(this))).handleApplyKeyDown=function(e){13===e.keyCode&&Object(h.a)(e.target.value)},e.loadProcesses=function(){fetch("http://localhost:3000/api/commands/ps",{method:"post"}).then(function(e){return e.json()}).then(function(t){e.setState(Object(a.a)({},e.state,{processes:t})),setTimeout(e.loadProcesses,1e3)}).catch(function(e){return console.log("Fetch error")})},e.loadZones=function(){fetch("http://localhost:3000/api/commands/zone",{method:"post"}).then(function(e){return e.json()}).then(function(t){return e.setState(Object(a.a)({},e.state,{zone:t}))}).catch(function(e){return console.log("Fetch error")})},e.state={processes:[],zone:[]},e}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadProcesses(),this.loadZones()}},{key:"render",value:function(){var e=this.state,t=e.processes,n=e.zone;return u.a.createElement("div",null,u.a.createElement("ul",null,u.a.createElement("li",{className:"header"},u.a.createElement("div",{className:"processName"},"Process Name"),u.a.createElement("div",{className:"processStatus"},"Status"),u.a.createElement("div",null,"Actions")),t.map(function(e){return u.a.createElement(f,{key:e.name,process:e})}),this.renderAllProcessesRow(),this.renderApplyRow(),u.a.createElement("li",{className:"dnsRecord"},u.a.createElement("div",{className:"recordType"},"type"),u.a.createElement("div",{className:"domain"},"domain"),u.a.createElement("div",{className:"target"},"target"),u.a.createElement("div",{className:"port"},"port")),n.map(function(e){return u.a.createElement(E,{key:e.domain,zone:e})})))}},{key:"renderAllProcessesRow",value:function(){return u.a.createElement("li",null,u.a.createElement("div",{className:"processName"},"all processes"),u.a.createElement("div",{className:"processStatus"}),u.a.createElement(p.a,{className:"action play",icon:d.b,onClick:function(){return Object(h.d)()}}),u.a.createElement(p.a,{className:"action kill",icon:d.d,onClick:function(){return Object(h.e)()}}))}},{key:"renderApplyRow",value:function(){return u.a.createElement("li",null,u.a.createElement("div",{className:"applyPrompt"},"apply>"),u.a.createElement("div",{className:"applyInput"},u.a.createElement("input",{type:"text",onKeyDown:this.handleApplyKeyDown})))}}]),t}(i.Component));Object(m.render)(u.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);