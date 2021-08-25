import React, { useEffect, useState } from 'react'
import './mcSideMenu.css'

export default function McSideMenu() {
    const sideMenus = [
        "감자 튀김 🍟",
        "콜라 🥤",
        "애플 파이 🥧",
        "소프트 아이스크림 🍦",
        "선택하지 않음"
    ]
    const [orders, setOrders] = useState([]);
    const onClickSideMenu = (selectedItem) => {
        if (selectedItem === sideMenus[4]) setOrders([])

        if (orders.includes(selectedItem)) {
            setOrders(orders.filter(order => order !== selectedItem));
            return;
        }
        if (orders.includes("선택하지 않음")) {
            setOrders(orders.filter(order => order !== "선택하지 않음"))
        }
        setOrders(orders => [...orders, selectedItem])
    }

    useEffect(() => {
        console.log(orders)
    }, [orders])

    return (
        <div className="chooseMcMenus">
            <h1>사이드 메뉴를 선택하세요</h1>
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
