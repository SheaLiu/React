//react将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI 
var LikeButton=React.createClass({
    getInitialState:function () {
        return{liked:false};
      },
    handleClick:function (event) {
        this.setState({liked:!this.state.liked});
      },
      render:function () {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return(
            <p onClick={this.handleClick}>
            You {text} this. Click to toggle.
            </p>

        );
        }
});
ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
  );

  