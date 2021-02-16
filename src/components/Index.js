import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpense } from './IncomeExpense';
import { ExpenseList } from './ExpenseList';
import { AddExpense } from './AddExpense';
import { useAuth } from '../context/AuthProvider'
const Index = () => {

    const { logout, currentUser } = useAuth()

    const clickHandler = () => {
        logout()
    }
    return (
        <div>
            <button className='btn' onClick={clickHandler}>Sign Out ({currentUser.email})</button>
            <Header />
            <Balance />
            <IncomeExpense />
            <ExpenseList />
            <AddExpense />
        </div>
    )
}

export default Index
