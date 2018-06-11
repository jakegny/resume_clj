// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('resume.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('resume.views.about');
goog.require('resume.views.title');
goog.require('resume.views.experience');
goog.require('resume.views.skills');
goog.require('resume.views.projects');
goog.require('resume.views.contact');
resume.core.Grid = reagent.core.adapt_react_class((ReactBootstrap["Grid"]));
resume.core.Row = reagent.core.adapt_react_class((ReactBootstrap["Row"]));
resume.core.Col = reagent.core.adapt_react_class((ReactBootstrap["Col"]));
resume.core.home_page = (function resume$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"App"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.core.Grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.core.Row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"show-grid"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.core.Col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xs,(12)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.views.title.component], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.core.Row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"show-grid"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.core.Col,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xs,(12),cljs.core.cst$kw$md,(6)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.views.experience.component], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.core.Col,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xs,(12),cljs.core.cst$kw$md,(6)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.views.about.component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.views.skills.component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.views.projects.component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.views.contact.component], null)], null)], null)], null)], null);
});
if(typeof resume.core.page !== 'undefined'){
} else {
resume.core.page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return resume.core.home_page;},cljs.core.cst$sym$resume$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$resume$core,cljs.core.cst$sym$home_DASH_page,"/Users/r632074/clojure/resume/src/cljs/resume/core.cljs",16,1,24,24,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(resume.core.home_page)?resume.core.home_page.cljs$lang$test:null)])));
}
resume.core.current_page = (function resume$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(resume.core.page)], null)], null);
});
var action__6130__auto___6288 = (function (params__6131__auto__){
if(cljs.core.map_QMARK_(params__6131__auto__)){
var map__6283 = params__6131__auto__;
var map__6283__$1 = ((((!((map__6283 == null)))?(((((map__6283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6283):map__6283);
return cljs.core.reset_BANG_(resume.core.page,new cljs.core.Var(function(){return resume.core.home_page;},cljs.core.cst$sym$resume$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$resume$core,cljs.core.cst$sym$home_DASH_page,"/Users/r632074/clojure/resume/src/cljs/resume/core.cljs",16,1,24,24,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(resume.core.home_page)?resume.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__6131__auto__)){
var vec__6285 = params__6131__auto__;
return cljs.core.reset_BANG_(resume.core.page,new cljs.core.Var(function(){return resume.core.home_page;},cljs.core.cst$sym$resume$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$resume$core,cljs.core.cst$sym$home_DASH_page,"/Users/r632074/clojure/resume/src/cljs/resume/core.cljs",16,1,24,24,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(resume.core.home_page)?resume.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__6130__auto___6288);

resume.core.mount_root = (function resume$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [resume.core.current_page], null),document.getElementById("app"));
});
resume.core.init_BANG_ = (function resume$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return resume.core.mount_root();
});
