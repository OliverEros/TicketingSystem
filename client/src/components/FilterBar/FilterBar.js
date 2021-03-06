import React from 'react';

import './FilterBar.css'

class FilterBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userData : [],
            byGroup : '',
            byDate : Boolean,
            pending : Boolean,
            resolved : Boolean,
        }

        this.getSelectedGroup = this.handleChange.bind(this)
    }


    sortByStatus = () => {
        this.setState({byStatus : true})
    }

    renderGroupOptions = (groups) => {
       let groupNames = groups.map(group => {
            return(
            <option>{group}</option>
            )
        })
        return groupNames
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value })
    }

    returnFilter(){

    }
    
    render(){
        return(

            <div >
                <div className="card filter-content">
                    <div className="card-title">
                        <h4>Filter</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="groupdropdown">Groups</label>
                                <select id="groupdropdown" name="selectedGroup" value = {this.state.selectedGroup} onChange = {this.handleChange}>
                                    <option>Select</option>
                                    {this.renderGroupOptions(this.props.groups)}
                                </select>
                                <div className="form-group">
                                    <label for="bystatus">Status</label>
                                    <select id="bystatus" value={this.state.selectedStatus} onChange={this.handleChange}>
                                        <option>Select</option>
                                        <option>Pending</option>
                                        <option>Resolved</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default FilterBar