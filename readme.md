To install the application:
    clone the repo
execute in the repo:
    docker build -t fian_api ./api
    docker build -t fian_server ./serveur
    docker build -t fian_front ./front

To launch the app:
    docker-compose up

To init the bdd:
    docker-compose exec mysql bash -c "mysql -uroot -pazerty < /scripts/bdd.sql"
    docker-compose exec mysql bash -c "mysql -uroot -pazerty < /scripts insertIntoTestDatabaseFarmingInAnutshell.sql"

To add client:
    add in docker-compose.yml after remplacement of [num] a and [port_num]

  front[num]:
    image: fian_front:latest
    ports:
      - [port_num]:3000
    networks:
      - front
    environment:
      API_HOST: 'api:8082'
      SERVER_HOST: 'serveur:8060'

To play the game:
    connect to :
        http://[hebergeur_adress_or_ip_of_the_machine_in_witch_"docker-compose up"_was_done]:[client_port_num(default:3000or3001)]/