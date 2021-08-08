import {Button} from "antd";
import {HeartOutlined} from '@ant-design/icons';
import React, {useState} from "react";

function ButtonChange() {

    const [favorite, setFavorite] = useState(false); 
    const handleFavorite = () => { 
        if(favorite === true){
            setFavorite(false)
        } else {
            setFavorite(true)
        }
    } 
    return (
        <div>
            <div>
                <Button
                    style={{
                        size: 'large'
                    }}
                    onClick={handleFavorite}>
                    {
                        favorite
                            ? (
                                <HeartOutlined
                                    style={{
                                        fontSize: '100px',
                                        color: 'red'
                                    }}/>
                            )
                            : (
                                <HeartOutlined
                                    style={{
                                        fontSize: '100px',
                                        color: 'black'
                                    }}/>
                            )
                    }

                </Button>
            </div> 
        </div>
    );
}
export default ButtonChange;