import { useEffect, useState, useMemo } from "react";
import { useFetch } from "./hooks/useFetch";
import { CustomersList } from "./features/Customers/CustomersList";
import { TransactionsList } from "./features/Transactions/TrunsactionsList";
import { Summary } from "./features/Summary/Summary";
import styles from "./App.module.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCustomerId, setActiveCustomer] = useState(null);
  const customers = useFetch({ url: "/customers" });
  const transactions = useFetch({ url: "/transactions" });

  useEffect(() => {
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
    <>
      {!isLoaded && (
        <div className={styles.loadingContainer}>
          <p className={styles.loading}>Loading</p>
        </div>
      )}
      <div>
        {isLoaded && (
          <header>
            <h1>Transactions Viewer</h1>
          </header>
        )}
        <main className={styles.mainPage}>
          {isLoaded && (
            <CustomersList
              customers={customers}
              active={activeCustomerId}
              setActive={setActiveCustomer}
            />
          )}
          {isLoaded && <TransactionsList transactions={customerTransactions} />}
          {isLoaded && (
            <Summary
              transactions={customerTransactions}
              activeCustomerId={activeCustomerId}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
