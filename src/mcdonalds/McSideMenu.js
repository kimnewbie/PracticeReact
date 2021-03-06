import React, { useEffect, useState } from 'react'
import './mcSideMenu.css'

export default function McSideMenu() {
    const sideMenus = [
        "κ°μ νκΉ π",
        "μ½λΌ π₯€",
        "μ ν νμ΄ π₯§",
        "μννΈ μμ΄μ€ν¬λ¦Ό π¦",
        "μ ννμ§ μμ"
    ]
    const [orders, setOrders] = useState([]);
    const onClickSideMenu = (selectedItem) => {
        if (selectedItem === sideMenus[4]) setOrders([])

        if (orders.includes(selectedItem)) {
            setOrders(orders.filter(order => order !== selectedItem));
            return;
        }
        if (orders.includes("μ ννμ§ μμ")) {
            setOrders(orders.filter(order => order !== "μ ννμ§ μμ"))
        }
        setOrders(orders => [...orders, selectedItem])
    }

    useEffect(() => {
        console.log(orders)
    }, [orders])

    return (
        <div className="chooseMcMenus">
            <h1>μ¬μ΄λ λ©λ΄λ₯Ό μ ννμΈμ</h1>
            <ul>
                {
                    sideMenus.map(((sideMenu, index) => (
                        <li
                            className={orders.find(order => order === sideMenu)
                                ? "menu-item active"
                                : "menu-item"}
                            key={index}
                            onClick={() => onClickSideMenu(sideMenu)}
                        >
                            {sideMenu}
                        </li>
                    )))
                }
            </ul>
        </div >
    )
}
