import React, { Component } from 'react'
import { connect } from 'react-redux'
import BurgerImage from './BurgerImage.js'
import BurgerTable from './BurgerTable.js'

export class Burger extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <BurgerImage />
                    </div>
                    <div className='col-6 mt-5'>
                        <BurgerTable />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Burger)