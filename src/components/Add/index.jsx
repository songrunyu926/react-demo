import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Add extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
    updateTip: PropTypes.object,
    AddState: PropTypes.object,
  }

  hundleChange = key => {
    const {bindTip} = this.props
    const {AddState} = this.props
    return e => {
      bindTip(e,key,AddState)
    }
  }

  AddTip = e => {
    e.preventDefault()

    const {name,age,saying} = this.props.AddState

    //操作数据 获取add方法
    if(name && age && saying){
      this.props.add({name,age,saying})
    }
  }

  //这个方法如何调用 子组件的方法怎么传到父组件
  // updateTipFunc = () => {
  //   const {name,age,saying} = this.props.updateTip
  //   console.log(this.props.updateTip)//
  //   this.setState({
  //     name: name,
  //     age: age,
  //     saying: saying
  //   })
  // }

  bundleClick = () => {
    this.props.updateComp()
  }
  
  render() {    
    //为了双向绑定数据
    const {name,age,saying} = this.props.AddState
    return (
      <form onSubmit={this.AddTip}>
        <div className="form-group">
          <label htmlFor="name">姓  名</label>
          <input type="text" value={name} className="form-control" id="name" onChange={this.hundleChange('name')}/>
        </div>
        <div className="form-group">
          <label htmlFor="age">年  龄</label>
          <input type="number" value={age} className="form-control" id="age" onChange={this.hundleChange('age')}/>
        </div>
        <div className="form-group">
          <label htmlFor="saying">名  言</label>
          <input type="text" value={saying} className="form-control" id="saying" onChange={this.hundleChange('saying')}/>
        </div>

        <button style={{marginRight: 15}} type="submit" className="btn btn-primary">提交</button>
        <button onClick={this.bundleClick} className="btn btn-primary">修改</button>
      </form>
    )
  }
}
