import React from 'react'
import SHOP_DATA from './shop.data'
export default class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: SHOP_DATA
    }
  }
  render() {
    return <h1>shoppage</h1>
  }
}