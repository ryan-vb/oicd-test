import { createOidcAuth, SignInType } from 'vue-oidc-client';

// note the ending '/'
const appUrl = 'https://mydomain.com/myapp/';

// SignInType could be Window or Popup
let mainOidc = createOidcAuth('main', SignInType.Window, appUrl , {
  authority: 'https://demo.identityserver.io/',
  client_id: 'implicit',
  response_type: 'id_token token',
  scope: 'openid profile email api'
});
export default mainOidc;