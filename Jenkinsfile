pipeline {
    agent any
        environment { 
            PATH='/usr/local/bin:/usr/bin:/bin'
        }

    tools {nodejs "node"}
    
    stages {
        stage('NPM Setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('NPM Build') {
            steps {
                sh 'ionic cordova build android --debug'
            }
        }
    }
}
