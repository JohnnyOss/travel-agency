import React from 'react';
import styles from './DaysToSummer.scss';


class DaysToSummer extends React.Component {

  getCountdownDate(){
    const currentDate = new Date();
    const summer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21)); //getUTCMonth zwraca od 0, dlatego 5 a nie 6 !

    if(currentDate.getUTCMonth() > 8 || (currentDate.getUTCMonth() === 8 && currentDate.getUTCDate() > 23 )){
      summer.setUTCFullYear(summer.getUTCFullYear()+1);
    }

    const daysToSummer =  Math.round((summer.getTime() - currentDate.getTime())/(1000 * 60 * 60 * 24));

    if (daysToSummer === 1) {
      return '1 day to summer!';
    } else if (daysToSummer <= 0 && daysToSummer >= -94 ){
      return '';
    } else {
      return  daysToSummer + ' days to summer!';
    }
  }

  render() {
    const countDownDate = this.getCountdownDate();
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{countDownDate}</h3>
      </div>
    );
  }
}


export default DaysToSummer;
