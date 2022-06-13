pipeline {
    agent {
        docker {
            image 'nextjs-docker' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run build'
            }
        }
    }
}