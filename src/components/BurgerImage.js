import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BurgerImage extends Component {
    render() {
        const { salad, cheese, beef } = this.props.burger;
        return (
            <div className="text-center">
                <h1 className='text-success' style={{ fontWeight: '600' }}>Bài tập Burger Cybersoft</h1>
                <p className='text-danger'>Bánh burger của bạn</p>
                <div className='breadTop'></div>

                {[...Array(salad).keys()].map((_, i) => {
                    return <div className='salad' key={_ + 'i'} />
                }
                )}

                {[...Array(cheese).keys()].map((_, j) =>
                    <div className='cheese' key={_ + 'j'} />
                )}

                {[...Array(beef).keys()].map((_, k) =>
                    <div className='beef' key={_ + 'k'} />
                )}

                <div className='breadBottom'></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    burger: state.burgerState.burger,
})

export default connect(mapStateToProps)(BurgerImage)