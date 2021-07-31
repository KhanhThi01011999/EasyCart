import React, { Component, } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import Cartitem from './../components/Cartitem';
import Cartresult from "../components/Cartresult";
import * as Message from './../constants/Message';
import {actRemoveProductInCart,actChangeMessage,actUpdateProductInCart} from "./../actions/index"

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var result = <tr>
            <td>
                {Message.MSG_CART_EMPTY}
            </td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <Cartitem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart = {this.props.onDeleteProductInCart}
                        onChangeMessage = {this.props.onChangeMessage}
                        onUpdateProductInCart = {this.props.onUpdateProductInCart}
                    />
                );
            });
        };
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <Cartresult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product,quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (CartContainer);
