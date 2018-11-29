import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

class DateInput extends Component {

    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
    }

    handleDayChange(date) {
        console.log(date);
        const e = {
            target: {
                value: date
            }
        }
        this.props.onChange(e);
    }

    render() {
      return <DayPickerInput value={this.props.value} formatDate={formatDate} parseDate={parseDate} onDayChange={this.handleDayChange} format="D/M/YYYY"/>;
    }
}

export default DateInput;