(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{673:function(e,a,t){"use strict";t.r(a);var r=t(54),o=t(55),s=t(57),n=t(56),i=t(58),l=t(1),c=t.n(l),m=t(129),u=t(675),p=t(678),d=t(524),f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(n.a)(a)).call.apply(e,[this].concat(i)))).state={confirmDirty:!1,autoCompleteResult:[]},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,a){e||console.log("Received values of form: ",a)})},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.compareToFirstPassword=function(e,a,r){var o=t.props.form;a&&a!==o.getFieldValue("password")?r("Two passwords that you enter is inconsistent!"):r()},t.validateToNextPassword=function(e,a,r){var o=t.props.form;a&&t.state.confirmDirty&&o.validateFields(["confirm"],{force:!0}),r()},t}return Object(i.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return c.a.createElement(u.a,{className:"register-form",onSubmit:this.handleSubmit},c.a.createElement(u.a.Item,null,e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(c.a.createElement(p.a,{placeholder:"E-mail"}))),c.a.createElement(u.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(c.a.createElement(p.a,{type:"password",placeholder:"Password"}))),c.a.createElement(u.a.Item,null,e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(c.a.createElement(p.a,{type:"password",placeholder:"Confirm Password",onBlur:this.handleConfirmBlur}))),c.a.createElement(u.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:9}}},c.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Register")))}}]),a}(l.Component),w=u.a.create({name:"register"})(f);a.default=Object(m.b)(function(e){return{}},function(e){return{}})(w)}}]);
//# sourceMappingURL=16.29a5bb23.chunk.js.map