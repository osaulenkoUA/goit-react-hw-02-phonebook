(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,a){t.exports={form:"ContactForm_form__1HQc7",form__input:"ContactForm_form__input__uNP4L",form__label:"ContactForm_form__label__1_mZu",form__btn:"ContactForm_form__btn__3iB6R"}},,,,,function(t,e,a){t.exports={list:"ContactList_list__2Hznv",list__item:"ContactList_list__item__2SMBg"}},function(t,e,a){t.exports={filterInput:"FilterContacts_filterInput__2aOmT",filterTitle:"FilterContacts_filterTitle__2zEgR"}},,,function(t,e,a){t.exports={container:"Section_container__nVb_4"}},,,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(12),i=a(2),s=a(3),m=a(5),u=a(4),f=a(20),_=a(10),h=a.n(_);function p(t){var e=t.title,a=t.children;return r.a.createElement("section",{className:h.a.container},r.a.createElement("h2",null,e),a)}var b=a(11),d=a(1),v=a.n(d),C=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",phone:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState({name:"",phone:""})},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:v.a.form},r.a.createElement("label",{className:v.a.form__label},"Name:",r.a.createElement("input",{className:v.a.form__input,type:"text",value:this.state.name,onChange:this.handleChange,name:"name"})),r.a.createElement("label",{className:v.a.form__label},"Phone:",r.a.createElement("input",{className:v.a.form__input,type:"number",value:this.state.phone,onChange:this.handleChange,name:"phone"})),r.a.createElement("button",{type:"submit",className:v.a.form__btn},"Add Contact"))}}]),a}(n.Component),g=a(6),E=a.n(g);function y(t){var e=t.list,a=t.removeContact;return r.a.createElement("ul",{className:E.a.list},e.map((function(t){return r.a.createElement("li",{key:t.id,className:E.a.list__item},r.a.createElement("span",null,t.name,":"),r.a.createElement("a",Object.assign({href:"tel:+"},t.phone),t.phone),r.a.createElement("button",{type:"button",onClick:a,"data-key":t.id},"Delete"))})))}var F=a(7),N=a.n(F);function O(t){var e=t.value,a=t.onChangeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:N.a.filterTitle},"Find contacts by name"),r.a.createElement("input",{type:"text",value:e,onChange:a,className:N.a.filterInput,placeholder:"Search..."}))}var L=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e){var a=e.name,n=e.phone;if(t.state.contacts.find((function(t){return t.name.toLocaleLowerCase()===a.toLocaleLowerCase()})))alert("Sorry,but contact ".concat(a,"  already exist"));else if(a&&n){var r={id:Object(f.a)(),name:a,phone:n};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[r])}}))}else alert("Write NAME and PHONE")},t.changeFilter=function(e){var a=e.target.value;t.setState({filter:a})},t.getFiltredList=function(){return t.state.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t.state.filter.toLocaleLowerCase())}))},t.removeContact=function(e){var a=e.target.dataset.key;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==a}))}}))},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state,e=t.contacts,a=t.filter,n=this.getFiltredList();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Phonebook"},r.a.createElement(C,{onAddContact:this.addContact}),e.length>=2&&r.a.createElement(O,{value:a,onChangeFilter:this.changeFilter})),e.length>=1&&r.a.createElement(p,{title:"Contacts:"},r.a.createElement(y,{list:n,removeContact:this.removeContact})))}}]),a}(n.Component);c.a.render(r.a.createElement(L,null),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.04383a10.chunk.js.map