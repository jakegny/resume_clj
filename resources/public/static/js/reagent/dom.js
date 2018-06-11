// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.unmountComponentAtNode.cljs$core$IFn$_invoke$arity$1(container) : reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container));
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_5989 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{var G__5990 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__5991 = container;
var G__5992 = ((function (G__5990,G__5991,_STAR_always_update_STAR_5989){
return (function (){
var _STAR_always_update_STAR_5993 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5993;
}});})(G__5990,G__5991,_STAR_always_update_STAR_5989))
;
return (reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3 ? reagent.dom.global$module$react_dom.render.cljs$core$IFn$_invoke$arity$3(G__5990,G__5991,G__5992) : reagent.dom.global$module$react_dom.render.call(null,G__5990,G__5991,G__5992));
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5989;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__5995 = arguments.length;
switch (G__5995) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1 ? reagent.dom.global$module$react_dom.findDOMNode.cljs$core$IFn$_invoke$arity$1(this$) : reagent.dom.global$module$react_dom.findDOMNode.call(null,this$));
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__5997_6001 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__5998_6002 = null;
var count__5999_6003 = (0);
var i__6000_6004 = (0);
while(true){
if((i__6000_6004 < count__5999_6003)){
var v_6005 = chunk__5998_6002.cljs$core$IIndexed$_nth$arity$2(null,i__6000_6004);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_6005);


var G__6006 = seq__5997_6001;
var G__6007 = chunk__5998_6002;
var G__6008 = count__5999_6003;
var G__6009 = (i__6000_6004 + (1));
seq__5997_6001 = G__6006;
chunk__5998_6002 = G__6007;
count__5999_6003 = G__6008;
i__6000_6004 = G__6009;
continue;
} else {
var temp__5457__auto___6010 = cljs.core.seq(seq__5997_6001);
if(temp__5457__auto___6010){
var seq__5997_6011__$1 = temp__5457__auto___6010;
if(cljs.core.chunked_seq_QMARK_(seq__5997_6011__$1)){
var c__4319__auto___6012 = cljs.core.chunk_first(seq__5997_6011__$1);
var G__6013 = cljs.core.chunk_rest(seq__5997_6011__$1);
var G__6014 = c__4319__auto___6012;
var G__6015 = cljs.core.count(c__4319__auto___6012);
var G__6016 = (0);
seq__5997_6001 = G__6013;
chunk__5998_6002 = G__6014;
count__5999_6003 = G__6015;
i__6000_6004 = G__6016;
continue;
} else {
var v_6017 = cljs.core.first(seq__5997_6011__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_6017);


var G__6018 = cljs.core.next(seq__5997_6011__$1);
var G__6019 = null;
var G__6020 = (0);
var G__6021 = (0);
seq__5997_6001 = G__6018;
chunk__5998_6002 = G__6019;
count__5999_6003 = G__6020;
i__6000_6004 = G__6021;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
