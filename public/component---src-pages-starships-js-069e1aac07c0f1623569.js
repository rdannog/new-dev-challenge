"use strict";(self.webpackChunkdev_challenge=self.webpackChunkdev_challenge||[]).push([[919],{91:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(5861),a=n(1721),s=n(4687),l=n.n(s),u=n(7294),c=n(8348),i=n(9966),o=n(2950),p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={starshipsList:[]},t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/starships");case 2:t=e.sent,this.setState({starshipsList:t.data.results}),console.log(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.state.starshipsList;return u.createElement(u.Fragment,null,u.createElement(i.Z,null),u.createElement(o.Dx,null,"Starships"),u.createElement(o.W2,null,e.map((function(e,t){return u.createElement(o.Zb,{key:t},u.createElement("h2",null,e.name),u.createElement("h3",null,e.manufacturer),u.createElement("p",null,e.model))}))))},t}(u.Component)}}]);
//# sourceMappingURL=component---src-pages-starships-js-069e1aac07c0f1623569.js.map