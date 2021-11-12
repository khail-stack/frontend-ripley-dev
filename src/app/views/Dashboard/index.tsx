import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAverageGenderCustomer } from '../../store/dashboard/actionCreators';
import { getAverageGenderCustomersData } from '../../store/dashboard/selectors';
import PieChart from './components/PieChart';
import VerticalBar from './components/VerticalChart';
import './styles.sass'

const DashboardView = () => {

    const dispatch = useDispatch();
    const data = useSelector(getAverageGenderCustomersData)
    React.useEffect(()=>{
        dispatch(fetchAverageGenderCustomer())
    }, [dispatch])

    return (
        <div className="dashboard_view_container">
            <h2>Dashboard</h2>
            <div className="dashboard_content">
                {data && <VerticalBar data={data}/>}
                {data && <PieChart data={data}/>}
            </div>
        </div>
    )
}

export default DashboardView
