import Layout from '../hocs/Layout'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { reset } from '../redux/actions/payment';
import { useEffect } from 'react';

const ThankYou = ({
    isAuthenticated,
    reset
}) => {

    useEffect(() => {
        reset()
    }, [])

    if (!isAuthenticated)
        return <Navigate to='/'/>;

    return (
        <Layout>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Gracias por su compra!
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                    Start building for free, then add a site plan to go live. Account plans unlock additional features.
                    </p>
                </div>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, {
    reset
}) (ThankYou)