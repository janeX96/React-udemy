import React from 'react';
import "./Word.css"

const Word = props => (
 <li>
    Słowo po angielsku: <strong>{props.english}</strong>
    <p>Tłumaczenie: <strong>{props.polish}</strong></p>
 </li>
)

export default Word