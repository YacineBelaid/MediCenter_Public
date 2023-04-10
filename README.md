# Dossier Medical Centralisé



## Projet

Ce projet est developper dans le cadre du cours de conception INF5153 au cours de la session hiver 2023 [voir le lien du cours](https://ena01.uqam.ca/course/view.php?id=56107)!

## Installation du projet

- [ ] Assurez vous de disposer d'une instance mysql ouverte sur voter ordinateur

```
cd dossier_medical_centralise
cd backend
npm i
cd ../frontend
npm i
```
Ouvrez deux terminaux    
Dans le premier :   
```
cd dossier_medical_centralise
cd backend
npm run dev
```

Dans le second :   
```
cd dossier_medical_centralise
cd frontend
npm run start
```

## Les tests

Nous utilisons les outils d'integration de Gitlab. Ainsi si vous telechargez ce repertoire assurez vous qu'il provienne de la branche "main" du projet developpé sur le site gitlab.info.uqam.ca et que les auteurs fassent parti du groupe "ConceptionINF5153". Ainsi vous vous assurez d'avoir une version testé sur une pipeline avant qu'elle n'atterisse sur votre environnement de developpement ou production.

- [ ] Assurez vous de disposer d'une instance mysql ouverte sur votre ordinateur
```
cd dossier_medical_centralise
cd backend
npm run test
cd ../frontend
npm run test
```

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

## Nom du projet
Dossier Medical Centralisé

## Description du projet
Dans le cadre du cours d'INF5153 Conception de la session d'Hiver 2023.    
Nous avons conçu une application ayant pour but de collecter les informations medical des habitants du quebec sous forme de dossier.  

Dans le but de les rendre accessible à travers un seul canal de d'échange entre professionnel de la santé et Patient, nous avons conçu une web-app simple permettant à travers le reseau et tout appareil electronique d'acceder à son compte sécurisé.   

Cette application exportable en format logiciel laisse une grande flexibilité de développement tout en gardant une experience utilisateur de qualité

## Auteurs du projet

Nadir Hadji  ()  
Ayoub Baia  ()  
Yacine Belaid (BELY22119707)

## License du projet
Projet Open Source, Licence MIT

## Status du projet
En cours de developpement ...
