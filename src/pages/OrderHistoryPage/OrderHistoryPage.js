import styles from './OrderHistoryPage.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api'
import Logo from '../../components/Logo/Logo'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'

export default function OrderHistoryPage({ user, setUser }) {
    const [orders, setOrders] = useState([])
    const [activeOrder, setActiveOrder] = useState(null)

    useEffect(function () {
        async function fetchOrderHistory() {
            const orders = await ordersAPI.getOrderHistory()
            setOrders(orders)
        }
        fetchOrderHistory()
    }, [])

    function handleSelectOrder(order) {
        setActiveOrder(order)
    }

    return(
        <main className={styles.OrderHistoryPage}>
            <aside className={styles.aside}>
                <Logo />
                <Link to='orders/new' className='button button-sm'>New Order</Link>
                <UserLogOut user={user} setUer={setUser}/>
            </aside>
            <OrderList
                orders={orders}
                activeOrder={activeOrder}
                handleSelectOrder={handleSelectOrder}
            />
            <OrderDetail
            order={activeOrder}
            />
        </main>
    )
}