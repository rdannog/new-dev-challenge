"use strict";(self.webpackChunkdev_challenge=self.webpackChunkdev_challenge||[]).push([[777],{925:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(5861),r=n(1721),l=n(4687),u=n.n(l),c=n(7294),s=n(8348),o=n(9966),i=n(2950),p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={planetsList:[]},t}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/planets");case 2:t=e.sent,this.setState({planetsList:t.data.results}),console.log(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.state.planetsList;return c.createElement(c.Fragment,null,c.createElement(o.Z,null),c.createElement(i.Dx,null,"Planets"),c.createElement(i.W2,null,e.map((function(e,t){return c.createElement(i.Zb,{key:t},c.createElement("h2",null,e.name),c.createElement("p",null,"Population: ",e.population),c.createElement("p",null,"Climate: ",e.climate))}))))},t}(c.Component)}}]);
//# sourceMappingURL=component---src-pages-planets-js-096dc9d1d217e38a4679.js.map