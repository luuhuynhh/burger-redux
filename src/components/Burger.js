import React, { Component } from 'react'
import { connect } from 'react-redux'
import BurgerImage from './BurgerImage'
import BurgerTable from './BurgerTable'

export class Burger extends Component {
    render() {
        return (
            <div>
                <BurgerImage />
                <BurgerTable />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Burger)