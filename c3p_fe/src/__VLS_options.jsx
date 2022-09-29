import axios from 'axios';

export default (await import('vue')).defineComponent({
name: 'App',

data: function () {
return {
user: {
username: "",
password: ""
}
};
},

methods: {
processLogInUser: function () {
axios.post(
"https://drhouse-be.herokuapp.com/login/",
this.user,
{ headers: {} }
).then((result) => {
let dataLogin = {
username: this.user.username,
token_access: result.data.access,
token_refresh: result.data.refresh,
};
this.$emit('goLogIn', dataLogin);
console.log('exito');
}).catch((err) => {
if (err.response.status === 401) {
alert("ERROR 401: Credenciales Incorrectas.");
}
if (err.response.status === 400) {
alert("ERROR 400: Bad request.");
}
if (err.response.status === 500) {
alert("ERROR 500: Internal server error.");
}
});
},

loadSignUp: function () {
this.$router.push({ name: 'signUp' });
}
},
});
const __VLS_options = {
...({
name: 'App',

data: function () {
return {
user: {
username: "",
password: ""
}
};
},

methods: {
processLogInUser: function () {
axios.post(
"https://drhouse-be.herokuapp.com/login/",
this.user,
{ headers: {} }
).then((result) => {
let dataLogin = {
username: this.user.username,
token_access: result.data.access,
token_refresh: result.data.refresh,
};
this.$emit('goLogIn', dataLogin);
console.log('exito');
}).catch((err) => {
if (err.response.status === 401) {
alert("ERROR 401: Credenciales Incorrectas.");
}
if (err.response.status === 400) {
alert("ERROR 400: Bad request.");
}
if (err.response.status === 500) {
alert("ERROR 500: Internal server error.");
}
});
},

loadSignUp: function () {
this.$router.push({ name: 'signUp' });
}
},
}),
};
const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
name: 'App',

data: function () {
return {
user: {
username: "",
password: ""
}
};
},

