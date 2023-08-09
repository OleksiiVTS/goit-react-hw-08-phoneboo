"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[696],{8696:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var a=n(1087),s=n(5243),r="Contacts_appSection__mSMHX",c="Contacts_loader__VcRwP",o=(n(2791),"ContactForm_form__dhl+T"),i="ContactForm_formDiv__quSq+",l="ContactForm_button__eSwX9",d=n(2430),u=n(3329),m=function(){var t=(0,d.g)(),e=t.valueContacts,n=t.addContacts;return(0,u.jsxs)("form",{className:o,onSubmit:function(t){t.preventDefault();var a=t.target.name.value,s=t.target.number.value;e.find((function(t){return t.name.toLocaleLowerCase()===a.toLocaleLowerCase()}))?alert("".concat(a," is already in contacts!")):(n({name:a,number:s}),t.target.reset())},children:[(0,u.jsxs)("div",{className:i,children:[(0,u.jsxs)("label",{children:["Name ",(0,u.jsx)("br",{}),(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:["Number ",(0,u.jsx)("br",{}),(0,u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,u.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},h="ContactItem_itemContact__I6KGO",x="ContactItem_itemsButton__mufWd",j="ContactItem_listUl__Hllp6",p=n(7689),_=function(t){var e=t.id,n=t.name,a=t.number,s=(0,d.g)(),r=s.deleteContacts,c=s.getUpdateContacts,o=(0,p.s0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[n,": ",a]}),(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)("button",{type:"button",title:"Update contact",onClick:function(){return c({id:e,name:n,number:a}),void o("update")},children:"\u270e"}),(0,u.jsx)("button",{type:"button",title:"Delete contact",onClick:function(){return r(e)},children:"\xd7"})]})]})},C=function(t){var e=t.listContacts;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("ul",{className:j,children:e.map((function(t){return(0,u.jsx)("li",{className:h,children:(0,u.jsx)(_,{id:t.id,name:t.name,number:t.number})},t.id)}))}),(0,u.jsx)(p.j3,{})]})},b=function(){var t=(0,d.g)().filterContact;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("label",{children:(0,u.jsx)("input",{onChange:function(e){return t(e.target.value)}})})})},f=function(){var t=(0,d.g)(),e=t.visibleContacts,n=t.valueContacts,o=t.isLoading,i=t.error;return(0,u.jsxs)("div",{children:[(0,u.jsx)(a.rU,{to:"/",children:"\ud83e\udc14 Back Home"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("section",{className:r,children:[(0,u.jsx)("h1",{children:"Add Contacts"}),(0,u.jsx)(m,{})]}),(0,u.jsxs)("section",{className:r,children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(b,{}),o&&!i&&(0,u.jsx)(s.p2,{height:"80",width:"80",color:"#4d78a9",wrapperClass:c}),n.length>0&&(0,u.jsx)(C,{listContacts:e})]})]})]})}}}]);
//# sourceMappingURL=696.dd90532f.chunk.js.map