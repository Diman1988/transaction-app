import "./App.css";
import { useEffect, useState, useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import { CustomersList } from "./features/Customers/CustomersList";
import { TransactionsList } from "./features/Transactions/TrunsactionsList";
import { Summary } from "./features/Summary/Summary";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCustomerId, setActiveCustomer] = useState(null);
  const customers = useFetch({ url: "/customers" });
  const transactions = useFetch({ url: "/transactions" });

  useEffect(() => {
    console.log("customers", customers);
    if (customers.length > 0 || transactions.length > 0) {
      setIsLoaded(true);
    }
  }, [customers, transactions]);

  const customerTransactions = useMemo(() => {
    if (!activeCustomerId) {
      return [];
    }

    return transactions.filter(
      (transaction) => transaction.customerId === activeCustomerId
    );
  }, [transactions, activeCustomerId]);

  return (
    <div>
      <header>
        <h1>Transactions Viewer</h1>
      </header>
      <main className="mainPage">
        {!isLoaded && <p>Loading...</p>}
        {isLoaded && (
          <CustomersList
            customers={customers}
            active={activeCustomerId}
            setActive={setActiveCustomer}
          />
        )}
        {isLoaded && <TransactionsList transactions={customerTransactions} />}
        {isLoaded && <Summary transactions={customerTransactions} />}
      </main>
    </div>
  );
}

export default App;
