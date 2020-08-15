import React from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      description: '',
      amount: '',
      resultIncome: 0,
      resultExpenses: 0,
      totalBalance: 0,
    }
    
    this.addTransaction = this.addTransaction.bind(this);
    this.addAmount = this.addAmount.bind(this);
    this.addDescription = this.addDescription.bind(this);
  }

  addTransaction(isAdd) {
    if (!this.state.amount || !this.state.description) return; // проверка на отсутствие значений.

    const transactions = [
      ...this.state.transactions,
      {
        id: `cmr${(+new Date()).toString(16)}`,
        description: this.state.description,
        amount: this.state.amount,
        isAdd
      }
    ];

    this.setState({
      transactions,
      description: '',
      amount: ''
    }, this.getTotalBalance)
  }

  addAmount(e) {
    console.log(e.target.value)
    this.setState({amount: +e.target.value});
  }

  addDescription(e) {
    console.log(e.target.value)
    this.setState({description: e.target.value})
  }

  getIncome() {
    return this.state.transactions
      .filter(item => item.isAdd)
      .reduce((acc, item) => acc + item.amount, 0)
  }

  getExpenses() {
    return this.state.transactions
      .filter(item => !item.isAdd)
      .reduce((acc, item) => acc + item.amount, 0)
  }

  getTotalBalance() {
    const resultIncome = this.getIncome();
    const resultExpenses = this.getExpenses();
    const totalBalance = resultIncome - resultExpenses;

    this.setState({
      resultIncome,
      resultExpenses,
      totalBalance
    })
  }

  addStorage() {

  }

  render() {
    return (
      <>
        <header>
            <h1>Кошелек</h1>
            <h2>Калькулятор расходов</h2>
        </header>

        <main>
            <div className="container">
                <Total 
                  resultIncome = {this.state.resultIncome}
                  resultExpenses = {this.state.resultExpenses}
                  totalBalance = {this.state.totalBalance}
                />

                <History transactions={this.state.transactions} />

                <Operation 
                  addTransaction={this.addTransaction}
                  addAmount={this.addAmount}
                  addDescription={this.addDescription}
                  description={this.state.description}
                  amount={this.state.amount}
                />
            </div>
        </main>

      </>
    );
  }
  
}

export default App;
