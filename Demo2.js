var HelloMessage=React.createClass({
    render:function () {
        return <h1> Hello{this.props.name} </h1>
      }
});
//React.createClass 方法就用于生成一个组件类
//变量 HelloMessage 就是一个组件类。模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例（下文的"组件"都指组件类的实例）。
//所有组件类都必须有自己的 render 方法，用于输出组件。并且只能包含一个顶部标签比如h1或p。
//组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name 读取。
ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('example')
)
//this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性
//this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array 。
//可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object。
