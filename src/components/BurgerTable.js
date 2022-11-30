import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBeef, addCheese, addSalad, delBeef, delCheese, delSalad } from '../actions/burgerActions';

export class BurgerTable extends Component {
    renderTongTien(burger, menu) {
        if (burger && menu)
            return burger.salad * menu.salad
                + burger.cheese * menu.cheese
                + burger.beef * menu.beef;
        return 0
    }
    render() {
        const { burger, menu, dispatch } = this.props;
        return (
            <div>
                <h3 className='text-success text-center'>Chọn thức ăn</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Thức ăn</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Salad</td>
                            <td>
                                <button className='btn btn-success' onClick={() => {
                                    dispatch(addSalad())
                                }}>+</button>
                                {burger?.salad}
                                <button className='btn btn-danger' disabled={burger.salad === 0} onClick={() => {
                                    dispatch(delSalad())
                                }}>-</button>
                            </td>
                            <td>{menu?.salad}</td>
                            <td>{(burger?.salad * menu?.salad) || 0}</td>
                        </tr>
                        <tr>
                            <td>Cheese</td>
                            <td>
                                <button className='btn btn-success' onClick={() => {
                                    dispatch(addCheese())
                                }}>+</button>
                                {burger?.cheese}
                                <button className='btn btn-danger' disabled={burger.cheese === 0} onClick={() => {
                                    dispatch(delCheese())
                                }}>-</button>
                            </td>
                            <td>{menu?.cheese}</td>
                            <td>{(burger?.cheese * menu?.cheese) || 0}</td>
                        </tr>
                        <tr>
                            <td>Beef</td>
                            <td>
                                <button className='btn btn-success' onClick={() => {
                                    dispatch(addBeef())
                                }}>+</button>
                                {burger?.beef}
                                <button className='btn btn-danger' disabled={burger.beef === 0} onClick={() => {
                                    dispatch(delBeef())
                                }}>-</button>
                            </td>
                            <td>{menu?.beef}</td>
                            <td>{(burger?.beef * menu?.beef) || 0}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td style={{ fontWeight: 600 }}>Tổng cộng</td>
                            <td style={{ fontWeight: 600 }}>{this.renderTongTien(burger, menu)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    burger: state.burgerState.burger,
    menu: state.burgerState.menu,
})

export default connect(mapStateToProps)(BurgerTable)