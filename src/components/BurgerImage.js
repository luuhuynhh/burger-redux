import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BurgerImage extends Component {
    render() {
        return (
            <div>BurgerImage</div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(BurgerImage)