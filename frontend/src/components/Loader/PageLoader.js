import React from 'react'
import Loader from "react-js-loader";
import './Loader.css'

const PageLoader = () => {
    return (
        <div className="pageloader">
            <Loader type="spinner-default" bgColor={"#166ADA"} size={120} />
        </div>
    )
}

export default PageLoader
