import React from 'react';

class DDashboard extends React.Component {

    handleClick = (e) => {
        console.log(e.target.id)
        this.props.setApptId(e.target.id)
        this.props.routerProps.history.push('/doctor/symptom')
    }

    render(){
        let apptMap = this.props.loggedInUser.appointments.map(appt => {
            return <div key={appt.id} className="dbCard">
                <h3>Patient: {appt.visitor.name}</h3>
                <h3>Nurse: {appt.nurse.name}</h3>
                <h4 onClick={this.handleClick} id={appt.id}>Reason for Visit: {appt.visitor_symptom}</h4>
            </div>
        })
        return (
            <div className="dbMain">
                 <h1>DDashboard</h1>
                 <div className="dbContainer">
                    {apptMap}
                </div>
            </div>

        )
    }


}

export default DDashboard