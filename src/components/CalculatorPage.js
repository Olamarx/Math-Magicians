import React from 'react';
import Nav from './Nav';
import Calculator from './Calculator';
import styling from './CalculatorPage.module.css';

function CalculatorPage() {
  return (
    <main>
      <Nav />
      <section>
        <article className={styling.articleCalculator}>
          <h2>Can we do some math?</h2>
          <Calculator />
        </article>
      </section>
    </main>
  );
}

export default CalculatorPage;
