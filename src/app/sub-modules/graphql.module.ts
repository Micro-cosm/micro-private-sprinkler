

import {	environment 		} from '../../environments/environment';
import {	HttpClientModule	} from '@angular/common/http';
import {	NgModule			} from '@angular/core';
import {	Apollo				} from 'apollo-angular';
import {	HttpLink			} from 'apollo-angular/http';
import {	InMemoryCache		} from '@apollo/client/core';

@NgModule({ exports: [HttpClientModule] })

export class GraphQLModule {
	env: any;
	
	constructor(
		apollo:		Apollo,
		httpLink:	HttpLink
	) {
		this.env	= environment;
		const http	= httpLink.create({ uri: this.env.cms.service });
		apollo.createDefault({ link: http, cache: new InMemoryCache() });
	}
}
