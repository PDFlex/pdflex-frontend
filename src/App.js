import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import ViewClaimsDashboard from "./components/ViewClaimsDashboard";
import SelectFillOrUpload from "./components/SelectFillOrUpload";
import Upload from "./components/Upload";
import Form from "./components/Form";
import ClaimSubmittedView from "./components/ClaimSubmittedView";
import ViewFormsDashboard from "./components/ViewFormsDashboard";
import ViewForm from "./components/ViewForm";
import LoggedOut from './components/LoggedOut';
import {createContext, useState} from "react";

// Create a context to hold the user ID
export const UserIdContext = createContext({
    clientId: "",
    setClientId:() => {},
    claimId: "",
    setClaimId:() => {}
});


function App() {
    const [clientId, setClientId] = useState('');
    const [claimId, setClaimId] = useState('');


    return (
        <div className="App">
            <UserIdContext.Provider value={{clientId: clientId, setClientId: setClientId, claimId: claimId, setClaimId: setClaimId}}>

                <Routes>
                    <Route path="/" element={<Login/>}></Route>;
                    {/* Create New Route here for each page (Create new Js file in components)
               Use State sets default value */}
                    <Route path="/ViewClaimsDashboard" element={<ViewClaimsDashboard/>}></Route>;
                    <Route path="/SelectFillOrUpload" element={<SelectFillOrUpload/>}></Route>;
                    <Route path="/Upload" element={<Upload/>}></Route>;
                    <Route path="/Form" element={<Form/>}></Route>;
                    <Route path="/ClaimSubmittedView" element={<ClaimSubmittedView/>}></Route>;
                    <Route path="/ViewFormsDashboard" element={<ViewFormsDashboard/>}></Route>;
                    <Route path="/ViewForm" element={<ViewForm/>}></Route>;
                    <Route path="/LoggedOut" element={<LoggedOut/>}></Route>;

                </Routes>
            </UserIdContext.Provider>
        </div>
    );
}


export default App;