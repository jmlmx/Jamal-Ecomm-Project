import styles from './NavBar.module.css'
import CategoryList from '../CategoryList/CategoryList'

export default function NavBar(){
    return (
        <div className={styles.NavBar}>
            <CategoryList 
            categories={categoriesRef.current}
            cart={setCart}
            setActiveCat={setActiveCat}
            />
        </div>
    )
}