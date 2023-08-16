import styles from './OrderList.module.css'
import OrderListItem from '../OrderListItem/OrderListItem'

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
    const orderItems = orders.map(o =>
        <OrderListItem
            orders={o}
            isSelected={o === activeOrder}
            handleSelectOrder={handleSelectOrder}
            key={o._id}
        />
        )

        return (
            <main className={styles.OrderList}>
                {orderItems.length ? orderItems : <span className={styles.noOrders}>You Have No Previous Orders</span>}
            </main>
        )
}