import React, { ReactNode } from "react"
//styles
import styles from "./style.css"

type Props = {
    element: ReactNode
}

const CustomGridItemBig = ({element}: Props) => {
    return (
        <div className={styles.grid__ItemBig}>{element}</div>
    )
}

export default CustomGridItemBig