//组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
var MyTitle=React.createClass({
    propTypes:{
        title:React.PropTypes.string.isRequired,
    },
    render: function() {
        return <h1> {this.props.title} </h1>;
      },

      getDefaultProps : function () {
        return {
          title : 'Hello World'
        };
      }//getDefaultProps可以用来设置组件属性的默认值
});
//PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串。