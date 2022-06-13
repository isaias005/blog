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
                sh 'sudo chmod -777 /usr/local/bin'
                sh 'npm -v' 
            }
        }
    }
}