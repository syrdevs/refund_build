(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{EjKu:function(e,t,a){"use strict";var n=a("TqRt"),o=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var u=n(a("W9HT"));a("IzEo");var l=n(a("bx4M"));a("jCWc");var i=n(a("kPKH"));a("5NDa");var r=n(a("5rEg"));a("14J3");var s=n(a("BMrR"));a("+L6B");var p=n(a("2/Rp")),d=n(a("lwsE")),f=n(a("W8MJ")),c=n(a("a1gu")),m=n(a("Nsbk")),v=n(a("7W2i"));a("Znn+");var g,h,y=n(a("ZTPi")),E=o(a("q1tI")),b=a("LLXN"),k=n(a("zHco")),x=a("MuoO"),C=y.default.TabPane,M=(g=(0,x.connect)(function(e){var t=e.universal,a=e.loading;return{universal:t,loadingData:a.effects["universal/optionsData"]}}),g(h=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,c.default)(this,(0,m.default)(t).call(this,e)),a.fieldOnChange=function(e,t,n){var o=a.props.universal.options;o[t].groupOptionList[n].optionValue=e;a.props.dispatch;a.setState({data:o})},a.saveChanges=function(){var e=a.props.dispatch,t=[];a.state.data.map(function(e){e.groupOptionList.map(function(e){t.push(e)})}),e({type:"universal/optionsDatachange",payload:t}).then(function(t){e({type:"universal/optionsData",payload:{}})})},a.state={modalVisible:!1,columns:[],data:[]},a}return(0,v.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"universal/optionsData",payload:{}})}},{key:"render",value:function(){var e=this;this.props.universal.options.datasource;return E.default.createElement(k.default,{title:(0,b.formatMessage)({id:"menu.options"}),children:"Child"},E.default.createElement(u.default,{tip:(0,b.formatMessage)({id:"system.loading"}),spinning:this.props.loadingData},E.default.createElement(l.default,{style:{borderRadius:"5px",marginBottom:"10px"},bodyStyle:{padding:0},bordered:!0},E.default.createElement(s.default,null,E.default.createElement(p.default,{type:"primary",style:{margin:"5px 0px 0px 5px"},onClick:function(){e.saveChanges()}},(0,b.formatMessage)({id:"form.save"}))),E.default.createElement(s.default,null,E.default.createElement(y.default,{defaultActiveKey:"0"},this.props.universal.options.map(function(t,a){return E.default.createElement(C,{tab:t.groupNameRu,key:a},t.groupOptionList.map(function(t,n){return E.default.createElement(s.default,{style:{margin:"0px 10px 10px 10px"},key:a+""+n},E.default.createElement(i.default,{span:24,key:a+""+n},E.default.createElement(r.default,{addonBefore:t.optionName,key:a+""+n,defaultValue:t.optionValue,onChange:function(t){e.fieldOnChange(t.target.value,a,n)}})))}))}))))))}}]),t}(E.Component))||h),D=M;t.default=D}}]);