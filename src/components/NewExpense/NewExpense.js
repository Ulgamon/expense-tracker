import React from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    const [show, setShow] = React.useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.newExpense(expenseData)
    }
    
    const toggleShow = () => {
        setShow(prevState => !prevState)
    }

    return (
        <div className="new-expense">
            {show ?<ExpenseForm toggle={toggleShow} onSaveExpenseData={saveExpenseDataHandler} /> :
            <button onClick={toggleShow}>Add New Expense</button> }
            
        </div>
    )
}

export default NewExpense