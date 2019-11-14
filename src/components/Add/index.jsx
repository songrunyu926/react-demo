import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Add extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  }

  state ={
    name: '',
    age: '',
    saying: ''
  }

  hundleChange = key => {
    return e => {
      this.setState({
        [key]: e.target.value.trim()
      })
    }
  }

  AddTip = e => {
    e.preventDefault()

    const {name,age,saying} = this.state

    //操作数据 获取add方法
    if(name && age && saying){
      this.props.add({name,age,saying})
    }
    //清空
    this.setState({
      name: '',
      age: '',
      saying: ''
    })
    
  }

  updateTip = tip => {
    this.setState({
      name: tip.name,
      age: tip.age,
      saying: tip.saying
    })
  }

  render() {
    
    //为了双向绑定数据
    const {name,age,saying} = this.state

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

        <button type="submit" className="btn btn-primary">提交</button>
      </form>
    )
  }
}
