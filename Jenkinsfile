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
                sh 'chown -R $(whoami) /usr/local/bin /usr/local/lib/node_modules'
                sh 'npm -v' 
            }
        }
    }
}