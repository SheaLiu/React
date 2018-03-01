//组件的生命周期分为三个状态，Mounting已插入真实的DOM，updating正在被重新渲染，Unmounting已移出真实的DOM
//每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。
var Hello=React.createClass({
    getInitialState:function () {
        return{
            opacity:1.0
        };  
    },
    componentDidMount:function(){
        this.timer=setInterval(function(){
            var opacity=this.state.opacity;
            opacity-=0.5;
            if(opacity<0.1){
                opacity=1;
            }
            this.setState({
                opacity:opacity
            });
        }.bind(this),100);
    },
    render:function(){
        return (
            <div style={{opacity: this.state.opacity}}>
            Hello {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="world"/>,
    document.body
  );