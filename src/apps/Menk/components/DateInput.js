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
        this.props.onChange({
            target: {
                value: date
            }
        });
    }

    render() {
      return <DayPickerInput value={this.props.value} formatDate={formatDate} parseDate={parseDate} onDayChange={this.handleDayChange} format="DD/MM/YYYY" placeholder="DD/MM/AAAA"/>;
    }
}

export default DateInput;