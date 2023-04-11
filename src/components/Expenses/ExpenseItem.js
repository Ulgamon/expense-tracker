import React from 'react';
import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate.js'

function ExpanseItem(props) {

    let [title, setTitle] = React.useState(props.title)

    console.log("Reevaluation")

    const clickHandler = () => {
        setTitle("UPDATED!")
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{ title }</h2>
                <div className='expense-item__price'>${ props.amount }</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpanseItem;