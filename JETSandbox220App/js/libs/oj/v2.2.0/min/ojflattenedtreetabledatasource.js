/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a,g){a.Jb=function(b,c){c=c||{};if(!(b instanceof a.va))throw Error(a.V.od._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.V.od._ERR_DATA_INVALID_TYPE_DETAIL);this.i=b;this.$e=[];this.pa=0;this.ii=[];this.nn=!0;null==this.i.qF("fetchSize")&&(this.i.hk=function(){return-1});var d=this;this.i.YM=function(b,c,g){var k,l,m,r,t=[],s=[],q=[];for(c=0;c<g.getCount();c++){l=g.getData(c);r=g.getMetadata(c).key;m=b+c;d.ii.splice(m,0,{});d.ii[m].nodeSet=
g;d.ii[m].startIndex=b;for(k=m+1;k<d.ii.length;k++)d.ii[k].startIndex+=1;t.push(d.dm(l));s.push(r);q.push(m);d.Ca.data.splice(m,0,l);d.Ca.keys.splice(m,0,r);d.Ca.indexes.splice(m,0,m)}d.jE();d.nn=!0;a.V.u.handleEvent.call(d,a.V.O.ADD,{data:t,keys:s,indexes:q})};this.i.YN=function(b){var c,g,k,l=[],m=[],r=[];for(c=0;c<b.length;c++){k=b[c].index-c;l.push("");m.push("");r.push(k);d.ii.splice(k,1);for(g=k+1;g<d.ii.length;g++)d.ii[g].startIndex-=1;d.Ca.data.splice(k,1);d.Ca.keys.splice(k,1);d.Ca.indexes.splice(k,
1)}d.jE();d.nn=!0;a.V.u.handleEvent.call(d,a.V.O.REMOVE,{data:l,keys:m,indexes:r})};this.Init();if(null!=c&&("enabled"==c.startFetch||null==c.startFetch)||null==c)this.HE=!0};o_("FlattenedTreeTableDataSource",a.Jb,a);a.b.sa(a.Jb,a.V,"oj.FlattenedTreeTableDataSource");a.Jb.prototype.Init=function(){a.Jb.u.Init.call(this)};a.b.g("FlattenedTreeTableDataSource.prototype.Init",{Init:a.Jb.prototype.Init});a.Jb.prototype.getCapability=function(){return"full"};a.b.g("FlattenedTreeTableDataSource.prototype.getCapability",
{getCapability:a.Jb.prototype.getCapability});a.Jb.prototype.getWrappedDataSource=function(){return this.i};a.b.g("FlattenedTreeTableDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:a.Jb.prototype.getWrappedDataSource});a.Jb.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||this.HE?this.Hg(a):Promise.resolve()};a.b.g("FlattenedTreeTableDataSource.prototype.fetch",{fetch:a.Jb.prototype.fetch});a.Jb.prototype.at=function(a){var c;c=0>a||a>=this.Ca.length?null:{data:this.Ca.data[a],
index:a,key:this.Ca.keys[a]};return new Promise(function(a){a(c)})};a.b.g("FlattenedTreeTableDataSource.prototype.at",{at:a.Jb.prototype.at});a.Jb.prototype.collapse=function(a){this.i.collapse(a)};a.b.g("FlattenedTreeTableDataSource.prototype.collapse",{collapse:a.Jb.prototype.collapse});a.Jb.prototype.expand=function(a){this.i.expand(a)};a.b.g("FlattenedTreeTableDataSource.prototype.expand",{expand:a.Jb.prototype.expand});a.Jb.prototype.get=function(a){var c=this.i.gl(Object(a));a={data:this.dm(this.Ca.data[c]),
key:a,index:c};return Promise.resolve(a)};a.b.g("FlattenedTreeTableDataSource.prototype.get",{get:a.Jb.prototype.get});a.Jb.prototype.on=function(b,c){if("expand"==b||"collapse"==b)this.i.on(b,c);else a.Jb.u.on.call(this,b,c)};a.b.g("FlattenedTreeTableDataSource.prototype.on",{on:a.Jb.prototype.on});a.Jb.prototype.off=function(b,c){"expand"==b||"collapse"==b?this.i.off(b,c):a.Jb.u.off.call(this,b,c)};a.b.g("FlattenedTreeTableDataSource.prototype.off",{off:a.Jb.prototype.off});a.Jb.prototype.sort=
function(b){null==b?b=this.sortCriteria:this.sortCriteria=b;var c=this;b.axis="column";return new Promise(function(d,e){c.i.getWrappedDataSource().sort(b,{success:function(){setTimeout(function(){c.i.refresh();c.Ca=null;var e={header:b.key,direction:b.direction};a.V.u.handleEvent.call(c,a.V.O.SORT,e);d(e)},0)}.bind(this),error:function(a){e(a)}.bind(this)})})};a.b.g("FlattenedTreeTableDataSource.prototype.sort",{sort:a.Jb.prototype.sort});a.Jb.prototype.totalSize=function(){return this.nn?-1:this.Ca.data.length};
a.b.g("FlattenedTreeTableDataSource.prototype.totalSize",{totalSize:a.Jb.prototype.totalSize});a.Jb.prototype.totalSizeConfidence=function(){return this.nn?"unknown":"actual"};a.b.g("FlattenedTreeTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.Jb.prototype.totalSizeConfidence});a.Jb.prototype.tT=function(a){var c=this.ii[a].nodeSet.getStart();return this.ii[a].nodeSet.getMetadata(c+a-this.ii[a].startIndex)};a.Jb.prototype.Hg=function(b){b=b||{};this.GE(b);this.pa=null==b.startIndex?
this.pa:b.startIndex;var c=Number.MAX_VALUE;this.yb=null==b.pageSize?this.yb:b.pageSize;null!=this.yb&&(c=this.yb);var d=this.pa;if(null!=this.Ca)if(null!=this.yb){var e=this.Ca.data.length-1;if(this.pa+this.yb-1<=e){var e=a.Jb.lJ(this.Ca,this.pa,this.yb),c=[],d=[],f,g;for(f=this.pa;f<=e;f++)g=this.Ca.keys[f],c[f-this.pa]=this.dm(this.Ca.data[f]),d[f-this.pa]=g;e={data:c,keys:d,startIndex:this.pa};this.cn(b,e,null);return Promise.resolve(e)}this.pa<=e&&(d=e+1)}else this.i.refresh(),this.Ca=null;else d=
0;var k={start:d,count:c},l=this;return new Promise(function(c,d){l.i.rp(k,{success:function(d){l.hU(d);b.refresh=!0;d=a.Jb.lJ(l.Ca,l.pa,l.yb);var e=[],f=[],g,h;for(g=l.pa;g<=d;g++)h=l.Ca.keys[g],e[g-l.pa]=l.dm(l.Ca.data[g]),f[g-l.pa]=h;l.nn=0<e.length?!0:!1;d={data:e,keys:f,startIndex:l.pa};l.cn(b,d,null);c(d)}.bind(this),error:function(a){l.cn(b,null,a);d(a)}.bind(this)})})};a.Jb.prototype.hU=function(b){var c=b.getStart(),d,e;for(d=0;d<b.getCount();d++)e=c+d,this.ii[e]={},this.ii[e].nodeSet=b,
this.ii[e].startIndex=c;this.Ca||(this.Ca={},this.Ca.data=[],this.Ca.keys=[],this.Ca.indexes=[]);a.Jb.Vy(b,this,this.Ca,c)};a.Jb.prototype.GE=function(b){b.silent||a.V.u.handleEvent.call(this,a.V.O.REQUEST,{startIndex:b.startIndex})};a.Jb.prototype.cn=function(b,c,d){null!=d?a.V.u.handleEvent.call(this,a.V.O.ERROR,d):b.silent||a.V.u.handleEvent.call(this,a.V.O.SYNC,c)};a.Jb.lJ=function(a,c,d){var e=a.data.length-1;0<d&&(e=c+d-1,e=e>a.data.length-1?a.data.length-1:e);return e};a.Jb.Vy=function(a,c,
d,e){for(c=0;c<a.getCount();c++){var f=a.getData(a.getStart()+c);d.data[e+c]=f;d.keys[e+c]=a.getMetadata(a.getStart()+c).key;d.indexes[e+c]=e+c}};a.Jb.prototype.jE=function(){for(var a=0;a<this.Ca.data.length;a++)this.Ca.indexes[a]=a};a.Jb.prototype.dm=function(b){var c=g.extend(!0,{},b),d,e=Object.keys(b);for(d=0;d<e.length;d++)a.Jb.jS(c,b,e[d]);return c};a.Jb.jS=function(a,c,d){Object.defineProperty(a,d,{get:function(){return c[d]},set:function(a){c[d]=a},enumerable:!0})}});