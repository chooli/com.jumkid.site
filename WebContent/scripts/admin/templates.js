Ember.TEMPLATES["admintools"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h3");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
        content(env, morph0, context, "SYSLang.FixtureData");
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var morph0 = dom.createMorphAt(element0,0,0);
        element(env, element0, context, "action", ["launch", "fixturedata"], {});
        content(env, morph0, context, "SYSLang.FixtureData");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","main_panel_title");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element1 = dom.childAt(fragment, [0]);
      var morph0 = dom.createMorphAt(element1,1,1);
      var morph1 = dom.createMorphAt(element1,2,2);
      var morph2 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      block(env, morph0, context, "if", [get(env, context, "isFixtureData")], {}, child0, null);
      block(env, morph1, context, "unless", [get(env, context, "isFixtureData")], {}, child1, null);
      content(env, morph2, context, "outlet");
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["album"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        inline(env, morph0, context, "featured-img", [get(env, context, "model.featuredPic"), 76], {});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          inline(env, morph0, context, "trimLength", [get(env, context, "mfile.title"), 12], {});
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          inline(env, morph0, context, "trimLength", [get(env, context, "mfile.filename"), 12], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-search-item");
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","s-search-item-title");
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","s-search-item-title");
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("+");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [5, 0]);
        var morph0 = dom.createMorphAt(element1,0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3, 0]),0,0);
        element(env, element1, context, "action", ["loadFile", get(env, context, "mfile")], {});
        inline(env, morph0, context, "thumbnail-img", [get(env, context, "mfile")], {});
        block(env, morph1, context, "if", [get(env, context, "mfile.title")], {}, child0, child1);
        element(env, element2, context, "action", ["setFeatured", get(env, context, "mfile")], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","west_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","top_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("<<");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","content_act_delete");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","content_act_download");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","top_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","album_edit_panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"id","entity-form");
      dom.setAttribute(el3,"name","entity-form");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","title");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","style");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","content");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"style","margin:16px 2px;");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"style","min-height: 370px;overflow: hidden;");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element3 = dom.childAt(fragment, [0]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element4, [1]);
      var element6 = dom.childAt(element4, [3]);
      var element7 = dom.childAt(element4, [5]);
      var element8 = dom.childAt(fragment, [2]);
      var element9 = dom.childAt(element8, [1]);
      var element10 = dom.childAt(element9, [3]);
      var element11 = dom.childAt(element9, [5]);
      var element12 = dom.childAt(element9, [7]);
      var element13 = dom.childAt(element8, [3]);
      var element14 = dom.childAt(element13, [1]);
      var element15 = dom.childAt(element14, [1]);
      var element16 = dom.childAt(element14, [3]);
      var element17 = dom.childAt(element14, [5]);
      var element18 = dom.childAt(element13, [3]);
      var morph0 = dom.createMorphAt(element6,0,0);
      var morph1 = dom.createMorphAt(element7,0,0);
      var morph2 = dom.createMorphAt(element3,3,3);
      var morph3 = dom.createMorphAt(element9,1,1);
      var morph4 = dom.createMorphAt(element10,0,0);
      var morph5 = dom.createMorphAt(element11,0,0);
      var morph6 = dom.createMorphAt(element12,0,0);
      var morph7 = dom.createMorphAt(element9,9,9);
      var morph8 = dom.createMorphAt(dom.childAt(element15, [0]),0,0);
      var morph9 = dom.createMorphAt(element15,1,1);
      var morph10 = dom.createMorphAt(dom.childAt(element16, [0]),0,0);
      var morph11 = dom.createMorphAt(element16,1,1);
      var morph12 = dom.createMorphAt(dom.childAt(element17, [0]),0,0);
      var morph13 = dom.createMorphAt(element17,1,1);
      var morph14 = dom.createMorphAt(element18,0,0);
      var morph15 = dom.createMorphAt(element18,1,1);
      var morph16 = dom.createMorphAt(dom.childAt(element13, [5]),1,1);
      var morph17 = dom.createMorphAt(element13,7,7);
      element(env, element5, context, "action", ["backward"], {});
      element(env, element6, context, "bind-attr", [], {"disabled": "fileDisabled"});
      element(env, element6, context, "action", ["removeFile"], {});
      content(env, morph0, context, "SYSLang.Delete");
      element(env, element7, context, "bind-attr", [], {"disabled": "fileDisabled"});
      element(env, element7, context, "action", ["downloadFile"], {});
      content(env, morph1, context, "SYSLang.Download");
      inline(env, morph2, context, "media-viewer", [], {"mediafile": get(env, context, "selectedfile")});
      inline(env, morph3, context, "activated-switcher", [], {"activated": get(env, context, "model.activated"), "SYSLang": get(env, context, "SYSLang")});
      element(env, element10, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element10, context, "action", ["newEntity"], {});
      content(env, morph4, context, "SYSLang.New");
      element(env, element11, context, "action", ["save"], {});
      content(env, morph5, context, "SYSLang.Save");
      element(env, element12, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element12, context, "action", ["remove"], {});
      content(env, morph6, context, "SYSLang.Delete");
      inline(env, morph7, context, "upload-selector", [], {"mfiles": get(env, context, "mfiles"), "uploadPreview": false, "confirm": "confirm", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      content(env, morph8, context, "SYSLang.Title");
      inline(env, morph9, context, "input", [], {"type": "text", "name": "title", "value": get(env, context, "model.title"), "placeholder": ""});
      content(env, morph10, context, "SYSLang.Style");
      inline(env, morph11, context, "view", ["select"], {"content": get(env, context, "App.FIXTURE.albumStyles"), "optionValuePath": "content.value", "optionLabelPath": "content.name", "value": get(env, context, "model.style")});
      content(env, morph12, context, "SYSLang.Content");
      inline(env, morph13, context, "textarea", [], {"name": "content", "rows": "5", "cols": "36", "value": get(env, context, "model.content"), "placeholder": "type some short description for the album"});
      inline(env, morph14, context, "module-icon", [get(env, context, "model.style"), 42], {});
      block(env, morph15, context, "if", [get(env, context, "model.featuredPic")], {}, child0, null);
      block(env, morph16, context, "each", [get(env, context, "mfiles")], {"keyword": "mfile"}, child1, null);
      inline(env, morph17, context, "social-comments-editor", [], {"socialcomments": get(env, context, "socialcomments"), "SYSLang": get(env, context, "SYSLang"), "confirm": "confirm", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["albums"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-online.png");
          dom.setAttribute(el1,"width","24px");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-offline.png");
          dom.setAttribute(el1,"width","24px");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          content(env, morph0, context, "album.attachments.length");
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("0");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-album-item-panel");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"style","float:right;");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","color:#676767;");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [5]);
        var morph0 = dom.createMorphAt(element1,0,0);
        var morph1 = dom.createMorphAt(element1,2,2);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [3, 0]),0,0);
        var morph4 = dom.createMorphAt(element2,0,0);
        var morph5 = dom.createMorphAt(element2,2,2);
        var morph6 = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
        element(env, element0, context, "action", ["editEntity", get(env, context, "album")], {});
        inline(env, morph0, context, "module-icon", [get(env, context, "album.style"), 36], {});
        content(env, morph1, context, "album.createdDate");
        block(env, morph2, context, "if", [get(env, context, "album.activated")], {}, child0, child1);
        inline(env, morph3, context, "trimLength", [get(env, context, "album.title"), 68], {});
        block(env, morph4, context, "if", [get(env, context, "album.attachments")], {}, child2, child3);
        content(env, morph5, context, "SYSLang.Files");
        inline(env, morph6, context, "featured-img", [get(env, context, "album.featuredPic"), 185], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","search_button");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box_navigation");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_previous_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","page_info");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_next_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","album_list_panel");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element3 = dom.childAt(fragment, [0]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element3, [3]);
      var element6 = dom.childAt(element5, [3]);
      var element7 = dom.childAt(element3, [5]);
      var element8 = dom.childAt(element7, [1]);
      var element9 = dom.childAt(element7, [5]);
      var morph0 = dom.createMorphAt(element4,0,0);
      var morph1 = dom.createMorphAt(element5,1,1);
      var morph2 = dom.createMorphAt(element8,0,0);
      var morph3 = dom.createMorphAt(dom.childAt(element7, [3]),0,0);
      var morph4 = dom.createMorphAt(element9,0,0);
      var morph5 = dom.createMorphAt(dom.childAt(element3, [9]),1,1);
      element(env, element4, context, "action", ["newEntity"], {});
      content(env, morph0, context, "SYSLang.New");
      inline(env, morph1, context, "input", [], {"type": "text", "value": get(env, context, "keyword"), "size": "20", "action": "typeSearch"});
      element(env, element6, context, "action", ["search"], {});
      element(env, element8, context, "bind-attr", [], {"disabled": "hasNoPreviouse"});
      element(env, element8, context, "action", ["previousPage"], {});
      content(env, morph2, context, "SYSLang.Previous");
      content(env, morph3, context, "pagingInfo");
      element(env, element9, context, "bind-attr", [], {"disabled": "hasNoNext"});
      element(env, element9, context, "action", ["nextPage"], {});
      content(env, morph4, context, "SYSLang.Next");
      block(env, morph5, context, "each", [get(env, context, "albums")], {"keyword": "album"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["blog"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createElement("label");
        dom.setAttribute(el2,"for","filename");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [0]);
        var morph0 = dom.createMorphAt(dom.childAt(element1, [0]),0,0);
        var morph1 = dom.createMorphAt(element1,1,1);
        content(env, morph0, context, "SYSLang.FileName");
        inline(env, morph1, context, "input", [], {"type": "text", "name": "filename", "value": get(env, context, "model.filename"), "placeholder": "*specific name for blog"});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createElement("label");
        dom.setAttribute(el2,"for","author");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [0]),0,0);
        var morph1 = dom.createMorphAt(element0,1,1);
        content(env, morph0, context, "SYSLang.Author");
        inline(env, morph1, context, "input", [], {"type": "text", "name": "author", "value": get(env, context, "model.author"), "placeholder": ""});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","top_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("<<");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","blog_edit_panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"id","entity-form");
      dom.setAttribute(el3,"name","entity-form");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","colorcode");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","title");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","summary");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","htmlContent");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, get = hooks.get, inline = hooks.inline, content = hooks.content, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element3, [5]);
      var element6 = dom.childAt(element3, [7]);
      var element7 = dom.childAt(element3, [9]);
      var element8 = dom.childAt(element2, [3, 1]);
      var element9 = dom.childAt(element8, [3]);
      var element10 = dom.childAt(element8, [5]);
      var element11 = dom.childAt(element8, [9]);
      var element12 = dom.childAt(element8, [11]);
      var morph0 = dom.createMorphAt(element3,3,3);
      var morph1 = dom.createMorphAt(element5,0,0);
      var morph2 = dom.createMorphAt(element6,0,0);
      var morph3 = dom.createMorphAt(element7,0,0);
      var morph4 = dom.createMorphAt(element3,11,11);
      var morph5 = dom.createMorphAt(element8,1,1);
      var morph6 = dom.createMorphAt(dom.childAt(element9, [0]),0,0);
      var morph7 = dom.createMorphAt(element9,2,2);
      var morph8 = dom.createMorphAt(dom.childAt(element10, [0]),0,0);
      var morph9 = dom.createMorphAt(element10,1,1);
      var morph10 = dom.createMorphAt(element8,7,7);
      var morph11 = dom.createMorphAt(dom.childAt(element11, [0]),0,0);
      var morph12 = dom.createMorphAt(element11,1,1);
      var morph13 = dom.createMorphAt(dom.childAt(element12, [0]),0,0);
      var morph14 = dom.createMorphAt(element12,1,1);
      var morph15 = dom.createMorphAt(element2,5,5);
      element(env, element4, context, "action", ["backward"], {});
      inline(env, morph0, context, "activated-switcher", [], {"activated": get(env, context, "model.activated"), "SYSLang": get(env, context, "SYSLang")});
      element(env, element5, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element5, context, "action", ["newBlog"], {});
      content(env, morph1, context, "SYSLang.New");
      element(env, element6, context, "action", ["save"], {});
      content(env, morph2, context, "SYSLang.Save");
      element(env, element7, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element7, context, "action", ["remove"], {});
      content(env, morph3, context, "SYSLang.Delete");
      inline(env, morph4, context, "upload-selector", [], {"mfiles": get(env, context, "mfiles"), "uploadPreview": true, "confirm": "confirm", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      block(env, morph5, context, "if", [get(env, context, "isAdmin")], {}, child0, null);
      content(env, morph6, context, "SYSLang.SelectColor");
      inline(env, morph7, context, "select-colorcode", [], {"style": "width:180px;", "name": "color", "optionValuePath": "id", "optionLabelPath": "text", "value": get(env, context, "model.colorcode")});
      content(env, morph8, context, "SYSLang.Title");
      inline(env, morph9, context, "input", [], {"type": "text", "name": "title", "value": get(env, context, "model.title"), "placeholder": ""});
      block(env, morph10, context, "if", [get(env, context, "isAdmin")], {}, child1, null);
      content(env, morph11, context, "SYSLang.Summary");
      inline(env, morph12, context, "textarea", [], {"name": "summary", "rows": "3", "cols": "36", "value": get(env, context, "model.summary"), "placeholder": "type some short description for the blog"});
      content(env, morph13, context, "SYSLang.Content");
      inline(env, morph14, context, "view", [get(env, context, "App.CKEditor")], {"name": "htmlContent", "rows": "9", "cols": "26", "value": get(env, context, "model.htmlContent"), "action": "setEditorValue"});
      inline(env, morph15, context, "social-comments-editor", [], {"socialcomments": get(env, context, "socialcomments"), "SYSLang": get(env, context, "SYSLang"), "confirm": "confirm", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["blogs"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-online.png");
          dom.setAttribute(el1,"width","24px");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-offline.png");
          dom.setAttribute(el1,"width","24px");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	  	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-blog-item-panel");
        var el2 = dom.createTextNode("\n	  		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"style","float:right;");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","color:#676767;");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var morph0 = dom.createMorphAt(element1,0,0);
        var morph1 = dom.createMorphAt(element1,2,2);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [3, 0]),0,0);
        var morph4 = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
        element(env, element0, context, "action", ["editBlog", get(env, context, "blog")], {});
        inline(env, morph0, context, "module-icon", ["blog", 36], {});
        content(env, morph1, context, "blog.createdDate");
        block(env, morph2, context, "if", [get(env, context, "blog.activated")], {}, child0, child1);
        inline(env, morph3, context, "trimLength", [get(env, context, "blog.title"), 68], {});
        inline(env, morph4, context, "trimLength", [get(env, context, "blog.summary"), 56], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","search_button");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box_navigation");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_previous_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","page_info");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_next_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","blogs_list_panel");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element2, [3]);
      var element5 = dom.childAt(element4, [3]);
      var element6 = dom.childAt(element2, [5]);
      var element7 = dom.childAt(element6, [1]);
      var element8 = dom.childAt(element6, [5]);
      var morph0 = dom.createMorphAt(element3,0,0);
      var morph1 = dom.createMorphAt(element4,1,1);
      var morph2 = dom.createMorphAt(element7,0,0);
      var morph3 = dom.createMorphAt(dom.childAt(element6, [3]),0,0);
      var morph4 = dom.createMorphAt(element8,0,0);
      var morph5 = dom.createMorphAt(dom.childAt(element2, [9]),1,1);
      element(env, element3, context, "action", ["newBlog"], {});
      content(env, morph0, context, "SYSLang.New");
      inline(env, morph1, context, "input", [], {"type": "text", "value": get(env, context, "keyword"), "size": "20", "action": "typeSearch"});
      element(env, element5, context, "action", ["search"], {});
      element(env, element7, context, "bind-attr", [], {"disabled": "hasNoPreviouse"});
      element(env, element7, context, "action", ["previousPage"], {});
      content(env, morph2, context, "SYSLang.Previous");
      content(env, morph3, context, "pagingInfo");
      element(env, element8, context, "bind-attr", [], {"disabled": "hasNoNext"});
      element(env, element8, context, "action", ["nextPage"], {});
      content(env, morph4, context, "SYSLang.Next");
      block(env, morph5, context, "each", [get(env, context, "blogs")], {"keyword": "blog"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/activated-switcher"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "SYSLang.Public");
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "SYSLang.Private");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"style","height:26px;float:left;");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("label");
      dom.setAttribute(el2,"for","activated-switcher");
      dom.setAttribute(el2,"style","margin:3px 3px;height:26px;text-align:left;font-weight:bold;");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [0]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
      inline(env, morph0, context, "input", [], {"type": "checkbox", "id": "activated-switcher", "name": "activated", "class": "switch", "checked": get(env, context, "activated")});
      block(env, morph1, context, "if", [get(env, context, "activated")], {}, child0, child1);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/dialog-widget"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","dialog-bg");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","dialog-title");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","dialog-description");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment(" Buttons, both options close the window in this demo ");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","dialog-buttons");
      var el3 = dom.createTextNode("\n	    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content, element = hooks.element;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [7]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element1, [3]);
      var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
      var morph1 = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
      var morph2 = dom.createMorphAt(element2,0,0);
      var morph3 = dom.createMorphAt(element3,0,0);
      content(env, morph0, context, "SYSLang.Confirm");
      content(env, morph1, context, "message");
      element(env, element2, context, "action", ["doYes"], {});
      content(env, morph2, context, "SYSLang.Yes");
      element(env, element3, context, "action", ["doNo"], {});
      content(env, morph3, context, "SYSLang.No");
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/itinerary-attribute-type-radio"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(fragment, [2]);
      var element2 = dom.childAt(fragment, [4]);
      var element3 = dom.childAt(fragment, [6]);
      var element4 = dom.childAt(fragment, [8]);
      var element5 = dom.childAt(fragment, [10]);
      var morph0 = dom.createMorphAt(element0,0,0);
      var morph1 = dom.createMorphAt(element0,1,1);
      var morph2 = dom.createMorphAt(element1,0,0);
      var morph3 = dom.createMorphAt(element1,1,1);
      var morph4 = dom.createMorphAt(element2,0,0);
      var morph5 = dom.createMorphAt(element2,1,1);
      var morph6 = dom.createMorphAt(element3,0,0);
      var morph7 = dom.createMorphAt(element3,1,1);
      var morph8 = dom.createMorphAt(element4,0,0);
      var morph9 = dom.createMorphAt(element4,1,1);
      var morph10 = dom.createMorphAt(element5,0,0);
      var morph11 = dom.createMorphAt(element5,1,1);
      inline(env, morph0, context, "view", [get(env, context, "App.RadioButton")], {"name": "attrType", "selectionBinding": "attributeType", "value": "activity"});
      inline(env, morph1, context, "itinerary-attribute-icon", ["activity"], {});
      inline(env, morph2, context, "view", [get(env, context, "App.RadioButton")], {"name": "attrType", "selectionBinding": "attributeType", "value": "destination"});
      inline(env, morph3, context, "itinerary-attribute-icon", ["destination"], {});
      inline(env, morph4, context, "view", [get(env, context, "App.RadioButton")], {"name": "attrType", "selectionBinding": "attributeType", "value": "flight"});
      inline(env, morph5, context, "itinerary-attribute-icon", ["flight"], {});
      inline(env, morph6, context, "view", [get(env, context, "App.RadioButton")], {"name": "attrType", "selectionBinding": "attributeType", "value": "car"});
      inline(env, morph7, context, "itinerary-attribute-icon", ["car"], {});
      inline(env, morph8, context, "view", [get(env, context, "App.RadioButton")], {"name": "attrType", "selectionBinding": "attributeType", "value": "food"});
      inline(env, morph9, context, "itinerary-attribute-icon", ["food"], {});
      inline(env, morph10, context, "view", [get(env, context, "App.RadioButton")], {"name": "attrType", "selectionBinding": "attributeType", "value": "hotel"});
      inline(env, morph11, context, "itinerary-attribute-icon", ["hotel"], {});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/logout-button"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","signout_button");
      dom.setAttribute(el1,"onClick","window.location='sign-out';");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      content(env, morph0, context, "SYSLang.Signout");
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/media-enlarge-viewer"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","media-enlarge-bg");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","media-enlarge-container");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"id","media-enlarge-button");
      var el4 = dom.createElement("button");
      var el5 = dom.createTextNode("✖");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"id","media-enlarge-target");
      dom.setAttribute(el3,"style","width: 128px; height: 128px; visibility: hidden;");
      dom.setAttribute(el3,"src","images/admin/gray-loading.gif");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [0, 1, 1, 0]);
      element(env, element0, context, "action", ["close"], {});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/media-viewer"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("video");
        dom.setAttribute(el1,"class","video-js vjs-default-skin");
        dom.setAttribute(el1,"controls","true");
        dom.setAttribute(el1,"preload","true");
        dom.setAttribute(el1,"poster","images/admin/my_video_poster.jpg");
        dom.setAttribute(el1,"data-setup","{}");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("source");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element7 = dom.childAt(fragment, [1]);
        var element8 = dom.childAt(element7, [1]);
        element(env, element7, context, "bind-attr", [], {"id": get(env, context, "viewerId")});
        element(env, element7, context, "bind-attr", [], {"width": get(env, context, "containerWidth")});
        element(env, element7, context, "bind-attr", [], {"height": get(env, context, "containerHeight")});
        element(env, element8, context, "bind-attr", [], {"src": get(env, context, "src")});
        element(env, element8, context, "bind-attr", [], {"type": get(env, context, "type")});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("video");
        dom.setAttribute(el1,"class","video-js vjs-default-skin");
        dom.setAttribute(el1,"controls","true");
        dom.setAttribute(el1,"preload","true");
        dom.setAttribute(el1,"poster","images/admin/my_audio_poster.jpg");
        dom.setAttribute(el1,"data-setup","{}");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("source");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element5 = dom.childAt(fragment, [1]);
        var element6 = dom.childAt(element5, [1]);
        element(env, element5, context, "bind-attr", [], {"id": get(env, context, "viewerId")});
        element(env, element5, context, "bind-attr", [], {"width": get(env, context, "containerWidth")});
        element(env, element5, context, "bind-attr", [], {"height": get(env, context, "containerHeight")});
        element(env, element6, context, "bind-attr", [], {"src": get(env, context, "src")});
        element(env, element6, context, "bind-attr", [], {"type": get(env, context, "type")});
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","margin: auto 0px; visibility:hidden;");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, get = hooks.get;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [1]);
        var element4 = dom.childAt(element3, [0]);
        element(env, element3, context, "action", ["enlarge"], {});
        element(env, element4, context, "bind-attr", [], {"id": get(env, context, "viewerId")});
        element(env, element4, context, "bind-attr", [], {"src": get(env, context, "thumbnailLarge")});
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createElement("code");
        dom.setAttribute(el2,"class","prettyprint");
        var el3 = dom.createTextNode("web page");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [1]);
        var element2 = dom.childAt(element1, [0]);
        element(env, element1, context, "bind-attr", [], {"style": get(env, context, "divStyle")});
        element(env, element2, context, "bind-attr", [], {"id": get(env, context, "viewerId")});
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("PDF File");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        element(env, element0, context, "bind-attr", [], {"id": get(env, context, "viewerId")});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","content_title_panel");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","content_viewer_panel");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, inline = hooks.inline;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element9 = dom.childAt(fragment, [0]);
      var element10 = dom.childAt(element9, [1]);
      var morph0 = dom.createMorphAt(element10,1,1);
      var morph1 = dom.createMorphAt(element10,3,3);
      var morph2 = dom.createMorphAt(element10,5,5);
      var morph3 = dom.createMorphAt(element10,7,7);
      var morph4 = dom.createMorphAt(element10,9,9);
      var morph5 = dom.createMorphAt(element9,3,3);
      var morph6 = dom.createMorphAt(element9,5,5);
      block(env, morph0, context, "if", [get(env, context, "showVideo")], {}, child0, null);
      block(env, morph1, context, "if", [get(env, context, "showAudio")], {}, child1, null);
      block(env, morph2, context, "if", [get(env, context, "showImage")], {}, child2, null);
      block(env, morph3, context, "if", [get(env, context, "showHtml")], {}, child3, null);
      block(env, morph4, context, "if", [get(env, context, "showPdf")], {}, child4, null);
      inline(env, morph5, context, "input", [], {"type": "hidden", "name": get(env, context, "mediafile.activated"), "value": "true"});
      inline(env, morph6, context, "textarea", [], {"name": "title", "rows": "5", "cols": "36", "value": get(env, context, "mediafile.title"), "placeholder": "type some words here", "focus-out": "save"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/navigation-menu"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, get = hooks.get, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element0,0,0);
        element(env, element0, context, "bind-attr", [], {"class": "menuItem.selected:s-top-tool-menu-focus:s-top-tool-menu"});
        element(env, element0, context, "action", ["menuClick", get(env, context, "menuItem")], {});
        content(env, morph0, context, "menuItem.title");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "each", [get(env, context, "menuItems")], {"keyword": "menuItem"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/product-uploader"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("form");
      dom.setAttribute(el1,"id","upload-form");
      dom.setAttribute(el1,"name","upload-form");
      dom.setAttribute(el1,"method","post");
      dom.setAttribute(el1,"enctype","multipart/form-data");
      dom.setAttribute(el1,"accept-charset","utf-8");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"id","upload_button");
      var el3 = dom.createTextNode("Upload");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"id","upload-progress");
      dom.setAttribute(el2,"style","width:120px;font-weight:bold;");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, element = hooks.element;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [3]);
      var morph0 = dom.createMorphAt(element0,1,1);
      inline(env, morph0, context, "input", [], {"type": "file", "name": "file", "length": "200", "multiple": true});
      element(env, element1, context, "action", ["upload"], {});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/product-viewer"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("video");
        dom.setAttribute(el1,"class","video-js vjs-default-skin");
        dom.setAttribute(el1,"controls","true");
        dom.setAttribute(el1,"preload","true");
        dom.setAttribute(el1,"poster","images/admin/my_video_poster.jpg");
        dom.setAttribute(el1,"data-setup","{}");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("source");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element7 = dom.childAt(fragment, [1]);
        var element8 = dom.childAt(element7, [1]);
        element(env, element7, context, "bind-attr", [], {"id": "viewerId"});
        element(env, element7, context, "bind-attr", [], {"width": "containerWidth"});
        element(env, element7, context, "bind-attr", [], {"height": "containerHeight"});
        element(env, element8, context, "bind-attr", [], {"src": "src"});
        element(env, element8, context, "bind-attr", [], {"type": "type"});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("video");
        dom.setAttribute(el1,"class","video-js vjs-default-skin");
        dom.setAttribute(el1,"controls","true");
        dom.setAttribute(el1,"preload","true");
        dom.setAttribute(el1,"poster","images/admin/my_audio_poster.jpg");
        dom.setAttribute(el1,"data-setup","{}");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("source");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element5 = dom.childAt(fragment, [1]);
        var element6 = dom.childAt(element5, [1]);
        element(env, element5, context, "bind-attr", [], {"id": "viewerId"});
        element(env, element5, context, "bind-attr", [], {"width": "containerWidth"});
        element(env, element5, context, "bind-attr", [], {"height": "containerHeight"});
        element(env, element6, context, "bind-attr", [], {"src": "src"});
        element(env, element6, context, "bind-attr", [], {"type": "type"});
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","margin: auto 0px; visibility:hidden;");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [1]);
        var element4 = dom.childAt(element3, [0]);
        element(env, element3, context, "action", ["enlarge"], {});
        element(env, element4, context, "bind-attr", [], {"id": "viewerId"});
        element(env, element4, context, "bind-attr", [], {"src": "thumbnailLarge"});
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createElement("code");
        dom.setAttribute(el2,"class","prettyprint");
        var el3 = dom.createTextNode("web page");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [1]);
        var element2 = dom.childAt(element1, [0]);
        element(env, element1, context, "bind-attr", [], {"style": "divStyle"});
        element(env, element2, context, "bind-attr", [], {"id": "viewerId"});
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("PDF File");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        element(env, element0, context, "bind-attr", [], {"id": "viewerId"});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h3");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","di_separator");
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      dom.setAttribute(el1,"for","title");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      var el2 = dom.createElement("label");
      dom.setAttribute(el2,"for","regularPrice");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      var el2 = dom.createElement("label");
      dom.setAttribute(el2,"for","salePrice");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      var el2 = dom.createElement("label");
      dom.setAttribute(el2,"for","discountRate");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("%");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      dom.setAttribute(el1,"for","currency");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","content_viewer_panel");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      dom.setAttribute(el1,"for","introduction");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","di_separator");
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      dom.setAttribute(el1,"for","productCode");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      dom.setAttribute(el1,"for","referenceCode");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","di_separator");
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element9 = dom.childAt(fragment, [7]);
      var element10 = dom.childAt(fragment, [9]);
      var element11 = dom.childAt(fragment, [11]);
      var element12 = dom.childAt(fragment, [16]);
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      var morph1 = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
      var morph2 = dom.createMorphAt(fragment,5,5,contextualElement);
      var morph3 = dom.createMorphAt(dom.childAt(element9, [0]),0,0);
      var morph4 = dom.createMorphAt(element9,1,1);
      var morph5 = dom.createMorphAt(dom.childAt(element10, [0]),0,0);
      var morph6 = dom.createMorphAt(element10,1,1);
      var morph7 = dom.createMorphAt(dom.childAt(element11, [0]),0,0);
      var morph8 = dom.createMorphAt(element11,1,1);
      var morph9 = dom.createMorphAt(dom.childAt(fragment, [13]),0,0);
      var morph10 = dom.createMorphAt(fragment,14,14,contextualElement);
      var morph11 = dom.createMorphAt(element12,1,1);
      var morph12 = dom.createMorphAt(element12,3,3);
      var morph13 = dom.createMorphAt(element12,5,5);
      var morph14 = dom.createMorphAt(element12,7,7);
      var morph15 = dom.createMorphAt(element12,9,9);
      var morph16 = dom.createMorphAt(dom.childAt(fragment, [18]),0,0);
      var morph17 = dom.createMorphAt(fragment,19,19,contextualElement);
      var morph18 = dom.createMorphAt(dom.childAt(fragment, [23]),0,0);
      var morph19 = dom.createMorphAt(fragment,24,24,contextualElement);
      var morph20 = dom.createMorphAt(dom.childAt(fragment, [26]),0,0);
      var morph21 = dom.createMorphAt(fragment,27,27,contextualElement);
      content(env, morph0, context, "SYSLang.Product");
      content(env, morph1, context, "SYSLang.Name");
      inline(env, morph2, context, "input", [], {"type": "text", "name": "title", "value": get(env, context, "mediafile.title")});
      content(env, morph3, context, "SYSLang.RegularPrice");
      inline(env, morph4, context, "input", [], {"class": "number", "type": "text", "name": "regularPrice", "maxlength": "14", "value": get(env, context, "mediafile.regularPrice"), "disabledBinding": "disabled"});
      content(env, morph5, context, "SYSLang.SalePrice");
      inline(env, morph6, context, "input", [], {"class": "number", "type": "text", "name": "salePrice", "maxlength": "14", "value": get(env, context, "mediafile.salePrice"), "disabledBinding": "disabled"});
      content(env, morph7, context, "SYSLang.DiscountRate");
      inline(env, morph8, context, "input", [], {"class": "number", "type": "text", "name": "discountRate", "maxlength": "2", "value": get(env, context, "mediafile.discountRate"), "disabledBinding": "disabled"});
      content(env, morph9, context, "SYSLang.Currency");
      inline(env, morph10, context, "view", ["select"], {"content": get(env, context, "App.FIXTURE.currency"), "optionValuePath": "content.value", "optionLabelPath": "content.name", "value": get(env, context, "mediafile.currency")});
      block(env, morph11, context, "if", [get(env, context, "showVideo")], {}, child0, null);
      block(env, morph12, context, "if", [get(env, context, "showAudio")], {}, child1, null);
      block(env, morph13, context, "if", [get(env, context, "showImage")], {}, child2, null);
      block(env, morph14, context, "if", [get(env, context, "showHtml")], {}, child3, null);
      block(env, morph15, context, "if", [get(env, context, "showPdf")], {}, child4, null);
      content(env, morph16, context, "SYSLang.Introduction");
      inline(env, morph17, context, "textarea", [], {"name": "title", "rows": "5", "value": get(env, context, "mediafile.introduction"), "placeholder": "type some words for product"});
      content(env, morph18, context, "SYSLang.ProductCode");
      inline(env, morph19, context, "input", [], {"type": "text", "name": "productCode", "value": get(env, context, "mediafile.productCode")});
      content(env, morph20, context, "SYSLang.ReferenceCode");
      inline(env, morph21, context, "input", [], {"type": "text", "name": "referenceCode", "value": get(env, context, "mediafile.referenceCode")});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/send-to-mailer"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("✔");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [0]);
        element(env, element3, context, "action", ["doYes"], {});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","friend-choose-list-tag");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("✖");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [1]);
        var element2 = dom.childAt(element1, [2]);
        var morph0 = dom.createMorphAt(element1,0,0);
        content(env, morph0, context, "friend.name");
        element(env, element2, context, "action", ["removeFriend", get(env, context, "friend")], {});
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","friend-choose-list-item");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" <");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(">");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element0,0,0);
        var morph1 = dom.createMorphAt(element0,1,1);
        var morph2 = dom.createMorphAt(element0,3,3);
        element(env, element0, context, "action", ["addFriend", get(env, context, "friend")], {});
        inline(env, morph0, context, "user-avatar", [get(env, context, "friend.username"), 28], {});
        content(env, morph1, context, "friend.username");
        content(env, morph2, context, "friend.email");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","float:right;");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("✖");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","margin:8px 0px;font-weight:bold;");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("  \n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createElement("strong");
      var el5 = dom.createTextNode("+");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, element = hooks.element, inline = hooks.inline, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element4 = dom.childAt(fragment, [0]);
      var element5 = dom.childAt(element4, [1]);
      var element6 = dom.childAt(element5, [1]);
      var element7 = dom.childAt(element4, [5]);
      var element8 = dom.childAt(element4, [7]);
      var element9 = dom.childAt(element8, [2]);
      var morph0 = dom.createMorphAt(element5,0,0);
      var morph1 = dom.createMorphAt(dom.childAt(element4, [3]),0,0);
      var morph2 = dom.createMorphAt(element7,1,1);
      var morph3 = dom.createMorphAt(element7,3,3);
      var morph4 = dom.createMorphAt(element8,1,1);
      var morph5 = dom.createMorphAt(element4,9,9);
      block(env, morph0, context, "if", [get(env, context, "hasFriends")], {}, child0, null);
      element(env, element6, context, "action", ["doNo"], {});
      inline(env, morph1, context, "textarea", [], {"rows": "3", "cols": "68", "value": get(env, context, "mailMsg")});
      content(env, morph2, context, "SYSLang.To");
      block(env, morph3, context, "each", [get(env, context, "friends")], {"keyword": "friend"}, child1, null);
      inline(env, morph4, context, "input", [], {"type": "text", "name": "keyword", "value": get(env, context, "mailer.keyword"), "placeholder": "type user name or email", "action": "addFriend"});
      element(env, element9, context, "action", ["addFriend"], {});
      block(env, morph5, context, "each", [get(env, context, "availableFriends")], {"keyword": "friend"}, child2, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/social-comments-editor"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-online.png");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-offline.png");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-socialcomment-item-panel");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("a");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4,"src","images/admin/icon-remove.png");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content, element = hooks.element, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [0]);
        var element3 = dom.childAt(element1, [2]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [2]),0,0);
        var morph2 = dom.createMorphAt(element3,0,0);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
        inline(env, morph0, context, "user-avatar", [get(env, context, "socialcomment.socialUserId"), 36], {});
        content(env, morph1, context, "socialcomment.socialUserId");
        element(env, element2, context, "action", ["remove", get(env, context, "socialcomment")], {});
        element(env, element3, context, "action", ["toggleActivate", get(env, context, "socialcomment")], {});
        block(env, morph2, context, "if", [get(env, context, "socialcomment.activated")], {}, child0, child1);
        content(env, morph3, context, "socialcomment.content");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","di");
      var el2 = dom.createTextNode(" ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element4 = dom.childAt(fragment, [0, 1]);
      var element5 = dom.childAt(element4, [2]);
      var morph0 = dom.createMorphAt(element4,1,1);
      var morph1 = dom.createMorphAt(element5,0,0);
      var morph2 = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      inline(env, morph0, context, "textarea", [], {"name": "content", "class": "s-socialcomment-textarea", "rows": "2", "value": get(env, context, "socialcomment.content"), "placeholder": "type your comment here"});
      element(env, element5, context, "action", ["save"], {});
      content(env, morph1, context, "SYSLang.Submit");
      block(env, morph2, context, "each", [get(env, context, "socialcomments")], {"keyword": "socialcomment"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/time-picker"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","time-picker-control");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","cursor: pointer;");
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"src","images/admin/up.png");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","width:8px;");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","cursor: pointer;");
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"src","images/admin/up.png");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","time-picker-digit");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","border:0px;width:8px;");
      var el3 = dom.createTextNode(":");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","cursor: pointer;");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","time-picker-control");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","cursor: pointer;");
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"src","images/admin/down.png");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","width:8px;");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","cursor: pointer;");
      var el3 = dom.createElement("img");
      dom.setAttribute(el3,"src","images/admin/down.png");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element0, [5]);
      var element3 = dom.childAt(fragment, [2]);
      var element4 = dom.childAt(element3, [7]);
      var element5 = dom.childAt(fragment, [4]);
      var element6 = dom.childAt(element5, [1]);
      var element7 = dom.childAt(element5, [5]);
      var morph0 = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
      var morph1 = dom.createMorphAt(dom.childAt(element3, [5]),0,0);
      var morph2 = dom.createMorphAt(element4,0,0);
      element(env, element1, context, "action", ["longHour"], {"on": "mouseDown"});
      element(env, element2, context, "action", ["longMinute"], {"on": "mouseDown"});
      content(env, morph0, context, "hourText");
      content(env, morph1, context, "minuteText");
      element(env, element4, context, "action", ["togglrAMPM"], {"on": "click"});
      content(env, morph2, context, "ampmText");
      element(env, element6, context, "action", ["shortHour"], {"on": "mouseDown"});
      element(env, element7, context, "action", ["shortMinute"], {"on": "mouseDown"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/top-waiting-drawer"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("img");
      dom.setAttribute(el1,"src","images/admin/gray-loading.gif");
      dom.setAttribute(el1,"height","38px");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["components/upload-selector"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","s-search-item");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","s-search-item-title");
          var el3 = dom.createElement("button");
          var el4 = dom.createTextNode("✖");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          var el4 = dom.createElement("img");
          dom.setAttribute(el4,"src","images/admin/download.png");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element1, [0]);
          var element3 = dom.childAt(element1, [1]);
          var morph0 = dom.createMorphAt(element0,1,1);
          inline(env, morph0, context, "thumbnail-img", [get(env, context, "mediafile")], {});
          element(env, element1, context, "bind-attr", [], {"id": get(env, context, "mediafile.uuid")});
          element(env, element2, context, "action", ["remove", get(env, context, "mediafile.uuid")], {});
          element(env, element3, context, "action", ["download", get(env, context, "mediafile.uuid")], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        block(env, morph0, context, "each", [get(env, context, "mfiles")], {"keyword": "mediafile"}, child0, null);
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("form");
      dom.setAttribute(el1,"id","upload-form");
      dom.setAttribute(el1,"name","upload-form");
      dom.setAttribute(el1,"method","post");
      dom.setAttribute(el1,"enctype","multipart/form-data");
      dom.setAttribute(el1,"accept-charset","utf-8");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"id","upload_button");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"id","upload-progress");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element4 = dom.childAt(fragment, [0]);
      var element5 = dom.childAt(element4, [3]);
      var morph0 = dom.createMorphAt(element4,1,1);
      var morph1 = dom.createMorphAt(element5,0,0);
      var morph2 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      inline(env, morph0, context, "input", [], {"type": "file", "name": "file", "length": "200", "multiple": get(env, context, "multiple")});
      element(env, element5, context, "action", ["upload"], {});
      content(env, morph1, context, "SYSLang.Upload");
      block(env, morph2, context, "if", [get(env, context, "uploadPreview")], {}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["contacts"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	  	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-contact-item-panel");
        var el2 = dom.createTextNode("\n	  		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/admin/icon-contact.png");
        dom.setAttribute(el3,"width","36px");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"style","float:right;");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","color:#676767;");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1, 1]),0,0);
        var morph1 = dom.createMorphAt(element1,0,0);
        var morph2 = dom.createMorphAt(element1,2,2);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
        element(env, element0, context, "action", ["editEntity", get(env, context, "contact")], {});
        content(env, morph0, context, "contact.createdDate");
        content(env, morph1, context, "contact.firstname");
        content(env, morph2, context, "contact.lastname");
        content(env, morph3, context, "contact.comment");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","west_wrapper");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","main_panel_tool_bar");
      var el3 = dom.createTextNode("\n	    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","content_act_delete");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","contact_edit_panel");
      var el3 = dom.createTextNode("\n	    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"id","entity-form");
      dom.setAttribute(el3,"name","entity-form");
      var el4 = dom.createTextNode("\n	        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","firstname");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n	        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","lastname");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n	        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","email");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n	        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","phone");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n	        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","comment");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n	    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","contact_reply_panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","search_button");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box_navigation");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_previous_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","page_info");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_next_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_result_panel");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1, 1]);
      var element4 = dom.childAt(element2, [3, 1]);
      var element5 = dom.childAt(element4, [1]);
      var element6 = dom.childAt(element4, [3]);
      var element7 = dom.childAt(element4, [5]);
      var element8 = dom.childAt(element4, [7]);
      var element9 = dom.childAt(element4, [9]);
      var element10 = dom.childAt(element2, [5, 1]);
      var element11 = dom.childAt(fragment, [2]);
      var element12 = dom.childAt(element11, [1]);
      var element13 = dom.childAt(element12, [3]);
      var element14 = dom.childAt(element11, [3]);
      var element15 = dom.childAt(element14, [1]);
      var element16 = dom.childAt(element14, [5]);
      var morph0 = dom.createMorphAt(element3,0,0);
      var morph1 = dom.createMorphAt(dom.childAt(element5, [0]),0,0);
      var morph2 = dom.createMorphAt(element5,1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element6, [0]),0,0);
      var morph4 = dom.createMorphAt(element6,1,1);
      var morph5 = dom.createMorphAt(dom.childAt(element7, [0]),0,0);
      var morph6 = dom.createMorphAt(element7,1,1);
      var morph7 = dom.createMorphAt(dom.childAt(element8, [0]),0,0);
      var morph8 = dom.createMorphAt(element8,1,1);
      var morph9 = dom.createMorphAt(dom.childAt(element9, [0]),0,0);
      var morph10 = dom.createMorphAt(element9,1,1);
      var morph11 = dom.createMorphAt(element10,0,0);
      var morph12 = dom.createMorphAt(element12,1,1);
      var morph13 = dom.createMorphAt(element15,0,0);
      var morph14 = dom.createMorphAt(dom.childAt(element14, [3]),0,0);
      var morph15 = dom.createMorphAt(element16,0,0);
      var morph16 = dom.createMorphAt(dom.childAt(element11, [7]),1,1);
      element(env, element3, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element3, context, "action", ["remove"], {});
      content(env, morph0, context, "SYSLang.Delete");
      content(env, morph1, context, "SYSLang.Firstname");
      inline(env, morph2, context, "input", [], {"type": "text", "name": "firstname", "value": get(env, context, "model.firstname")});
      content(env, morph3, context, "SYSLang.Lastname");
      inline(env, morph4, context, "input", [], {"type": "text", "name": "lastname", "value": get(env, context, "model.lastname")});
      content(env, morph5, context, "SYSLang.Email");
      inline(env, morph6, context, "input", [], {"type": "text", "name": "email", "value": get(env, context, "model.email")});
      content(env, morph7, context, "SYSLang.Phone");
      inline(env, morph8, context, "input", [], {"type": "text", "name": "phone", "value": get(env, context, "model.phone")});
      content(env, morph9, context, "SYSLang.Comment");
      inline(env, morph10, context, "textarea", [], {"name": "comment", "rows": "3", "cols": "36", "value": get(env, context, "model.comment")});
      element(env, element10, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element10, context, "action", ["reply"], {});
      content(env, morph11, context, "SYSLang.Reply");
      inline(env, morph12, context, "input", [], {"type": "text", "value": get(env, context, "keyword"), "size": "20", "action": "typeSearch"});
      element(env, element13, context, "action", ["search"], {});
      element(env, element15, context, "bind-attr", [], {"disabled": "hasNoPreviouse"});
      element(env, element15, context, "action", ["previousPage"], {});
      content(env, morph13, context, "SYSLang.Previous");
      content(env, morph14, context, "pagingInfo");
      element(env, element16, context, "bind-attr", [], {"disabled": "hasNoNext"});
      element(env, element16, context, "action", ["nextPage"], {});
      content(env, morph15, context, "SYSLang.Next");
      block(env, morph16, context, "each", [get(env, context, "contacts")], {"keyword": "contact"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["fixturedata"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"style","width:110px;float:left;");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"style","float:left;");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"src","images/admin/edit.png");
        dom.setAttribute(el1,"height","16px");
        dom.setAttribute(el1,"style","float:right;");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","di_separator");
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [3]);
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        var morph1 = dom.createMorphAt(element0,0,0);
        content(env, morph0, context, "fixturedata.vlname");
        element(env, element0, context, "action", ["editEntity", get(env, context, "fixturedata")], {});
        content(env, morph1, context, "fixturedata.vlvalue");
        element(env, element1, context, "action", ["editEntity", get(env, context, "fixturedata")], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","west_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","search_button");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box_navigation");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_previous_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","page_info");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_next_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","fixturedata_list_panel");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","float:left;margin-right:18px;");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      dom.setAttribute(el2,"id","upload-form");
      dom.setAttribute(el2,"name","upload-form");
      dom.setAttribute(el2,"method","post");
      dom.setAttribute(el2,"enctype","multipart/form-data");
      dom.setAttribute(el2,"accept-charset","utf-8");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","upload-progress");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","entity_edit_panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","name");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","value");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","style");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","description");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element3, [3]);
      var element5 = dom.childAt(element2, [3]);
      var element6 = dom.childAt(element5, [1]);
      var element7 = dom.childAt(element5, [5]);
      var element8 = dom.childAt(element2, [7]);
      var element9 = dom.childAt(element8, [1]);
      var element10 = dom.childAt(element8, [5]);
      var element11 = dom.childAt(fragment, [2]);
      var element12 = dom.childAt(element11, [1]);
      var element13 = dom.childAt(element12, [1]);
      var element14 = dom.childAt(element12, [3]);
      var element15 = dom.childAt(element12, [5]);
      var element16 = dom.childAt(element11, [3]);
      var element17 = dom.childAt(element16, [3]);
      var element18 = dom.childAt(element11, [7]);
      var element19 = dom.childAt(element18, [1]);
      var element20 = dom.childAt(element18, [3]);
      var element21 = dom.childAt(element18, [5]);
      var element22 = dom.childAt(element18, [7]);
      var morph0 = dom.createMorphAt(element3,1,1);
      var morph1 = dom.createMorphAt(element6,0,0);
      var morph2 = dom.createMorphAt(dom.childAt(element5, [3]),0,0);
      var morph3 = dom.createMorphAt(element7,0,0);
      var morph4 = dom.createMorphAt(element9,0,0);
      var morph5 = dom.createMorphAt(element8,3,3);
      var morph6 = dom.createMorphAt(element10,1,1);
      var morph7 = dom.createMorphAt(element10,3,3);
      var morph8 = dom.createMorphAt(dom.childAt(element2, [11]),1,1);
      var morph9 = dom.createMorphAt(element13,0,0);
      var morph10 = dom.createMorphAt(element14,0,0);
      var morph11 = dom.createMorphAt(element15,0,0);
      var morph12 = dom.createMorphAt(element16,1,1);
      var morph13 = dom.createMorphAt(element17,0,0);
      var morph14 = dom.createMorphAt(dom.childAt(element19, [0]),0,0);
      var morph15 = dom.createMorphAt(element19,1,1);
      var morph16 = dom.createMorphAt(dom.childAt(element20, [0]),0,0);
      var morph17 = dom.createMorphAt(element20,1,1);
      var morph18 = dom.createMorphAt(dom.childAt(element21, [0]),0,0);
      var morph19 = dom.createMorphAt(element21,1,1);
      var morph20 = dom.createMorphAt(dom.childAt(element22, [0]),0,0);
      var morph21 = dom.createMorphAt(element22,1,1);
      inline(env, morph0, context, "input", [], {"type": "text", "value": get(env, context, "keyword"), "size": "20", "action": "typeSearch"});
      element(env, element4, context, "action", ["search"], {});
      element(env, element6, context, "bind-attr", [], {"disabled": "hasNoPreviouse"});
      element(env, element6, context, "action", ["previousPage"], {});
      content(env, morph1, context, "SYSLang.Previous");
      content(env, morph2, context, "pagingInfo");
      element(env, element7, context, "bind-attr", [], {"disabled": "hasNoNext"});
      element(env, element7, context, "action", ["nextPage"], {});
      content(env, morph3, context, "SYSLang.Next");
      element(env, element9, context, "action", ["resetFacet"], {});
      content(env, morph4, context, "SYSLang.All");
      inline(env, morph5, context, "view", ["select"], {"content": get(env, context, "facetFields"), "optionValuePath": "content.vlname", "optionLabelPath": "content.vlname", "value": get(env, context, "facetPrefix")});
      content(env, morph6, context, "totalRecords");
      content(env, morph7, context, "SYSLang.Records");
      block(env, morph8, context, "each", [get(env, context, "fixturedatas")], {"keyword": "fixturedata"}, child0, null);
      element(env, element13, context, "action", ["newEntity"], {});
      content(env, morph9, context, "SYSLang.New");
      element(env, element14, context, "action", ["save"], {});
      content(env, morph10, context, "SYSLang.Save");
      element(env, element15, context, "action", ["remove"], {});
      element(env, element15, context, "bind-attr", [], {"disabled": "disabled"});
      content(env, morph11, context, "SYSLang.Delete");
      inline(env, morph12, context, "input", [], {"type": "file", "name": "file", "length": "200", "multiple": get(env, context, "multiple")});
      element(env, element17, context, "action", ["importFile"], {});
      content(env, morph13, context, "SYSLang.Import");
      content(env, morph14, context, "SYSLang.Name");
      inline(env, morph15, context, "input", [], {"name": "vlname", "type": "text", "value": get(env, context, "model.vlname"), "placeholder": ""});
      content(env, morph16, context, "SYSLang.Value");
      inline(env, morph17, context, "input", [], {"name": "vlvalue", "type": "text", "value": get(env, context, "model.vlvalue"), "placeholder": ""});
      content(env, morph18, context, "SYSLang.Language");
      inline(env, morph19, context, "view", ["select"], {"content": get(env, context, "App.FIXTURE.language"), "optionValuePath": "content.value", "optionLabelPath": "content.name", "value": get(env, context, "model.locale")});
      content(env, morph20, context, "SYSLang.Description");
      inline(env, morph21, context, "textarea", [], {"rows": "5", "cols": "36", "value": get(env, context, "model.description")});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["flyer"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        inline(env, morph0, context, "featured-img", [get(env, context, "model.featuredPic"), 42], {});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-search-item");
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","s-search-item-title");
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("+");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3, 0]);
        var morph0 = dom.createMorphAt(element1,0,0);
        element(env, element1, context, "action", ["loadProduct", get(env, context, "product")], {});
        inline(env, morph0, context, "thumbnail-img", [get(env, context, "product")], {});
        element(env, element2, context, "action", ["setFeatured", get(env, context, "product")], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","west_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","top_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("<<");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","content_act_save");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","content_act_delete");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"style","float:right;");
      var el4 = dom.createTextNode(">>");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","top_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","flyer_edit_panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"id","entity-form");
      dom.setAttribute(el3,"name","entity-form");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","title");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","startDate");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","endDate");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","style");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"for","content");
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode(" ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"style","margin:16px 2px;");
      var el4 = dom.createElement("img");
      dom.setAttribute(el4,"src","images/admin/icon-product.png");
      dom.setAttribute(el4,"style","height:36px;margin-right:26px;");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"style","min-height: 370px;overflow: hidden;");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element3 = dom.childAt(fragment, [0]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element4, [1]);
      var element6 = dom.childAt(element4, [3]);
      var element7 = dom.childAt(element4, [5]);
      var element8 = dom.childAt(element4, [7]);
      var element9 = dom.childAt(fragment, [2]);
      var element10 = dom.childAt(element9, [1]);
      var element11 = dom.childAt(element10, [3]);
      var element12 = dom.childAt(element10, [5]);
      var element13 = dom.childAt(element10, [7]);
      var element14 = dom.childAt(element9, [3]);
      var element15 = dom.childAt(element14, [1]);
      var element16 = dom.childAt(element15, [1]);
      var element17 = dom.childAt(element15, [3]);
      var element18 = dom.childAt(element15, [5]);
      var element19 = dom.childAt(element15, [7]);
      var element20 = dom.childAt(element15, [9]);
      var morph0 = dom.createMorphAt(element6,0,0);
      var morph1 = dom.createMorphAt(element7,0,0);
      var morph2 = dom.createMorphAt(element3,3,3);
      var morph3 = dom.createMorphAt(element10,1,1);
      var morph4 = dom.createMorphAt(element11,0,0);
      var morph5 = dom.createMorphAt(element12,0,0);
      var morph6 = dom.createMorphAt(element13,0,0);
      var morph7 = dom.createMorphAt(element10,9,9);
      var morph8 = dom.createMorphAt(dom.childAt(element16, [0]),0,0);
      var morph9 = dom.createMorphAt(element16,1,1);
      var morph10 = dom.createMorphAt(dom.childAt(element17, [0]),0,0);
      var morph11 = dom.createMorphAt(element17,1,1);
      var morph12 = dom.createMorphAt(dom.childAt(element18, [0]),0,0);
      var morph13 = dom.createMorphAt(element18,1,1);
      var morph14 = dom.createMorphAt(dom.childAt(element19, [0]),0,0);
      var morph15 = dom.createMorphAt(element19,1,1);
      var morph16 = dom.createMorphAt(dom.childAt(element20, [0]),0,0);
      var morph17 = dom.createMorphAt(element20,1,1);
      var morph18 = dom.createMorphAt(dom.childAt(element14, [3]),1,1);
      var morph19 = dom.createMorphAt(dom.childAt(element14, [5]),1,1);
      var morph20 = dom.createMorphAt(element14,7,7);
      element(env, element5, context, "action", ["backward"], {});
      element(env, element6, context, "bind-attr", [], {"disabled": "productDisabled"});
      element(env, element6, context, "action", ["saveProduct"], {});
      content(env, morph0, context, "SYSLang.Update");
      element(env, element7, context, "bind-attr", [], {"disabled": "productDisabled"});
      element(env, element7, context, "action", ["removeProduct"], {});
      content(env, morph1, context, "SYSLang.Delete");
      element(env, element8, context, "bind-attr", [], {"disabled": "productDisabled"});
      element(env, element8, context, "action", ["openProductSpec", get(env, context, "selectedproduct")], {});
      inline(env, morph2, context, "product-viewer", [], {"mediafile": get(env, context, "selectedproduct")});
      inline(env, morph3, context, "activated-switcher", [], {"activated": get(env, context, "model.activated"), "SYSLang": get(env, context, "SYSLang")});
      element(env, element11, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element11, context, "action", ["newEntity"], {});
      content(env, morph4, context, "SYSLang.New");
      element(env, element12, context, "action", ["save"], {});
      content(env, morph5, context, "SYSLang.Save");
      element(env, element13, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element13, context, "action", ["remove"], {});
      content(env, morph6, context, "SYSLang.Delete");
      inline(env, morph7, context, "product-uploader", [], {"products": get(env, context, "products"), "confirm": "confirm", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      content(env, morph8, context, "SYSLang.Title");
      inline(env, morph9, context, "input", [], {"type": "text", "name": "title", "value": get(env, context, "model.title"), "placeholder": ""});
      content(env, morph10, context, "SYSLang.StartDate");
      inline(env, morph11, context, "view", [get(env, context, "App.CalendarDateField")], {"value": get(env, context, "model.startDate")});
      content(env, morph12, context, "SYSLang.EndDate");
      inline(env, morph13, context, "view", [get(env, context, "App.CalendarDateField")], {"value": get(env, context, "model.endDate"), "minDate": get(env, context, "model.startDate")});
      content(env, morph14, context, "SYSLang.Style");
      inline(env, morph15, context, "view", ["select"], {"content": get(env, context, "App.FIXTURE.flyerStyles"), "optionValuePath": "content.value", "optionLabelPath": "content.name", "value": get(env, context, "model.style")});
      content(env, morph16, context, "SYSLang.Content");
      inline(env, morph17, context, "textarea", [], {"name": "content", "rows": "5", "cols": "36", "value": get(env, context, "model.content"), "placeholder": "type some short description for the flyer"});
      block(env, morph18, context, "if", [get(env, context, "model.featuredPic")], {}, child0, null);
      block(env, morph19, context, "each", [get(env, context, "products")], {"keyword": "product"}, child1, null);
      inline(env, morph20, context, "social-comments-editor", [], {"socialcomments": get(env, context, "socialcomments"), "SYSLang": get(env, context, "SYSLang"), "confirm": "confirm", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["flyers"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-online.png");
          dom.setAttribute(el1,"width","24px");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-offline.png");
          dom.setAttribute(el1,"width","24px");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          content(env, morph0, context, "flyer.refProducts.length");
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("0");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-flyer-item-panel");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"style","float:right;");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","color:#676767;");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline, content = hooks.content, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [5]);
        var morph0 = dom.createMorphAt(element1,0,0);
        var morph1 = dom.createMorphAt(element1,2,2);
        var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [3, 0]),0,0);
        var morph4 = dom.createMorphAt(element2,0,0);
        var morph5 = dom.createMorphAt(element2,2,2);
        var morph6 = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
        element(env, element0, context, "action", ["editEntity", get(env, context, "flyer")], {});
        inline(env, morph0, context, "module-icon", ["flyer", 36], {});
        content(env, morph1, context, "flyer.createdDate");
        block(env, morph2, context, "if", [get(env, context, "flyer.activated")], {}, child0, child1);
        inline(env, morph3, context, "trimLength", [get(env, context, "flyer.title"), 68], {});
        block(env, morph4, context, "if", [get(env, context, "flyer.refProducts")], {}, child2, child3);
        content(env, morph5, context, "SYSLang.Products");
        inline(env, morph6, context, "featured-img", [get(env, context, "flyer.featuredPic")], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","search_button");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box_navigation");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_previous_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","page_info");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_next_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","flyer_list_panel");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element3 = dom.childAt(fragment, [0]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element3, [3]);
      var element6 = dom.childAt(element5, [3]);
      var element7 = dom.childAt(element3, [5]);
      var element8 = dom.childAt(element7, [1]);
      var element9 = dom.childAt(element7, [5]);
      var morph0 = dom.createMorphAt(element4,0,0);
      var morph1 = dom.createMorphAt(element5,1,1);
      var morph2 = dom.createMorphAt(element8,0,0);
      var morph3 = dom.createMorphAt(dom.childAt(element7, [3]),0,0);
      var morph4 = dom.createMorphAt(element9,0,0);
      var morph5 = dom.createMorphAt(dom.childAt(element3, [9]),1,1);
      element(env, element4, context, "action", ["newEntity"], {});
      content(env, morph0, context, "SYSLang.New");
      inline(env, morph1, context, "input", [], {"type": "text", "value": get(env, context, "keyword"), "size": "20", "action": "typeSearch"});
      element(env, element6, context, "action", ["search"], {});
      element(env, element8, context, "bind-attr", [], {"disabled": "hasNoPreviouse"});
      element(env, element8, context, "action", ["previousPage"], {});
      content(env, morph2, context, "SYSLang.Previous");
      content(env, morph3, context, "pagingInfo");
      element(env, element9, context, "bind-attr", [], {"disabled": "hasNoNext"});
      element(env, element9, context, "action", ["nextPage"], {});
      content(env, morph4, context, "SYSLang.Next");
      block(env, morph5, context, "each", [get(env, context, "flyers")], {"keyword": "flyer"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["friends"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","friend-event-item");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("pre");
        var el3 = dom.createTextNode("\"");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\"");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","float:right;margin-top:20px;");
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"class","button");
        dom.setAttribute(el3,"src","images/admin/icon-ok.png");
        dom.setAttribute(el3,"height","28px");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"class","button");
        dom.setAttribute(el3,"src","images/admin/icon-remove.png");
        dom.setAttribute(el3,"height","28px");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element8 = dom.childAt(fragment, [1]);
        var element9 = dom.childAt(element8, [6]);
        var element10 = dom.childAt(element9, [0]);
        var element11 = dom.childAt(element9, [2]);
        var morph0 = dom.createMorphAt(element8,1,1);
        var morph1 = dom.createMorphAt(element8,2,2);
        var morph2 = dom.createMorphAt(dom.childAt(element8, [4]),1,1);
        inline(env, morph0, context, "user-avatar", [get(env, context, "event.createdBy"), 48], {});
        content(env, morph1, context, "event.createdBy");
        content(env, morph2, context, "event.message");
        element(env, element10, context, "action", ["accept", get(env, context, "event")], {});
        element(env, element11, context, "action", ["reject", get(env, context, "event")], {});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","friend-invite-user-sign");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","friend-invite-caption");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","di");
        dom.setAttribute(el2,"style","min-height:68px;");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" <");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(">");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","di friend-invite-caption");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element4 = dom.childAt(fragment, [1]);
        var element5 = dom.childAt(element4, [5]);
        var element6 = dom.childAt(element5, [3]);
        var element7 = dom.childAt(element4, [11]);
        var morph0 = dom.createMorphAt(dom.childAt(element4, [1]),0,0);
        var morph1 = dom.createMorphAt(element5,1,1);
        var morph2 = dom.createMorphAt(element6,0,0);
        var morph3 = dom.createMorphAt(element6,2,2);
        var morph4 = dom.createMorphAt(dom.childAt(element4, [7]),0,0);
        var morph5 = dom.createMorphAt(element4,9,9);
        var morph6 = dom.createMorphAt(element7,0,0);
        content(env, morph0, context, "SYSLang.CMSG_INVITE_ACC");
        inline(env, morph1, context, "user-avatar", [get(env, context, "existFriend.username"), 48], {});
        content(env, morph2, context, "existFriend.username");
        content(env, morph3, context, "existFriend.email");
        content(env, morph4, context, "SYSLang.CMSG_SAY_SOMETHING");
        inline(env, morph5, context, "textarea", [], {"row": "3", "style": "460px", "value": get(env, context, "newFriend.inviteMsg"), "placeholder": ""});
        element(env, element7, context, "action", ["connect"], {});
        content(env, morph6, context, "SYSLang.Connect");
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","friend-invite-user-sign");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","friend-invite-caption");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","di");
          dom.setAttribute(el2,"style","min-height:48px;");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("img");
          dom.setAttribute(el3,"src","images/admin/icon-email.png");
          dom.setAttribute(el3,"style","width:38px;vertical-align:middle;");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                   ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","di friend-invite-caption");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [11]);
          var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
          var morph1 = dom.createMorphAt(dom.childAt(element2, [5]),3,3);
          var morph2 = dom.createMorphAt(dom.childAt(element2, [7]),0,0);
          var morph3 = dom.createMorphAt(element2,9,9);
          var morph4 = dom.createMorphAt(element3,0,0);
          content(env, morph0, context, "SYSLang.SendFriendMail");
          content(env, morph1, context, "newFriend.usernameOrEmail");
          content(env, morph2, context, "SYSLang.CMSG_SAY_SOMETHING");
          inline(env, morph3, context, "textarea", [], {"row": "3", "style": "480px", "value": get(env, context, "newFriend.inviteMsg"), "placeholder": ""});
          element(env, element3, context, "action", ["send"], {});
          content(env, morph4, context, "SYSLang.Send");
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("pre");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            content(env, morph0, context, "SYSLang.CMSG_NO_DATA");
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.setAttribute(el1,"src","images/admin/icon-ok-highlight.png");
              dom.setAttribute(el1,"height","78px");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("pre");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(dom.childAt(fragment, [3]),0,0);
              content(env, morph0, context, "SYSLang.CMSG_INVITE_SENT");
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.3",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("pre");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
              content(env, morph0, context, "SYSLang.CMSG_SEARCH_FRIEND");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "if", [get(env, context, "toggleInvitationSent")], {}, child0, child1);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "if", [get(env, context, "notFoundFriend")], {}, child0, child1);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "if", [get(env, context, "toggleInviteEmail")], {}, child0, child1);
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	  	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-friend-item-panel");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","margin:5px 8px;");
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","float:right;height:46px;");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"class","button");
        dom.setAttribute(el3,"src","images/admin/icon-remove.png");
        dom.setAttribute(el3,"height","28px");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [5, 1]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3, 0]),0,0);
        element(env, element0, context, "action", ["editEntity", get(env, context, "friend")], {});
        inline(env, morph0, context, "user-avatar", [get(env, context, "friend.username"), 48], {});
        content(env, morph1, context, "friend.username");
        element(env, element1, context, "action", ["disconnect", get(env, context, "friend")], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","search_button");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box_navigation");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_previous_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","page_info");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_next_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","friend-event-panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","friend-event-caption");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","friend-invite-panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"style","float:left;margin-right:28px;");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","entity_list_panel");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element12 = dom.childAt(fragment, [0]);
      var element13 = dom.childAt(element12, [1]);
      var element14 = dom.childAt(element12, [3]);
      var element15 = dom.childAt(element14, [3]);
      var element16 = dom.childAt(element12, [5]);
      var element17 = dom.childAt(element16, [1]);
      var element18 = dom.childAt(element16, [5]);
      var element19 = dom.childAt(element12, [9]);
      var element20 = dom.childAt(element12, [11]);
      var element21 = dom.childAt(element20, [1]);
      var element22 = dom.childAt(element21, [3]);
      var morph0 = dom.createMorphAt(element13,0,0);
      var morph1 = dom.createMorphAt(element14,1,1);
      var morph2 = dom.createMorphAt(element17,0,0);
      var morph3 = dom.createMorphAt(dom.childAt(element16, [3]),0,0);
      var morph4 = dom.createMorphAt(element18,0,0);
      var morph5 = dom.createMorphAt(dom.childAt(element19, [1]),0,0);
      var morph6 = dom.createMorphAt(element19,3,3);
      var morph7 = dom.createMorphAt(element21,1,1);
      var morph8 = dom.createMorphAt(element22,0,0);
      var morph9 = dom.createMorphAt(element20,3,3);
      var morph10 = dom.createMorphAt(dom.childAt(element12, [13]),1,1);
      element(env, element13, context, "action", ["invite"], {});
      content(env, morph0, context, "SYSLang.Invite");
      inline(env, morph1, context, "input", [], {"type": "text", "value": get(env, context, "keyword"), "size": "20", "action": "typeSearch"});
      element(env, element15, context, "action", ["search"], {});
      element(env, element17, context, "bind-attr", [], {"disabled": "hasNoPreviouse"});
      element(env, element17, context, "action", ["previousPage"], {});
      content(env, morph2, context, "SYSLang.Previous");
      content(env, morph3, context, "pagingInfo");
      element(env, element18, context, "bind-attr", [], {"disabled": "hasNoNext"});
      element(env, element18, context, "action", ["nextPage"], {});
      content(env, morph4, context, "SYSLang.Next");
      element(env, element19, context, "bind-attr", [], {"style": get(env, context, "eventPanelStyle")});
      content(env, morph5, context, "SYSLang.CMSG_SOMEONE_INVITE");
      block(env, morph6, context, "each", [get(env, context, "events")], {"keyword": "event"}, child0, null);
      element(env, element20, context, "bind-attr", [], {"style": get(env, context, "invitePanelStyle")});
      inline(env, morph7, context, "input", [], {"type": "text", "value": get(env, context, "newFriend.usernameOrEmail"), "placeholder": get(env, context, "SYSLang.UserNameEmail"), "action": "find"});
      element(env, element22, context, "action", ["find"], {});
      content(env, morph8, context, "SYSLang.Find");
      block(env, morph9, context, "if", [get(env, context, "existFriend")], {}, child1, child2);
      block(env, morph10, context, "each", [get(env, context, "friends")], {"keyword": "friend"}, child3, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["index"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","di");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" [");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("] ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element6 = dom.childAt(fragment, [1]);
        var element7 = dom.childAt(element6, [6]);
        var morph0 = dom.createMorphAt(element6,0,0);
        var morph1 = dom.createMorphAt(element6,2,2);
        var morph2 = dom.createMorphAt(element6,4,4);
        var morph3 = dom.createMorphAt(element7,0,0);
        inline(env, morph0, context, "module-icon", [get(env, context, "datalog.module"), 18], {});
        content(env, morph1, context, "datalog.createdDate");
        inline(env, morph2, context, "datalog-action", [get(env, context, "datalog.action")], {});
        element(env, element7, context, "action", ["editEntity", get(env, context, "datalog")], {});
        content(env, morph3, context, "datalog.object.title");
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","friend-event-item");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("pre");
        var el3 = dom.createTextNode("\"");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\"");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","float:right;margin-top:20px;");
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"class","button");
        dom.setAttribute(el3,"src","images/admin/icon-ok.png");
        dom.setAttribute(el3,"height","28px");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"class","button");
        dom.setAttribute(el3,"src","images/admin/icon-remove.png");
        dom.setAttribute(el3,"height","28px");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, content = hooks.content, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element2 = dom.childAt(fragment, [1]);
        var element3 = dom.childAt(element2, [6]);
        var element4 = dom.childAt(element3, [0]);
        var element5 = dom.childAt(element3, [2]);
        var morph0 = dom.createMorphAt(element2,1,1);
        var morph1 = dom.createMorphAt(element2,2,2);
        var morph2 = dom.createMorphAt(dom.childAt(element2, [4]),1,1);
        inline(env, morph0, context, "user-avatar", [get(env, context, "event.createdBy"), 48], {});
        content(env, morph1, context, "event.createdBy");
        content(env, morph2, context, "event.message");
        element(env, element4, context, "action", ["acceptEvent", get(env, context, "event")], {});
        element(env, element5, context, "action", ["rejectEvent", get(env, context, "event")], {});
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","di");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"style","font-size: 18px;");
        var el3 = dom.createElement("a");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","images/admin/Icon_calendar.png");
        dom.setAttribute(el2,"style","height:13px;");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" | ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline, get = hooks.get, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [2, 0]);
        var morph0 = dom.createMorphAt(element0,0,0);
        var morph1 = dom.createMorphAt(element1,0,0);
        var morph2 = dom.createMorphAt(element0,7,7);
        var morph3 = dom.createMorphAt(element0,9,9);
        var morph4 = dom.createMorphAt(element0,11,11);
        var morph5 = dom.createMorphAt(element0,13,13);
        var morph6 = dom.createMorphAt(element0,15,15);
        inline(env, morph0, context, "module-icon", ["trip", 38], {});
        element(env, element1, context, "action", ["editTrip", get(env, context, "trip")], {});
        content(env, morph1, context, "trip.title");
        content(env, morph2, context, "trip.departureDate");
        content(env, morph3, context, "SYSLang.To");
        content(env, morph4, context, "trip.returnDate");
        content(env, morph5, context, "trip.duration");
        content(env, morph6, context, "SYSLang.Days");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","west_wrapper");
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","s-home-dashlet-item");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","s-home-dashlet-item");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("ul");
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","s-home-dashlet-item");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element8 = dom.childAt(fragment, [0]);
      var element9 = dom.childAt(element8, [1]);
      var element10 = dom.childAt(element9, [1]);
      var element11 = dom.childAt(element8, [3]);
      var element12 = dom.childAt(fragment, [2, 1]);
      var element13 = dom.childAt(element12, [1]);
      var morph0 = dom.createMorphAt(element10,0,0);
      var morph1 = dom.createMorphAt(element10,2,2);
      var morph2 = dom.createMorphAt(element9,3,3);
      var morph3 = dom.createMorphAt(dom.childAt(element11, [1]),0,0);
      var morph4 = dom.createMorphAt(dom.childAt(element11, [3, 1]),1,1);
      var morph5 = dom.createMorphAt(element13,0,0);
      var morph6 = dom.createMorphAt(element13,2,2);
      var morph7 = dom.createMorphAt(element12,3,3);
      content(env, morph0, context, "SYSLang.Recent");
      content(env, morph1, context, "SYSLang.Update");
      block(env, morph2, context, "each", [get(env, context, "recentModules")], {"keyword": "datalog"}, child0, null);
      content(env, morph3, context, "SYSLang.MyMessage");
      block(env, morph4, context, "each", [get(env, context, "outstandingEvents")], {"keyword": "event"}, child1, null);
      content(env, morph5, context, "SYSLang.Recent");
      content(env, morph6, context, "SYSLang.Trip");
      block(env, morph7, context, "each", [get(env, context, "outstandingTrips")], {"keyword": "trip"}, child2, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["login"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Register new user here");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","user_account_setup");
      var el2 = dom.createTextNode("\n     ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      dom.setAttribute(el2,"id","login_form");
      dom.setAttribute(el2,"name","f");
      dom.setAttribute(el2,"action","sign-in");
      dom.setAttribute(el2,"method","POST");
      var el3 = dom.createTextNode("\n   		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","userId");
      var el4 = dom.createTextNode("User ID");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","di");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n   		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","password");
      var el4 = dom.createTextNode("Password");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","di");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n   		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","locale");
      var el4 = dom.createTextNode("Language");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","di");
      dom.setAttribute(el3,"style","height:3px;");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"style","float:left;margin:2px 20px 0px 68px;line-height:2em; ");
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","#");
      var el5 = dom.createTextNode("Forget Password");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("input");
      dom.setAttribute(el3,"name","submit");
      dom.setAttribute(el3,"type","submit");
      dom.setAttribute(el3,"value","submit");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"id","submit_loading_status");
      dom.setAttribute(el3,"style","height:20px;float:left;");
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"style","float:left;margin:2px 16px 0px 68px;line-height:2em; ");
      var el4 = dom.createTextNode("Not a user? ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n     		\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","di");
      dom.setAttribute(el3,"id","login_error_msg");
      dom.setAttribute(el3,"style","height:20px;color:red;");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n     ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("	    ");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [0, 1]);
      var morph0 = dom.createMorphAt(element0,2,2);
      var morph1 = dom.createMorphAt(element0,6,6);
      var morph2 = dom.createMorphAt(element0,10,10);
      var morph3 = dom.createMorphAt(dom.childAt(element0, [20]),1,1);
      inline(env, morph0, context, "input", [], {"class": "validate[required]", "name": "username", "type": "text"});
      inline(env, morph1, context, "input", [], {"class": "validate[required]", "name": "password", "type": "password", "action": "login"});
      inline(env, morph2, context, "view", ["select"], {"content": get(env, context, "App.FIXTURE.language"), "optionValuePath": "content.value", "optionLabelPath": "content.name", "value": get(env, context, "languageCode")});
      block(env, morph3, context, "link-to", ["signup"], {}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["product"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","product_attribute_item");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" : ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var morph0 = dom.createMorphAt(element0,0,0);
        var morph1 = dom.createMorphAt(element0,2,2);
        inline(env, morph0, context, "input", [], {"type": "text", "value": get(env, context, "attribute.name"), "placeholder": "new attribute name"});
        inline(env, morph1, context, "input", [], {"type": "text", "value": get(env, context, "attribute.value"), "placeholder": "new attribute value"});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","west_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","top_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("<<");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","top_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","product_attribute_panel");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h3");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","di_separator");
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element1 = dom.childAt(fragment, [0]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element2, [3]);
      var element5 = dom.childAt(element2, [5]);
      var element6 = dom.childAt(fragment, [2]);
      var element7 = dom.childAt(element6, [1, 1]);
      var element8 = dom.childAt(element6, [3]);
      var morph0 = dom.createMorphAt(element4,0,0);
      var morph1 = dom.createMorphAt(element5,0,0);
      var morph2 = dom.createMorphAt(element1,3,3);
      var morph3 = dom.createMorphAt(element7,0,0);
      var morph4 = dom.createMorphAt(dom.childAt(element8, [1]),0,0);
      var morph5 = dom.createMorphAt(dom.childAt(element8, [5]),1,1);
      element(env, element3, context, "action", ["backward"], {});
      element(env, element4, context, "bind-attr", [], {"disabled": "disable"});
      element(env, element4, context, "action", ["save"], {});
      content(env, morph0, context, "SYSLang.Update");
      element(env, element5, context, "bind-attr", [], {"disabled": "disable"});
      element(env, element5, context, "action", ["remove"], {});
      content(env, morph1, context, "SYSLang.Delete");
      inline(env, morph2, context, "product-viewer", [], {"mediafile": get(env, context, "model")});
      element(env, element7, context, "action", ["addAttribute"], {});
      content(env, morph3, context, "SYSLang.Add");
      content(env, morph4, context, "SYSLang.ProductAttribute");
      block(env, morph5, context, "each", [get(env, context, "attributes")], {"keyword": "attribute"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["search"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-search-item");
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","s-search-item-title");
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [3]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [0]),0,0);
        element(env, element0, context, "action", ["loadFile", get(env, context, "mfile")], {});
        inline(env, morph0, context, "thumbnail-img", [get(env, context, "mfile")], {});
        element(env, element1, context, "bind-attr", [], {"id": get(env, context, "mfile.uuid")});
        inline(env, morph1, context, "trimLength", [get(env, context, "mfile.filename")], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","search_panel");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","search_button");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box_navigation");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("20");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("50");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("80");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_previous_button");
      var el4 = dom.createTextNode("Previous");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","page_info");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_next_button");
      var el4 = dom.createTextNode("Next");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      dom.setAttribute(el2,"style","border-top: 1px solid #ededed;");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n		\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_result_panel");
      var el3 = dom.createTextNode("\n\n	");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element3, [3]);
      var element5 = dom.childAt(element2, [3]);
      var element6 = dom.childAt(element5, [1]);
      var element7 = dom.childAt(element5, [3]);
      var element8 = dom.childAt(element5, [5]);
      var element9 = dom.childAt(element5, [7]);
      var element10 = dom.childAt(element5, [11]);
      var element11 = dom.childAt(element2, [7]);
      var morph0 = dom.createMorphAt(element3,1,1);
      var morph1 = dom.createMorphAt(dom.childAt(element5, [9]),0,0);
      var morph2 = dom.createMorphAt(element11,1,1);
      var morph3 = dom.createMorphAt(element11,3,3);
      inline(env, morph0, context, "input", [], {"type": "text", "value": get(env, context, "keyword"), "size": "20", "action": "typeSearch"});
      element(env, element4, context, "action", ["search"], {});
      element(env, element6, context, "bind-attr", [], {"disabled": "isPage20"});
      element(env, element6, context, "action", ["pageSearch", 20], {});
      element(env, element7, context, "bind-attr", [], {"disabled": "isPage50"});
      element(env, element7, context, "action", ["pageSearch", 50], {});
      element(env, element8, context, "bind-attr", [], {"disabled": "isPage80"});
      element(env, element8, context, "action", ["pageSearch", 80], {});
      element(env, element9, context, "bind-attr", [], {"disabled": "hasNoPreviouse"});
      element(env, element9, context, "action", ["previousPage"], {});
      content(env, morph1, context, "pagingInfo");
      element(env, element10, context, "bind-attr", [], {"disabled": "hasNoNext"});
      element(env, element10, context, "action", ["nextPage"], {});
      inline(env, morph2, context, "upload-selector", [], {"action": "search", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress", "mfiles": get(env, context, "mfiles")});
      block(env, morph3, context, "each", [get(env, context, "mfiles")], {"keyword": "mfile"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["signup"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"style","color: red;");
        var el2 = dom.createTextNode("✖");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"style","color: red;");
        var el2 = dom.createTextNode("✖");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/gray-loading.gif");
          dom.setAttribute(el1,"style","height:24px;vertical-align: middle;");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0]);
        var morph0 = dom.createMorphAt(element0,0,0);
        var morph1 = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, null);
        element(env, element0, context, "action", ["signUp"], {});
        content(env, morph0, context, "SYSLang.Submit");
        block(env, morph1, context, "if", [get(env, context, "isWaiting")], {}, child0, null);
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "SYSLang.Signup");
        content(env, morph1, context, "SYSLang.Successfully");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","main_panel_title");
      var el2 = dom.createElement("h3");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      dom.setAttribute(el2,"id","user_form");
      dom.setAttribute(el2,"name","user_form");
      dom.setAttribute(el2,"method","POST");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","userId");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","fullName");
      var el5 = dom.createTextNode("Fullname");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","email");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","password");
      var el5 = dom.createTextNode("Password");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","main_panel_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("<<");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block, element = hooks.element;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element1 = dom.childAt(fragment, [2]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element2, [5]);
      var element5 = dom.childAt(element1, [3]);
      var element6 = dom.childAt(element5, [1]);
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 0]),0,0);
      var morph1 = dom.createMorphAt(dom.childAt(element3, [0]),0,0);
      var morph2 = dom.createMorphAt(element3,1,1);
      var morph3 = dom.createMorphAt(element3,2,2);
      var morph4 = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
      var morph5 = dom.createMorphAt(dom.childAt(element4, [0]),0,0);
      var morph6 = dom.createMorphAt(element4,1,1);
      var morph7 = dom.createMorphAt(element4,2,2);
      var morph8 = dom.createMorphAt(dom.childAt(element2, [7]),1,1);
      var morph9 = dom.createMorphAt(element5,3,3);
      var morph10 = dom.createMorphAt(element5,4,4);
      content(env, morph0, context, "SYSLang.Signup");
      content(env, morph1, context, "SYSLang.UserName");
      inline(env, morph2, context, "input", [], {"type": "text", "name": "username", "value": get(env, context, "model.username"), "focus-out": "checkUsername"});
      block(env, morph3, context, "unless", [get(env, context, "isUsernameValid")], {}, child0, null);
      inline(env, morph4, context, "input", [], {"type": "text", "name": "fullName", "value": get(env, context, "model.fullName")});
      content(env, morph5, context, "SYSLang.Email");
      inline(env, morph6, context, "input", [], {"type": "text", "name": "email", "value": get(env, context, "model.email"), "focus-out": "checkEmail"});
      block(env, morph7, context, "unless", [get(env, context, "isEmailValid")], {}, child1, null);
      inline(env, morph8, context, "input", [], {"type": "password", "name": "password", "value": get(env, context, "model.password")});
      element(env, element6, context, "action", ["backward"], {});
      block(env, morph9, context, "unless", [get(env, context, "signUpDone")], {}, child2, null);
      block(env, morph10, context, "if", [get(env, context, "signUpDone")], {}, child3, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["trip"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "model.duration");
        content(env, morph1, context, "SYSLang.Days");
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                                    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            var el2 = dom.createTextNode("✔");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            var el2 = dom.createTextNode("✖");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element6 = dom.childAt(fragment, [7]);
            var element7 = dom.childAt(fragment, [8]);
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
            var morph2 = dom.createMorphAt(fragment,5,5,contextualElement);
            inline(env, morph0, context, "select-itinerary-type", [], {"style": "width:180px;", "name": "type", "optionValuePath": "id", "optionLabelPath": "text", "value": get(env, context, "attribute.type")});
            inline(env, morph1, context, "time-picker", [], {"time": get(env, context, "attribute.time")});
            inline(env, morph2, context, "textarea", [], {"rows": "3", "value": get(env, context, "attribute.value")});
            element(env, element6, context, "action", ["updateAttribute", get(env, context, "itinerary"), get(env, context, "attribute")], {});
            element(env, element7, context, "action", ["hideEditAttr", get(env, context, "attribute")], {});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.3",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("div");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            var el2 = dom.createTextNode("✖");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element3 = dom.childAt(fragment, [0]);
            var element4 = dom.childAt(element3, [4]);
            var element5 = dom.childAt(fragment, [1]);
            var morph0 = dom.createMorphAt(element3,0,0);
            var morph1 = dom.createMorphAt(element3,2,2);
            var morph2 = dom.createMorphAt(element4,0,0);
            inline(env, morph0, context, "itinerary-attribute-icon", [get(env, context, "attribute.type")], {});
            inline(env, morph1, context, "itinerary-attribute-time", [get(env, context, "attribute.time")], {});
            element(env, element4, context, "action", ["showEditAttr", get(env, context, "attribute")], {});
            content(env, morph2, context, "attribute.value");
            element(env, element5, context, "action", ["removeAttribute", get(env, context, "itinerary"), get(env, context, "attribute")], {});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","s-itienrary-attribute");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","di");
          dom.setAttribute(el1,"style","border-top: 1px dotted #fff;");
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element8 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(element8,1,1);
          var morph1 = dom.createMorphAt(element8,3,3);
          block(env, morph0, context, "if", [get(env, context, "attribute.isEditing")], {}, child0, null);
          block(env, morph1, context, "unless", [get(env, context, "attribute.isEditing")], {}, child1, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("✔");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("✖");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element1 = dom.childAt(fragment, [7]);
          var element2 = dom.childAt(fragment, [8]);
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          var morph2 = dom.createMorphAt(fragment,5,5,contextualElement);
          inline(env, morph0, context, "select-itinerary-type", [], {"style": "width:180px;", "name": "type", "optionValuePath": "id", "optionLabelPath": "text", "value": get(env, context, "itinerary.newAttributeType")});
          inline(env, morph1, context, "time-picker", [], {"time": get(env, context, "itinerary.newAttributeTime")});
          inline(env, morph2, context, "textarea", [], {"rows": "3", "value": get(env, context, "itinerary.newAttributeValue")});
          element(env, element1, context, "action", ["saveAttribute", get(env, context, "itinerary")], {});
          element(env, element2, context, "action", ["hideCreateNew", get(env, context, "itinerary")], {});
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("a");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","images/admin/add.png");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, element = hooks.element, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [0]);
          var morph0 = dom.createMorphAt(element0,2,2);
          element(env, element0, context, "action", ["showCreateNew", get(env, context, "itinerary")], {});
          content(env, morph0, context, "SYSLang.Add");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-itinerary-item");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("D ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","di");
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("                            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element9 = dom.childAt(fragment, [1]);
        var element10 = dom.childAt(element9, [7]);
        var morph0 = dom.createMorphAt(dom.childAt(element9, [1]),1,1);
        var morph1 = dom.createMorphAt(element9,5,5);
        var morph2 = dom.createMorphAt(element10,1,1);
        var morph3 = dom.createMorphAt(element10,3,3);
        inline(env, morph0, context, "index-number", [get(env, context, "_view.contentIndex")], {});
        block(env, morph1, context, "each", [get(env, context, "itinerary.attributes")], {"keyword": "attribute"}, child0, null);
        block(env, morph2, context, "if", [get(env, context, "itinerary.createNew")], {}, child1, null);
        block(env, morph3, context, "unless", [get(env, context, "itinerary.createNew")], {}, child2, null);
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "user-avatar", [get(env, context, "username"), 36], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","top_tool_bar");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("<<");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","title");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","departureDate");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","returnDate");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","duration");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","duration");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"style","min-height: 331px;");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h3");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","di");
      var el4 = dom.createTextNode(" ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"style","overflow-x: auto;");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      dom.setAttribute(el2,"style","margin-top:30px;display:inline-block");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, get = hooks.get, inline = hooks.inline, content = hooks.content, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element11 = dom.childAt(fragment, [0]);
      var element12 = dom.childAt(element11, [1]);
      var element13 = dom.childAt(element12, [1]);
      var element14 = dom.childAt(element12, [5]);
      var element15 = dom.childAt(element12, [7]);
      var element16 = dom.childAt(element12, [9]);
      var element17 = dom.childAt(element12, [11]);
      var element18 = dom.childAt(element11, [3]);
      var element19 = dom.childAt(element18, [1]);
      var element20 = dom.childAt(element18, [3]);
      var element21 = dom.childAt(element11, [5]);
      var element22 = dom.childAt(element21, [1]);
      var element23 = dom.childAt(element21, [5, 1]);
      var element24 = dom.childAt(element11, [7]);
      var morph0 = dom.createMorphAt(element12,3,3);
      var morph1 = dom.createMorphAt(element14,0,0);
      var morph2 = dom.createMorphAt(element15,0,0);
      var morph3 = dom.createMorphAt(element16,0,0);
      var morph4 = dom.createMorphAt(element17,0,0);
      var morph5 = dom.createMorphAt(element12,13,13);
      var morph6 = dom.createMorphAt(dom.childAt(element19, [0]),0,0);
      var morph7 = dom.createMorphAt(element19,1,1);
      var morph8 = dom.createMorphAt(dom.childAt(element19, [3]),0,0);
      var morph9 = dom.createMorphAt(element19,5,5);
      var morph10 = dom.createMorphAt(dom.childAt(element20, [1]),0,0);
      var morph11 = dom.createMorphAt(element20,2,2);
      var morph12 = dom.createMorphAt(dom.childAt(element20, [4]),0,0);
      var morph13 = dom.createMorphAt(element20,5,5);
      var morph14 = dom.createMorphAt(dom.childAt(element20, [7]),0,0);
      var morph15 = dom.createMorphAt(element20,8,8);
      var morph16 = dom.createMorphAt(dom.childAt(element20, [10]),0,0);
      var morph17 = dom.createMorphAt(element20,11,11);
      var morph18 = dom.createMorphAt(element22,0,0);
      var morph19 = dom.createMorphAt(element22,2,2);
      var morph20 = dom.createMorphAt(element23,1,1);
      var morph21 = dom.createMorphAt(element24,1,1);
      var morph22 = dom.createMorphAt(element24,3,3);
      var morph23 = dom.createMorphAt(element11,9,9);
      element(env, element13, context, "action", ["backward"], {});
      inline(env, morph0, context, "activated-switcher", [], {"activated": get(env, context, "model.activated"), "SYSLang": get(env, context, "SYSLang")});
      element(env, element14, context, "action", ["save"], {});
      content(env, morph1, context, "SYSLang.Save");
      element(env, element15, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element15, context, "action", ["remove"], {});
      content(env, morph2, context, "SYSLang.Delete");
      element(env, element16, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element16, context, "action", ["print"], {});
      content(env, morph3, context, "SYSLang.Print");
      element(env, element17, context, "bind-attr", [], {"disabled": "disabled"});
      element(env, element17, context, "action", ["share"], {});
      content(env, morph4, context, "SYSLang.Share");
      inline(env, morph5, context, "send-to-mailer", [], {"SYSLang": get(env, context, "SYSLang"), "isHidden": get(env, context, "hideMailer"), "callback": get(env, context, "mailerCallback"), "mailMsg": get(env, context, "mailMsg"), "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      content(env, morph6, context, "SYSLang.Title");
      inline(env, morph7, context, "input", [], {"type": "text", "name": "title", "style": "width:480px;", "value": get(env, context, "model.title"), "placeholder": get(env, context, "SYSLang.Title")});
      content(env, morph8, context, "SYSLang.Destination");
      inline(env, morph9, context, "select-country", [], {"style": "width:280px;", "name": "color", "optionValuePath": "id", "optionLabelPath": "text", "multiple": true, "query": "queryOptions", "value": get(env, context, "model.destinations")});
      content(env, morph10, context, "SYSLang.DepartureDate");
      inline(env, morph11, context, "view", [get(env, context, "App.CalendarDateField")], {"value": get(env, context, "model.departureDate")});
      content(env, morph12, context, "SYSLang.ReturnDate");
      inline(env, morph13, context, "view", [get(env, context, "App.CalendarDateField")], {"value": get(env, context, "model.returnDate"), "minDate": get(env, context, "model.departureDate")});
      content(env, morph14, context, "SYSLang.NumOfAdult");
      inline(env, morph15, context, "input", [], {"class": "number", "type": "text", "name": "numOfAdult", "maxlength": "5", "value": get(env, context, "model.numOfAdult")});
      content(env, morph16, context, "SYSLang.NumOfChild");
      inline(env, morph17, context, "input", [], {"class": "number", "type": "text", "name": "numOfChild", "maxlength": "5", "value": get(env, context, "model.numOfChild")});
      content(env, morph18, context, "SYSLang.Itinerary");
      block(env, morph19, context, "if", [get(env, context, "model.duration")], {}, child0, null);
      element(env, element23, context, "bind-attr", [], {"style": get(env, context, "itinerariesDivStyle")});
      block(env, morph20, context, "each", [get(env, context, "itineraries")], {"keyword": "itinerary"}, child1, null);
      inline(env, morph21, context, "user-avatar", [get(env, context, "model.createdBy"), 36], {});
      block(env, morph22, context, "each", [get(env, context, "model.shareUsers")], {"keyword": "username"}, child2, null);
      inline(env, morph23, context, "social-comments-editor", [], {"module": "trip", "moduleRefId": get(env, context, "model.uuid"), "currentUser": get(env, context, "currentUser"), "socialcomments": get(env, context, "socialcomments"), "SYSLang": get(env, context, "SYSLang"), "confirm": "confirm", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["trips"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-online.png");
          dom.setAttribute(el1,"width","24px");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("img");
          dom.setAttribute(el1,"src","images/admin/icon-offline.png");
          dom.setAttribute(el1,"width","24px");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.3",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "user-avatar", [get(env, context, "username"), 28], {});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.3",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","s-trip-item-panel");
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"style","float:right;");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"style","color:#676767;");
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/admin/Icon_calendar.png");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3,"src","images/admin/Icon_calendar.png");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("            ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, element = hooks.element, inline = hooks.inline, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [5]);
        var element3 = dom.childAt(element2, [10]);
        var morph0 = dom.createMorphAt(element1,0,0);
        var morph1 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [3, 0]),0,0);
        var morph3 = dom.createMorphAt(element2,2,2);
        var morph4 = dom.createMorphAt(element2,4,4);
        var morph5 = dom.createMorphAt(element2,8,8);
        var morph6 = dom.createMorphAt(element3,0,0);
        var morph7 = dom.createMorphAt(element3,2,2);
        var morph8 = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
        var morph9 = dom.createMorphAt(element0,9,9);
        var morph10 = dom.createMorphAt(element0,11,11);
        element(env, element0, context, "action", ["editEntity", get(env, context, "trip")], {});
        inline(env, morph0, context, "module-icon", ["trip", 36], {});
        block(env, morph1, context, "if", [get(env, context, "trip.activated")], {}, child0, child1);
        inline(env, morph2, context, "trimLength", [get(env, context, "trip.title"), 68], {});
        content(env, morph3, context, "trip.departureDate");
        content(env, morph4, context, "SYSLang.To");
        content(env, morph5, context, "trip.returnDate");
        content(env, morph6, context, "trip.duration");
        content(env, morph7, context, "SYSLang.Days");
        content(env, morph8, context, "trip.destinations");
        inline(env, morph9, context, "user-avatar", [get(env, context, "trip.createdBy"), 28], {});
        block(env, morph10, context, "each", [get(env, context, "trip.shareUsers")], {"keyword": "username"}, child2, null);
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","center_wrapper");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","search_button");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","search_box_navigation");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_previous_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"id","page_info");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      dom.setAttribute(el3,"id","page_next_button");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","di");
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"id","trip_list_panel");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, content = hooks.content, get = hooks.get, inline = hooks.inline, block = hooks.block;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element4 = dom.childAt(fragment, [0]);
      var element5 = dom.childAt(element4, [1]);
      var element6 = dom.childAt(element4, [3]);
      var element7 = dom.childAt(element6, [3]);
      var element8 = dom.childAt(element4, [5]);
      var element9 = dom.childAt(element8, [1]);
      var element10 = dom.childAt(element8, [5]);
      var morph0 = dom.createMorphAt(element5,0,0);
      var morph1 = dom.createMorphAt(element6,1,1);
      var morph2 = dom.createMorphAt(element9,0,0);
      var morph3 = dom.createMorphAt(dom.childAt(element8, [3]),0,0);
      var morph4 = dom.createMorphAt(element10,0,0);
      var morph5 = dom.createMorphAt(dom.childAt(element4, [9]),1,1);
      element(env, element5, context, "action", ["newEntity"], {});
      content(env, morph0, context, "SYSLang.New");
      inline(env, morph1, context, "input", [], {"type": "text", "value": get(env, context, "keyword"), "size": "20", "action": "typeSearch"});
      element(env, element7, context, "action", ["search"], {});
      element(env, element9, context, "bind-attr", [], {"disabled": "hasNoPreviouse"});
      element(env, element9, context, "action", ["previousPage"], {});
      content(env, morph2, context, "SYSLang.Previous");
      content(env, morph3, context, "pagingInfo");
      element(env, element10, context, "bind-attr", [], {"disabled": "hasNoNext"});
      element(env, element10, context, "action", ["nextPage"], {});
      content(env, morph4, context, "SYSLang.Next");
      block(env, morph5, context, "each", [get(env, context, "trips")], {"keyword": "trip"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["user"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.3",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","main_panel_title");
      var el2 = dom.createElement("h3");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","main_panel_tool_bar");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      var el2 = dom.createTextNode("\n\n	 ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      dom.setAttribute(el2,"id","user_form");
      dom.setAttribute(el2,"name","user_form");
      dom.setAttribute(el2,"method","POST");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","userId");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","fullName");
      var el5 = dom.createTextNode("Fullname");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","email");
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"for","password");
      var el5 = dom.createTextNode("Password");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	 ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","avatar");
      dom.setAttribute(el3,"style","float:left;");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content, element = hooks.element, get = hooks.get, inline = hooks.inline;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var element0 = dom.childAt(fragment, [2, 1]);
      var element1 = dom.childAt(fragment, [4]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element2, [1]);
      var element4 = dom.childAt(element2, [5]);
      var element5 = dom.childAt(element1, [3]);
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0, 0]),0,0);
      var morph1 = dom.createMorphAt(element0,0,0);
      var morph2 = dom.createMorphAt(dom.childAt(element3, [0]),0,0);
      var morph3 = dom.createMorphAt(element3,1,1);
      var morph4 = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
      var morph5 = dom.createMorphAt(dom.childAt(element4, [0]),0,0);
      var morph6 = dom.createMorphAt(element4,1,1);
      var morph7 = dom.createMorphAt(dom.childAt(element2, [7]),1,1);
      var morph8 = dom.createMorphAt(dom.childAt(element5, [0]),0,0);
      var morph9 = dom.createMorphAt(element5,1,1);
      content(env, morph0, context, "SYSLang.UserSetup");
      element(env, element0, context, "action", ["save"], {});
      content(env, morph1, context, "SYSLang.Save");
      content(env, morph2, context, "SYSLang.UserName");
      inline(env, morph3, context, "input", [], {"type": "text", "name": "username", "readonly": true, "value": get(env, context, "model.username")});
      inline(env, morph4, context, "input", [], {"type": "text", "name": "fullName", "value": get(env, context, "model.fullName")});
      content(env, morph5, context, "SYSLang.Email");
      inline(env, morph6, context, "input", [], {"type": "text", "name": "email", "value": get(env, context, "model.email")});
      inline(env, morph7, context, "input", [], {"type": "password", "name": "password", "value": get(env, context, "model.password")});
      content(env, morph8, context, "SYSLang.Avatar");
      inline(env, morph9, context, "upload-selector", [], {"mfiles": get(env, context, "mfiles"), "multiple": false, "uploadPreview": true, "confirm": "confirm", "checkinProgress": "checkinProgress", "checkoutProgress": "checkoutProgress"});
      return fragment;
    }
  };
}()));