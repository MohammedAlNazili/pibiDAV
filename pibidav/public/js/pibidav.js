!function(){"use strict";var e={name:"TreeNode",props:["node","selected_node"],components:{TreeNode:function(){return frappe.ui.components.TreeNode}},computed:{icon:function(){var e={open:frappe.utils.icon("folder-open","md"),closed:frappe.utils.icon("folder-normal","md"),leaf:frappe.utils.icon("file","md")};return this.node.is_leaf?e.leaf:this.node.open?e.open:e.closed}}},n=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tree-node",class:{opened:e.node.open}},[t("span",{staticClass:"tree-link",class:{active:e.node.value===e.selected_node.value},attrs:{disabled:e.node.fetching},on:{click:function(n){return e.$emit("node-click",e.node)}}},[t("div",{domProps:{innerHTML:e._s(e.icon)}}),e._v(" "),t("a",{staticClass:"tree-label"},[e._v(e._s(e.node.label))])]),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.node.open,expression:"node.open"}],staticClass:"tree-children"},[e._l(e.node.children,function(n){return t("TreeNode",{key:n.value,attrs:{node:n,selected_node:e.selected_node},on:{"node-click":function(n){return e.$emit("node-click",n)},"load-more":function(n){return e.$emit("load-more",n)}}})}),e._v(" "),e.node.has_more_children?t("button",{staticClass:"btn btn-xs btn-load-more",attrs:{disabled:e.node.children_loading},on:{click:function(n){return e.$emit("load-more",e.node)}}},[e._v("\n      "+e._s(e.node.children_loading?e.__("Loading..."):e.__("Load more"))+"\n    ")]):e._e()],2)])};n._withStripped=!0;var t={name:"NcBrowser",components:{TreeNode:function(e,n,t,o,i,r,l,d){var a,s=("function"==typeof t?t.options:t)||{};if(s.__file="/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_browser/TreeNode.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=o,n&&(a=function(e){n.call(this,l(e))}),void 0!==a)if(s.functional){var c=s.render;s.render=function(e,n){return a.call(n),c(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return s}({render:n,staticRenderFns:[]},function(e){e&&e("data-v-be909396_0",{source:"\n.btn-load-more[data-v-be909396] {\n  margin-left: 1.6rem;\n  margin-top: 0.5rem;\n}\n",map:{version:3,sources:["/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_browser/TreeNode.vue"],names:[],mappings:";AAsDA;EACA,mBAAA;EACA,kBAAA;AACA",file:"TreeNode.vue",sourcesContent:['<template>\n  <div class="tree-node" :class="{ opened: node.open }">\n    <span\n      class="tree-link"\n      @click="$emit(\'node-click\', node)"\n      :class="{ active: node.value === selected_node.value }"\n      :disabled="node.fetching"\n    >\n      <div v-html="icon"></div>\n      <a class="tree-label">{{ node.label }}</a>\n    </span>\n    <ul class="tree-children" v-show="node.open">\n      <TreeNode\n        v-for="n in node.children"\n        :key="n.value"\n        :node="n"\n        :selected_node="selected_node"\n        @node-click="n => $emit(\'node-click\', n)"\n        @load-more="n => $emit(\'load-more\', n)"\n      />\n      <button\n        class="btn btn-xs btn-load-more"\n        v-if="node.has_more_children"\n        @click="$emit(\'load-more\', node)"\n        :disabled="node.children_loading"\n      >\n        {{ node.children_loading ? __("Loading...") : __("Load more") }}\n      </button>\n    </ul>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: "TreeNode",\n    props: ["node", "selected_node"],\n    components: {\n      TreeNode: () => frappe.ui.components.TreeNode\n    },\n    computed: {\n      icon() {\n        let icons = {\n          open: frappe.utils.icon("folder-open", "md"),\n          closed: frappe.utils.icon("folder-normal", "md"),\n          leaf: frappe.utils.icon("file", "md")\n        };\n        if (this.node.is_leaf) return icons.leaf;\n        if (this.node.open) return icons.open;\n        return icons.closed;\n      }\n    }\n  };\n<\/script>\n<style scoped>\n  .btn-load-more {\n    margin-left: 1.6rem;\n    margin-top: 0.5rem;\n  }\n</style>\n']},media:void 0})},e,"data-v-be909396",!1,0,function e(){var n=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,i){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var r=o?i.media||"default":e,l=t[r]||(t[r]={ids:[],parts:[],element:void 0});if(!l.ids.includes(e)){var d=i.source,a=l.ids.length;if(l.ids.push(e),o&&(l.element=l.element||document.querySelector("style[data-group="+r+"]")),!l.element){var s=l.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),o&&(s.setAttribute("data-group",r),s.setAttribute("data-next-index","0")),n.appendChild(s)}if(o&&(a=parseInt(l.element.getAttribute("data-next-index")),l.element.setAttribute("data-next-index",a+1)),l.element.styleSheet)l.parts.push(d),l.element.styleSheet.cssText=l.parts.filter(Boolean).join("\n");else{var c=document.createTextNode(d),f=l.element.childNodes;f[a]&&l.element.removeChild(f[a]),f.length?l.element.insertBefore(c,f[a]):l.element.appendChild(c)}}}}})},data:function(){return{node:{label:__("/"),value:"/",children:[],children_start:0,children_loading:!1,is_leaf:!1,fetching:!1,fetched:!1,open:!1},selected_node:{},page_length:500}},mounted:function(){this.toggle_node(this.node)},methods:{toggle_node:function(e){var n=this;e.is_leaf||e.fetched?(e.open=!e.open,this.select_node(e)):(e.fetching=!0,e.children_start=0,e.children_loading=!1,this.get_files_in_folder(e.value,0).then(function(t){var o=t.files,i=t.has_more;e.open=!0,e.children=o,e.fetched=!0,e.fetching=!1,e.children_start+=n.page_length,e.has_more_children=i,n.select_node(e)}))},load_more:function(e){var n=this;if(e.has_more_children){var t=e.children_start;e.children_loading=!0,this.get_files_in_folder(e.value,t).then(function(t){var o=t.files,i=t.has_more;e.children=e.children.concat(o),e.children_start+=n.page_length,e.has_more_children=i,e.children_loading=!1})}},select_node:function(e){this.selected_node=e},get_files_in_folder:function(e,n){var t=this;return frappe.call("pibidav.pibidav.custom.get_nc_files_in_folder",{folder:e,start:n,page_length:this.page_length}).then(function(e){var n=e.message||{},o=n.files;void 0===o&&(o=[]);var i=n.has_more;return void 0===i&&(i=!1),{files:o=o.map(function(e){return t.make_file_node(e)}),has_more:i}})},make_file_node:function(e){var n=e.file_name||e.name;return{label:frappe.utils.file_name_ellipsis(n,40),filename:n,file_url:e.file_url,value:e.name,is_leaf:!e.is_folder,fetched:!e.is_folder,children:[],children_loading:!1,children_start:0,open:!1,fetching:!1}},select_folder:function(){var e=this.selected_node;return this.upload_to_folder({is_folder:!e.is_leaf,file_name:e.filename,fileid:e.file_url,path:e.value})},upload_to_folder:function(e){return e}}},o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"file-browser"},[t("div",{staticClass:"nc-browser-list"},[t("TreeNode",{staticClass:"tree with-skeleton",attrs:{node:e.node,selected_node:e.selected_node},on:{"node-click":function(n){return e.toggle_node(n)},"load-more":function(n){return e.load_more(n)}}})],1)])};o._withStripped=!0;var i=function(e,n,t,o,i,r,l,d){var a,s=("function"==typeof t?t.options:t)||{};if(s.__file="/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_browser/NcBrowser.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=o,n&&(a=function(e){n.call(this,l(e))}),void 0!==a)if(s.functional){var c=s.render;s.render=function(e,n){return a.call(n),c(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return s}({render:o,staticRenderFns:[]},function(e){e&&e("data-v-fda8060e_0",{source:"\n.nc-browser-list {\n  height: 420px;\n  overflow: hidden;\n  margin-top: 6px;\n}\n.tree {\n  overflow: auto;\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 4rem;\n}\n",map:{version:3,sources:["/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_browser/NcBrowser.vue"],names:[],mappings:";AAkIA;EACA,aAAA;EACA,gBAAA;EACA,eAAA;AACA;AACA;EACA,cAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;AACA",file:"NcBrowser.vue",sourcesContent:['<template>\n  <div class="file-browser">\n    <div class="nc-browser-list">\n      <TreeNode\n        class="tree with-skeleton"\n        :node="node"\n        :selected_node="selected_node"\n        @node-click="n => toggle_node(n)"\n        @load-more="n => load_more(n)"\n      />\n    </div>\n  </div>\n</template>\n<script>\n\nimport TreeNode from "./TreeNode.vue";\n\nexport default {\n  name: "NcBrowser",  \n  components: {\n    TreeNode\n  },\n  data() {\n    return {\n      node: {\n        label: __("/"),\n        value: "/",\n        children: [],\n        children_start: 0,\n        children_loading: false,\n        is_leaf: false,\n        fetching: false,\n        fetched: false,\n        open: false\n      },\n      selected_node: {},\n      page_length: 500\n    };\n  },\n  mounted() {\n    this.toggle_node(this.node);\n  },\n  methods: {\n    toggle_node(node) {\n      if (!node.is_leaf && !node.fetched) {\n        node.fetching = true;\n        node.children_start = 0;\n        node.children_loading = false;\n        this.get_files_in_folder(node.value, 0).then(\n          ({ files, has_more }) => {\n            node.open = true;\n            node.children = files;\n            node.fetched = true;\n            node.fetching = false;\n            node.children_start += this.page_length;\n            node.has_more_children = has_more;\n            this.select_node(node);\n          }\n        );\n      } else {\n        node.open = !node.open;\n        this.select_node(node);\n      }\n    },\n    load_more(node) {\n      if (node.has_more_children) {\n        let start = node.children_start;\n        node.children_loading = true;\n        this.get_files_in_folder(node.value, start).then(\n          ({ files, has_more }) => {\n            node.children = node.children.concat(files);\n            node.children_start += this.page_length;\n            node.has_more_children = has_more;\n            node.children_loading = false;\n          }\n        );\n      }\n    },\n    select_node(node) {\n      //if (node.is_leaf) {\n        this.selected_node = node;\n      //}\n    },\n    get_files_in_folder(folder, start) {\n      return frappe\n      .call("pibidav.pibidav.custom.get_nc_files_in_folder", {\n        folder,\n        start,\n        page_length: this.page_length\n      })\n      .then(r => {\n        let { files = [], has_more = false } = r.message || {};\n        files = files.map(file => this.make_file_node(file));\n        return { files, has_more };\n      });\n    },\n    make_file_node(file) {\n      let filename = file.file_name || file.name;\n      let label = frappe.utils.file_name_ellipsis(filename, 40);\n      return {\n        label: label,\n        filename: filename,\n        file_url: file.file_url,\n        value: file.name,\n        is_leaf: !file.is_folder,\n        fetched: !file.is_folder, // fetched if node is leaf\n        children: [],\n        children_loading: false,\n        children_start: 0,\n        open: false,\n        fetching: false\n      };\n    },\n    select_folder() {\n      let selected_file = this.selected_node;\n      return this.upload_to_folder({\n        is_folder: !selected_file.is_leaf,\n\tfile_name: selected_file.filename,\n        fileid: selected_file.file_url,\n        path: selected_file.value\n      });\n    },\n    upload_to_folder(file) {\n      return file;\n    }\n  }\n};\n<\/script>\n\n<style>\n  .nc-browser-list {\n    height: 420px;\n    overflow: hidden;\n    margin-top: 6px;\n  }\n  .tree {\n    overflow: auto;\n    height: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    padding-bottom: 4rem;\n  }\n</style>\n']},media:void 0})},t,void 0,!1,0,function e(){var n=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,i){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var r=o?i.media||"default":e,l=t[r]||(t[r]={ids:[],parts:[],element:void 0});if(!l.ids.includes(e)){var d=i.source,a=l.ids.length;if(l.ids.push(e),o&&(l.element=l.element||document.querySelector("style[data-group="+r+"]")),!l.element){var s=l.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),o&&(s.setAttribute("data-group",r),s.setAttribute("data-next-index","0")),n.appendChild(s)}if(o&&(a=parseInt(l.element.getAttribute("data-next-index")),l.element.setAttribute("data-next-index",a+1)),l.element.styleSheet)l.parts.push(d),l.element.styleSheet.cssText=l.parts.filter(Boolean).join("\n");else{var c=document.createTextNode(d),f=l.element.childNodes;f[a]&&l.element.removeChild(f[a]),f.length?l.element.insertBefore(c,f[a]):l.element.appendChild(c)}}}}});frappe.provide("frappe.ui"),frappe.ui.pibiDocs=class{constructor(e){var n=this;void 0===e&&(e={});var t=e.wrapper,o=e.method,r=e.on_success,l=e.doctype,d=e.docname,a=e.fieldname,s=(e.files,e.folder),c=e.disable_file_browser;e.frm,t?this.wrapper=t.get?t.get(0):t:this.make_dialog(),this.$ncbrowser=new Vue({el:this.wrapper,render:function(e){return e(i,{props:{show_upload_button:!Boolean(n.dialog),doctype:l,docname:d,fieldname:a,method:o,folder:s,on_success:r,disable_file_browser:c}})}}),this.browser=this.$ncbrowser.$children[0],this.browser.$watch("close_dialog",function(e){e&&n.dialog&&n.dialog.hide()})}select_folder(){return this.dialog&&this.dialog.get_primary_btn().prop("disabled",!0),this.browser.select_folder()}make_dialog(){var e=this;this.dialog=new frappe.ui.Dialog({title:__("Select NextCloud Folder"),size:"large",primary_action_label:__("Select"),primary_action:function(){var n=e.select_folder(),t=e.wrapper.ownerDocument.body.getAttribute("data-route").replace("Form/",""),o=t.lastIndexOf("/"),i=t.substr(o+1),r=t.replace("/"+i,"");if(n.is_folder?frappe.db.set_value("PibiDAV Addon","pbc_"+i,{nc_folder:n.path,nc_enable:1}):frappe.msgprint(__("You have selected a file and not a folder"),n.file_name),e.dialog.hide(),"Folder Set"!=r)return document.querySelector(".add-attachment-btn").click(),!1;window.location.reload()}}),this.wrapper=this.dialog.body,this.dialog.show(),this.dialog.$wrapper.on("hidden.bs.modal",function(){$(this).data("bs.modal",null),$(this).remove()})}};var r={name:"TreeNode",props:["node","selected_node"],components:{TreeNode:function(){return frappe.ui.components.TreeNode}},computed:{icon:function(){var e={open:frappe.utils.icon("folder-open","md"),closed:frappe.utils.icon("folder-normal","md"),leaf:frappe.utils.icon("file","sm")};return this.node.is_leaf?e.leaf:this.node.open?e.open:e.closed}}},l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tree-node",class:{opened:e.node.open}},[t("span",{staticClass:"tree-link",class:{active:e.node.value===e.selected_node.value},attrs:{disabled:e.node.fetching},on:{click:function(n){return e.$emit("node-click",e.node)}}},[t("div",{domProps:{innerHTML:e._s(e.icon)}}),e._v(" "),t("a",{staticClass:"tree-label"},[e._v(e._s(e.node.label))])]),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.node.open,expression:"node.open"}],staticClass:"tree-children"},[e._l(e.node.children,function(n){return t("TreeNode",{key:n.value,attrs:{node:n,selected_node:e.selected_node},on:{"node-click":function(n){return e.$emit("node-click",n)},"load-more":function(n){return e.$emit("load-more",n)}}})}),e._v(" "),e.node.has_more_children?t("button",{staticClass:"btn btn-xs btn-load-more",attrs:{disabled:e.node.children_loading},on:{click:function(n){return e.$emit("load-more",e.node)}}},[e._v("\n      "+e._s(e.node.children_loading?e.__("Loading..."):e.__("Load more"))+"\n    ")]):e._e()],2)])};l._withStripped=!0;var d={name:"NcBrowser",props:["node"],components:{TreeNode:function(e,n,t,o,i,r,l,d){var a,s=("function"==typeof t?t.options:t)||{};if(s.__file="/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_addon/TreeNode.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=o,n&&(a=function(e){n.call(this,l(e))}),void 0!==a)if(s.functional){var c=s.render;s.render=function(e,n){return a.call(n),c(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return s}({render:l,staticRenderFns:[]},function(e){e&&e("data-v-70b132ba_0",{source:"\n.btn-load-more[data-v-70b132ba] {\n  margin-left: 1.6rem;\n  margin-top: 0.5rem;\n}\n",map:{version:3,sources:["/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_addon/TreeNode.vue"],names:[],mappings:";AAsDA;EACA,mBAAA;EACA,kBAAA;AACA",file:"TreeNode.vue",sourcesContent:['<template>\n  <div class="tree-node" :class="{ opened: node.open }">\n    <span\n      class="tree-link"\n      @click="$emit(\'node-click\', node)"\n      :class="{ active: node.value === selected_node.value }"\n      :disabled="node.fetching"\n    >\n      <div v-html="icon"></div>\n      <a class="tree-label">{{ node.label }}</a>\n    </span>\n    <ul class="tree-children" v-show="node.open">\n      <TreeNode\n        v-for="n in node.children"\n        :key="n.value"\n        :node="n"\n        :selected_node="selected_node"\n        @node-click="n => $emit(\'node-click\', n)"\n        @load-more="n => $emit(\'load-more\', n)"\n      />\n      <button\n        class="btn btn-xs btn-load-more"\n        v-if="node.has_more_children"\n        @click="$emit(\'load-more\', node)"\n        :disabled="node.children_loading"\n      >\n        {{ node.children_loading ? __("Loading...") : __("Load more") }}\n      </button>\n    </ul>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "TreeNode",\n  props: ["node", "selected_node"],\n  components: {\n    TreeNode: () => frappe.ui.components.TreeNode\n  },\n  computed: {\n    icon() {\n      let icons = {\n        open: frappe.utils.icon("folder-open", "md"),\n        closed: frappe.utils.icon("folder-normal", "md"),\n        leaf: frappe.utils.icon("file", "sm")\n      };\n      if (this.node.is_leaf) return icons.leaf;\n      if (this.node.open) return icons.open;\n      return icons.closed;\n    }\n  }\n};\n<\/script>\n<style scoped>\n  .btn-load-more {\n    margin-left: 1.6rem;\n    margin-top: 0.5rem;\n  }\n</style>\n']},media:void 0})},r,"data-v-70b132ba",!1,0,function e(){var n=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,i){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var r=o?i.media||"default":e,l=t[r]||(t[r]={ids:[],parts:[],element:void 0});if(!l.ids.includes(e)){var d=i.source,a=l.ids.length;if(l.ids.push(e),o&&(l.element=l.element||document.querySelector("style[data-group="+r+"]")),!l.element){var s=l.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),o&&(s.setAttribute("data-group",r),s.setAttribute("data-next-index","0")),n.appendChild(s)}if(o&&(a=parseInt(l.element.getAttribute("data-next-index")),l.element.setAttribute("data-next-index",a+1)),l.element.styleSheet)l.parts.push(d),l.element.styleSheet.cssText=l.parts.filter(Boolean).join("\n");else{var c=document.createTextNode(d),f=l.element.childNodes;f[a]&&l.element.removeChild(f[a]),f.length?l.element.insertBefore(c,f[a]):l.element.appendChild(c)}}}}})},data:function(){return{secret:"",ncCreateFolder:!1,shareType:"",node:{label:__("/"),value:"/",children:[],children_start:0,children_loading:!1,is_leaf:!1,fetching:!1,fetched:!1,open:!1},selected_node:{},page_length:500}},mounted:function(){this.toggle_node(this.node)},methods:{toggle_node:function(e){var n=this;e.is_leaf||e.fetched?(e.open=!e.open,this.select_node(e)):(e.fetching=!0,e.children_start=0,e.children_loading=!1,this.get_files_in_folder(e.value,0).then(function(t){var o=t.files,i=t.has_more;e.open=!0,e.children=o,e.fetched=!0,e.fetching=!1,e.children_start+=n.page_length,e.has_more_children=i,n.select_node(e)}))},load_more:function(e){var n=this;if(e.has_more_children){var t=e.children_start;e.children_loading=!0,this.get_files_in_folder(e.value,t).then(function(t){var o=t.files,i=t.has_more;e.children=e.children.concat(o),e.children_start+=n.page_length,e.has_more_children=i,e.children_loading=!1})}},select_node:function(e){this.selected_node=e},get_files_in_folder:function(e,n){var t=this;return frappe.call("pibidav.pibidav.custom.get_nc_files_in_folder",{folder:e,start:n,page_length:this.page_length}).then(function(e){var n=e.message||{},o=n.files;void 0===o&&(o=[]);var i=n.has_more;return void 0===i&&(i=!1),{files:o=o.map(function(e){return t.make_file_node(e)}),has_more:i}})},make_file_node:function(e){var n=e.file_name||e.name;return{label:frappe.utils.file_name_ellipsis(n,40),filename:n,file_url:e.file_url,value:e.name,is_leaf:!e.is_folder,fetched:!e.is_folder,children:[],children_loading:!1,children_start:0,open:!1,fetching:!1}},select_folder:function(){var e=this.selected_node;return this.upload_to_folder({is_folder:!e.is_leaf,file_name:e.filename,fileid:e.file_url,path:e.value})},upload_to_folder:function(e){return e}}},a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"file-browser"},[t("div",{staticClass:"form-control"},[t("div",{staticClass:"d-flex justify-content-between"},[t("label",{attrs:{for:"nc_create_folder"}},[e._v("NC Create Folder")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ncCreateFolder,expression:"ncCreateFolder"}],attrs:{type:"checkbox",value:"nc_create_folder"},domProps:{checked:Array.isArray(e.ncCreateFolder)?e._i(e.ncCreateFolder,"nc_create_folder")>-1:e.ncCreateFolder},on:{change:function(n){var t=e.ncCreateFolder,o=n.target,i=!!o.checked;if(Array.isArray(t)){var r="nc_create_folder",l=e._i(t,r);o.checked?l<0&&(e.ncCreateFolder=t.concat([r])):l>-1&&(e.ncCreateFolder=t.slice(0,l).concat(t.slice(l+1)))}else e.ncCreateFolder=i}}}),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.shareType,expression:"shareType"}],staticClass:"form-select",attrs:{"aria-label":"share Type"},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.shareType=n.target.multiple?t:t[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("Select Share Type")]),e._v(" "),t("option",[e._v("4-Upload Only")]),e._v(" "),t("option",[e._v("17-Read Only")]),e._v(" "),t("option",[e._v("31-Upload and Edit")])]),e._v(" "),t("label",{attrs:{for:"secret"}},[e._v("Sharing Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.secret,expression:"secret"}],domProps:{value:e.secret},on:{input:function(n){n.target.composing||(e.secret=n.target.value)}}})])]),e._v(" "),t("div",{staticClass:"nc-browser-list"},[t("TreeNode",{staticClass:"tree with-skeleton",attrs:{node:e.node,selected_node:e.selected_node},on:{"node-click":function(n){return e.toggle_node(n)},"load-more":function(n){return e.load_more(n)}}})],1)])};a._withStripped=!0;var s=function(e,n,t,o,i,r,l,d){var a,s=("function"==typeof t?t.options:t)||{};if(s.__file="/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_addon/NcBrowser.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,i&&(s.functional=!0)),s._scopeId=o,n&&(a=function(e){n.call(this,l(e))}),void 0!==a)if(s.functional){var c=s.render;s.render=function(e,n){return a.call(n),c(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return s}({render:a,staticRenderFns:[]},function(e){e&&e("data-v-3ffc94a5_0",{source:"\n.nc-browser-list {\n  height: 420px;\n  overflow: hidden;\n  margin-top: 6px;\n}\n.tree {\n  overflow: auto;\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 4rem;\n}\n",map:{version:3,sources:["/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_addon/NcBrowser.vue"],names:[],mappings:";AA6JA;EACA,aAAA;EACA,gBAAA;EACA,eAAA;AACA;AACA;EACA,cAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;AACA",file:"NcBrowser.vue",sourcesContent:['<template>\n  <div class="file-browser">\n    <div class="form-control">           \n      <div class="d-flex justify-content-between">\n        <label for="nc_create_folder">NC Create Folder</label>\n        <input\n          type="checkbox"\n          value="nc_create_folder"\n          v-model="ncCreateFolder"\n        />\n        <select\n  \t\t    v-model="shareType"\n\t\t      class="form-select"\n\t\t      aria-label="share Type">\n            <option disabled value="">Select Share Type</option>\n            <option>4-Upload Only</option>\n            <option>17-Read Only</option>\n            <option>31-Upload and Edit</option>\n        </select>\n\t\t    <label for="secret">Sharing Password</label>\n          <input\n\t\t    v-model="secret"\n        />\n\t    </div>\n    </div>\n    <div class="nc-browser-list">         \n      <TreeNode\n        class="tree with-skeleton"\n        :node="node"\n        :selected_node="selected_node"\n        @node-click="n => toggle_node(n)"\n        @load-more="n => load_more(n)"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport TreeNode from "./TreeNode.vue";\n\nexport default {\n  name: "NcBrowser",\n  props: ["node"],  \n  components: {\n    TreeNode\n  },\n  data() {\n    return {\n      secret: \'\',\n      ncCreateFolder: false,\n      shareType: \'\',\n      node: {\n        label: __("/"),\n        value: \'/\',\n        children: [],\n        children_start: 0,\n        children_loading: false,\n        is_leaf: false,\n        fetching: false,\n        fetched: false,\n        open: false\n      },\n      selected_node: {},\n      page_length: 500\n    };\n  },\n  mounted() {\n    this.toggle_node(this.node);\n  },\n  methods: {\n    toggle_node(node) {\n      if (!node.is_leaf && !node.fetched) {\n        node.fetching = true;\n        node.children_start = 0;\n        node.children_loading = false;\n        this.get_files_in_folder(node.value, 0).then(\n          ({ files, has_more }) => {\n            node.open = true;\n            node.children = files;\n            node.fetched = true;\n            node.fetching = false;\n            node.children_start += this.page_length;\n            node.has_more_children = has_more;\n            this.select_node(node);\n          }\n        );\n      } else {\n        node.open = !node.open;\n        this.select_node(node);\n      }\n    },\n    load_more(node) {\n      if (node.has_more_children) {\n        let start = node.children_start;\n        node.children_loading = true;\n        this.get_files_in_folder(node.value, start).then(\n          ({ files, has_more }) => {\n            node.children = node.children.concat(files);\n            node.children_start += this.page_length;\n            node.has_more_children = has_more;\n            node.children_loading = false;\n          }\n        );\n      }\n    },\n    select_node(node) {\n      //if (node.is_leaf) {\n        this.selected_node = node;\n      //}\n    },\n    get_files_in_folder(folder, start) {\n      return frappe\n      .call("pibidav.pibidav.custom.get_nc_files_in_folder", {\n        folder,\n        start,\n        page_length: this.page_length\n      })\n      .then(r => {\n        let { files = [], has_more = false } = r.message || {};\n        files = files.map(file => this.make_file_node(file));\n        return { files, has_more };\n      });\n    },\n    make_file_node(file) {\n      let filename = file.file_name || file.name;\n      let label = frappe.utils.file_name_ellipsis(filename, 40);\n      return {\n        label: label,\n        filename: filename,\n        file_url: file.file_url,\n        value: file.name,\n        is_leaf: !file.is_folder,\n        fetched: !file.is_folder, // fetched if node is leaf\n        children: [],\n        children_loading: false,\n        children_start: 0,\n        open: false,\n        fetching: false\n      };\n    },\n    select_folder() {\n      let selected_file = this.selected_node;\n      return this.upload_to_folder({\n        is_folder: !selected_file.is_leaf,\n\tfile_name: selected_file.filename,\n        fileid: selected_file.file_url,\n        path: selected_file.value\n      });\n    },\n    upload_to_folder(file) {\n      return file;\n    }\n  }\n};\n<\/script>\n\n<style>\n  .nc-browser-list {\n    height: 420px;\n    overflow: hidden;\n    margin-top: 6px;\n  }\n  .tree {\n    overflow: auto;\n    height: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    padding-bottom: 4rem;\n  }\n</style>\n']},media:void 0})},d,void 0,!1,0,function e(){var n=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,i){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var r=o?i.media||"default":e,l=t[r]||(t[r]={ids:[],parts:[],element:void 0});if(!l.ids.includes(e)){var d=i.source,a=l.ids.length;if(l.ids.push(e),o&&(l.element=l.element||document.querySelector("style[data-group="+r+"]")),!l.element){var s=l.element=document.createElement("style");s.type="text/css",i.media&&s.setAttribute("media",i.media),o&&(s.setAttribute("data-group",r),s.setAttribute("data-next-index","0")),n.appendChild(s)}if(o&&(a=parseInt(l.element.getAttribute("data-next-index")),l.element.setAttribute("data-next-index",a+1)),l.element.styleSheet)l.parts.push(d),l.element.styleSheet.cssText=l.parts.filter(Boolean).join("\n");else{var c=document.createTextNode(d),f=l.element.childNodes;f[a]&&l.element.removeChild(f[a]),f.length?l.element.insertBefore(c,f[a]):l.element.appendChild(c)}}}}});frappe.provide("frappe.ui"),frappe.ui.pibiDAV=class{constructor(e){var n=this;void 0===e&&(e={});var t=e.wrapper,o=e.folder;t?this.wrapper=t.get?t.get(0):t:this.make_dialog();var i={};i=o?{label:o.slice(0,-1),value:o,children:[],children_start:0,children_loading:!1,is_leaf:!1,fetching:!1,fetched:!1,open:!1}:{label:__("/"),value:"/",children:[],children_start:0,children_loading:!1,is_leaf:!1,fetching:!1,fetched:!1,open:!1},this.$ncbrowser=new Vue({el:this.wrapper,render:function(e){return e(s,{props:{node:i}})}}),this.browser=this.$ncbrowser.$children[0],this.browser.$watch("close_dialog",function(e){e&&n.dialog&&n.dialog.hide()})}select_folder(){return this.dialog&&this.dialog.get_primary_btn().prop("disabled",!0),this.browser.select_folder()}make_dialog(){var e=this;this.dialog=new frappe.ui.Dialog({title:__("Read NC Folder"),size:"large",primary_action_label:__("Select"),primary_action:function(){var n=e.select_folder(),t=e.browser.ncCreateFolder,o=null,i=null;t&&(o=e.browser.secret,i=e.browser.shareType);var r=e.wrapper.ownerDocument.body.getAttribute("data-route").replace("Form/",""),l=r.lastIndexOf("/"),d=r.substr(l+1),a=r.replace("/"+d,"");return n.is_folder?(console.log("Create Folder: "+t+" sharing "+i+" with password "+o),frappe.db.set_value(""+a,""+d,{nc_folder:n.path}),e.dialog.hide(),"Folder Set"!=a?(document.querySelector(".add-attachment-btn").click(),!1):void window.location.reload()):(frappe.msgprint(__("You have selected a file and not a folder"),n.file_name),!1)}}),this.wrapper=this.dialog.body,this.dialog.show(),this.dialog.$wrapper.on("hidden.bs.modal",function(){$(this).data("bs.modal",null),$(this).remove()})}}}();
//# sourceMappingURL=pibidav.js.map
