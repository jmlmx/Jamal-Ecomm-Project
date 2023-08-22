import styles from './OrderDetail.module.scss'
import LineItem from '../LineItem/LineItem'

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null

    const lineItems = order.LineItems.map(item => 
        <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
        />
    )

    return (
        <div className={styles.OrderDetail}>
            <div className={styles.sectionHeading}>
                {order.isPaid ? 
                <span>Order <span lassName='smaller'>{order.orderId}</span></span>
                :
                <span>NEW ORDER</span>
            }
            <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
                {lineItems.length ? 
                <>
                {lineItems}
                <section className={styles.total}>
                    {order.isPaid ?
                    <span className={styles.right}>Total&nbsp;&nbsp</span>
                    :
                    <button
                        className='btn-sm'
                        onClick={handleCheckout}
                        disabled={!lineItems.length}
                    >Checkout</button>
                }
                <span>{order.totalQty}</span>
                <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
                </section>
                </>
                :
                <div className={styles.thirsty}>How 'Bout A Smoothie?</div>
            }
            </div>
        </div>
    )
}