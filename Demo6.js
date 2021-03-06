var Input=React.createClass({
    getInitialState:function () {
        return {
            value:'Hello!'
        };
      },
      handleChange:function (event) {
        this.setState({value:event.target.value});
        },
    
        render:function () {
            var value=this.state.value;
            return(
                <div>
                    <input type="text" value={value} onChange={this.handleChange} />
                    <p>value</p>
                </div>
            );
          }
        
});
ReactDOM.render(<Input/>, document.body);

//文本输入框的值，不能用 this.props.value 读取，而要定义一个 onChange 事件的回调函数，通过 event.target.value 读取用户输入的值
//textarea 元素、select元素、radio元素都属于这种情况，