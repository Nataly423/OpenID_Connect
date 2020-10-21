function OpenIdConnectLogin () {

	var clienteInfo = {
	    client_id : '803484411145-gvmknns5imb19dmppipv12h5pnru50ok.apps.googleusercontent.com'
		redirect_uri: 'https://brave-otter-szjkxv-dev-ed.my.salesforce.com/services/authcallback/Google_Enterprise'
		
	};
	
	var providerInfo = OIDC.discover('https://www.googleapis.com/oauth2/v1/certs');
	
	
	OIDC.setClientInfo(clienteInfo);
	OIDC.setProviderInfo(providerInfo);
	OIDC.storeInfo(providerInfo, clienteInfo);
	sessionStorage.removeItem('State');
	loginRequest = OIDC.generateLoginRequest({scope: 'openid profile email',  response_type: 'token id_token'});
	OIDC.login({scope: 'openid profile email', response_type: 'token id_token'});
	
}	
