import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './FlexibleTicket.css'

/**
 * 
 * @param {*} props 
 * 
 * Reusable Popup window that can be used for two purposes:
 * Either view an already submitted ticket
 * Or submit a new ticket
 */
export default function FlexibleTicket(props) {
    //Initial value for display [false -> read ticket, true -> submit ticket]
    const readOrSubmit = false;
    const [open, setOpen] = useState(true)



    return (
        <Popup open={open} modal>
            <div className='ticketDiv'>

            <div className='closeButton'>
            <button id='close' onClick={() => setOpen(!open)}>&times;</button>
            </div>

            <h1>Submit Ticket</h1>
            <hr></hr>
            
            <label for="dep">Department:</label>
            <input  id="department" type='dropbdown' ></input>

            <label for="">Problem Title:</label>
            <input  id="title" ></input>

            <label>Description:</label>
            <textarea cols="60"  id="description" style={{ height: 100 }}></textarea>
            <button type="submit" id="submit" >Submit</button>

            </div>
        </Popup>
    )


}


