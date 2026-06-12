import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class FuntranslationsBraile implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Funtranslations Braile',
                name: 'N8nDevFuntranslationsBraile',
                icon: { light: 'file:./funtranslations-braile.png', dark: 'file:./funtranslations-braile.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Cloud API converts English text to Braille for various displays.',
                defaults: { name: 'Funtranslations Braile' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFuntranslationsBraileApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
