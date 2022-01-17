import React from "react";
import style from './cards.module.scss';
import ReactDOM from 'react-dom';
import cn from 'classnames';

const Card =({title,img,tags,description,likes,comments,published})=> {
    return (

        <div className={style.wrapper}>
            <div className={style.firstpart} >
                <img src={img}/>
                <span>
                    <p>{tags[0]}</p>
                    <p>{tags[1]}</p>
                </span>

            </div>
            <div className={style.secondpart}>
                <div className={style.info}>
                    <p><b>{title}</b></p>
                    <p>{description}</p>
                </div>
                <hr/>
                <div className={style.thirdpart}>
                    <div className={style.footer}>
                        <p>{published}</p>
                        <p>{likes}</p>
                        <p>{comments}</p>

                    </div>
                </div>


            </div>

        </div>
    )


}

export default Card;