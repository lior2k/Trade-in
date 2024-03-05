import React from "react";
import "./WidgetBox.css";
import Widget from "../Widget/Widget";

const WidgetBox = () => {
  return (
    <div className="widget-box-container">
      <h2 className="section-title">למה לבחור בנו?</h2>
      <div className="widget-box">
        <Widget
          icon="noto:bank"
          title="אפשרויות מימון מרובות"
          description="בטרייד-אין-הרצליה אנחנו מחוייבים להפוך את החלומות שלכם למציאות, אנחנו מספקים עד 100% מימון בתנאים הכי טובים שיש"
        />
        <Widget
          icon="noto:bank"
          title="אפשרויות מימון מרובות"
          description="בטרייד-אין-הרצליה אנחנו מחוייבים להפוך את החלומות שלכם למציאות, אנחנו מספקים עד 100% מימון בתנאים הכי טובים שיש"
        />
        <Widget
          icon="noto:bank"
          title="אפשרויות מימון מרובות"
          description="בטרייד-אין-הרצליה אנחנו מחוייבים להפוך את החלומות שלכם למציאות, אנחנו מספקים עד 100% מימון בתנאים הכי טובים שיש"
        />
        <Widget
          icon="noto:bank"
          title="אפשרויות מימון מרובות"
          description="בטרייד-אין-הרצליה אנחנו מחוייבים להפוך את החלומות שלכם למציאות, אנחנו מספקים עד 100% מימון בתנאים הכי טובים שיש"
        />
      </div>
    </div>
  );
};

export default WidgetBox;
