import React from 'react'

function Total({transactions}) {
  const income = transactions.filter(item => item.isAdd).reduce((sum, value) => sum + value.amount, 0);
  const expenses = transactions.filter(item => !item.isAdd).reduce((sum, value) => sum + value.amount, 0);
  console.log(income, expenses);
  return (
    <section className="total">
      <header className="total__header">
          <h3>Баланс</h3>
          <p className="total__balance">{income - expenses} ₽</p>
      </header>
      <div className="total__main">
          <div className="total__main-item total__income">
              <h4>Доходы</h4>
              <p className="total__money total__money-income">
                  +{income} ₽
              </p>
          </div>
          <div className="total__main-item total__expenses">
              <h4>Расходы</h4>
              <p className="total__money total__money-expenses">
                  -{expenses} ₽
              </p>
          </div>
      </div>
    </section>
  );
}

export default Total;