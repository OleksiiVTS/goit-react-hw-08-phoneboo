"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[696],{8696:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(1087),r=n(5243),s="Contacts_appDiv__d7k61",c="Contacts_loader__VcRwP",o=n(2791),i="ContactForm_form__dhl+T",l="ContactForm_button__eSwX9",d=n(2430),u=n(3329),h=function(){var e=(0,d.g)(),t=e.valueContacts,n=e.addContacts;return(0,u.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var a=e.target.name.value,r=e.target.number.value;t.find((function(e){return e.name.toLocaleLowerCase()===a.toLocaleLowerCase()}))?alert("".concat(a," is already in contacts!")):(n({name:a,number:r}),e.target.reset())},children:[(0,u.jsxs)("label",{children:["Name ",(0,u.jsx)("br",{}),(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("label",{children:["Number ",(0,u.jsx)("br",{}),(0,u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},m=function(e){var t=e.id,n=e.name,a=e.number,r=(0,d.g)().deleteContacts;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:[n,": ",a]}),(0,u.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"\xd7"})]})},x="ContactItem_itemContact__I6KGO",j=function(e){var t=e.listContacts;return(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{className:x,children:(0,u.jsx)(m,{id:e.id,name:e.name,number:e.number})},e.id)}))})},b=function(){var e=(0,d.g)().filterContact;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("label",{children:(0,u.jsx)("input",{onChange:function(t){return e(t.target.value)}})})})},p=function(){var e=(0,d.g)(),t=e.visibleContacts,n=e.valueContacts,i=e.isUser,l=e.isLoading,m=e.error,x=e.getContacts;return(0,o.useEffect)((function(){i&&x()}),[x,i]),(0,u.jsxs)("div",{children:[(0,u.jsx)(a.rU,{to:"/",children:"\ud83e\udc14 Back Home"}),(0,u.jsxs)("div",{className:s,children:[(0,u.jsxs)("section",{children:[(0,u.jsx)("h1",{children:"Add Contacts"}),(0,u.jsx)(h,{})]}),(0,u.jsxs)("section",{children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(b,{}),l&&!m&&(0,u.jsx)(r.p2,{height:"80",width:"80",color:"#4d78a9",wrapperClass:c}),n.length>0&&(0,u.jsx)(j,{listContacts:t})]})]})]})}}}]);
//# sourceMappingURL=696.d845d42d.chunk.js.map