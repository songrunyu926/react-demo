import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Item extends Component {
  static propTypes = {
    tip: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    del: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
  }

  delTip = () => {
    const {index} = this.props
    //操作数据
    this.props.del(index)
  }

  //传出一个ID值 
  updateClick = () => {
    const {tip} = this.props
    this.props.update(tip.id)
  }

  render() {
    const { id, name, age, saying } = this.props.tip

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{age}</td>
        <td>{saying}</td>
        <td className="text-center">
          <button onClick={this.updateClick} className="btn btn-warning btn-sm">修改</button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.delTip} className="btn btn-danger btn-sm">删除</button>
        </td>
      </tr>
    )
  }
}
