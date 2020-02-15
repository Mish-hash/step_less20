import React from 'react';
import {connect} from 'react-redux';
import { updateEventAction } from '../../../redux/actions/actionCreators';

function HomePage({name, place, setFieldEvent}) {
    
    const onTextChenge = (e) => {
        const {name, value} = e.target;
        setFieldEvent(name, value);
    }
    
    return (
        <React.Fragment>
            <input onChange={onTextChenge} value={name} name='name'/>
            <input onChange={onTextChenge} value={place} name='place'/>
        </React.Fragment>
    );
}

const mapStateToProps = (store) => ({
    name: store.eventReducer.name,
    place: store.eventReducer.place,
});

const mapDispatchToProps = (dispatch) => ({
    setFieldEvent: (fieldName, value) => dispatch(updateEventAction(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps) (HomePage);
