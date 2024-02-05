// import componentsImage from "./assets/images/components.png";
// import stateImage from "./assets/images/state.png";
// import eventsImage from "./assets/images/events.png";
// import "./App.css";
// import Header from "./components/Header";
// import List from "./components/List/List";

// const concepts = [
//   {
//     title: "Components",
//     image: componentsImage,
//     description:
//       "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
//   },
//   {
//     title: "State",
//     image: stateImage,
//     description:
//       "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
//   },
//   {
//     title: "Events",
//     image: eventsImage,
//     description:
//       "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
//   },
// ];

// function App() {
//   return (
//     <div>
//       <Header />
//       <ul id="concepts">
//         <List
//           image={concepts[0].image}
//           title={concepts[0].title}
//           desc={concepts[0].description}
//         />
//         <List
//           image={concepts[1].image}
//           title={concepts[1].title}
//           desc={concepts[1].description}
//         />
//         <List
//           image={concepts[2].image}
//           title={concepts[2].title}
//           desc={concepts[2].description}
//         />
//       </ul>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment caluclated yet.</p>
      )}
      {userInput && (
        <Result
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
