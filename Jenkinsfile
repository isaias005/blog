pipeline {
    agent any
    stages {
        stage('Build') { 
            agent {
                docker {
                    image 'node'
                }
            }
            steps {
                sh 'npm -v' 
            }
        }
    }
}