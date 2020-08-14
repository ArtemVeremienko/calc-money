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
      amount: ''
    }
    
    this.addTransaction = this.addTransaction.bind(this);
    this.addAmount = this.addAmount.bind(this);
    this.addDescription = this.addDescription.bind(this);
  }

  addTransaction(isAdd, ...rest) {
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
    })
  }

  addAmount(e) {
    this.setState({amount: +e.target.value});
  }

  addDescription(e) {
    this.setState({description: e.target.value})
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
                <Total transactions={this.state.transactions} />

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
