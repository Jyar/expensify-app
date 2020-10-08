import moment from 'moment';
import numeral from 'numeral';

// expenses total
export default (expenses) => {
        if (expenses.length == 0){
            return 0;
        } else {
            let amounts = expenses.map((expense) => expense.amount );
            const total = amounts.reduce(
                (previousAmount, currentAmount)=>previousAmount+currentAmount,0);
        
            return total;
        }
    };