import { Fragment } from "react";
import { connect } from 'react-redux'

import { CheckCircleIcon } from "@heroicons/react/outline";

function Alert ({ alert }) {

    const displayAlert = () => {
        if (alert !== null && alert.hasOwnProperty('alertType')){
            return(
                <div className={`rounded-md bg-${alert.alertType}-50 p-4`}>
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <CheckCircleIcon className={`h-5 w-5 text-${alert.alertType}-400`} aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                        <p className={`text-sm font-medium text-${alert.alertType}-800`}>{alert.msg}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <Fragment></Fragment>
            )
        }
    }

    return (
        <Fragment>
            {displayAlert()}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    alert: state.Alert.alert || null
})

export default connect(mapStateToProps) (Alert)