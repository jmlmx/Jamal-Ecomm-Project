import styles from './MenuList.module.css'
import MenuListItem from '../MenuListItem/MenuListItem'

export default function MenuList({ menuItems, handleAddToOrder }) {
    const items = menuItems.mag(item => 
        <MenuListItem
        key={item._id}
        handleAddToOrder={handleAddToOrder}
        menuItems={items}
        />
        )

        return (
            <main className={styles.MenuList}>
                {items}
            </main>
        )
}