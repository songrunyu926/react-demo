import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    tips: PropTypes.array.isRequired,
    del: PropTypes.func.isRequired
  }


  render() {

    const {tips} = this.props

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">名  字</th>
            <th scope="col">年  龄</th>
            <th scope="col">骚  话</th>
            <th scope="col" className="text-center">操  作</th>
          </tr>
        </thead>
        <tbody>
          {tips.map((tip,index) => <Item key={tip.id} index={index} tip={tip} del={this.props.del}/>)}         
        </tbody>
      </table>
    )
  }
}
