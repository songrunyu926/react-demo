import React, { Component } from 'react'

import Add from './components/Add'
import List from './components/List'

export default class App extends Component {

  state = {
    tips: [
      {
        id: 1,
        name: 'damu',
        age: '38',
        saying: '我爱周冬雨'
      },
      {
        id: 2,
        name: 'laofu',
        age: '28',
        saying: '你看见我的鸟了么'
      },
      {
        id: 3,
        name: 'laoliu',
        age: '18',
        saying: '我喜欢充气娃娃'
      }
    ],
    AddState: {
      name: '',
      age: '',
      saying: ''
    }
  }

  id = 4

  add = tip => {
    const { tips } = this.state

    this.setState({
      tips: [...tips, { ...tip, id: this.id++ }]
    })

    //清空
    this.setState({
      AddState: {
        name: '',
        age: '',
        saying: ''
      }
    })

  }

  del = index => {
    const { tips } = this.state

    this.setState({
      tips: tips.filter((tip, i) => i !== index)
    })
  }

  //获取要修改的数据的id  通过id找到了这个数据
  update = (updateId) => {
    this.updateId = updateId
    //获取这条数据
    const { tips } = this.state
    const updateTip = tips.filter(tip => tip.id === updateId)[0]
    const {name,age,saying} = updateTip
    this.setState({
      //不允许这样写
     AddState: {
       name,
       age,
       saying
     }
    })

    
  }

  //修改完成
  updateComp = () => {
    const { tips,AddState } = this.state
    const {name,age,saying} = AddState
    let updateTip = tips.filter((tip,i) => tip.id === this.updateId)[0]
    console.log(updateTip)
    updateTip.name = name
    updateTip.age = age
    updateTip.saying = saying

    this.setState({
      tips: tips
    })
    this.setState({
      AddState: {
        name: '',
        age: '',
        saying: ''
      }
    })
  }

  //绑定数据
  bindTip = (e,key,AddState) => {
    AddState[key] = e.target.value.trim()
    this.setState({
      //不允许这样写
     AddState: AddState
    })
  }



  render() {
    const { tips, AddState } = this.state
    return (
      <div id="container"  style={{width:1200,margin: "0 auto"}}>
        <header className="header">
          <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">小demo</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <a className="p-2 text-dark" href="http://www.bilibili.com">首页</a>
              <a className="p-2 text-dark" href="http://www.bilibili.com">案例</a>
              <a className="p-2 text-dark" href="http://www.bilibili.com">图标</a>
              <a className="p-2 text-dark" href="http://www.bilibili.com">开车</a>
            </nav>
          </div>
        </header>
        <div className="row">
          <div className="col-md-8">
            <List tips={tips} del={this.del} update={this.update} />
          </div>
          <div className="col-md-4">
            <Add add={this.add} AddState={AddState} bindTip={this.bindTip} updateComp={this.updateComp}/>
          </div>
        </div>
      </div>
    )
  }
}
