import { Injectable } from '@angular/core'

import * as firebase from 'firebase'
require('firebase/database');

import { FIREBASE_CONFIG } from '../constants/constants'

@Injectable()

export class FirebaseConfigService{

    database : firebase.database.Database;

    constructor(){
        this.configureApp()
        this.configureDatabase()
    }

    configureApp(){
        const app = firebase.initializeApp(FIREBASE_CONFIG)
    }

    configureDatabase(){
        //Iniitialize Database
        this.database = firebase.database()
    }
}