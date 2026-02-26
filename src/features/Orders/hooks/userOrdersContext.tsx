import { useContext } from "react"
import { OrdersContext } from "../provider/OrdersProvider"

export const useOrdersContext = () => {
    const ordersContext = useContext(OrdersContext)
    if (!ordersContext) {
        throw new Error('Components should be wrapped inside OrdersProvider')
    }
    return ordersContext
}