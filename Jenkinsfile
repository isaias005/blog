pipeline {
    agent {
        docker {
            image 'node:lts-bullseye' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm -v' 
            }
        }
    }
}