import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../shared/spinner/Spinner';
import { fetchAverageGenderCustomer } from '../../store/dashboard/actionCreators';
import { getAverageGenderCustomersData, getAverageGenderCustomersIsFetching } from '../../store/dashboard/selectors';
import PieChart from './components/PieChart';
import VerticalBar from './components/VerticalChart';
import './styles.sass'

const DashboardView = () => {

    const dispatch = useDispatch();
    const data = useSelector(getAverageGenderCustomersData)
    const isFetching = useSelector(getAverageGenderCustomersIsFetching)
    
    React.useEffect(()=>{
        dispatch(fetchAverageGenderCustomer())
    }, [dispatch])

    return (
        <div className="dashboard_view_container">
            <h2>Dashboard</h2>
            {
                isFetching ? <div className="spinner_content"><Spinner /></div> : <div className="dashboard_content">
                {data && <VerticalBar data={data}/>}
                {data && <PieChart data={data}/>}
            </div>
            }
            
        </div>
    )
}

export default DashboardView
