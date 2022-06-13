pipeline {
    agent {
        docker.image('node:lts-buster-slim').inside {
            sh 'npm install'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}