methods: {
processLogInUser: function () {
axios.post(
"https://drhouse-be.herokuapp.com/login/",
this.user,
{ headers: {} }
).then((result) => {
let dataLogin = {
username: this.user.username,
token_access: result.data.access,
token_refresh: result.data.refresh,
};
this.$emit('goLogIn', dataLogin);
console.log('exito');
}).catch((err) => {
if (err.response.status === 401) {
alert("ERROR 401: Credenciales Incorrectas.");
}
if (err.response.status === 400) {
alert("ERROR 400: Bad request.");
}
if (err.response.status === 500) {
alert("ERROR 500: Internal server error.");
}
});
},

loadSignUp: function () {
this.$router.push({ name: 'signUp' });
}
},
} as const);
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js'; import('./__VLS_types.js');
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components['/* __VLS_.SearchTexts.Components */'];
({} as __VLS_types.GlobalAttrs)['/* __VLS_.SearchTexts.GlobalAttrs */'];
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
{
<div class={"\u0063\u006f\u006e\u0074\u0061\u0069\u006e\u0065\u0072\u002d\u0066\u006c\u0075\u0069\u0064"}></div>;

{
<div class={"\u0072\u006f\u0077\u0020\u006e\u006f\u002d\u0067\u0075\u0074\u0074\u0065\u0072"}></div>;

{
<div class={"\u0063\u006f\u006c\u002d\u006d\u0064\u002d\u0036\u0020\u0064\u002d\u006e\u006f\u006e\u0065\u0020\u0064\u002d\u006d\u0064\u002d\u0066\u006c\u0065\u0078\u0020\u0062\u0067\u002d\u0069\u006d\u0061\u0067\u0065"}></div>;

}
{
<div class={"\u0063\u006f\u006c\u002d\u006d\u0064\u002d\u0036\u0020\u0062\u0067\u002d\u006c\u0069\u0067\u0068\u0074"}></div>;

{
<div class={"\u006c\u006f\u0067\u0069\u006e\u0020\u0064\u002d\u0066\u006c\u0065\u0078\u0020\u0061\u006c\u0069\u0067\u006e\u002d\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0070\u0079\u002d\u0035"}></div>;

{
<div class={"\u0063\u006f\u006e\u0074\u0061\u0069\u006e\u0065\u0072"}></div>;

{
<div class={"\u0072\u006f\u0077"}></div>;

{
<div class={"\u0063\u006f\u006c\u002d\u006c\u0067\u002d\u0031\u0030\u0020\u0063\u006f\u006c\u002d\u0078\u006c\u002d\u0037\u0020\u006d\u0078\u002d\u0061\u0075\u0074\u006f"}></div>;

{
<h3 class={"\u0064\u0069\u0073\u0070\u006c\u0061\u0079\u002d\u0034"}></h3>;

}
{
<p class={"\u0074\u0065\u0078\u0074\u002d\u006d\u0075\u0074\u0065\u0064\u0020\u006d\u0062\u002d\u0034"}></p>;

}
{
<form class={"\u0066\u006f\u0072\u006d"}></form>;

const __VLS_12: {
'submit': __VLS_types.FillingEventArg<
__VLS_types.GlobalAttrs['onSubmit']
>;
} = {
submit: (__VLS_ctx.processLogInUser)
};
[processLogInUser,];
{
<div class={"\u006d\u0062\u002d\u0033"}></div>;

{
<input id={"\u0075\u0073\u0065\u0072\u006e\u0061\u006d\u0065"} value={(__VLS_ctx.user.username)} type={"\u0074\u0065\u0078\u0074"} placeholder={"\u0055\u0073\u0065\u0072\u006e\u0061\u006d\u0065"} required={""} autofocus={""} class={"\u0066\u006f\u0072\u006d\u002d\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0070\u0069\u006c\u006c\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0030\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0073\u006d\u0020\u0070\u0078\u002d\u0034"} />;
[user,];
}
}
{
<div class={"\u006d\u0062\u002d\u0033"}></div>;

{
<input id={"\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064"} value={(__VLS_ctx.user.password)} type={"\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064"} placeholder={"\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064"} required={""} class={"\u0066\u006f\u0072\u006d\u002d\u0063\u006f\u006e\u0074\u0072\u006f\u006c\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0070\u0069\u006c\u006c\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0030\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0073\u006d\u0020\u0070\u0078\u002d\u0034\u0020\u0074\u0065\u0078\u0074\u002d\u0070\u0072\u0069\u006d\u0061\u0072\u0079"} />;
[user,];
}
}
{
<div class={"\u0064\u002d\u0067\u0072\u0069\u0064\u0020\u0067\u0061\u0070\u002d\u0032\u0020\u006d\u0074\u002d\u0032"}></div>;

{
<button type={"\u0073\u0075\u0062\u006d\u0069\u0074"} class={"\u0062\u0074\u006e\u0020\u0062\u0074\u006e\u002d\u0070\u0072\u0069\u006d\u0061\u0072\u0079\u0020\u0062\u0074\u006e\u002d\u0062\u006c\u006f\u0063\u006b\u0020\u0074\u0065\u0078\u0074\u002d\u0075\u0070\u0070\u0065\u0072\u0063\u0061\u0073\u0065\u0020\u006d\u0062\u002d\u0032\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0070\u0069\u006c\u006c\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u0073\u006d"}></button>;

}
}
{
<div class={"\u0064\u002d\u0066\u006c\u0065\u0078\u0020\u0061\u006c\u0069\u0067\u006e\u002d\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0070\u0062\u002d\u0034"}></div>;

{
<p class={"\u006d\u0062\u002d\u0030\u0020\u006d\u0065\u002d\u0032"}></p>;

}
{
<button type={"\u0062\u0075\u0074\u0074\u006f\u006e"} class={"\u0062\u0074\u006e\u0020\u0062\u0074\u006e\u002d\u006f\u0075\u0074\u006c\u0069\u006e\u0065\u002d\u0070\u0072\u0069\u006d\u0061\u0072\u0079"}></button>;

const __VLS_23: {
'click': __VLS_types.FillingEventArg<
__VLS_types.GlobalAttrs['onClick']
>;
} = {
click: (__VLS_ctx.loadSignUp)
};
[loadSignUp,];
}
}
{
<div class={"\u0074\u0065\u0078\u0074\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0064\u002d\u0066\u006c\u0065\u0078\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0062\u0065\u0074\u0077\u0065\u0065\u006e\u0020\u006d\u0074\u002d\u0034"}></div>;

{
<p></p>;

{
<a class={"\u0066\u006f\u006e\u0074\u002d\u0069\u0074\u0061\u006c\u0069\u0063\u0020\u0074\u0065\u0078\u0074\u002d\u006d\u0075\u0074\u0065\u0064"}></a>;

}
}
}
}
}
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./App.vue')['default'];
