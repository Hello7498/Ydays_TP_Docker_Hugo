# Choix des technos 

## Front end 

Pour le front end j'ai choisi d'utiliser ionic qui est un framework basé sur Anglular car il une très bonne comptabilité avec les appareils mobile.
L'application demandée est un réseau social, elle sera donc beaucoup utilisée sur le mobile.

## Back end 

Pour le back end j'ai choisi d'utiliser expresss js qui est une infrastructure Web minimaliste, souple et rapide pour node.js.
J'ai créé une API qui permet au front d'avoir toutes informations dont il a besoin.

# Installation de l'application 

## Près requis : 
* Verifiez que les ports 4000, 4001, 80 et 5000 soient libre 
* Avoir installé  Docker (conteneurs linux):  https://docs.docker.com/get-docker/
* Avoir installé  Git : https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git

## Etape 1 : cloner le repo Git 
 * Creez un dossier ou vous voulez stocker l'application 
 * Copiez le chemin de votre dossier 
 * Ouvez une console et tapez : `cd le_chemin`
 * Tapez la commande : `git clone https://github.com/Hello7498/Ydays_TP_Docker_Hugo.git`
 * Une fois que c'est fini vous devriez avoir un dossier Ydays_TP_Docker_Hugo avec 3 dossier a l'intérieur et un fichier docker-compose.yml
 
 ## Etape 2 : Verifier l'ip pour NGINX 
 * Verifier l'ip de votre machine 
 * Tapez la commande `ipconfig` dans la console 
 * Verifiez si votre adresse IPV4 de votre Carte réseau est : 192.168.1.28, si ou passez à l'étape 3 
 * Plus de details : https://eu.dlink.com/fr/fr/support/faq/adapters/fr_comment-verifier-l-adresse-ip-de-mon-pc 
 * Si elle ne correspond pas ouvrez le ficher nginx.conf (dans le dossier ngnix) 
 * Remplacez tout les 192.168.1.28 par votre IP (Attention à bien garder le :4000 et :4001)
 * N'oubliez pas de sauvegarder 
 
 ## Etape 3 Lancement des applications : 
 
 * Tapez la commande `cd Ydays_TP_Docker_Hugo` dans la console 
 * Tapez la commande `docker-compose up --build` dans la console 
 * Attendre la fin de l'execution
 * l'application est disponible a l'adresse : http://localhost
 * Vous pouvez vous connecter avec l'user : user1 mdp : test123
 
 ## Etape 4 Monitoring 
 * Rendez vous sur l'adrresse : http://localhost:5000
 * Remplissez les champs demandés (pas besoin de mettre une vraie adresse mail) 
 * Connectez vous 
 * Cliquez sur containers (ca peut mettre un peu de temps) 
 * Pour chaque containers vous aurez accès au log en cliquant sur logs 
 * l'application est disponible a l'adresse 
 
