import React from 'react';
import { emojiLogic, emojiShow } from '../emojiLogic';


const Emoji = (props) => {
    const showEmoji = emojiShow[emojiLogic(props.country, props.world)]

    return (
        
        <img src={showEmoji} width={props.size} height= {props.size} alt="emoji"></img>
    );

}

export default Emoji;