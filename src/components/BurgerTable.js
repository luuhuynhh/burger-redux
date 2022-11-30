import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BurgerTable extends Component {
    render() {
        return (
            <div>BurgerTable</div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(BurgerTable)