import Layout from "../../hocs/Layout"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { login } from '../../redux/actions/auth'
import { Oval }from 'react-loader-spinner'

function Login({
    login,
    loading
}) {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {
        email,
        password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    }

    return (
      <Layout> 
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ingrese a su cuenta</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            O{' '}
            <Link to="/registro" className="font-medium text-indigo-600 hover:text-indigo-500">
              crear una nueva cuenta.
            </Link>
          </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={e=>onSubmit(e)} className="space-y-6">

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      name="email"
                      value={email}
                      onChange={e=>onChange(e)}
                      type="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <div className="mt-1">
                    <input
                      name="password"
                      value={password}
                      onChange={e=>onChange(e)}
                      type="password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Recuérdame
                    </label>
                  </div>
  
                  <div className="text-sm">
                    <Link to="cambiar_contrasena/" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>
  
                <div>
                  {loading ?
                  <button
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Oval 
                    color="#fff"
                    width={20}
                    height={20}
                    />
                  </button>:
                  <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Ingresar
                </button>}
                </div>
              </form>
  
              
            </div>
          </div>
        </div>
      </Layout>
    )
}

const mapStateToProp = state => ({
    loading: state.Auth.loading
})

export default connect(mapStateToProp, {
    login
}) (Login)