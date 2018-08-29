import React, { Component } from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:88/socket');

class SeatMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeats: []
        };

        this.receiveSeatInfo = this.receiveSeatInfo.bind(this);
    }

    componentWillMount() {
        let savedSeats = JSON.parse(localStorage.getItem('data'));
        if (savedSeats !== null) {
            savedSeats.forEach((elem) => {
                this.selectSeats(elem, false);
                this.emitSeatInfo(elem)
            });
        }
    }

    receiveSeatInfo() {
        let self = this;
        socket.on('selected', (data) => {
            let present = self.state.selectedSeats.some(elem => {
                return elem.row === data.row && elem.column === data.column;
            });

            !present && self.selectSeats(data, true);
        });
    }

    emitSeatInfo = (seatInfo) => {
        socket.emit('click', seatInfo);
    }

    selectSeats = (elem, save) => {
        let selectedSeats = this.state.selectedSeats;
        selectedSeats.push(elem);
        if (save) {
            this.emitSeatInfo(elem);
            this.setState({
                selectedSeats: selectedSeats
            });
            localStorage.setItem('data', JSON.stringify(this.state.selectedSeats));
        }

    }

    getClass = (rowIndex, columnIndex) => {
        return this.state.selectedSeats.some(elem => {
            return elem.row === rowIndex && elem.column === columnIndex;
        });
    }

    drawSeatMap = (seatMapArray) => {
        return (
            <table>
                <tbody>
                    {this.drawRow(seatMapArray)}
                </tbody>
            </table>
        )
    }

    drawRow = (seats) => {
        return seats.map((row, rowIndex) => {
            return <tr key={rowIndex} >{this.drawColumn(row, rowIndex)}</tr>
        })
    }

    drawColumn = (row, rowIndex) => {
        return row.map((column, columnIndex) => {
            return <td className={this.getClass(rowIndex, columnIndex) ? 'disabled' : ''} key={columnIndex}>
                <span onClick={() => { this.selectSeats({ column }, true) }}>{column}</span>
            </td>
        })
    }

    render() {
        this.receiveSeatInfo();
        return (
            <div>
                {this.drawSeatMap(this.props.seatMapArray)}
            </div>
        )
    }
}

export default SeatMap;