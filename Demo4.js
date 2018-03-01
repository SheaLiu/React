//组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。
//有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性
var MyComponent=React.createClass({
        handleClick:function () {
            this.refs.myTextInput.focus();
        },
        render:function () {
            retrun (
                <div>
                    <input type="text"  ref="myTextInput" />
                    <input type="button" value="Focus the text input" onClick={this.handleClick} />
                </div>
            );
            
        }

});

ReactDOM.render(
    <MyComponent />,
    document.getElementById('example')
);
//组件 MyComponent 的子节点有一个文本输入框，用于获取用户的输入。这时就必须获取真实的 DOM 节点
//由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。
//通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click 事件之后，才会读取 this.refs.[refName] 属性。