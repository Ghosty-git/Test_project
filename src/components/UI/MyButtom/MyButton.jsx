import { Button } from "antd"
import { Children } from "react"

export const MyButton = (props) => {
    return (
        <div>
            <Button {...props} className="button">
                {props.children}
            </Button>
        </div>
    )
} 