import "@/assets/styles.css";
import  Data from "@/utils/balance.json";

export default function BalanceTable() {
    const filteredData = Data.balance.sort(function(a,b){
        if(a.createdAt > b.createdAt){
            return 1
        }
        if(a.createdAt < b.createdAt){
            return -1
        }
    });
    return(
        <>
            <h1>Transactions</h1>
            <table>
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>PAYMENT METHOD</th>
                        <th className="text-right">OPERATION</th>
                        <th className="text-right">AMOUNT ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((transaction, index)=> (
                    <tr key={index}>
                        <td>{transaction.createdAt}</td>
                        <td className="payment-container">
                            <img src={transaction.image}/>
                            <p>{transaction.name}</p>
                        </td>
                        <td className="text-right">
                            <div className={`operation-container in-progress ${transaction.operation.replace(/\s+/g, "-").toLowerCase()}`}>{transaction.operation}</div>
                        </td>
                        <td className={`td-amount ${parseFloat(transaction.amount) > 0 ? "aqua-text": null}`}>{transaction.amount}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
// 51:00:00