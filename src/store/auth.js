import Axios from 'axios';

const loginUrl = '/api/login';

export default {
    state: {
        authenticated: false,
        jwt: null
    },
    getters: {
        authenticatedAxios(state) {
            return Axios.create({
                headers: {
                    "Authorization": `Bearer<${state.jwt}>`
                }
            })
        }
    },
    mutations: {
        setAuthenticated(state, header) {
            state.jwt = header;
            state.authenticated = true;
        },
        clearAuthentication(state) {
            state.authenticated = false;
            state.jwt = null;
        }
    },
    actions: {
        async authenticate(context, credentials) {
            try {
                let response = await Axios.post(loginUrl, credentials);
                if (response.data.success === true) {
                    context.commit('setAuthenticated', response.data.token);
                }
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error(err)
            }
        }
    }
}