pipeline {
    agent {
        docker {
            image 'node'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'su node && npm install' 
            }
        }
    }
}