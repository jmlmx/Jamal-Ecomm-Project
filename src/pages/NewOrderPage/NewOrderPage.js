import { useState, useEffect, useRef} from 'react'
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import styles from './NewOrderPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import NavBar from '../../components/NavBar/NavBar'
import MenuList from '../../components/MenuList/MenuList'
import CategoryList from '../../components/CategoryList/CategoryList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function NewOrderPage({ user, setUser }) {
    const [menuItems, setMenuItems] = useState([])
    const [activeCat, setActiveCat] = useState('')
    const [cart, setCart] = useState(null)
    const categoriesRef= useRef([])
    const navigate = useNavigate()

    useEffect(function() {
        async function getItems() {
            const items = await itemsAPI.getAll()
            categoriesRef.current = items.reduce((cats, item) => {
                const cat = item.category.name
                return cats.includes(cat) ? cats : [...cats, cat]
            
            }, [])
            setMenuItems(items)
            setActiveCat(categoriesRef.current[0])
        }
        getItems()
        async function getCart() {
            const cart = await ordersAPI.getCart()
            setCart(cart)
        }
        getCart()
    }, [])

    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
        setCart(updatedCart)
    }

    async function handleCheckout() {
        await ordersAPI.checkout()
        navigate('/orders')
    }

    return (
        <main className={styles.NewOrderPage}>
            <Logo />
            <h1>Super Smoothies</h1>
            <UserLogOut  user={user}/>
            <NavBar />
            <MenuList 
            menuItems={menuItems.filter(itme => item.category.name === activeCat)}
            handleAddToOrder={handleAddToOrder}
            />
            <aside>
            <OrderDetail
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
            />
            </aside>
        </main>
    )
}