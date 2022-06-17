pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm clean install'
                sh 'npm run build'
            }
        }
        stage('Deploy') { 
            steps {
                sh 'npm start' 
            }
        }
    }
}