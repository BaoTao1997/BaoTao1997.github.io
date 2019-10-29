class Dep {
  constructor() {
    this.subs = [];
  }
  // 订阅
  addSub(watcher) {
    this.subs.push(watcher);
  }
  // 发布
  notify() {
    this.subs.forEach(watcher => watcher.update());
  }
}

class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    this.oldValue = this.get();
  }
  get() {
    Dep.target = this;
		let value = CompileUtil.getVal(this.vm, this.expr);
		Dep.target = null;
    return value;
  }
  update() {
    let newValue = CompileUtil.getVal(this.vm, this.expr);
    if (newValue !== this.oldValue) {
      this.cb(newValue);
    }
  }
}

class Observer {
  constructor(data) {
    this.observer(data);
  }
  observer(data) {
    if (data && typeof data === "object") {
      // 对象才进行监听
      for (let key in data) {
        this.defineReactive(data, key, data[key]);
      }
    } else {
      return new Error("we neesd a object to observer");
    }
  }
  defineReactive(data, key, value) {
    this.observer(value);
    let dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 创建watcher时,会取到对应的内容,并放到全局中,依赖收集
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set: newVal => {
        if (newVal !== value) {
          // 如果赋值为新对象,还需要进行数据劫持
          this.observer(newVal);
          value = newVal;
          // 取值时则会发布通知
          dep.notify();
        }
      }
    });
  }
}

class Compiler {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    let fragment = this.node2Fragment(this.el);

    // 编译模板,替换数据
    this.compile(fragment);

    // 将内容插入页面中
    this.el.appendChild(fragment);
  }
  isDirective(attrName) {
    return attrName.startsWith("v-");
  }
  // 编译元素节点
  compileElement(node) {
    let attributes = node.attributes;
    [...attributes].forEach(attr => {
      let { name, value } = attr;
      if (this.isDirective(name)) {
        let [, directive] = name.split("-");
        let [directiveName, eventName] = directive.split(":");
        CompileUtil[directiveName](node, value, this.vm, eventName);
      }
    });
  }
  // 编译文本节点
  compileText(node) {
    let content = node.textContent;
    if (/\{\{(.+?)\}\}/.test(content)) {
      CompileUtil["text"](node, content, this.vm);
    }
  }
  compile(node) {
    let childNodes = node.childNodes;
    [...childNodes].forEach(child => {
      if (this.isElementNode(child)) {
        this.compileElement(child);
        this.compile(child);
      } else {
        this.compileText(child);
      }
    });
  }
  node2Fragment(node) {
    let fragment = document.createDocumentFragment();
    while (node.firstChild) {
      fragment.appendChild(node.firstChild);
    }
    return fragment;
  }
  // 判断是否为元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
}

CompileUtil = {
  getVal(vm, expr) {
    return expr.split(".").reduce((data, current) => {
      return data[current];
    }, vm.$data);
  },
  setVal(vm, expr, value) {
    expr.split(".").reduce((data, current, index, arr) => {
      if (index === arr.length - 1) {
        return (data[current] = value);
      }
      return data[current];
    }, vm.$data);
  },
  model(node, expr, vm) {
    let fn = this.updater["modelUpdater"];
    new Watcher(vm, expr, newValue => {
      fn(node, newValue);
    });
    node.addEventListener("input", e => {
      let value = e.target.value;
      this.setVal(vm, expr, value);
    });
    let value = this.getVal(vm, expr);
    fn(node, value);
  },
  on(node, expr, vm, eventName) {
    node.addEventListener(eventName, e => {
      //保证事件中有e事件对象和vm实例对象
      vm[expr].call(vm, e);
    });
  },
  html(node, expr, vm) {
    let fn = this.updater["htmlUpdater"];
    new Watcher(vm, expr, newValue => {
      fn(node, newValue);
    });
    let value = this.getVal(vm, expr);
    fn(node, value);
  },
  text(node, content, vm) {
    let fn = this.updater["textUpdater"];
    let newContent = content.replace(/\{\{(.+?)\}\}/g, (...args) => {
      new Watcher(vm, args[1].trim(), () => {
        fn(node, this.getVal(vm, args[1].trim()));
      });
      return this.getVal(vm, args[1].trim());
    });
    console.log(vm.$data.getNewName);
    fn(node, newContent);
  },
  updater: {
    modelUpdater(node, value) {
      node.value = value;
    },
    htmlUpdater(node, value) {
      // 可能存在xss攻击
      node.innerHTML = value;
    },
    textUpdater(node, value) {
      node.textContent = value;
    }
  }
};

class Vue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    let computed = options.computed;
    let methods = options.methods;

    for (let key in computed) {
      Object.defineProperty(this.$data, key, {
        get: () => {
          return computed[key].call(this);
        }
      });
    }

    for (let key in methods) {
      Object.defineProperty(this, key, {
        get() {
          return methods[key];
        }
      });
    }

    new Observer(this.$data);

    this.proxyVm(this.$data);

    // 模板编译
    new Compiler(this.$el, this);
  }
  proxyVm(data) {
    for (let key in data) {
      Object.defineProperty(this, key, {
        get() {
          return data[key]; 
        },
        set(newVal) {
          data[key] = newVal;
        }
      });
    }
  }
}
