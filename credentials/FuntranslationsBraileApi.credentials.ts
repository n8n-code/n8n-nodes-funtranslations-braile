import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FuntranslationsBraileApi implements ICredentialType {
        name = 'N8nDevFuntranslationsBraileApi';

        displayName = 'Funtranslations Braile API';

        icon: Icon = { light: 'file:../nodes/FuntranslationsBraile/funtranslations-braile.png', dark: 'file:../nodes/FuntranslationsBraile/funtranslations-braile.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Funtranslations Braile API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
