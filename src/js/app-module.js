
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
  import { Router, RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';

import AppController from './app-controller.js';
import FirstView from './first-view';
import SecondView from './second-view';
import ThirdView from './third-view';



var AppModule =
  NgModule({
      imports: [ BrowserModule,
        FormsModule,
        RouterModule.forRoot([
          {
            path: '',
            redirectTo: '/view1',
            pathMatch: 'full'
            },
              {path: 'view1', component: FirstView },
              {path: 'view2', component: SecondView },
              {path: 'view3/:id', component: ThirdView }

        ])

       ],
      declarations: [ AppController, FirstView, SecondView, ThirdView  ],
      bootstrap: [ AppController ]
    })
    .Class({
      constructor: function() { console.log('constructor'); }
    });

    export default AppModule;
