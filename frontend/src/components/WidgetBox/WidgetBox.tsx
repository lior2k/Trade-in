import React from 'react';
import './WidgetBox.css';
import Widget from '../Widget/Widget';

const WidgetBox = () => {
	return (
		<div className='widget-box-container'>
			<h2 className='section-title'>למה לבחור בנו?</h2>
			<div className='widget-box'>
				<Widget
					icon='noto:bank'
					title='אפשרויות מימון'
					description='בטרייד-אין-הרצליה אנחנו מחוייבים להפוך את החלומות שלכם למציאות, אנחנו מספקים עד 100% מימון בתנאים הכי טובים שיש'
				/>
				<Widget
					icon='noto:shield'
					title='אמינות'
					description='מאז שהוקמה הסוכנות אי שם בשנות ה90 בהנהגת אברהם שחוח, התחייבנו לתת את השירות הטוב ביותר והאמין ביותר'
				/>
				<Widget
					icon='noto:euro-banknote'
					title='נוח לכל כיס'
					description='אצלנו בטרייד אין הרצליה, תמצאו את המחירים השווים ביותר בשוק, כי כשמקצועיות פוגשת יושרה, כולם מרווחים'
				/>
				<Widget
					icon='mdi:car-repair'
					title='מקצועיות'
					description='חוויה מקצועית עם שירות רכב מקיף. נתחייב לדיוק ושביעות רצונך, ונבטיח שכל ביקור בסוכנות שלנו הוא מסע של שירות גבוה ושמירה מקצועית על כל רכב.'
					addColor={true}
				/>
			</div>
		</div>
	);
};

export default WidgetBox;
